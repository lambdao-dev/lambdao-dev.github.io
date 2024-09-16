---
title: Advanced git techniques
author: len
image: /assets/img/lambdao_preview.webp
---

_Complex situations may require advanced knowledge, but  techniques, but_ 

In contrast with previous article, which suggest to fully integrate the daily workflow, this is about the complex situations that may arise a few times in a project.

## A cautionary tale

In one company I worked, one day pulling the master branch took a long time.
A very long time.
For security reasons, we had to work on the code through ssh on a rather slow machine, and so we were advised not to pull while they sorted out the situation.

What happened was that the tests generated hundred of megabytes of data in the project folder.
Somebody commited all that to master, and pushed apparently without noticing anything (was he using an IDE?).
By the end of the day, they had sorted out the situation.
The project lead created a new repository from an archive of the day before, and deleted the old one.

You see, reverting the commit means that the commit is still in history, so the repository will stay with hundreds of megabytes forever.
Right?

There are so many wrongs about this that it should have been hard to even read.
First, the solution was to force-push the branch, notice everyone to delete their local branch and check it out anew.
That would take maybe 5 minutes of each collaborator's time, considering the time to cherry-pick their commits if they work on master with a "rolling rebase" approach, the bulk of time being spent on reading the email.
Git hooks could have been put in the project to avoid the situation repeating.
Going back to the source, the test data folder that was created should have been put in the `.gitignore`.

To this day, I cannot fathom how a team could do something like this.
The project lead was in another country and notoriously in bad terms with the lead of my own team, so we were told we had to roll with it.

There are a few advanced git techniques that can help in more complex situations.
The best thing is, you don't even need to really know how to come up with the solutions, just to know how to look for them.

## get all files changes affected by a feature branch

This one can be quite useful to optimize the test suite in case it is very long.
Instead of running all the tests, you can run only the ones that are affected by the changes.
The workflow becomes:
- run the affected tests on push
- run the full test suite on merge
- run the full test suite manually in doubt

With this command, you can get all the files that were changed by a feature branch:

```bash
git diff --name-only master...feature
```

## Import history from another repository

https://stackoverflow.com/questions/1683531/how-to-import-existing-git-repository-into-another


## Cherry-pick all commits affecting a given folder

```bash
git log --oneline --name-only --follow -- path/to/folder
```

## Overwrite the author in all the git history

Sometimes, you want to change the author of all the commits in a repository.
There can be a variety of reasons for this, but the most common one is that the email address was wrong.
This can be done with the following command:

## Complicated situations have a simple solution

With git, there is never a (good) reason to panic.
