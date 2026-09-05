---
title: Lessons from Architecting AI Pipelines
author: len
image: /assets/img/lambdao_preview.webp
---

_Good engineering is always in fashion_

For more than a year, most of our development time has been spent architecting AI-assisted workflows that are now used by hundreds of people. 
Saving time, and making work more comfortable for the end users.
Yet, there are a number of downsides that made the hype seem like a gamble.

The scary number: 95%. A preliminary 2025 MIT NANDA report, widely  circulated, found that 95% of the organizations it studied saw no measurable return from generative-AI investment.[^nanda]

Whatever the exact failure rate, it isn't random chance. 
AI does not reduce the importance of good architectural foundations, nor does it remove the need for engineering expertise.

This series of posts develops three related arguments:

1. [AI Will Optimize Your Bad Processes]({% post_url 2026-09-01-AI-speed %}): AI should not be used to smooth out bad flows, but to help replace them with good ones.
2. [AI Is a Time-Saver When the System Is Sound]({% post_url 2026-09-02-AI-optimize %}): systems integration is crucial if an AI implementation is to be useful.
3. [Code Without Coders, Sentences Without Meaning]({% post_url 2026-09-03-AI-formal-methods %}): proofs can validate a specification, but they cannot decide whether it means what the business intended.

The common thread is that AI is not a purely technical problem, it integrates with the social and organizational aspects of the company. 
These aspects won't be fundamentally changed by AI, but they could be exacerbated. 
They will most likely dictate whether an implementation can be successful or not, not the other way around. 

On a technical side, our implementations ensure that the AI steps can be fully audited at all times, and always keep the human in the loop. They should facilitate human work and ownership, not replace it.

## You Stay in Control 

The important thing to remember is that AI does not change accountability within a company. 
But since it creates problems of complacency and uncritical use, there is an added risk that the added speed should be mitigated by proper assessment. In simple words, it is only too easy to simply validate an answer without reading it.[^critical-thinking]

Engineering and AI expertise remain crucial to reducing those risks and making an AI implementation reliably successful.

[^nanda]: Aditya Challapally, Chris Pease, Ramesh Raskar, and Pradyumna Chari, [*The GenAI Divide: State of AI in Business 2025*](https://asociace.ai/wp-content/uploads/2025/08/ai_report_2025.pdf), preliminary findings from a review of more than 300 public initiatives, interviews with 52 organizations, and 153 survey responses. The report defines success in terms of sustained productivity or P&L impact and notes that samples and definitions vary.
[^critical-thinking]: Hao-Ping Lee et al., [“The Impact of Generative AI on Critical Thinking: Self-Reported Reductions in Cognitive Effort and Confidence Effects From a Survey of Knowledge Workers”](https://doi.org/10.1145/3706598.3713778), *CHI 2025*. A greater confidence in generative AI was associated with less critical thinking; the result is an association, not a causal proof that using an LLM causes laziness. This is mostly weak evidence, but most published studies point to this same direction rather than the opposite one. 
