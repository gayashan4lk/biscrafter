import { OpenAI } from 'openai'
import { traceable } from 'langsmith/traceable'
import { wrapOpenAI } from 'langsmith/wrappers'
import { Client } from 'langsmith'
import { EvaluationResult, evaluate } from 'langsmith/evaluation'

export async function getCompletion() {}
