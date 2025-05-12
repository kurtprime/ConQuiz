'use client'

import { useFormStatus } from 'react-dom';
import { deepseek } from '@/utils/action/deepseek.action'
import Form from 'next/form'
import { z } from 'zod';
import Image from 'next/image';
import pdfToText from "react-pdftotext";
import { createQuiz } from '@/utils/action/quiz.action';
import { useRouter } from 'next/navigation';


export default function FileDrop() {
    const router = useRouter()
    let PdfText: string;

    async function onSubmit(formData: FormData) {
        const difficulty = formData.get('difficulty') as string
        const maxQuest = formData?.get('numberOfQuestions') as string;
        console.log(PdfText)

        const res: any = await deepseek({content: PdfText,difficulty: difficulty , maxQuestion: +maxQuest})
        //await new Promise(resolve => setTimeout(resolve, 10000))
        const quiz = JSON.parse(res)
        console.log("QUIZ", quiz)   
        const id = await createQuiz(quiz)
        router.push(`/quiz/${id}`)
     } 
     function extractText(event: any) {
        const file = event.target.files[0];
        pdfToText(file)
          .then((text) =>  PdfText=text )
          .catch((error) => console.error("Failed to extract text from pdf"));
      }

      function Submit() {
        const {pending} = useFormStatus();
        if(!pending) return <button type='submit' disabled={pending} className="btn btn-primary">Convert to Quiz</button>
        return  <span className="loading loading-infinity loading-xl">Creating Quiz</span>

      }
  return (
    <Form action={onSubmit} className="w-full min-h-screen flex items-center justify-center " >
        <div className="card bg-base-100 w-150 shadow-sm">
            <figure className="px-10 pt-10">
                <Image
                src='/filedrop.png'
                alt="pdf convert"
                height={30}
                width={30}
                className="object-fill" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">File Drop</h2>
                <input type="file" onChange={extractText} required className="file-input file-input-ghost" />
                <div className='flex gap-3'>
                    <select required name="difficulty" defaultValue="Pick an OS" className="select select-warning">
                        <option disabled={true}>Pick your difficulty</option>
                        <option>easy</option>
                        <option>normal</option>
                        <option>hard</option>
                    </select>
                    <span className='w-80'>
                        <input
                            type="number"
                            className="input validator "
                            required
                            placeholder="Maximun of Questions"
                            min="1"
                            max="20"
                            title="Must be between be 1 to 20"
                            name='numberOfQuestions'
                        />
                        <p className="validator-hint">Must be between be 1 to 20</p>
                    </span>
                </div>
                <Submit />

                <div className="card-actions">
                </div>
            </div>
        </div>

   </Form>
  )
}
