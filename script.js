let group,
  wordsPCA,
  answersPCA,
  audiosAVA,
  choicesAVA,
  answersAVA,
  randomArray4,
  symbolsSJ,
  choicesSJ,
  randomArray5;

if (document.cookie != "" && document.cookie != "z") {
  for(let i = 0; i < 20; i++) {
    alert("You have already taken the test and your test ID was " + document.cookie + ". Please send it to s122585@ltisdschools.net if you haven't done so already.");
  }
}

function assignVariables() {
  let g = prompt(
    "Enter A if you are in the alphabet group and S if you are in the syllabary group",
  );
  group = 2;
  if (g == "A" || g == "a") {
    group = 1;
    document.getElementById("instructions").textContent =
      "You have selected the alphabet group. Reload the page if that is incorrect. The first test is phoneme counting. You will see an English word and you will have to type the number of phonemes in the word. You can use the text box or just type it normally. You will be evaluated on accuracy and speed. The test will begin immediately when you click the button below.";
    wordsPCA = [
      "APCA_1.png",
      "APCA_2.png",
      "APCA_3.png",
      "APCA_4.png",
      "APCA_5.png",
      "APCA_6.png",
      "APCA_7.png",
      "APCA_8.png",
      "APCA_9.png",
      "APCA_10.png",
      "APCA_11.png",
      "APCA_12.png",
      "APCA_13.png",
      "APCA_14.png",
      "APCA_15.png",
    ];
    answersPCA = [7, 4, 6, 8, 2, 5, 6, 8, 4, 7, 4, 6, 8, 5, 3];
    audiosAVA = [
      "AVA1.mp3",
      "AVA2.mp3",
      "AVA3.mp3",
      "AVA4.mp3",
      "AVA5.mp3",
      "AVA6.mp3",
      "AVA7.mp3",
      "AVA8.mp3",
      "AVA9.mp3",
      "AVA10.mp3",
    ];
    choicesAVA = [
      ["AAVA_1_1.png", "AAVA_1_2.png", "AAVA_1_3.png", "AAVA_1_4.png"],
      ["AAVA_2_1.png", "AAVA_2_2.png", "AAVA_2_3.png", "AAVA_2_4.png"],
      ["AAVA_3_1.png", "AAVA_3_2.png", "AAVA_3_3.png", "AAVA_3_4.png"],
      ["AAVA_4_1.png", "AAVA_4_2.png", "AAVA_4_3.png", "AAVA_4_4.png"],
      ["AAVA_5_1.png", "AAVA_5_2.png", "AAVA_5_3.png", "AAVA_5_4.png"],
      ["AAVA_6_1.png", "AAVA_6_2.png", "AAVA_6_3.png", "AAVA_6_4.png"],
      ["AAVA_7_1.png", "AAVA_7_2.png", "AAVA_7_3.png", "AAVA_7_4.png"],
      ["AAVA_8_1.png", "AAVA_8_2.png", "AAVA_8_3.png", "AAVA_8_4.png"],
      ["AAVA_9_1.png", "AAVA_9_2.png", "AAVA_9_3.png", "AAVA_9_4.png"],
      ["AAVA_10_1.png", "AAVA_10_2.png", "AAVA_10_3.png", "AAVA_10_4.png"],
    ];
    randomArray4 = shuffle([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21,
    ]);
    symbolsSJ = [
      "fi.png",
      "ja.png",
      "fu.png",
      "je.png",
      "ju.png",
      "pi.png",
      "ki.png",
      "wo.png",
      "mi.png",
      "ka.png",
      "ku.png",
      "to.png",
      "wi.png",
      "ji.png",
      "ng.png",
      "ta.png",
      "po.png",
      "mu.png",
      "mo.png",
      "fo.png",
      "te.png",
      "sa.png",
    ];
    choicesSJ = [
      "/a/",
      "/e/",
      "/i/",
      "/o/",
      "/u/",
      "/p/",
      "/b/",
      "/t/",
      "/d/",
      "/k/",
      "/g/",
      "/f/",
      "/v/",
      "/s/",
      "/z/",
      "/m/",
      "/n/",
      "/ŋ/",
      "/w/",
      "/l/",
      "/j/",
      "/h/",
    ];
  } else {
    document.getElementById("instructions").textContent =
      "You have selected the syllabary group. Reload the page if that is incorrect. The first test is phoneme counting. You will see an English word and you will have to type the number of phonemes in the word. You can use the text box or just type it normally. You will be evaluated on accuracy and speed. The test will begin immediately when you click the button below.";
    wordsPCA = [
      "SPC1.png",
      "SPC2.png",
      "SPC3.png",
      "SPC4.png",
      "SPC5.png",
      "SPC6.png",
      "SPC7.png",
      "SPC8.png",
      "SPC9.png",
      "SPC10.png",
      "SPC11.png",
      "SPC12.png",
      "SPC13.png",
      "SPC14.png",
      "SPC15.png",
    ];
    answersPCA = [7, 4, 6, 8, 2, 5, 6, 8, 4, 7, 4, 6, 8, 5, 3];
    audiosAVA = [
      "AVA1.mp3",
      "AVA2.mp3",
      "AVA3.mp3",
      "AVA4.mp3",
      "AVA5.mp3",
      "AVA6.mp3",
      "AVA7.mp3",
      "AVA8.mp3",
      "AVA9.mp3",
      "AVA10.mp3",
    ];
    choicesAVA = [
      ["SAVA1_1.png", "SAVA1_2.png", "SAVA1_3.png", "SAVA1_4.png"],
      ["SAVA2_1.png", "SAVA2_2.png", "SAVA2_3.png", "SAVA2_4.png"],
      ["SAVA3_1.png", "SAVA3_2.png", "SAVA3_3.png", "SAVA3_4.png"],
      ["SAVA4_1.png", "SAVA4_2.png", "SAVA4_3.png", "SAVA4_4.png"],
      ["SAVA5_1.png", "SAVA5_2.png", "SAVA5_3.png", "SAVA5_4.png"],
      ["SAVA6_1.png", "SAVA6_2.png", "SAVA6_3.png", "SAVA6_4.png"],
      ["SAVA7_1.png", "SAVA7_2.png", "SAVA7_3.png", "SAVA7_4.png"],
      ["SAVA8_1.png", "SAVA8_2.png", "SAVA8_3.png", "SAVA8_4.png"],
      ["SAVA9_1.png", "SAVA9_2.png", "SAVA9_3.png", "SAVA9_4.png"],
      ["SAVA10_1.png", "SAVA10_2.png", "SAVA10_3.png", "SAVA10_4.png"],
    ];
    randomArray4 = shuffle([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
      39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
      57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
      75, 76, 77, 78, 79, 80, 81,
    ]);
    symbolsSJ = [
      "fa.png",
      "fe.png",
      "fi.png",
      "fo.png",
      "fu.png",
      "ja.png",
      "je.png",
      "ji.png",
      "jo.png",
      "ju.png",
      "ka.png",
      "ke.png",
      "ki.png",
      "ko.png",
      "ku.png",
      "ma.png",
      "me.png",
      "mi.png",
      "mo.png",
      "mu.png",
      "pa.png",
      "pe.png",
      "pi.png",
      "po.png",
      "pu.png",
      "sa.png",
      "se.png",
      "si.png",
      "so.png",
      "su.png",
      "ta.png",
      "te.png",
      "ti.png",
      "to.png",
      "tu.png",
      "wa.png",
      "we.png",
      "wi.png",
      "wo.png",
      "wu.png",
      "n.png",
      "ng.png",
      "va.png",
      "ve.png",
      "vi.png",
      "vo.png",
      "vu.png",
      "ha.png",
      "he.png",
      "hi.png",
      "ho.png",
      "hu.png",
      "ga.png",
      "ge.png",
      "gi.png",
      "go.png",
      "gu.png",
      "na.png",
      "ne.png",
      "ni.png",
      "no.png",
      "nu.png",
      "ba.png",
      "be.png",
      "bi.png",
      "bo.png",
      "bu.png",
      "za.png",
      "ze.png",
      "zi.png",
      "zo.png",
      "zu.png",
      "da.png",
      "de.png",
      "di.png",
      "do.png",
      "du.png",
      "la.png",
      "le.png",
      "li.png",
      "lo.png",
      "lu.png",
    ];
    choicesSJ = [
      "/fa/",
      "/fe/",
      "/fi/",
      "/fo/",
      "/fu/",
      "/ja/",
      "/je/",
      "/ji/",
      "/jo/",
      "/ju/",
      "/ka/",
      "/ke/",
      "/ki/",
      "/ko/",
      "/ku/",
      "/ma/",
      "/me/",
      "/mi/",
      "/mo/",
      "/mu/",
      "/pa/",
      "/pe/",
      "/pi/",
      "/po/",
      "/pu/",
      "/sa/",
      "/se/",
      "/si/",
      "/so/",
      "/su/",
      "/ta/",
      "/te/",
      "/ti/",
      "/to/",
      "/tu/",
      "/wa/",
      "/we/",
      "/wi/",
      "/wo/",
      "/wu/",
      "/n/",
      "/ŋ/",
      "/va/",
      "/ve/",
      "/vi/",
      "/vo/",
      "/vu/",
      "/ha/",
      "/he/",
      "/hi/",
      "/ho/",
      "/hu/",
      "/ga/",
      "/ge/",
      "/gi/",
      "/go/",
      "/gu/",
      "/na/",
      "/ne/",
      "/ni/",
      "/no/",
      "/nu/",
      "/ba/",
      "/be/",
      "/bi/",
      "/bo/",
      "/bu/",
      "/za/",
      "/ze/",
      "/zi/",
      "/zo/",
      "/zu/",
      "/da/",
      "/de/",
      "/di/",
      "/do/",
      "/du/",
      "/la/",
      "/le/",
      "/li/",
      "/lo/",
      "/lu/",
    ];
  }
}
let start = new Date();
let end = new Date();
let scorePCE = 0;
let scorePCA = 0;
let delaysPC = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let wordsPCE = [
  "pledge",
  "singer",
  "soft",
  "thoughts",
  "wisest",
  "crash",
  "concede",
  "still",
  "bulletin",
  "repeat",
  "steam",
  "acute",
  "headline",
  "thumb",
  "hang",
];
let answersPCE = [5, 5, 4, 4, 7, 4, 6, 4, 7, 5, 4, 5, 7, 3, 3];
let scoreAVE = 0;
let scoreAVA = 0;
let delaysAV = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let audiosAVE = [
  "AVE1.m4a",
  "AVE2.m4a",
  "AVE3.m4a",
  "AVE4.m4a",
  "AVE5.m4a",
  "AVE6.m4a",
  "AVE7.m4a",
  "AVE8.m4a",
  "AVE9.m4a",
  "AVE10.m4a",
];
let choicesAVE = [
  ["bench", "wench", "bunch", "pinch"],
  ["change", "chance", "chains", "canes"],
  ["adviser", "advice", "divider", "avarice"],
  ["bite", "bide", "pike", "light"],
  ["fall", "full", "feel", "vail"],
  ["heat", "heed", "heal", "hate"],
  ["prize", "price", "praise", "braise"],
  ["spaced", "spiced", "slate", "sized"],
  ["narrow", "marrow", "morrow", "nano"],
  ["marble", "marvel", "normal", "navel"],
];
let scoreSJ = 0;
let delaysSJ = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let englishErrors = 0;
let randomArray = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
let randomArray2 = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
let randomArray3 = shuffle([0, 1, 2, 3]);
let question_number = 0;
let current_test = 0;
let sound;

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  let tempArray = array.slice(0);
  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [tempArray[currentIndex], tempArray[randomIndex]] = [
      tempArray[randomIndex],
      tempArray[currentIndex],
    ];
  }
  return tempArray;
}
function average(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) sum += array[i];
  return Math.floor((sum * 1000) / array.length);
}
function startTimer() {
  start = new Date();
}
function endTimer() {
  end = new Date();
  return end - start;
}
function replayAudio() {
  sound.play();
}

