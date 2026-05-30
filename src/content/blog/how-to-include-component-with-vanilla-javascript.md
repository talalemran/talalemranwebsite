---
title: How to include a component with Vanilla JavaScript
description: This article is about how to include a component with Vanilla JavaScript such as header and footer.
pubDate: 08-23-2025
tags:
  - JavaScript
  - JavaScript tips
  - JavaScript tutorial
  - components
  - including components
  - web development
---

<div style="text-align: center;">
  <img src="/images/Javascript.webp" alt="JavaScript" style="display: inline; max-width: 500px;" />
</div>

There are many ways to include components in you web page such as React, Angular and so on. However, you want to use pure JavaScript.

In this particular post, I will show how to achieve that.

## Including header and footer with JavaScript

You want to include something in your web page like header and footer. The benefit of doing that is to save your time and work. The advantage of this method is to edit a single file instead of many files within your website.

In your HTML files add these elements:

### Header Content:

```html
<!-- This is the header section -->
<header id=”header”></header>
```
<br />

### Footer Content:

```html
<!-- This is the footer section -->
<footer id=”footer”></footer>
```
<br />

Now you can add the header and footer content using pure JavaScript:

<br />

```js
//Header Content
header.innerHTML = `
<h1>Your Website Logo</h1>
`;

//Footer Content
footer.innerHTML =`
<p>Copyright, your website name.<p/>
`;
```
<br />

You can add many elements as you need in your header and footer sections.

## Is this method good for SEO?

This method is not helpful for the Search Engine Optimization because the code in the JavaScript file is not injected in the web page. So, the search engine bot does not see the elements that you included in the web page.

However, this way of including elements is for a fast solution if you do not want to use any of JavaScript libraries.

I hope this trick is helpful for you web development job. And that is it.

See you later 👋
