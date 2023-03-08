const quotes = [
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein",
    },
    {
        quote: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: "Oscar Wilde",
    },
    {
        quote: "It is better to be hated for what you are than to be loved for what you are not.",
        author: "Andre Gide, Autumn Leaves",
    },
    {
        quote: "It is our choices, Harry, that show what we truly are, far more than our abilities.",
        author: "J.K. Rowling, Harry Potter and the Chamber of Secrets",
    },
    {
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas A. Edison",
    },
    {
        quote: "Everything you can imagine is real.",
        author: "Pablo Picasso",
    },
    {
        quote: "All you need is love. But a little chocolate now and then doesn't hurt.",
        author: "Charles M. Schulz",
    },
    {
        quote: "Life isn't about finding yourself. Life is about creating yourself.",
        author: "George Bernard Shaw",
    },
    {
        quote: "Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?",
        author: "J.K. Rowling, Harry Potter and the Deathly Hallows",
    },
];

const quote = document.querySelector("#quote div:first-child");
const author = document.querySelector("#quote div:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = "- " + todaysQuote.author;