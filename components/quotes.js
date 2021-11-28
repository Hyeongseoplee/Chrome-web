"use strict";

const quotes = [
  {
    quote:
      "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    arthor: "Mother Teresa",
  },
  {
    quote: "When you reach the end of your rope, tie a knot in it and hang on.",
    arthor: "Franklin D. Roosevelt",
  },
  {
    quote:
      "Always remember that you are absolutely unique. Just like everyone else.",
    arthor: "Margaret Mead",
  },
  {
    quote:
      "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    arthor: "Robert Louis Stevenson",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    arthor: "Eleanor Roosevelt",
  },
  {
    quote:
      "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
    arthor: "Venny Lee",
  },
];

const quoteBox = document.querySelector(".quoteBox");
const quote = quoteBox.querySelector(".quote");
const arthor = quoteBox.querySelector(".arthor");

const randomNumQt = Math.floor(Math.random() * quotes.length);
quote.innerText = quotes[randomNumQt].quote;
arthor.innerText = `-${quotes[randomNumQt].arthor}`;
// quote[0].quote, quote[0].arthor
