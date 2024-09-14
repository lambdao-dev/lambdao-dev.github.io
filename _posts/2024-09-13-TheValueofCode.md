---
title: The value of code
image: /assets/img/lambdao_logo_white.svg
---

_A business juggling finances, technical debt, and innovation credits_

For almost all businesses, software is only a tool to scale operations.
The code itself has no importance, what matters is the value it delivers by its functionality.
Therefore, the value of "good" code is in principle nonexistent, but it is in practice because "bad" code collapses in itself in the long term. 
The term "architecture" describing the general organisation of code is well-chosen as the metaphor holds in many ways.
A solid structure will be difficult to evolve, unless the proper openings have been thought of. 
A tent would be the best choice if the only thing considered was cost, but there are hard requirements that should be considered, making the construction of the proper building necessary.

Compared to building architecture, software architecture has a much shorter history.
This explains why there is still so much difficulty in determining cost estimates.
It is similarly difficult to determine what is "good" architecture, or in better terms what might be too complex or too simple.
This is why we value experience so much, as it provides a practical understanding of why things fail or succeed.


## Simplistic code

Simplistic code will tend to be more repetitive, and not factored enough.
Ironically, the end-result of over-simplification is a lot of complexity.
An example would be that some function processes a form.
A new business requirement comes in, and the form needs to be processed in a different way.
The simplest way is just to write a new function. 
If a new requirements comes in to pre-process the form, the code should be combed to find any place where the form is processed. 
A simple refactoring would create a module that processes the form, giving a single entry point.
This problem might compound with poor schema design, especially if working with unstructured databases.

## Over-engineering and Cargo-culting in software design

Cargo-culting[^cargo] is as a broad concept the idea to copy the appearance of something without understanding the real purpose. There are different concepts exploring this problem, e.g. hype-driven development, or career-driven development.
This would make materialize in the following ways:
1) implementing functionality that is not needed
2) making the architecture of the software more complex than it needs to be
3) using the latest, unfinished and unstable, technology

It does not mean that it's always bad to use these technologies, but it's important to understand the trade-offs, and make them with full conscience.

What can be done to avoid these pitfalls?

## Ask the right questions

### What is the business focus?

This is less of a software design problem than an organisational one.
This might be more of a problem for a very small company, where the technical founder may be playing all the roles in good part.
An important principle to keep in mind is [Conway's law](https://martinfowler.com/bliki/ConwaysLaw.html); the architecture of the software will reflect the communication structure of the organization.
If it's only a technical person, it will likely reflect the complicated mind of that person.

[//]: # (This is fine if the product is targeted towards developers, who tend to be more forgiving of complexity.)

### What architecture would you need if you captured 100% of your target market?

In a lot of cases, especially in B2B, the answer would not be "the same as Facebook".
For a small country like Belgium, PostgreSQL can handle the load of the whole country without a lot of effort.
Sure, it's not as cool as saying that the target is "any human in the world and their pets", but there are actually few Facebooks in the world.

Assuming the target has been properly defined, it is easy work out the components that would be needed to support that target.
Start with a simple architecture, keeping the design in check by evaluating how much effort it would take to drop in the component. 
While this reflection won't be perfect, it should be enough for a future implementation to not be too painful.
A lot of frameworks have support for direct drop-in of components; for example in Django, adding a Redis cache is a matter of adding a few lines in the settings file and some decorators.

In other words, envision the code as it would evolve towards a typical architectural pattern.

### How much innovation credits can your team afford?

It has been suggested that a company should carefully manage its innovation credits, like it does with technical debt. 
New technologies tend to be applied to solve a very specific problem, which might not be the problem you are facing.
Moreover, it might not consider all the constraints you are facing.
One example is for example [with GraphQL](https://bessey.dev/blog/2024/05/24/why-im-over-graphql/) which was all the rage a few years ago. 
The author of the post mentions how much security and reliability of the performance impact make a simple REST API a better choice in most cases.

The problem is very typical and has been addressed in [many resources](https://www.detroitlabs.com/blog/avoid-shiny-objects-2/).

[//]: # (If all the constraints were considered, it would be likely that the shiny technology would have been as bloated as the current one.)

## Common sense heuristics

To deliver value, almost tautologically, the popular frameworks and technologies tend to perform best.
A good example for this is Nintendo's philosophy, [Withered technologies with lateral thinking](https://medium.com/@adamagb/nintendo-s-little-known-product-philosophy-lateral-thinking-with-withered-technology-bac7257d8f4).

    
[^cargo]: https://en.wikipedia.org/wiki/Cargo_cult_programming