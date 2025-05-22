"use server";

import { getTextExtractor } from "office-text-extractor";

export async function FileTextExtractor(file: any): Promise<string> {
  try {
    const extractor = getTextExtractor();
    const text = await extractor.extractText({
      input: Buffer.from(file), // Pass the Uint8Array instead of File
      type: "buffer", // Specify the correct input type
    });
    console.log("FILE PASRSE OKAY");

    return text;
  } catch (error) {
    console.error("Extraction failed:", error);
    throw new Error("Failed to extract text");
  }
}
