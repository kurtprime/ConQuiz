"use server";

import { getTextExtractor } from "office-text-extractor";
import * as mammoth from "mammoth";

export async function FileTextExtractor(file: File): Promise<string> {
  try {
    // Convert File to ArrayBuffer
    const arrayBuffer = await file.arrayBuffer();

    // Create Uint8Array from ArrayBuffer
    const uint8Array = new Uint8Array(arrayBuffer);

    const extractor = getTextExtractor();
    const text = await extractor.extractText({
      input: uint8Array as any, // Pass the Uint8Array instead of File
      type: "arraybuffer" as any, // Specify the correct input type
    });

    return text;
  } catch (error) {
    console.error("Extraction failed:", error);
    throw new Error("Failed to extract text");
  }
}
