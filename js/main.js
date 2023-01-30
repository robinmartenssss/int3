import "/css/style.css";
import "/css/style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: { trigger: ".container__adolphe__gridone" },
});

tl.fromTo(
  ".container__adolphe__gridone",
  { opacity: 0, duration: 1 },
  {
    opacity: 1,
    duration: 1,
  }
);

tl.fromTo(
  ".container__adolphe__gridtwo",
  { opacity: 0, duration: 0.5 },
  {
    opacity: 1,
    duration: 0.5,
  }
);

tl.fromTo(
  ".container__adolphe__gridthree",
  { y: 100, duration: 0.5 },
  {
    y: 0,
    duration: 1,
  }
);

tl.fromTo(
  ".container__accidents__title",
  { opacity: 0, duration: 0.5 },
  { opacity: 1, duration: 0.5 }
);

tl.fromTo(
  ".container__accidents__text",
  { opacity: 0, duration: 0.5 },
  {
    opacity: 1,
    duration: 0.5,
  }
);

tl.fromTo(
  ".container__accidents__example-second ",
  {
    opacity: 0,
    duration: 0.5,
  },
  {
    opacity: 1,
    duration: 0.5,
  }
);

tl.fromTo(
  ".container__accidents__example-first ",
  {
    opacity: 0,
    duration: 0.5,
  },
  {
    opacity: 1,
    duration: 0.5,
  }
);

tl.fromTo(
  ".container__storyline__part1-images",
  { y: 500, duration: 1 },
  { y: 0, duration: 1 }
);

tl.fromTo(
  ".storyline__text_one",
  { opacity: 0, duration: 1 },
  { opacity: 1, duration: 1 }
);

tl.fromTo(
  ".storyline__text_two",
  { opacity: 0, duration: 1 },
  { opacity: 1, duration: 1 }
);

tl.fromTo(
  ".storyline__text_three",
  { opacity: 0, duration: 1 },
  { opacity: 1, duration: 1 }
);

tl.fromTo(
  ".container__quotes__title-white",
  { opacity: 0, duration: 0.2 },
  { opacity: 1, duration: 0.2 }
);

tl.fromTo(
  ".container__quotes__title-whiteoutline",
  { opacity: 0, duration: 0.2 },
  { opacity: 1, duration: 0.2 }
);

tl.fromTo(
  [".container__quotes__title-orange", ".container__quotes__text"],
  { opacity: 0, duration: 0.2 },
  { opacity: 1, duration: 0.2 }
);

tl.to("#platehoes2", {
  rotation: 360,
  duration: 4,
  repeat: -1,
  ease: "linear",
});

tl.fromTo(
  [
    ".johnson__downfall__second",
    ".container__johnson__images__backgroundimage",
  ],
  { x: -680, duration: 1.5, opacity: 0 },
  { x: 0, duration: 1.5, opacity: 1 }
);

tl.fromTo(
  ".container__title-downfall",
  {
    x: 500,
    duration: 1.5,
    opacity: 0,
  },
  { x: 0, duration: 1.5, opacity: 1 }
);

tl.fromTo(
  ".adolphesax-second",
  {
    opacity: 0,
    scale: 0.5,
    transformOrigin: "center center",
  },
  {
    opacity: 1,
    scale: 1,
    transformOrigin: "center center",
  }
);

tl.fromTo(
  ".jazzrock_text-jazz",
  { opacity: 0, duration: 0.2 },
  { opacity: 1, duration: 0.2 }
);

tl.fromTo(
  ".rock__second",
  {
    opacity: 0,
    scale: 0.5,
    transformOrigin: "center center",
  },
  {
    opacity: 1,
    scale: 1,
    transformOrigin: "center center",
  }
);

tl.fromTo(
  ".jazzrock_text-rock",
  { opacity: 0, duration: 0.2 },
  { opacity: 1, duration: 0.2 }
);

tl.fromTo(
  [
    ".guitar__one",
    ".guitar__two",
    ".guitar__three",
    ".guitar__four",
    ".guitar__five",
    ".guitar__six",
    ".guitar__seven",
    ".guitar__eight",
    ".guitar__nine",
    ".guitar__ten",
  ],
  {
    opacity: 0,
    scale: 0.5,
    transformOrigin: "center center",
    delay: 1,
  },
  {
    opacity: 1,
    scale: 1,
    transformOrigin: "center center",
    delay: 1,
  }
);

