window.onload = () => {
  const signUpButton = document.querySelector(".sign-up-button");
  const progressBar = document.querySelector("#progress-bar-percentage");
  const subscribeInput = document.querySelector(".subscribe-input");

  signUpButton.onclick = () => {
    progressBar.style.width = "70%";
    progressBar.style.backgroundColor = "#04ab80";

    signUpButton.style.transform = "translateX(100%)";

    setTimeout(() => {
      subscribeInput.style.display = "inline";
    }, 100);

    setTimeout(() => {
      signUpButton.style.opacity = "0";
    }, 1);

    setTimeout(() => {
      subscribeInput.style.transform = "translateX(0%)";
    }, 500);

    setTimeout(() => {
      subscribeInput.style.opacity = "1";
    }, 500);

    signUpButton.ontransitionend = () => {
      signUpButton.style.display = "none";
    };
  };

  subscribeInput.oninput = () => {
    const submitButton = document.querySelector(".submit-button");
    submitButton.style.display = "block"

    setTimeout(() => {
        submitButton.style.opacity = "1"
    }, 200);

  }

};
