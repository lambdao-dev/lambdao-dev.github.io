---
title: AI Is a Time-Saver When the System Is Sound
author: len
image: /assets/img/lambdao_preview.webp
---

_The model is not the product._

If employees don't have access to internal AI tools, they will copy and paste parts of their work into ChatGPT, or another free external system. This is inefficient, a security risk, and almost certainly not the best answer one can get from state-of-the-art AI.

What makes an AI system really useful is not limited to the prompt, the chat interface, or even the model.
It is the whole flow:

1. finding the relevant data
2. filtering out what does not matter
3. compacting the context into a form the model can use
4. asking the right question (prompt engineering)
5. checking the answer against permissions and business rules
6. returning the result where the user is already working

This is where most of the useful work happens: deciding what the model should see, when it should run, and what should happen with its answer. 
When the pipeline is right, AI saves real time. 
If it isn't, and the demo remains impressive right up until somebody relies on it.

Prompt engineering matters, but it cannot compensate for insufficient or incorrect context.

## The Model Does Not Know Your Situation

Consider the question:

> Should I walk or drive to the carwash that is only 50 metres down the road?

Many AI systems will produce a long answer about walking being healthier, cheaper, and better for the environment. A few may notice the word "carwash" and conclude that you probably need the car, so driving makes sense[^upd].

A human employee would understand the implicit context. A carwash is for washing a car. If the car is not at the carwash, and the point of the trip is to wash it, walking there is probably not useful. 
The obvious answer depends on background knowledge about how the world works.

For a person, this is almost a trick question. For a language model, it is a prediction problem.

The model produces the most likely useful response from the information it has.
If the relevant context is missing, ambiguous, or buried under noise, the answer may still sound polished. 
That polish makes the failure harder to notice.

Ask a model whether a customer is entitled to a refund, and it may need the order status, the product category, the applicable version of the return policy, earlier promises made to the customer, and the permissions of the employee asking. 
A well-written prompt cannot reconstruct facts the system never supplied.

The question of what implicit world knowledge exists in a model is a black box. 
You only really know by testing.

The tendency to anthropomorphize AI models makes it harder to develop a proper intuition for what a model can do well. The anthropomorphic description "LLMs are like idiot savants" is slightly more helpful, although it still reinforces the wrong perspective.

An AI implementation has to balance the apparently magical nature of LLM intelligence with down-to-earth engineering: test every hypothesis and continuously evaluate the results.

## The Real AI Workflow

Gathering the necessary and sufficient data, along with the necessary and sufficient instructions, is the crucial step.
Integration supplies the context; as much work as possible should happen deterministically before the request reaches the AI magic box.
Evaluation tells us whether that context, together with the model, produces dependable results.

Ultimately, language models are probabilistic machines. 
The engineering work is to make the probability of good results high enough, and failures visible enough, that the system is practically invisible. 
That is the difference between a tech demo and a system people can use for years.

That still leaves a harder question. 
If AI can generate the implementation itself, how much engineering work is really left?

[^upd]: The example might be entirely outdated with current models. However, this simple version is well known and illustrate the underlying problem that still applies to subtler contexts.