tl.fromTo(
  ".container__Quoteguitars__text",

  {
    duration: 1,
    width: "0",
    opacity: 0,
  },
  {
    duration: 1,
    opacity: 1,
    width: "1600px" /* same as CSS .line-1 width */,
  }
);
// text cursor animation
tl.fromTo(
  ".container__Quoteguitars__text",

  {
    duration: 1,
    "border-right-color": "rgba(255,255,255,0.75)",
  },
  {
    duration: 1,
    "border-right-color": "rgba(255,255,255,0)",
    repeat: -1,
  }
);

tl.fromTo(
  [".pinkfloyd__image-mobile", "#container__pinkfloyd__backgroundimage-title"],
  {
    opacity: 0,
    scale: 0.5,
    transformOrigin: "center center",
  },
  {
    opacity: 1,
    scale: 1,
    transformOrigin: "center center",
  }
);

tl.fromTo(
  ".plattehoezen__background",
  { opacity: 0, duration: 2.5 },
  { opacity: 1, duration: 2.5 }
);

tl.fromTo(
  "#platehoezen__textone",
  { opacity: 0, duration: 1 },
  { opacity: 1, duration: 1 }
);

tl.fromTo(
  "#platehoezen__texttwo",
  { opacity: 0, duration: 1 },
  { opacity: 1, duration: 1 }
);

tl.fromTo(
  ".kennyG_backgroundimage",
  { opacity: 0, duration: 2.5 },
  { opacity: 1, duration: 2.5 }
);

tl.fromTo(
  ".container__kennyg-all",
  { opacity: 0, duration: 1 },
  { opacity: 1, duration: 1 }
);

tl.fromTo(
  ".container__title-michael",
  { opacity: 0, duration: 1 },
  { opacity: 1, duration: 1 }
);

tl.fromTo(
  ".container__michael",
  { opacity: 0, duration: 1.5 },
  { opacity: 1, duration: 1.5 }
);

tl.fromTo(
  ".vieuwport__height3",
  {
    x: 500,
    duration: 2.5,
    opacity: 0,
  },
  { x: 0, duration: 2.5, opacity: 1 }
);

tl.fromTo(
  ".vieuwport__height4",
  {
    x: -500,
    duration: 2,
    opacity: 0,
  },
  { x: 0, duration: 2, opacity: 1 }
);

tl.fromTo(
  ".container__title-return",
  {
    y: 500,
    duration: 2,
    opacity: 0,
  },
  { y: 0, duration: 2, opacity: 1 }
);

tl.fromTo(
  ".container__lopez__backgroundimage__text",
  { opacity: 0, duration: 1.5 },
  { opacity: 1, duration: 1.5 }
);

tl.fromTo(
  "#image__song__one",
  {
    opacity: 0,
    scale: 0.5,
    transformOrigin: "center center",
  },
  {
    opacity: 1,
    scale: 1,
    transformOrigin: "center center",
  }
);

tl.fromTo(
  ".text1__end",
  { opacity: 0, duration: 1.5 },
  { opacity: 1, duration: 1.5 }
);

tl.fromTo(
  ".title1__end",
  { opacity: 0, duration: 1 },
  { opacity: 1, duration: 1 }
);

tl.fromTo(
  ".text2__end",
  { opacity: 0, duration: 1.5 },
  { opacity: 1, duration: 1.5 }
);

tl.fromTo(
  "#image__song__two",
  {
    opacity: 0,
    scale: 0.5,
    transformOrigin: "center center",
  },
  {
    opacity: 1,
    scale: 1,
    transformOrigin: "center center",
  }
);

tl.fromTo(
  ".text__socials",
  { opacity: 0, duration: 1 },
  { opacity: 1, duration: 1 }
);

tl.fromTo(
  ".text__Arianda",
  { opacity: 0, duration: 1.5 },
  { opacity: 1, duration: 1.5 }
);

tl.fromTo(
  "#image__song__five",
  {
    opacity: 0,
    scale: 0.5,
    transformOrigin: "center center",
  },
  {
    opacity: 1,
    scale: 1,
    transformOrigin: "center center",
  }
);

tl.fromTo(
  "#image__song__four",
  {
    opacity: 0,
    scale: 0.5,
    transformOrigin: "center center",
  },
  {
    opacity: 1,
    scale: 1,
    transformOrigin: "center center",
  }
);

tl.fromTo(
  ".background__podcast",
  {
    y: 500,
    duration: 3,
    opacity: 0,
  },
  { y: 0, duration: 3, opacity: 1 }
);

