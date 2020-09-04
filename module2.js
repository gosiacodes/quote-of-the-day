(function () {
  const sentenceButton = document.querySelector(".sentenceButton");

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

  const rainbow = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];

  let choosedSentence = "";
  let choosedColor = "";
  let condition = false;

  const addTheBestText = () => {
    document.querySelector("#text2").innerText =
      "This is the best quote of the day ever!";
  };

  const chooseSentenceAndChangeColor = () => {
    let i;
    for (i = 0; i < sentenceList.length; i++) {
      choosedSentence = sentenceList[Math.floor(10 * Math.random())];
    }
    let j;
    for (j = 0; j < rainbow.length; j++) {
      choosedColor = rainbow[Math.floor(7 * Math.random())];
    }
    const event = new CustomEvent("sentence-choosed-color-changed", {
      detail: {
        newSentence: choosedSentence,
        newBackgroundColor: choosedColor,
      },
    });
    console.log(choosedSentence);
    console.log(choosedColor);
    //conn && conn.close();
    if (
      choosedSentence ===
        "Life is like a box of chocolates. You never know what you’re going to get. Forrest Gump" &&
      choosedColor === "green"
    ) {
      condition = true;
    }
    condition && addTheBestText();
    document.dispatchEvent(event);
  };

  document.addEventListener(
    "sentence-choosed-color-changed",
    (sentenceEvent) => {
      document.querySelector(".sentenceH2").innerText =
        sentenceEvent.detail.newSentence;
    }
  );

  document.addEventListener("sentence-choosed-color-changed", (colorEvent) => {
    document.querySelector(".titleH1").style.backgroundColor =
      colorEvent.detail.newBackgroundColor;
  });

  sentenceButton.addEventListener("click", chooseSentenceAndChangeColor);
})();
