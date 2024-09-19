let adviceId = document.querySelector(".advice-id span");
let adviceTitle = document.querySelector(".advice-title");
let nextEl = document.querySelector(".next");

let getAdvice = async () => {
  let result = await fetch("https://api.adviceslip.com/advice");
  let json = await result.json();
  adviceTitle.textContent = json.slip.advice;
  adviceId.textContent = json.slip.id;
};
// fetch("https://api.adviceslip.com/advice")
//   .then((result) => result.json())
//   .then((result) => {
//     console.log(result);
//   });

getAdvice();

nextEl.onclick = function () {
  console.log("HELLO");
  getAdvice();
};
