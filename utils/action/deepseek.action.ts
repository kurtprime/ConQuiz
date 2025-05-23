"use server";

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
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          content: `You are a quiz generation system. Create exactly ${maxQuestion} ${difficulty}-difficulty questions following these rules:
          1. Difficulty Criteria:
            - Easy: Fact-based questions with direct answers
            - Medium: Requires conceptual understanding
            - Hard: Demands critical analysis/application, situational question

          2. Question Requirements:
            - 4 randomized multiple-choice options
            - Only 1 correct answer (exact string match)
            - Avoid duplicate answer patterns
            - Questions must vary in focus/approach

        Example JSON format: 
        {
          "difficulty": "${difficulty}",
          "title": "Title for the quizzes",
          "quizzes": [
            {
              "question": "Clear, unambiguous question",
              "multipleChoices": [
                "Randomized Option 1",
                "Correct Answer", 
                "Randomized Option 3",
                "Randomized Option 4"
              ],
              "correctAnswer": "Correct Answer"
            }
          ]
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
      presence_penalty: 0.1,
      response_format: {
        type: "json_object",
      },
      temperature: 0.7,
      top_p: 0.9,
      tool_choice: "none",
      logprobs: false,
      top_logprobs: null,
    });
    const contentRes: any = completion.choices[0].message.content;
    if (!content) throw new Error("Content is Empty");
    console.log("DEEPSEEK OKAY ", contentRes);

    console.log("DEEPSEEK OKAY ", JSON.parse(contentRes));
    return contentRes;
  } catch (error: any) {
    console.error("ERROR GENERATING QUIZ IN SERVER ", error);
    throw new Error("ERROR QUIZ for SERVER ", error);
  }
}
