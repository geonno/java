const quotes = [
    {
        quote : "achieve failure",
        author : "tom plantz",
    },
    {
        quote : "남과 같이 해서는 남 이상 될 수 없다.",
        author : "동양합기도",
    },
    {
        quote : "빨리 가려면 혼자가고 멀리 가려면 함께 가라",
        author : "김경종",
    },
    {
        quote : "인생은 곱셈이다. 내가 0이면 어떤 기회가 주어져도 아무런 결과를 내지 못한다.",
        author : "KNPU",
    },
    {
        quote : "빨리 ",
        author : "김",
    },
    {
        quote : "빨리 가려면 ",
        author : "김경",
    },
    {
        quote : "빨리 가려면 혼자가고 ",
        author : "김경종",
    },
    {
        quote : "멀리 가려면 함께 가라",
        author : "김경",
    },
    {
        quote : "함께 가라",
        author : "종",
    },
    {
        quote : "가라",
        author : "김경종",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysquote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysquote.quote;
author.innerText = todaysquote.author;