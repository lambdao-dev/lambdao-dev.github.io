---
title: The Metric Dilemma
---

_Metrics are the way to objective success. Or are they?_

We want to make good decisions for our business.
That means empiricism rather than ideology; which means a data driven approach, and setting KPIs.
However, "any metric that becomes a target ceases to be a good metric"[^goodhart].
So what? Should we hide the objective metric? 
This causes transparency issue, since cannot you communicate with employees how their performance is really evaluated.
This also needs external "good judgement" to determine if deviating from the target metric is normal or not, or if deviating from the standard process is justified by the situation or not.

In short, the dilemma is:
- to adopt empirical methods, but get stuck into the failings of mathematical theories
- to allow to bypass the metric based on judgement (intuition, experience)

## Demise of experts

Most experts, in average, perform worse than basic statistical algorithms.
The effect is universal, yet not uniformly distributed by profession (doctors, policemen, ...)[^experts].
Even when provided with the algorithm's results, experts still perform worse than algorithms.
This is on average, so good judgement would outperform it provided the expert performs well above mean.

## Meta-cognition

Intuition and experiences were formed through the world state at preceding steps.
Formally, let's say judgment is a function of the world as a context and some input:

$$f(w_k, input) \mapsto decision$$

For example, we wonder if somebody is a good customer, knowing he has 2000£ in assets.
Two centuries ago, 2000£ was a big sum; today, not so much.
Even if our function has achieved perfect accuracy (100% correct decisions), 
we have to know what is the current state of the world now.
Is $$w_n$$ close enough to $$w_{n-1}$$ that our function still works?

There are enough revolutions that this can be false even if all parameters that make
$$w_n$$ are very close to $$w_{n-1}$$. See the concept of phase transition [^catastrophe].

## Long term social truths
Most 'big scale events' are only understood as such retroactively, for example the fall of the Roman empire.
Complex systems are more than the sum of their parts, and so the higher level abstraction can break down while all lower level parts are still working.
Because such a thing is a 'social truth', the relation can be seen both ways:
the Roman empire fell because Roman currency was not accepted anymore by local
power centers (or the other way round). It's only in hindsight that the narrative crystallizes.

## Any conclusions?
So, is there no recipe for success?
Because there is no scientific answer, people turn to astrology.
In our case, management theory is astrology cargo-culting as science, since science worked so well.

So what _can_ we do?
- Any optimal strategy depends on adapting to a changing world.
- Focus on adaptability, ability to inspect current state.
- Focus on increasing internal values and skills.

There is value in taking good methodologies or insights from management theory,
yet there is also a risk coming with putting too much trust in them.
Skills and adaptability are long term investments with guaranteed returns.

<img src="/assets/img/lambdao_hex_long_white.svg" class="focus"/>

[^experts]: see for example the research paper "Clinical Versus Mechanical Prediction: A Meta-Analysis" [abstract](https://pubmed.ncbi.nlm.nih.gov/10752360/), [pdf of the article](zaldlab.psy.vanderbilt.edu/resources/wmg00pa.pdf).
[^goodhart]: see [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law)
[^catastrophe]: or René Thom's [catastrophe theory](https://en.wikipedia.org/wiki/Catastrophe_theory), although its misuse made it unpopular.
