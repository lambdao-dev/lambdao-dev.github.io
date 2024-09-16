---
title: Being Two Steps Ahead as a Business 
author: len
image: /assets/img/lambdao_preview.webp
---

_Spend your time on foundations to be on top of things_

When companies want to start a feature to be one step ahead, they are often two steps behind.
In many cases where people have asked us to implement some new features for their business, time was actually spent on the laying the groundwork for the feature.

## Case studies

### Data schemas for data analysis

For instance, they wanted to analyze their sales data to get some insight on market segmentation, what features predict higher and lower margins, in an objective and data-driven way.
A quick run of standard algorithms on the data did not converge; subsequent runs would give different results.
After looking at the data, it was of very poor quality. A NoSQL database gave the possibility to store everything in unstandardized json, and the data was not cleaned before being stored in each version of the program.
All the time that was supposed to be spent on analyzing the data was spent on cleaning it.
Moreover, this time required more collaboration since cleaning the data invariably depends on having a deep understanding of the Domain Knowledge.

### Software processes for data input

Another company wanted to implement some software processes to standardize their data input.
However, every employee used a different process, and had different use-cases to take care of; the attempt to standardize the process were poorly received, as the group drafting could not represent every opinion.
In other words, the time spent was not on setting the new software process, but laying the groundwork for the new process to be accepted.

## The power of structure

What is the difference between making some text bold and huge, and writing `title: text`? 

What makes data being able to be processed easily is not the algorithms, but the structure of the data.
Database schemas were known to be very rigid, giving very strong guarantees on the data that can be stored, at the price of agility.
Nowadays, there is good support for unstructured JSon in databases like PostgreSQL, allowing for some trade-offs to be made.

## Choosing the right tools

The point is that unstructured JSon is still structured data compared to a Word, Excel, or the worst case, a PDF file.
These tools make the data very hard to process in an automated way, closing access to data analysis.

### The AI promise

AI tools promise to be able to have transparent data access on such file formats.
However, the tools are still very imprecise, and the cost of using them is still quite high.
Setting them up can be quite complicated, and/or vause big privacy and security issues.

### Basic tools

A lot of the smartest people, who consistently outperform their peers, are the ones using old, battle-tested tools that perform well together. 
The idea is that these tools have been developed according to the Unix philosophy, which makes them composable by default.
Instead of being dependent on the features that have been implemented by a software vendor, the user can combine the tools to build their own process.

## Make the right cost analysis

<blockquote>
<p>Rather than trying to stay on top of things, I am trying to get to the bottom of things.</p>
Donald Knuth
</blockquote>

Cheapening on effort and discipline can cost a lot in the long run.
Software has a lot of solutions for semi-structured and flexible data models, but the company processes should work with the software.

