import OpenAI from "openai";

import { DeepSeek } from "@/utils/interface/deepseek.inter";

export async function deepseek({
  content,
  difficulty = "normal",
  maxQuestion = 5,
}: DeepSeek) {
  const openai = new OpenAI({
    baseURL: "https://api.deepseek.com",
    apiKey: process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const completion = await openai.chat.completions.create({
    messages: [
      {
        content: `You will create a  maximun of ${maxQuestion} questionnaire that are ${difficulty} difficulty with multiple choices up to 4 and also give the exact correct string to the right choices. 
        Example JSON format: 
        {
          quizzes:[{ 
            "question": "...", 
            "multipleChoices": ["..."],
            "correctAnswer": (Correct answer)
          }]
        }
        `,
        role: "system",
      },
      {
        content: content,
        role: "user",
      },
    ],
    model: "deepseek-chat",
    frequency_penalty: 0,
    max_tokens: 8000,
    presence_penalty: 0,
    response_format: {
      type: "json_object",
    },
    stop: null,
    stream: false,
    stream_options: null,
    temperature: 1,
    top_p: 1,
    tool_choice: "none",
    logprobs: false,
    top_logprobs: null,
  });

  return completion.choices[0].message.content;
}
