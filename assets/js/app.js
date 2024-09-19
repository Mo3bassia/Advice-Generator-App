fetch("https://api.adviceslip.com/advice")
  .then((result) => result.json())
  .then((result) => {
    console.log(result);
  });
