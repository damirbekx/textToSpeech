const textarea = document.querySelector(".text_area");
const convertBtn = document.querySelector(".convert_btn");
let isSpeaking = false;

const textToSpeech = () => {
  const text = textarea.value;

  if (text) {
    if (!isSpeaking) {
      responsiveVoice.speak(text, "US English Male", {
        onstart: () => {
          isSpeaking = true;
          convertBtn.innerText = "Pause";
        },
        onend: () => {
          isSpeaking = false;
          convertBtn.innerText = "Convert to Speech";
        },
      });
    } else {
      isSpeaking = false;
      responsiveVoice.pause();
      convertBtn.innerText = "Resume";
    }
  }
};

convertBtn.addEventListener("click", textToSpeech);

responsiveVoice.init();