tl.fromTo(
  ".text__podvast",
  { opacity: 0, duration: 1.5 },
  { opacity: 1, duration: 1.5 }
);

const init = () => {
  const audio = document.getElementById("johnson");
  const audio2 = document.getElementById("parker");
  const audio3 = document.getElementById("johnson2");
  const audio4 = document.getElementById("song4");
  const audio5 = document.getElementById("song5");
  const audio6 = document.getElementById("song6");
  const audio7 = document.getElementById("song7");

  let isPlaying = false;
  let isPlaying2 = false;
  let isPlaying3 = false;
  let isPlaying4 = false;
  let isPlaying5 = false;
  let isPlaying6 = false;
  let isPlaying7 = false;

  console.log(document.getElementsByClassName("saxophone__detail"));
  document
    .getElementById("saxophone__detail-textone")
    .addEventListener("click", displayUitleg1);
  document
    .getElementById("saxophone__detail-texttwo")
    .addEventListener("click", displayUitleg2);
  document
    .getElementById("saxophone__detail-textthree")
    .addEventListener("click", displayUitleg3);
  document
    .getElementById("saxophone__detail-textfour")
    .addEventListener("click", displayUitleg4);
  document
    .getElementById("saxophone__detail-textfive")
    .addEventListener("click", displayUitleg5);

  /* SOUNDS */

  document.getElementById("platehoes2").addEventListener("click", playSound);
  document
    .getElementById("image3_triple")
    .addEventListener("click", playSound2);

  document
    .getElementById("johnson__downfall")
    .addEventListener("click", playSound3);

  document.getElementById("jazzplayer").addEventListener("click", playSound4);

  document
    .getElementById("width__images__rock")
    .addEventListener("click", playSound5);

  document
    .getElementById("container__pinkfloyd__backgroundimage-title")
    .addEventListener("click", playSound6);

  document
    .getElementById("platehoezen__textone")
    .addEventListener("click", playSound7);

  document
    .getElementById("platehoezen__texttwo")
    .addEventListener("click", playSound8);

  document
    .getElementById("container__kennyg__title")
    .addEventListener("click", playSound9);

  document.getElementById("saxplayer").addEventListener("click", playSound18);

  document.getElementById("lopez").addEventListener("click", playSound10);

  document.getElementById("beyonce").addEventListener("click", playSound11);

  document
    .getElementById("image__song__one")
    .addEventListener("click", playSound15);

  document
    .getElementById("image__song__two")
    .addEventListener("click", playSound13);

  document
    .getElementById("image__song__four")
    .addEventListener("click", playSound17);

  /*
  document.getElementById("").addEventListener("click", playSound18);

  document.getElementById("").addEventListener("click", playSound19);

  document.getElementById("").addEventListener("click", playSound20);*/

  let counter = 0;

  function playSound() {
    if (!isPlaying) {
      audio.play();

      isPlaying = true;
      counter++;
    } else if ((isPlaying = true)) {
      isPlaying = false;
      audio.pause();
      audio.currentTime = 0;
    }

    return {
      counter,
    };
  }

  function playSound2() {
    if (!isPlaying2) {
      audio2.play();
      isPlaying2 = true;
      console.log("sound2");
      counter++;
    } else if ((isPlaying2 = true)) {
      isPlaying2 = false;
      audio2.pause();
      audio2.currentTime = 0;
    }

    return {
      counter,
    };
  }

  function playSound3() {
    if (!isPlaying3) {
      audio3.play();
      console.log("sound3");
      isPlaying3 = true;
      counter++;
    } else if ((isPlaying3 = true)) {
      isPlaying3 = false;
      audio3.pause();
      audio3.currentTime = 0;
    }

    return {
      counter,
    };
  }

  function playSound4() {
    if (!isPlaying4) {
      audio4.play();
      isPlaying4 = true;
      console.log("sound4");
      counter++;
    } else if ((isPlaying4 = true)) {
      isPlaying4 = false;
      audio4.pause();
      audio4.currentTime = 0;
    }

    return {
      counter,
    };
  }

  function playSound5() {
    if (!isPlaying5) {
      audio5.play();
      isPlaying5 = true;
      console.log("sound5");
      counter++;
    } else if ((isPlaying5 = true)) {
      isPlaying5 = false;
      audio5.pause();
      audio5.currentTime = 0;
    }

    return {
      counter,
    };
  }

  function playSound6() {
    if (!isPlaying6) {
      audio6.play();
      isPlaying6 = true;
      console.log("sound6");
      counter++;
    } else if ((isPlaying6 = true)) {
      isPlaying6 = false;
      audio6.pause();
      audio6.currentTime = 0;
    }

    return {
      counter,
    };
  }

  function playSound7() {
    if (!isPlaying7) {
      audio7.play();
      isPlaying7 = true;
      console.log("sound7");
      counter++;
    } else if ((isPlaying7 = true)) {
      isPlaying7 = false;
      audio7.pause();
      audio7.currentTime = 0;
    }

    return {
      counter,
    };
  }

  let isPlaying8 = false;
  const audio8 = document.getElementById("song8");

  function playSound8() {
    if (!isPlaying8) {
      audio8.play();
      isPlaying8 = true;
      counter++;
    } else if ((isPlaying8 = true));
    isPlaying8 = false;
    audio8.pause();
    audio8.currentTime = 0;
  }

  return {
    counter,
  };
};

