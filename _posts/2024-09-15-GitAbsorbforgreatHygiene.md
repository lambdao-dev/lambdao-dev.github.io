---
title: Git Absorb, the power tool for best Git hygiene 
image: /assets/img/lambdao_logo_white.svg
---

_A good git history provides a lot of value, and absorb helps in that process_

Maintaining code is not an easy task.
Any tool that helps in that process should be used to its full potential.

During development, Git commands are the most used, just behind the commands to run the server and run the tests.
Since Git is so used, I have refined my workflow to be as efficient as possible:
https://github.com/len-foss/bidoolgit/
Note that it does not include every command, just the ones that I use most commonly and which benefit from being shortened.

A good Git history is often neglected, but it is a very valuable asset. 
The only issue is that if no effort is put into it, no value can be extracted from it; it does not come for free.

## What makes a commit history valuable?

Each commit should:
- have a descriptive message, explaining the why and not the how (that's what the code is for)
- be atomic, making one logical change at a time

Having a good description is just a matter of reading [a good reference](https://cbea.ms/git-commit/) and following it.

The second point is the crux of the issue.
Development can be a messy process; it is easy to organize the commits in a logical way in hindsight, but not while we are still barely trying to make sense of everything.
Memories are actually a living process; they are always re-evaluated according to the narratives that the present self has chosen as definition.
That is the approach that Git takes with history.

## Mapping unknown territories

Let's assume that we want to implement a feature, which requires changes to a few functions.
You're not sure exactly about all the changes that are needed, so you make a few changes, to functions `f_1`, `f_2`, `g`, and `h`, and then test them.

The first thing is to make separate commits for each function.
This is done with `git add --patch` (`g ap`), which allows to stage only parts of a file.
With this, we probably have more commits than necessary, but this will be a good starting point.

Continuing the development, changes to `f_1`  result in changes to a number of subfunctions `s_1` to `s_k`. 
The changes to `f_2` are not necessary; those to `g` and `h` are, and are linked together.

A logical approach would be to make a commit for `s_i` functions, a refactoring to generalize them.
Then commit the changes to `f_1`, and finally the changes to `g` and `h`. 
The commit to `f_2` can just be dropped, as it was not necessary.

Git actually provides a tool to help with that: `git rebase -i`.
It provides exactly the keywords to perform these operations.
In bidoolgit, this is shortened to `g r $N`, where `$N` is the number of commits to process.

After a programming phase that may be exploratory, we want the signs to lead us directly to the correct solution, and put us in the right frame of mind to understand the code.
You don't map a territory by leaving stones to indicate the path where you passed by, but give the most efficient route.

## Mandatory code review with absorb

Your feature is done, and you want to merge it. 
You put for a very helpful code review.
During the code review, the reviewer asks for a few changes. 
You made a typo in the docstring to `f_1`, and the reviewer wants to change the name of the local variables in `g` to be more meaningful, as well as comment some tricky parts.

Are these changes interesting to have as commits? 
No, they bloat the history by adding accidental noise.
However, if you directly rebase the changes, the commentaries will reference outdated commits,  making a second review pass a bit more confusing.

This is where `git absorb` comes in. 
With this, commits are collected and magically marked as `fixup` to the commits they affect.
The review can proceed according to the diff, and just before merge the changes can be absorbed into the correct commits.

The example of the PR review is the where it provides the most value to improve teamwork, but once this is used enough it quickly becomes part of the standard workflow.

## The two bad approaches to Git

There are two extreme ways to use Git badly.
One is to commit everything every five minutes.
It is somewhat useful during the development, but useless for the future.
The other is to only commit when the feature is done.
This is usually done by inexperienced developers who still see Git as something scary and not as the most trustworthy tool that always has your back (these are the people with `repo (1)`, `repo (2)`, and `repo (really final this time)` in their directory).
You might end up with a detached head. 
What a horror story.

## Fearless git with the reflog

The fear is not completely unfounded when considering that operations such as interactive rebase are destructive.
Once two commits are squashed, it might be a pain to separate them again.
There is a way to recover from this, and it is the reflog.
If you type `g ref` (it is longer to type as I rarely mess up), you get a history 
of all the operations that have been done.
With `g rb` (mnemonic is "rollback"), you can rollback to a given state.

This is the ultimate safety net, you can screw up all you want, yet all it takes is a few seconds to recover.

## The most trustworthy companion

When the whole team integrates these practices, the history becomes a very useful tool to work while debugging and refactoring.

There are two other tools that I use commonly on top of Git: 
- [Delta](https://dandavison.github.io/delta/), a nice diff tool that can be used as Git's default pager
- [tig](https://jonas.github.io/tig/doc/tig.1.html), a text-mode interface for Git that is nice for browsing the history

Make sure to make git the whole team's most trustworthy sidekick. 
Once Git has become your , it feels really primitive to work with technologies that do not have the same level of safety.