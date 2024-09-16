---
title: Test Driven Design for low coverage
author: len
image: /assets/img/lambdao_preview.webp
---

_All code is a liability, so each line should count_

Lines of code cost time to write, but they contain bugs, and they need to be maintained.
A reasonable approach is to write as little as possible.
But then, aren't tests just a very bad idea, bloating the codebase with many useless lines?
It depends. Bad tests do slow down the development process for little gain.
But good tests should provide a valuable return on investment by:
- forming a technical documentation of the code
- allowing for fearless refactoring (because requirements change)

Test Driven Development, despite good intentions, can make things worse and become [Test Driven Despair](https://touk.pl/blog/2012/09/16/test-driven-traps-part-1/).
To avoid this, TDD should refer to Test Driven Design.

## Good tests

The selling point of TDD is to write the tests first.
This is a good starting point as it makes running `test new_code function` the entry point to the development process.
This usually helps in making sure that the environment is "self-contained".

### Architecture

Computer science is basically mathematics applied to the real-world. 
Mathematics is Nirvana, and the world is Samsara. 
This is where all the problems come from.
In the realm of mathematics, the results of functions are provable. 
When receiving an input, the output is predictable.
This is not the case when we interact with a program; the function "give me the current products for sale" depend on what is actually in the database.

To write a good program, the main thing is to try as much as possible to have a purely functional core that holds all the logic.
Its imperative boundaries should be thin, and clearly defined.

When writing the test, it is natural to want to pass the values as arguments, rather than a weird stateful object that contains a lot of things.

### Tests should be black-box

A result of not doing that is a test that requires to do things like monkey-patching functions, or using a lot of setup code.
This is typical of the "test as an afterthought" approach.

Other bad ideas are assertions that `some_subfunction` is called.
Surely, this subfunction should have an effect? 
Then it is what should be verified.

### Tests should mostly follow the given, when, then structure

Given the input, when the function is called, then the output should be this.
Most tests should be almost as concise as this.

### Tests should have descriptive names

For instance, `test_cannot_add_to_cart_out_of_stock_product` is better than `test_add_to_cart`, which is even better than `test_1`.

### Tests should only test what is necessary

What should the function change? 
This is what should be tested.
What could it change by mistake?
It makes sense to verify other things, but it should be done parsimoniously.

A good exercise is to go over the test once it is working and remove every line that is not necessary to make it work.

### Only one test of each kind

Typically, there should be one test for the happy path, one for each edge case, and one for the error case.
After testing on the "Zhen" input, testing with "Ning" might not be very useful; testing with "Siddhartha Gautama Shakyamuni Buddha" might be, as it tests a much longer input.

### Make more tests for crucial core logic

Slightly contradicting the previous point, if the code has been well-architected, the core logic should be very well-defined.
This can, and probably should, be tested exhaustively.

On the other hand, the outer parts of the code should be mostly framework boilerplate that does not require testing. 
Once again, only test what is necessary.

### Code Reflection

Similarly to how code architecture should be similarly organized as a textbook, with chapters, sections and paragraphs, the tests should be organized in a similar way.
If you started to code with a test, the first test should be verifying the entire flow.
As you go on, the tests should be more and more focused on the details.
The end result should be a test suite that is a mirror of the codebase intention rather than its implementation .


## Graveyard of failed solutions

There are two ideas that might make low quality tests acceptable, but these are really bad ideas. 

### Test coverage is enough

Test coverage is a not a really good quality metric.
For example, in a codebase that had 95% test coverage, I encountered a weird bug where a user update did not propagate properly.
There were eventual consistency problems in the codebase, but something was off.
After a few hours of debugging, I found out that the different parts of the program did not use the same "primary key" on the user table.
As a result, there would be phantom users, and other parts of the program would just use outdated data.

Test coverage motivates bloating the codebase with tests that do not provide any value.
Code review for tests tends to be very lazy, which compounds the problem.

### The Type Systems does the heavy lifting

In a code base that was entirely typed, using Enum to represent different states, there were many instances where the processing was not exhaustive. 
Introducing new values would simply "fall through" these parts. 
Which is the worst possible kind of errors. 
The database becomes polluted with wrong data that is hard to identify. 
After all the data is identified, then some scripts should be written to clean it up; if it impacted operations, some customers might be impacted, requiring customer support to manage the situation.

Some tests can be added to ensure that the processing is exhaustive, but this is sufficient only if the data flow follows a well-defined pipeline.

Type systems help if used correctly, but there is complexity and discipline required to really reap the benefits. The same discipline that is required to write good tests.

Note that this example clearly refers to a language with a loose type-system (typed Python, which has a fair share of issues). However, even in languages with stronger type systems we will find more complicated issues that require some testing.

## Tests and Trust

The common theme is that there are no shortcuts to achieving good architecture, and heavy coverage of a mess is making things worse, as it solidifies the mess.

In the end, it might be better to have a codebase that is 40% covered, but where the tests are good, rather than a codebase that is 95% covered, but where the tests are bad.
This, however, might be a very tough sell in a corporate environment.

Trust is the real value. 
You don't want to deal with urgent production issues, and you don't want to doubt your teammates' work.
Making sure that tests are useful rather than a chore is an important part of that trust.
