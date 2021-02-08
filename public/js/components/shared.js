const d = document;

const handleResize = (mediaQuery, contextShare, buttonShare) => {
  if (mediaQuery.matches) {
    contextShare.style.left = `${
      buttonShare.offsetLeft -
      contextShare.offsetWidth / 2 +
      buttonShare.offsetWidth / 2
    }px`;
    contextShare.style.top = `${
      buttonShare.offsetTop -
      (contextShare.offsetHeight + buttonShare.offsetHeight / 2)
    }px`;
  } else {
    contextShare.removeAttribute("style");
  }
};

export const shared = (button, socialContext) => {
  const buttonShare = d.getElementById(button),
    contextShare = d.querySelector(socialContext);
  const mediaQuery = matchMedia("(min-width: 1024px)");
  d.addEventListener("click", (e) => {
    if (e.target.matches(`#${button}`) || e.target.matches(`#${button} *`)) {
      buttonShare.classList.toggle("pressed");
      contextShare.classList.toggle("d-none");
      handleResize(mediaQuery, contextShare, buttonShare);
    }
  });

  window.addEventListener("resize", () => {
    handleResize(mediaQuery, contextShare, buttonShare);
  });
};
