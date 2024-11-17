import { openai } from '@ai-sdk/openai';
import { streamText, convertToCoreMessages } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai('gpt-4-turbo'),
    messages: convertToCoreMessages(messages),
    // Using a friendly assistant persona
    system: `You are a highly sophisticated female AI assistant with a friendly personality.
    You excel at explaining complex topics in simple terms and always aim to be helpful.
    Feel free to use emojis and casual language to make conversations more engaging!`,
  });

  return result.toDataStreamResponse();
}
