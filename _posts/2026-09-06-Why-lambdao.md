---
title: Why Lambdao?
author: len
mathjax: true
image: /assets/img/lambdao_preview.webp
---

_The Dao produced One; One produced Two; Two produced Three; Three produced all things._

Lambdao is a portmanteau of Lambda and Dao. 
Lambda ($$\lambda$$) is a shorthand for the $$\lambda$$-calculus, a formal system of computation that is the basis of all modern computing. 
Dao is another transliteration of 道 (Tao), the Chinese philosophical approach to life (the literal translation is "the way").

Far from being a random pun, there is a deep connection between Dao and computation; the yin and yang are dual principles arising from unity, and more complex entities are formed from their interplay. 
All forms arise from this one essential duality and their unification is the single dynamic process that creates the flow of forms. 
This is exactly how proof theory and computation define all of mathematics, and as far as mathematics can represent the world, everything that we can model is a (potentially extremely) complex application of these principles.

## 0. Everything or nothing; The Dao and the Empty Set ($$\emptyset$$)

In the beginning is the Dao—the unmanifest, undifferentiated potential.
In logic, this is false (0 or $$\bot$$), a proposition with no proof.
In set theory, it is the empty set ($$\emptyset$$).
It is nothing.

## 1. The One 

By recognizing the empty set, we create a single concept: the set containing the empty set $$\{\emptyset\}$$.
The 1 is given by the identity ($$\implies$$) of the 0.
We could write it $$\bot \implies \bot$$: not a proof of false, but the function that returns an assumed falsehood unchanged.
We have moved from absolute nothingness to the concept of identity and existence.

## 2. Yin and Yang, the Radical Duality (0 and 1)

We have nothing, and recognized that we have nothing.
We get opposite forces acting in duality.
The two principles emerging from the primordial chaos are usually represented as white and black, the most absolute opposites.

The principle of duality is inversion (or polarity): true and false are inverted depending on their role.
For that reason, in logic, the symbol that we use for true is $$\top$$ ("top") and for false is $$\bot$$ ("bottom").

The choice of 0 and 1 is interesting; it maps top how logic is implemented in circuits, and the reason why Boole chose this symbol is closely related to the algebra of these numbers, as well as philosophical ideas that are close to the ones discussed here. 
Later logicians introduced these symbols because 0 and 1 bring a lot of baggage that also obscures the particular meaning of 0 and 1 in a logical context.

## 3. The "Three" as the Dynamic Interplay (Evaluation)

The Three is the dynamic process where Yin and Yang interact to create movement[^ref_three].
The duality means that we can reduce a complex form to a simpler one, eventually leading to a single value.

The taijitu illustrates the dynamic nature of this principle.
Earlier versions of it had more emphasis on the dynamic nature of yin and yang as flow of opposite forces.
In the dao, duality is often minimized as it obscures the essential unity of all things.
This is a way to say not to get caught in the flow of forms, not to negate the flow of forms.

<div class="image-row">
  <img src="/assets/img/blogposts/old_taijitu.webp" alt="Three taijitu diagrams showing different arrangements of yin and yang, including a spiral form and the familiar interlocking form." class="w2third">
  <img src="/assets/img/blogposts/taijitu_embedding_depth4_dots_bw.svg" alt="A taijitu containing successively smaller taijitu, illustrating the same duality recurring at every scale." class="w3rd">
</div>

The diagrams make the same relationship visible in different ways: opposition is not static, but curls into its opposite and returns.

At a high level, you can consider that the essential duality is given a principle (yian or yang) depending on its use, that is to say how it is to be reduced. 
A weapon is good when it is used to defend, but bad when it is used by an aggressor. 
A predator becomes food when it is killed.

The duality of the initial principles gives a duality of reduction rules; this third principle creates the duality of syntax and semantics in proof theory. 
An assertion is dual to a context, and both are only meaningful in relation to each other.

## 4. All things; manifestations of infinity, 萬, 卍, $$\infty$$

With duality and evaluation, we can generate all forms.

The teaching of the dao tends to be very poetic and use a lot of historical Buddhist symbols.
For this reason, 4, wan, infinity 卍 $$\infty$$ generally mean the same thing; it is literally 10000, but means the myriad of forms.
Infinity is generally in the same way as in mathematics, as unrealized potential. 
Modern language calls that a limit, something that is pointed to by arbitrary continuations.

The numeral $$2$$ is therefore the following proof. Each use of $$(\to E)$$ applies $$f$$, while each use of $$(\to I)$$ turns an assumption into a function:

$$
\frac{
  \frac{
    f:A\to A,\ x:A \vdash f:A\to A
    \qquad
    \frac{
      f:A\to A,\ x:A \vdash f:A\to A
      \qquad
      f:A\to A,\ x:A \vdash x:A
    }{
      f:A\to A,\ x:A \vdash f\,x:A
    }(\to E)
  }{
    f:A\to A,\ x:A \vdash f\,(f\,x):A
  }(\to E)
}{
  \vdash \lambda f.\lambda x.f\,(f\,x):(A\to A)\to A\to A
}(\to I)^2
$$

The proof and the program are the same object: $$\lambda f.\lambda x.f\,(f\,x)$$[^ref_lambda].
Signed integers and other data can in turn be constructed from these functions.

From these simple binary relations, complexity emerges endlessly through recursion.

At a high level, we build formulas by combining 0s and 1s through functions.
By combining functions, we build programs. 
By scaling programs, we simulate physics, generate art, and model ecosystems.
Everything we can describe in mathematics can be derived from arbitrarily long derivations of 0s and 1s.
How much of the world it can describe is another question.

## aren't we forgetting something?

Because we don't repeat da (dada (horse), or dada 大大), the portmanteau is lamb + dao.
Sheepishly, we can admit it shapes the logo strongly. 
The logo embodies our understanding of the world, but in a playful way.

[^ref_three]: This is a bit more obscure to find, and the best authoritative summary I could source is [this wikipedia section](https://en.wikipedia.org/wiki/Three_Pure_Ones#In_Taoism) 

[^ref_lambda]: The reason we move from proof theory to $\lambda$-calculus is due to the Curry-Howard isomorphism, the fact that proofs and programs are different manifestations of the same thing. This is more of a short poetic exposition than a course :-) 
