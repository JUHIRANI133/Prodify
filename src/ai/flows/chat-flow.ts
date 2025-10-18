'use server';
import { ai } from '@/ai/genkit';
import { techniquesData } from '@/lib/techniques';
import { z } from 'genkit';

const ChatInputSchema = z.string();
const ChatOutputSchema = z.string();

export type ChatInput = z.infer<typeof ChatInputSchema>;
export type ChatOutput = z.infer<typeof ChatOutputSchema>;

export async function chat(input: ChatInput): Promise<ChatOutput> {
  return chatFlow(input);
}

const allTechniques = techniquesData.flatMap(domain => 
    domain.techniques.map(technique => ({
        name: technique.name,
        description: technique.description,
        domain: domain.name
    }))
);

const techniquesText = allTechniques.map(t => `- ${t.name}: ${t.description} (Domain: ${t.domain})`).join('\n');

const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async (prompt) => {
    const llmResponse = await ai.generate({
      prompt: `You are Prodify, a friendly and expert productivity assistant. Your role is to help users who are feeling unproductive or struggling with their tasks.

Analyze the user's message for their underlying problem. Respond with empathy and provide brief, conversational, and actionable advice.

If their problem relates to a specific productivity challenge (like procrastination, lack of focus, poor planning), you MUST recommend one or two relevant techniques from the list below. Briefly explain why the technique is a good fit for their problem. Do not recommend techniques if the user is just making a simple statement.

User's thought: "${prompt}"

Available Techniques:
${techniquesText}

Your encouraging and helpful response:`,
      model: 'googleai/gemini-2.5-flash',
      config: {
        maxOutputTokens: 150,
      },
    });

    return llmResponse.text;
  }
);