function initPC() {
  assignVariables();
  document.getElementById("initiate").style.display = "none";
  document.getElementById("start").style.display = "block";
}
function startPCE() {
  document.getElementById("instructions").style.display = "none";
  document.getElementById("start").style.display = "none";
  document.getElementById("word").style.display = "block";
  document.addEventListener("keypress", inputPCE);
  document.getElementById("number_input").style.display = "block";
  nextPCE();
}
function startPCA() {
  randomArray = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
  document.getElementById("instructions").style.display = "none";
  document.getElementById("start").style.display = "none";
  document.getElementById("artificial_word").style.display = "block";
  document.addEventListener("keypress", inputPCA);
  document.getElementById("number_input").style.display = "block";
  nextPCA();
}
function nextPCE() {
  question_number++;
  if (question_number > 5) {
    document.removeEventListener("keypress", inputPCE);
    endPCE();
    return;
  }
  document.getElementById("word").style.display = "none";
  document.getElementById("number_input").value = "";
  document.getElementById("number_input").style.display = "none";
  setTimeout(function () {
    document.getElementById("word").style.display = "block";
    document.getElementById("number_input").style.display = "block";
    startTimer();
  }, 250);
  document.getElementById("word").textContent =
    wordsPCE[randomArray[question_number - 1]];
}
function nextPCA() {
  question_number++;
  if (question_number > 5) {
    document.removeEventListener("keypress", inputPCA);
    endPCA();
    return;
  }
  document.getElementById("artificial_word").style.display = "none";
  document.getElementById("number_input").value = "";
  document.getElementById("number_input").style.display = "none";
  setTimeout(function () {
    document.getElementById("artificial_word").style.display = "block";
    document.getElementById("number_input").style.display = "block";
    startTimer();
  }, 250);
  document.getElementById("artificial_word").src =
    "Resources/" + wordsPCA[randomArray[question_number - 1]];
}
function inputPCE(event) {
  if (event.keyCode >= 48 && event.keyCode <= 57) {
    if (event.keyCode - 48 == answersPCE[randomArray[question_number - 1]])
      scorePCE++;
    delaysPC[question_number - 1] = endTimer();
    nextPCE();
  }
}
function inputPCA(event) {
  if (event.keyCode >= 48 && event.keyCode <= 57) {
    if (event.keyCode - 48 == answersPCA[randomArray[question_number - 1]])
      scorePCA++;
    else if (
      randomArray[question_number - 1] == 0 ||
      randomArray[question_number - 1] == 13
    )
      englishErrors++;
    delaysPC[question_number + 4] = endTimer();
    nextPCA();
  }
}
function endPCE() {
  question_number = 0;
  document.getElementById("word").style.display = "none";
  document.getElementById("number_input").style.display = "none";
  document.getElementById("start").style.display = "block";
  document.getElementById("start").onclick = startPCA;
  document.getElementById("instructions").style.display = "block";
  document.getElementById("instructions").textContent =
    "Now for the artificial script phoneme counting. The test will be the same as before, but now you will be presented with words written in the artificial script.";
}
function endPCA() {
  question_number = 0;
  document.getElementById("artificial_word").style.display = "none";
  document.getElementById("number_input").style.display = "none";
  document.getElementById("start").style.display = "block";
  document.getElementById("start").onclick = startAVE;
  document.getElementById("instructions").style.display = "block";
  document.getElementById("instructions").textContent =
    "Now for the auditory-visual matching. You will hear an English word and have to select what you heard among 4 answer choices. To replay the audio, click the play button. You can also select the answer choices by typing 1, 2, 3, or 4. The test will begin immediately after you click the button below.";
}

