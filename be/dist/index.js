import 'dotenv/config';
import '@anthropic-ai/sdk';
const Claude_API_KEY = process.env.CLAUDE_API_KEY;
const anthropic = new Anthropic({
    apiKey: Claude_API_KEY,
});
const msg = anthropic.messages.create({
    model: "claude-3-5-sonnet-20241022",
    max_tokens: 1024,
    messages: [{ role: "user", content: "Hello, Claude" }],
});
console.log(msg);
