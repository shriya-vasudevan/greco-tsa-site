import "dotenv/config";
import { HfInference } from "@huggingface/inference";

const hf = new HfInference(process.env.HF_API_KEY);

const output = await hf.textGeneration({
  model: "google/flan-t5-xxl",
  // model: "microsoft/DialoGPT-medium",
  // model: "microsoft/phi-2",
  inputs: "What's green energy?",
});

export const OUTPUT = output.generated_text;

// console.log(output.generated_text);
