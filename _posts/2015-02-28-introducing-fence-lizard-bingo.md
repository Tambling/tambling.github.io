---
layout: post
title: "Introducing Fence Lizard Bingo"
date: 2015-02-28
category: process
tags: fence-lizard-bingo
---
Fence Lizard Bingo[^1] is the first thing I ever engineered. I was two weeks into Dev Bootcamp, and I had enough know-how to put together a bingo board generator, to support my cohort’s growing habit of playing bingo with our instructors’ aphorisms.

I say that this is the first thing I ever engineered– I picked that word deliberately. I had been programming as a hobby for six months at this point, but it was in a pure code-monkey capacity: I would be given a failing test, I would make it pass, rinse, repeat. For this, however, I started with an idea, roughed it out, debugged it, and released it[^2].

Besides being the first thing I engineered, Fence Lizard Bingo was the first thing I made for fun, simply because it was something I wanted to use, and because I thought it might give my classmates a laugh. I sat down on a Saturday afternoon (after a hundred-hour week), and by Saturday evening I had something that could take in a newline-separated list of things, and spit out an HTML document containing an arbitrary number of randomized bingo boards.

It wasn’t pretty, and even with only two weeks’ experience, I knew that. We hadn’t yet touched Sinatra, let alone Rails, and I didn’t even know what ERB was– Fence Lizard Bingo ran in the command line, the documents were constructed using string interpolation, and it enforced a five-by-five grid. If I’m being perfectly honest, it was just a call to `shuffle` that was putting on airs. Still, it was enough to get the hoped-for laugh from my classmates.

I shelved Fence Lizard Bingo to make way for my continuing studies, but in the back of my mind, I always intended to return to it. Even if I didn’t have any use for this thing any more[^3], I could still conceive of possible uses for it: it seemed like a nice-to-have classroom tool for my teacher friends, for example.

All of which is to say: I hope to build Fence Lizard Bingo into a Sinatra app, where a user can copy in a newline-separated list (of indeterminate size, greater than eight), and the app will find the nearest odd square, create a certain number of permutations of a board containing those terms, and generate a printable PDF of those boards.

Next up: I attempt to understand server-side PDF rendering!

[^1]: Named for my cohort’s mascot: [Sceloporus occidentalis](http://en.wikipedia.org/wiki/Western_fence_lizard).
[^2]: In this case, “release” just meant sending a link to the GitHub repository out to my cohort’s mailing list.
[^3]: It seems like spontaneous bingo-playing requires both endearingly predictable events and a large, questionably-mature group, neither of which I have at my disposal right now.
