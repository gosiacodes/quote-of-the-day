(function () {
  // global variables
  const sentenceButton = document.querySelector(".sentenceButton");
  let choosedSentence = "";
  let choosedColor = "";
  let condition = false;

  // array with sentences
  const sentenceList = [
    "Keep your eyes on the stars and your feet on the ground. Theodore Roosevelt",
    "It’s better to be a lion for a day than a sheep all your life. Elizabeth Kenny",
    "Difficult and meaningful will always bring more satisfaction than easy and meaningless. Maxime Lagacé",
    "It always seems impossible until it’s done. Nelson Mandela",
    "Life is not a matter of holding good cards, but sometimes, playing a poor hand well. Jack London",
    "Life is like a box of chocolates. You never know what you’re going to get. Forrest Gump",
    "Life isn’t a matter of milestones, but of moments. Rose Kennedy",
    "Change your thoughts and you change your world. Norman Vincent Peale",
    "Not how long, but how well you have lived is the main thing. Seneca",
    "Be happy for this moment. This moment is your life. Omar Khayyam",
  ];

  // array with colors
  const rainbow = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];

  // function to run if condition is true
  const addTheBestText = () => {
    document.querySelector("#text2").innerText =
      "This is the best quote of the day ever!";
  };

  // function to choose quote of the day and change color of header
  const chooseSentenceAndChangeColor = () => {
    // loop to choose quote
    let i;
    for (i = 0; i < sentenceList.length; i++) {
      choosedSentence = sentenceList[Math.floor(10 * Math.random())];
    }
    // loop to choose color
    let j;
    for (j = 0; j < rainbow.length; j++) {
      choosedColor = rainbow[Math.floor(7 * Math.random())];
    }
    // custom event
    const event = new CustomEvent("sentence-choosed-color-changed", {
      detail: {
        newSentence: choosedSentence,
        newBackgroundColor: choosedColor,
      },
    });
    console.log(choosedSentence);
    console.log(choosedColor);
    // checking if condition is true
    if (
      choosedSentence ===
        "Life is like a box of chocolates. You never know what you’re going to get. Forrest Gump" &&
      choosedColor === "green"
    ) {
      condition = true;
    }
    // condition is true and function is running (assignment with &&)
    condition && addTheBestText();
    // dispatching event
    document.dispatchEvent(event);
  };

  // event listener to set the quote on the page
  document.addEventListener(
    "sentence-choosed-color-changed",
    (sentenceEvent) => {
      document.querySelector(".sentenceH2").innerText =
        sentenceEvent.detail.newSentence;
    }
  );

  // event listener to set color of the header
  document.addEventListener("sentence-choosed-color-changed", (colorEvent) => {
    document.querySelector(".titleH1").style.backgroundColor =
      colorEvent.detail.newBackgroundColor;
  });

  // event listener for the button
  sentenceButton.addEventListener("click", chooseSentenceAndChangeColor);
})();