function startAVE() {
  document.getElementById("instructions").style.display = "none";
  document.getElementById("start").style.display = "none";
  document.getElementById("replay_audio").style.display = "block";
  document.getElementById("answer_container").style.display = "block";
  document.addEventListener("keypress", keyAVE);
  nextAVE();
}
function startAVA() {
  sound.playbackRate = 0.8;
  randomArray2 = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  document.getElementById("instructions").style.display = "none";
  document.getElementById("start").style.display = "none";
  document.getElementById("replay_audio").style.display = "block";
  document.getElementById("answer_container").style.display = "block";
  document.getElementById("word1").style.display = "none";
  document.getElementById("word2").style.display = "none";
  document.getElementById("word3").style.display = "none";
  document.getElementById("word4").style.display = "none";
  document.getElementById("img1").style.display = "block";
  document.getElementById("img2").style.display = "block";
  document.getElementById("img3").style.display = "block";
  document.getElementById("img4").style.display = "block";
  document.getElementById("answer1").onclick = function () {
    inputAVA(0);
  };
  document.getElementById("answer2").onclick = function () {
    inputAVA(1);
  };
  document.getElementById("answer3").onclick = function () {
    inputAVA(2);
  };
  document.getElementById("answer4").onclick = function () {
    inputAVA(3);
  };
  document.addEventListener("keypress", keyAVA);
  nextAVA();
}
function nextAVE() {
  question_number++;
  if (question_number > 5) {
    document.removeEventListener("keypress", keyAVE);
    endAVE();
    return;
  }
  sound = new Audio("Resources/" + audiosAVE[randomArray2[question_number - 1]]);
  randomArray3 = shuffle([0, 1, 2, 3]);
  document.getElementById("answer_container").style.display = "none";
  setTimeout(function () {
    document.getElementById("answer_container").style.display = "block";
    sound.play();
    startTimer();
  }, 250);
  document.getElementById("word1").textContent =
    choicesAVE[randomArray2[question_number - 1]][randomArray3[0]];
  document.getElementById("word2").textContent =
    choicesAVE[randomArray2[question_number - 1]][randomArray3[1]];
  document.getElementById("word3").textContent =
    choicesAVE[randomArray2[question_number - 1]][randomArray3[2]];
  document.getElementById("word4").textContent =
    choicesAVE[randomArray2[question_number - 1]][randomArray3[3]];
}
function nextAVA() {
  question_number++;
  if (question_number > 5) {
    document.removeEventListener("keypress", keyAVA);
    endAVA();
    return;
  }
  sound = new Audio("Resources/" + audiosAVA[randomArray2[question_number - 1]]);
  randomArray3 = shuffle([0, 1, 2, 3]);
  document.getElementById("answer_container").style.display = "none";
  setTimeout(function () {
    document.getElementById("answer_container").style.display = "block";
    sound.play();
    startTimer();
  }, 250);
  document.getElementById("img1").src =
    "Resources/" + choicesAVA[randomArray2[question_number - 1]][randomArray3[0]];
  document.getElementById("img2").src =
    "Resources/" + choicesAVA[randomArray2[question_number - 1]][randomArray3[1]];
  document.getElementById("img3").src =
    "Resources/" + choicesAVA[randomArray2[question_number - 1]][randomArray3[2]];
  document.getElementById("img4").src =
    "Resources/" + choicesAVA[randomArray2[question_number - 1]][randomArray3[3]];
}
function keyAVE(event) {
  if (event.which > 48 && event.which < 53) inputAVE(event.which - 48);
}
function inputAVE(event) {
  if (randomArray3[event] == 0) scoreAVE++;
  delaysAV[question_number - 1] = endTimer();
  nextAVE();
}
function keyAVA(event) {
  if (event.which > 48 && event.which < 53) inputAVA(event.which - 48);
}
function inputAVA(event) {
  if (randomArray3[event] == 0) scoreAVA++;
  else if (
    randomArray2[question_number - 1] == 0 ||
    randomArray2[question_number - 1] == 2 ||
    randomArray2[question_number - 1] == 4 ||
    randomArray2[question_number - 1] == 8
  )
    englishErrors++;
  delaysAV[question_number + 4] = endTimer();
  nextAVA();
}
function endAVE() {
  question_number = 0;
  document.getElementById("instructions").style.display = "block";
  document.getElementById("start").style.display = "block";
  document.getElementById("replay_audio").style.display = "none";
  document.getElementById("answer_container").style.display = "none";
  document.getElementById("start").onclick = startAVA;
  document.getElementById("instructions").textContent =
    "Now for the artificial auditory-visual matching. The test will be the same as before, but now answers will appear in the artificial script. The test will begin immediately after you click the button below.";
}
function endAVA() {
  sound.playbackRate = 1.0;
  question_number = 0;
  document.getElementById("replay_audio").style.display = "none";
  document.getElementById("answer_container").style.display = "none";
  document.getElementById("start").style.display = "block";
  document.getElementById("start").onclick = startSJ;
  document.getElementById("instructions").style.display = "block";
  document.getElementById("instructions").textContent =
    "Now for the similarity judgment. You will see a symbol of the artificial script and must select the matching phoneme among 4 answer choices. You can also select the answer choices by typing 1, 2, 3, or 4. The test will begin immediately after you click the button below.";
}

