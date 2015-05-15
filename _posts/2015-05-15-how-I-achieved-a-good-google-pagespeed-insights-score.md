---
layout: post
title: "How I Achieved A Pretty Good* Google PageSpeed Insights Score"
---

<p><em>* <strong>98/100</strong> on both Mobile and Desktop (you can see the test yourself, <a href="https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fmattbailey.io%2F">here</a>).</em></p>

## First Of All, Why Bother?

Yes, my site is a fairly simple [Jekyll](http://jekyllrb.com/) powered static site, so the perception is that it's already pretty quick. Perceived load speed is certainly very important, but that didn't stop [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) from highlighting quite a few issues and, subsequently, giving me a rather poor **68/100** for Mobile and **75/100** for Desktop.

It's important to me how Google perceives my site, plus I have a certain amount of professional pride at stake - web performance is something very much on my mind at the moment. If I can't optimise my own site then how can I advise our clients at [GPMD](http://www.gpmd.co.uk) where I work.

**So, I set out to see what could be done to improve things. Here is what I did...**

## I Inlined Critical CSS In The Head

Putting your critical CSS inline in the `<head>` means the browser can quickly render the 'above-the-fold' content of your page whilst deferring the loading of the main CSS (usually using an Async CSS loader, [like this one](https://github.com/filamentgroup/loadCSS)). In my case my CSS was under 10KB, so I inlined the whole lot!

**Jekyll Technique:**

I used the Jekyll technique by Kevin Sweet [described here](http://www.kevinsweet.com/inline-scss-jekyll-github-pages/).

## I Used The Async Typekit Font Loading Script

Ok, so this is kind of a no-brainer but I had rather lazily just used the bog-standard Typekit loading script, rather than their more advanced async script. The problem with the standard script is that it's not async so it blocks the render, a big no no where performance is concerned.

[Click here](http://help.typekit.com/customer/portal/articles/649336-embed-code) for more info on using the Typekit async font loading script.

**Script Placement:**

In terms of placement I put the script as the last element in my `<head>` tag, the reason being that JavaScript needs to come after CSS or PageSpeed Insights will complain about the injected Typekit CSS being render blocking.

**FOUT:**

I decided to not hook into the `.wf-loading` and `.wf-active` classes to hide any [FOUT](http://help.typekit.com/customer/portal/articles/6852-Controlling-the-Flash-of-Unstyled-Text-or-FOUT-using-Font-Events) as it doesn't really bother me - you only get it the first time you visit the site, after which the fonts are cached by your browser anyway.

## I Inlined Other Scripts At The Bottom Of The Page

All the other scripts I placed as the last elements on the page, just inside the closing `</body>` tag.

## I Minified The HTML

Minifying HTML can be tricky (and break stuff), especially on dynamic sites, but on simple flat file sites like mine it shouldn't be a problem. The gains in having fewer bytes may be minimal, but it's one less thing for PageSpeed Insights to complain about.

**minify-html Jekyll Ruby Gem:**

As luck would have it there is a Ruby gem for Jekyll called [minify-html](https://github.com/octopress/minify-html) that does just what I needed. I simply installed it and added it to my `_config.yml` file.

## I Enabled GZip Compression On My Server

Modern browsers can manage GZipped files on-the-fly. Fewer bytes means faster downloads - win win!

**Configure .htaccess:**

Enabling GZip compression on my server was easier than I thought it was going to be - as easy as copying and pasting. I simply added the 'Web Performance' section from the h5bp [.htaccess](https://github.com/h5bp/server-configs-apache/blob/master/dist/.htaccess) file to my own `.htaccess` file and uploaded to my server.

## Summary

So there you have it, a score of **98/100** on both Mobile and Desktop. The only remaining PageSpeed Insights issue I have is the cache headers on the Typekit and Google Analytics JavaScript files. Unfortunately I have no control over this, but I can live with that. I suppose I could, if it really bothered me, download them and then host them myself. Maybe that's a project for another day...

![Google PageSpeed Insights 98/100 Mobile Score](/images/dist/google-pagespeed-insights-98-100-mobile.jpg)

![Google PageSpeed Insights 98/100 Desktop Score](/images/dist/google-pagespeed-insights-98-100-desktop.jpg)

So was it worth it? None of these techinques on their own make a huge amount of difference, but combined they've gained me a great score, and quite a lot of satisfaction.

I hope the above helps others looking to optimise their sites. Please feel free to ask if you have questions about anything I've talked about.
