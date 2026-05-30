---
title: UI/UX & Code - The Magic of JavaScript Template Literals
description: This blog post is about the UI/UX & code - the magic of javaScript template literals.
pubDate: 05-29-2026
tags:
  - JavaScript
  - JavaScript tips
  - JavaScript tutorial
  - ui-ux design
  - web development
---

<div style="text-align: center;">
  <img src="/images/ux-ui-code.webp" alt="UI/UX & Code" style="display: inline; max-width: 500px;" />
</div>

Have you ever tried to glue text and variables together in JavaScript? If you are using the old-school plus signs (+), you know it can get messy very quickly.

Today, we are going to look at a clean, elegant way to handle text inside your code using a feature called Template Literals. It’s a game-changer for keeping your code organized and readable.

## The Old, Messy Way

Imagine you are building a profile component and want to display a welcome message. Using traditional string concatenation, your code looks like this:

<br />

```js
const name = "Alex";
const role = "Developer";

// Gluing text together with '+'
const message = "Hello, my name is " + name + " and I am a " + role + ".";

console.log(message);

```
<br />

It works, but keeping track of those quotation marks and spacing is a headache. If you miss one single space, your text runs together like Alexand I am.

## The New, Clean Way: Template Literals

<br />

Instead of fighting with plus signs, JavaScript lets us use backticks (`)—the key usually found right below the Escape key on your keyboard—and a special syntax: ${variable}.

Here is the exact same message written the modern way:

<br />

```js
const name = "Alex";
const role = "Developer";

// Clean, readable, and elegant
const message = `Hello, my name is ${name} and I am a ${role}.`;

console.log(message);
```
<br />

### Why This is a Game-Changer

<ul>
<li>No More Plus Signs: You write your sentence exactly how you want it to look.</li>
<li>Easy Spacing: Spaces inside the backticks are preserved naturally.</li>
<li>Multi-line Friendly: Need your text to break onto a new line? With standard quotes, you need to insert \n. With template literals, you just hit Enter inside the backticks, and JavaScript respects the layout.</li>
</ul>

<br />

```js
// Multi-line layout made simple
const cardHTML = `
  <div class="user-card">
    <h2>${name}</h2>
    <p>${role}</p>
  </div>
`;
```
<br />

### Give it a Try!

The next time you need to mix variables into your UI text or layout strings, drop the quotes, reach for the backticks, and keep your code beautiful.

Happy coding!