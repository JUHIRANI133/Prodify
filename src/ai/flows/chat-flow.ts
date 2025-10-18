'use server';
import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ChatInputSchema = z.string();
const ChatOutputSchema = z.string();

export type ChatInput = z.infer<typeof ChatInputSchema>;
export type ChatOutput = z.infer<typeof ChatOutputSchema>;

export async function chat(input: ChatInput): Promise<ChatOutput> {
  return chatFlow(input);
}

const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async (prompt) => {
    const llmResponse = await ai.generate({
      prompt: `You are a friendly and supportive productivity assistant named Prodify. The user is sharing their thoughts about their productivity and tasks. Respond in a brief, encouraging, and conversational manner.

User's thought: "${prompt}"

Your response:`,
      model: 'googleai/gemini-2.5-flash',
      config: {
        maxOutputTokens: 50,
      },
    });

    return llmResponse.text();
  }
);

    