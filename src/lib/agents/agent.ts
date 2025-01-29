import { ChatOpenAI } from "@langchain/openai";

export abstract class Agent {
    protected model: ChatOpenAI;

    constructor() {
        this.model = new ChatOpenAI({
            modelName: "gpt-4o-mini",
            temperature: 0.7,
        });
    }

    abstract execute(input: any): Promise<any>;
}