function startSJ() {
  document.getElementById("instructions").style.display = "none";
  document.getElementById("start").style.display = "none";
  document.getElementById("artificial_word").style.display = "block";
  document.getElementById("artificial_word").style.marginTop = "2vmax";
  document.getElementById("answer_container").style.display = "block";
  document.getElementById("word1").style.display = "block";
  document.getElementById("word2").style.display = "block";
  document.getElementById("word3").style.display = "block";
  document.getElementById("word4").style.display = "block";
  document.getElementById("img1").style.display = "none";
  document.getElementById("img2").style.display = "none";
  document.getElementById("img3").style.display = "none";
  document.getElementById("img4").style.display = "none";
  document.getElementById("answer1").onclick = function () {
    inputSJ(0);
  };
  document.getElementById("answer2").onclick = function () {
    inputSJ(1);
  };
  document.getElementById("answer3").onclick = function () {
    inputSJ(2);
  };
  document.getElementById("answer4").onclick = function () {
    inputSJ(3);
  };
  document.addEventListener("keypress", keySJ);
  nextSJ();
}
function nextSJ() {
  question_number++;
  if (question_number > 20) {
    document.removeEventListener("keypress", keySJ);
    endSJ();
    return;
  }
  randomArray3 = shuffle([0, 1, 2, 3]);
  randomArray5 = shuffle(randomArray4);
  while (randomArray5.slice(0, 3).includes(randomArray4[question_number - 1]))
    randomArray5 = shuffle(randomArray4);
  randomArray5[3] = randomArray4[question_number - 1];
  document.getElementById("artificial_word").style.display = "none";
  document.getElementById("answer_container").style.display = "none";
  setTimeout(function () {
    document.getElementById("artificial_word").style.display = "block";
    document.getElementById("answer_container").style.display = "block";
    startTimer();
  }, 250);
  document.getElementById("artificial_word").src =
    "Resources/" + symbolsSJ[randomArray4[question_number - 1]];
  document.getElementById("word1").textContent =
    choicesSJ[randomArray5[randomArray3[0]]];
  document.getElementById("word2").textContent =
    choicesSJ[randomArray5[randomArray3[1]]];
  document.getElementById("word3").textContent =
    choicesSJ[randomArray5[randomArray3[2]]];
  document.getElementById("word4").textContent =
    choicesSJ[randomArray5[randomArray3[3]]];
}
function keySJ(event) {
  if (event.which > 48 && event.which < 53) inputSJ(event.which - 48);
}
function inputSJ(event) {
  if (randomArray3[event] == 3) scoreSJ++;
  delaysSJ[question_number - 1] = endTimer();
  nextSJ();
}
function endSJ() {
  document.getElementById("instructions").style.display = "block";
  document.getElementById("artificial_word").style.display = "none";
  document.getElementById("answer_container").style.display = "none";
  document.getElementById("instructions").textContent =
    "You are done with the test! Below is your unique test ID. Please send it to s122585@ltisdschools.net. If you have not done so already, please complete these questions: https://forms.gle/J5ivEM4bDNRQsA7E9. Thank you!";
  document.getElementById("test_ID").style.display = "block";
  let avgDelays = [
    average(delaysPC.slice(0, 5)),
    average(delaysPC.slice(5, 10)),
    average(delaysAV.slice(0, 5)),
    average(delaysAV.slice(5, 10)),
    average(delaysSJ),
  ];
  let testID =
    scorePCE.toString(16) +
    "h" +
    scorePCA.toString(16) +
    "j" +
    scoreAVE.toString(16) +
    "l" +
    scoreAVA.toString(16) +
    "n" +
    scoreSJ.toString(16) +
    "p" +
    avgDelays[0].toString(16) +
    "r" +
    avgDelays[1].toString(16) +
    "t" +
    avgDelays[2].toString(16) +
    "v" +
    avgDelays[3].toString(16) +
    "x" +
    avgDelays[4].toString(16) +
    "z" +
    englishErrors.toString(16);
  document.getElementById("test_ID").textContent = "Test ID: " + testID;
  document.cookie = testID;
}
