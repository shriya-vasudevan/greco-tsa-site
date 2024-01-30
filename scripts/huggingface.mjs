import { textGenerationStream } from "@huggingface/inference";
import "dotenv/config";

for await (
  const output of textGenerationStream ({
    accessToken: process.env.HF_API_KEY,
    model: "HuggingFaceH4/zephyr-7b-beta",
    inputs: "Hello",
    // parameters: { max_length: "none" }
  })) {
    
    if (output.generated_text != null) { console.log(output.generated_text) };
  }
  