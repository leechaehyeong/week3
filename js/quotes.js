//css 가상클래스 'first-child' id="quote"의 처음 글자 요소(span) 가져오기
const quote = document.querySelector("#quote span:first-child");
//css 가상클래스 'last-child' id="quote"의 마지막 글자 요소(span) 가져오기
const author = document.querySelector("#quote span:last-child");
//todaysQuote에 인용구를 랜덤으로 선언
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
