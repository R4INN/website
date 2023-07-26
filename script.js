function ask() {
    var question = document.getElementById("question").value;
    var answer = document.getElementById("answer");
    if (question == "") {
      answer.innerHTML = "Please enter a question";
    } else if (question.toLowerCase() == "who are you") {
      window.location.href = "about_me.html"; // change this to the name of your about me page
    } else {
      answer.innerHTML = phrases[Math.floor(Math.random() * phrases.length)]; // pick a random phrase from the array
    }
    answer.style.display = "block";
  }
  // An array of 100 different ways of saying "I don't know"
var phrases = [
  "I have no idea",
  "That's a mystery to me",
  "Your guess is as good as mine",
  "I'm clueless",
  "I'm stumped",
  "That's beyond me",
  "I'm baffled",
  "I'm in the dark",
  "That's a tough one",
  "I haven't got a clue",
  "That's out of my league",
  "I'm drawing a blank",
  "That's not my area of expertise",
  "I'm at a loss",
  "That's a head-scratcher",
  "I'm puzzled",
  "I don't have an answer for that",
  "That's a good question",
  "I wish I knew",
  "You've got me there",
  "I'm not sure",
  "I don't know anything about that",
  "That's not something I know much about",
  "I can't help you with that",
  "You're asking the wrong person",
  "I don't have the foggiest idea",
  "That's a hard one to answer",
  "I don't know the first thing about that",
  "That's not my forte",
  "I'm ignorant about that topic",
  "I'm not the best person to ask",
  "I don't know what to tell you",
  "That's a no-brainer...not",
  "I'm flummoxed",
  "I'm perplexed",
  "That's not ringing any bells",
  "I'm not familiar with that",
  "That's a tricky one",
  "I don't have a clue",
  "That's not something I've learned",
  "I'm not aware of that",
  "I don't know how to answer that",
  "That's not something I can answer",
  "I'm not in the know",
  "That's a question for someone else",
  "I don't know anything about that subject",
  "That's not my cup of tea",
  "I'm not qualified to answer that",
  "I don't know jack about that",
  "That's a very interesting question",
  "I don't have the slightest idea",
  "That's not something I deal with",
  "I'm not up to speed on that topic",
  "I don't know squat about that",
  "That's beyond my scope of knowledge",
  "I'm not well-versed in that area",
  "I don't know diddly-squat about that",
  "That's not something I'm good at",
  "I don't have any information on that",
  "That's a question for the ages"
];
