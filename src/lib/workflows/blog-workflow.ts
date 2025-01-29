import { StateGraph, END } from "@langchain/langgraph";
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
        const workflow = new StateGraph({
            channels: ["research", "blog_post"] as const
        });

        // Add research step
        workflow.addNode("research", async () => {
            const research = await this.researcher.execute(config.topic);
            return { research };
        });

        // Add writing step
        workflow.addNode("write", async (data: { research: string }) => {
            const blogPost = await this.writer.execute(data.research);
            return { blog_post: blogPost };
        });

        // Connect the nodes
        workflow.addEdge("research", "write");
        workflow.addEdge("write", END);

        // Set the entry point
        workflow.setEntryPoint("research");

        // Run the workflow
        const result = await workflow.invoke({});
        return result.blog_post as string;
    }
} 
