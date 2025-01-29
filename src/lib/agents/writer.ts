import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { Agent } from "./agent";

export class WriterAgent extends Agent {
    async execute(research: string): Promise<string> {
        const systemPrompt = `You are an expert blog post writer. Your task is to transform the provided research into an engaging, well-structured blog post.
        Follow these guidelines:
        - Write in a clear, engaging style
        - Include an attention-grabbing introduction
        - Organize content logically with proper headings and sections
        - Maintain a conversational yet professional tone
        - Conclude with key takeaways
        - Add a compelling call-to-action
        The blog post should be informative, engaging, and valuable to readers.`;

        const response = await this.model.invoke([
            new SystemMessage(systemPrompt),
            new HumanMessage(`Using this research, create a comprehensive blog post:\n\n${research}`)
        ]);

        return response.content as string;
    }
} 