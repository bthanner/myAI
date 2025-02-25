import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hello, I'm ${MAY D'WELL}, ${BRENNA}'s AI assistant.`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Wardrobe malfunction! I'm having trouble generating a response. Please try again later when I'm freshly pressed.`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `[WORD BREAK MESSAGE]`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
