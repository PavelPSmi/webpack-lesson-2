
export const timersFuncAll = () => {
  const btn = document.querySelector(".timer-button");
  const timerPage = document.querySelector(".timer-page");
  const timerReset = document.querySelector(".timer-reset");
  let time = 0;
  let myInterval = -1;


  const timeReset = () => {
    timerPage.textContent = 0
    time = 0
    btn.textContent = "Start";
  }
  timerReset.addEventListener("click", timeReset);

  const fTimer = () => {
    if (myInterval == -1) {
      myInterval = setInterval(() => {
        if (time <= 5) {
          // console.log(time);
          btn.textContent = "Pause";
          timerPage.textContent = time++;
        } else {
          stopTime();
          // console.log("END");
          btn.textContent = "End";
          play()
        }
      }, 1000);
    } else {
      btn.textContent = "Start";
      stopTime();
      myInterval = -1;
    }
  };

  const stopTime = () => {
    clearInterval(myInterval);
  };
  const play = () => {
    timerPage.innerHTML +=
      '<audio src="https://dwweb.ru/__a-data/mp3/windows_xp_start.mp3" autoplay></audio>';
  }
  btn.addEventListener("click", fTimer);
};
