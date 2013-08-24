---
title: "The Road to Tambling.me"
layout: post
---
This site has been a long time coming.

I registered my first personal site, DeanTambling.com, at the beginning of 2009, and spent a while thereafter just sitting on the domain, not doing anything particularly worthwhile with it, merely waiting for the right combination of inspiration and HTML/CSS knowhow to strike.

<figure class="image right">
<img src="/assets/deantambling-2010.png">
<figcaption>Mockup of DeanTambling.com, August 2010.</figcaption>
</figure>

A little over a year later, having again felt the itch to expand my online presence, I got as far as actually mocking up a design in Photoshop. It wasn't very good, but it was still enough to give me something to focus on and work towards. The real DeanTambling.com, when it went online six or so months later, looked and behaved similarly, with tabs along the right, my tweets embedded right there on every page, and every piece of information at least one click away from any other.

Around the same time as I was mocking up DeanTambling.com, another phrase popped into my head: Tambling Labs. I've always been a bit of a tinkerer, and my ambitions have never been bounded by my knowledge or skill, so I wanted to turn that into its own ethos: an identity I could take on to tackle the impossible. DeanTambling.com became TamblingLabs.com, and nothing much else changed.

This brings us pretty close to the present. As I went through Dev Bootcamp, I realized that the tinkerer wasn't an alter ego of mine, it wasn't a mask I had to put on or an ethos I had to puff up. I am a tinkerer. I like seeing how things work and using that knowledge to make new things. That's just who I am, how I interact with the world, and it's been that way for as long as I can remember, winding through studies in film and history, internships as a journalist and a designer, a fateful year as a middle school science teacher, and even my comfortable, happy professional nadir as a barista. It's a tendency that I think will serve me well as I set out on my journey as a programmer.

Speaking of programming, here's a quick glimpse at what's driving this site:
* The back-end is all [Jekyll](http://jekyllrb.com). These posts, as you read them, are written first in Markdown, then parsed into the layout.
* This page is hosted on GitHub Pages, and pointed to Tambling.me, which I registered through [iwantmyname](https://iwantmyname.com) . This setup is surprisingly painless, and such a welcome change from how clunky web hosting was just a few years ago.
* The little bit of animation (hint: click the question mark icon to the right) is jQuery and jQuery UI, specifically UI's ability to animate toggleClass().
* This page is styled using Sass. This part wasn't easy&mdash; the [Jekyll/Sass gem](https://github.com/noct/jekyll-sass) by default saves the compiled CSS to the \_site subdirectory of your Jekyll install, but GitHub gets the CSS straight from the root directory. I ultimately had to modify Jekyll/Sass to save the compiled CSS to the root directory.

This page is a work in progress. I welcome any and all feedback, and you can get in touch with me through any of the means listed in the toolbar (which, CSS gods willing, should be fixed on the right side of this page).

Now, just to actually get into the blogging habit...
