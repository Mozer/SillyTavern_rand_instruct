# Random instructions for SillyTavern 1.12.1

Insert random instructions for LLM to improve variability of respones and reduce loops. Example: `[Инструкция: Будь милой. В ответе верни ровно 10 слов. В конце задай вопрос.]` Each time sentences are different. Total - 32 sentences in 5 blocks.

- for Russian roleplay only. It will be working bad with helpful assistant or with English roleplay.  
- chat-completions and text-completions modes are both supported
- to turn on - put text `RND` into Custom Stopping Strings
- to turn off - remove text `RND` from Custom Stopping Strings
- current version is for female character, rewrite texts in rand-instruct.js if you want to chat with a male char.
- you can see which instruction is currently in place in console window of sillyTavern. It won't be visible in chat in browser.
- modify rand-instruct.js to write your custom instructions and probabilities.

Files: 
- chat-completions.js
- text-completions.js
- rand-instruct.js

## Installation

1. In SillyTavern at the 3rd tab in `Custom Stopping Strings` put text `["RND"]`. Example: `["<|im_end|>", "\n", "RND"]`. Without RND in stop words it won't work! 
2. if you have SillyTavern 1.12.1 (latest) - put those 3 files into `\SillyTavern\src\endpoints\backends\` and replace originals.
- For other versions - add some text into 2 files:
- in file chat-completions.js in function router.post('/generate' find string `if (!request.body) return response.status(400).send({ error: true });` and replace it with following strings:
```
	if (!request.body) return response.status(400).send({ error: true });

	// random instruction injection
	// instruction will be placed after user question, before character name.
	console.log(request);
	if (request.body.stop.includes("RND")) // working only if 'Custom Stopping Strings' include word 'RND' (set it at the 3rd tab). i'm too lazy to add a new checkbox
	{
		const { getRandInstruct } = require('./rand-instruct');
		let rand_instruct = getRandInstruct();			
		if (request.body.hasOwnProperty('messages') && Array.isArray(request.body.messages) && request.body.messages.length > 0) {
			request.body.messages[request.body.messages.length - 1].content += '\n' + rand_instruct;
		}
	}
```	

- in file text-completions.js in function router.post('/generate' find string `console.log(request.body);` and replace it with following strings:
```
		// random instruction injection
		// instruction will be placed after user question, before character name.
		if (request.body.stop.includes("RND")) // working only if 'Custom Stopping Strings' include word 'RND' (set it at the 3rd tab). i'm too lazy to add a new checkbox
		{
			const { getRandInstruct } = require('./rand-instruct');
			let rand_instruct = getRandInstruct();						
			const lastNewLinePos = request.body.prompt.lastIndexOf('\n');
			if (lastNewLinePos != -1) {
				request.body.prompt = request.body.prompt.slice(0, lastNewLinePos) + "\n" + rand_instruct + "\n" + request.body.prompt.slice(lastNewLinePos + 1);
			}
			console.log(request.body);
			console.log(rand_instruct);
		}
```	

3. DONE. You are good to roleplay.