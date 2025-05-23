"use server";

import { getTextExtractor } from "office-text-extractor";

export async function FileTextExtractor(buffer: any): Promise<string> {
  try {
    const extractor = getTextExtractor();
    const chunkSize = 1024 * 1024; // 1MB chunks
    let text = "";

    for (let i = 0; i < buffer.byteLength; i += chunkSize) {
      const chunk = buffer.slice(i, i + chunkSize);
      const chunkText = await extractor.extractText({
        input: chunk,
        type: "buffer",
      });
      text += chunkText;
    }

    console.log("FILE PASRSE OKAY ", text);

    return text;
  } catch (error) {
    console.error("Extraction failed:", error);
    throw new Error("Failed to extract text");
  }
}
