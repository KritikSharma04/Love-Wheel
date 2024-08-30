const febHolidays = [
    "Hey Baby,",
    "My Sweet moto,",
    "My Kaju,",
    "First of all, I love you infinite❤️",
    "You're my everything,",
    "You are my soulmate,",
    "And of course...",
    "My future wiffy🤭",
    "I will always be there for you,",
    "In every situtation of your,",
    "Wheather it's good or bad,",
    "No matter how far we are🥰",
    "You're the prettiest, cutest, sweetest,",
    "Person in my life,",
    "In one word, you're perfect.😍",
    "I'm lucky to have you in my life🥰",
    "I'll always do my best to keep you happy🥺",
    "I never break your trust and your heart❤️",
    "You are the most special person in my life🥰",
    "I don't want to lose you at any cost,",
    "And trust me I dont want anyone else except you,",
    "There's no one else in my life❤️",
    "You're the best sweetheart!!",
    "I will spend my rest of my life only and only with you,",
    "Wow!! Time flies, we've already been together for 4 month,",
    "There's some hardships,",
    "but we overcame most of them,",
    "and it made me realised how important you are in my life❤️",
    "But anyways, my sweet wiffy🤭",
    "You're the love of my life,",
    "One most important thing is that,",
    "I miss you a lot🥺",
    "I Love You So much❤️",
    "Hey moto come as soon as possible,",
    "I'm waiting for your presence in my life,",
    "Take care of myself & i will take care of yourself.....",
    "Bye, Have a good day........"
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${
        idx + 1
      }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  