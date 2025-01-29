import { ResearcherAgent } from "../agents/researcher";
import { WriterAgent } from "../agents/writer";

export interface BlogWorkflowConfig {
    topic: string;
}

export class BlogWorkflow {
    private researcher: ResearcherAgent;
    private writer: WriterAgent;

    constructor() {
        this.researcher = new ResearcherAgent();
        this.writer = new WriterAgent();
    }

    async run(config: BlogWorkflowConfig): Promise<string> {
        // Step 1: Research
        const research = await this.researcher.execute(config.topic);

        // Step 2: Write
        const blogPost = await this.writer.execute(research);

        return blogPost;
    }
} 
