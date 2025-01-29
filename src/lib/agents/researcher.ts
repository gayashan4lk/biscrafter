import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { Agent } from "./agent";

export class ResearcherAgent extends Agent {
    async execute(topic: string): Promise<string> {
        const systemPrompt = `You are an expert researcher. Your task is to gather key information, facts, and insights about the given topic. 
        Focus on providing accurate, well-structured research that can be used to write an informative blog post.
        Include:
        - Key points and main ideas
        - Relevant statistics or data
        - Important context and background
        - Current trends or developments
        Format the research in a clear, organized way.`;

        const response = await this.model.invoke([
            new SystemMessage(systemPrompt),
            new HumanMessage(`Research the following topic thoroughly: ${topic}`)
        ]);

        return response.content as string;
    }
} 