let isPlaying9 = false;
let isPlaying10 = false;
let isPlaying11 = false;
let isPlaying12 = false;

let isPlaying13 = false;
let isPlaying15 = false;
let isPlaying17 = false;
let isPlaying18 = false;

const audio9 = document.getElementById("song9");
const audio10 = document.getElementById("song10");
const audio11 = document.getElementById("song11");
const audio12 = document.getElementById("song12");
const audio13 = document.getElementById("song13");
const audio15 = document.getElementById("song15");
const audio17 = document.getElementById("song17");
const audio18 = document.getElementById("song18");

function playSound9() {
  if (!isPlaying9) {
    audio9.play();
    isPlaying9 = true;
    console.log("sound9");
    counter++;
  } else if ((isPlaying9 = true)) {
    isPlaying9 = false;
    audio9.pause();
    audio9.currentTime = 0;
  }

  return {
    counter,
  };
}

function playSound10() {
  if (!isPlaying10) {
    audio10.play();
    isPlaying10 = true;
    console.log("sound10");
    counter++;
  } else if ((isPlaying10 = true)) {
    isPlaying10 = false;
    audio10.pause();
    audio10.currentTime = 0;
  }

  return {
    counter,
  };
}

function playSound11() {
  if (!isPlaying11) {
    audio11.play();
    isPlaying11 = true;
    console.log("sound11");
    counter++;
  } else if ((isPlaying11 = true)) {
    isPlaying11 = false;
    audio11.pause();
    audio11.currentTime = 0;
  }

  return {
    counter,
  };
}

function playSound13() {
  if (!isPlaying13) {
    audio13.play();
    isPlaying13 = true;
    console.log("sound13");
    counter++;
  } else if ((isPlaying13 = true)) {
    isPlaying13 = false;
    audio13.pause();
    audio13.currentTime = 0;
  }

  return {
    counter,
  };
}

function playSound15() {
  if (!isPlaying15) {
    audio15.play();
    isPlaying15 = true;
    console.log("sound15");
    counter++;
  } else if ((isPlaying15 = true)) {
    isPlaying15 = false;
    audio15.pause();
    audio15.currentTime = 0;
  }

  return {
    counter,
  };
}

function playSound17() {
  if (!isPlaying17) {
    audio17.play();
    isPlaying17 = true;
    console.log("sound17");
    counter++;
    console.log(counter);
  } else if ((isPlaying17 = true)) {
    isPlaying17 = false;
    audio17.pause();
    audio17.currentTime = 0;
  }

  return {
    counter,
  };
}

function playSound18() {
  if (!isPlaying18) {
    audio18.play();
    isPlaying18 = true;
    console.log("sound18");
    counter++;
  } else if ((isPlaying18 = true)) {
    isPlaying18 = false;
    audio18.pause();
    audio18.currentTime = 0;
  }

  return {
    counter,
  };
}

function displayUitleg1() {
  document.getElementById("saxophone__detail").src =
    "/int3/assets/img/instrument__hover1.png";
  console.log(document.getElementById("saxophone__detail"));
}
function displayUitleg2() {
  document.getElementById("saxophone__detail").src =
    "/int3/assets/img/instrument__hover2.png";
}
function displayUitleg3() {
  document.getElementById("saxophone__detail").src =
    "/int3/assets/img/instrument__hover3.png";
}
function displayUitleg4() {
  document.getElementById("saxophone__detail").src =
    "/int3/assets/img/instrument__hover4.png";
}
function displayUitleg5() {
  document.getElementById("saxophone__detail").src =
    "/int3/assets/img/instrument__hover5.png";
}

init();
