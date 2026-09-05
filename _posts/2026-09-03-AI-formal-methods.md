---
title: Uncovering meaning within Code Without Coders
author: len
image: /assets/img/lambdao_preview.webp
---
 
_In theory, there is no difference between theory and practice. In practice, there is._

It is tempting to describe a developer's job as "turning requirements into code." At a general level, a developer turns an idea into an actual program.

If that were the whole job, current AI coding tools and stronger formal methods would already have compressed the role almost completely. The business would describe what it wants, the model would generate the implementation, and tests would prove the match.

This would cut costs, but it would also remove an entire intermediary step, along with all the communication problems at the boundary between the business and technical teams. What's not to like?

For narrow problems, this already works well. It breaks down just as quickly for problems involving more systems.

## A Basic Example

>Do a sale, then reverse it.

This sounds simple. A sale charges an amount to a customer. A reversal should subtract the same amount, so the two operations cancel each other out.

Easy, right?

What if the product has already shipped?

Then a reversal is not just a negative sale; it also has to create a return. Who pays for the return? Does the refund happen before or after inspection? Does the same refund policy apply to every product? What about subscriptions, bundles, and discounts?

The original requirement is not wrong. It is incomplete, or under-specified.

## Simple Flows or Simplified Flows?

![A state diagram showing that a paid sale can be cancelled and refunded directly, while a delivered sale must be returned and inspected before it is refunded.](/assets/img/blogposts/sale-reversal-state-diagram.svg)

_Even this small model has to define what “reverse” means in each state._

A high-level view might model the process as a state machine, also called an automaton. In an ideal world, this view would accurately describe the system. That is rarely possible, so the algebraic description becomes a simplified abstraction that is useful for thinking about it.

The diagram maps entities, states, transitions, and their relationships. State diagrams, BPMN, and similar methods can speed up our understanding of the whole system.

At some point, however, a complicated system is described accurately only by its runtime execution. As the number of subsystems and edge cases grows, a simplified representation can accumulate so many states that it becomes harder to understand than the code itself.

## From Need to Code

The business need has to become a requirement, the requirement a specification, and the specification an implementation.
As it becomes more precise, it also becomes more complex.

Even simple diagrams can be hard to grasp fully. As a specification gets closer to describing the real system, the complexity of understanding it approaches the complexity of writing the code[^rx].
Tools such as Lean 4, which are advertised by AI companies, can be used to prove properties about code. Doesn't that help?

## What Formal Methods Can Prove

Formal methods are among the most powerful mathematical tools available to software engineers. Rather than merely demonstrating that a system works in selected tests, they can prove that:

- a transition preserves an invariant
- a function behaves according to a mathematical definition
- certain states are unreachable

What they cannot prove is that a specification or implementation has anything to do with what the business team has in mind.

In other words, what exactly are we proving?

A proof does not clarify a bad specification; it formalizes it. 
Like AI-generated tests, it can become a self-fulfilling prophecy.

In the sale example, we might prove that a reversal cancels the original amount. 
That proof cannot tell us whether a shipped product should trigger a return, who should pay for it, or when the refund should happen. 
Those decisions have to enter the specification from somewhere else.

A complicated proof requires more advanced knowledge to understand than the implementation itself. 
A proof can only increase confidence in a very complex system if it is validated by an expert.
For a tangled encoding of years of business exceptions, a proof is just another incomprehensible artifact.

## Rediscovering the Same Lessons: Agile Methodology

For business software, the hard part is rarely just producing code. It is discovering what the system is supposed to mean.

Large enterprise systems were traditionally developed like cathedrals. An enormous document describing the whole system would be drafted and refined, then passed down in waterfall fashion through layers of management to—the lower rungs of hell—the technical team.

Agile methodology shorten that chain and make it loop. 
By gathering feedback quickly, teams could uncover requirements by testing them against reality rather than against ideas or wishes. In the sale example, that means finding the return-policy questions before implementing the reversal in more detail.

In other words, Agile methodology approaches tries to reduce the gap between the specification and the implementation from the other side: instead of trying to specify everything in advance, put an implementation in front of people and discover what the specification glossed over.

## Meaning Comes from Collaboration

By design, AI gives the most likely answer to what a user appears to be asking. 
Even when a system is under-specified, it can therefore produce a satisfying answer. 
But the answer depends on context and makes assumptions.

Recognizing, spelling out, and formalizing those assumptions is the same work engineers already do. 
AI can speed it up, but doing it well still requires skill and communication.
Meaning comes from the business, functional, and technical people correcting each other's assumptions until the result survives contact with reality.[^spec]

AI shortens the path from idea to implementation. 
It does not take responsibility for the assumptions made along the way. 
That responsibility remains with the people building and operating the system.

[^rx]: Regular expressions are a special case of a simple automaton class, and yet a known joke is that when developers try to solve a problem with them, they end up with 2 problems.

[^spec]: There are also many use cases where no strict specification is needed. In those cases, you can let AI run amok.
