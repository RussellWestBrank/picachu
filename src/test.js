import string from "./css.js";
const player = {
  n: 1,
  time: 30,
  id: undefined,
  events: {
    "#btnStop": "clear",

    "#btnPlay": "play",

    "#btnSlow": "slow",

    "#btnNormal": "normal",

    "#btnFast": "fast",
  },
  init: () => {
    write.innerText = string.substr(0, player.n);
    output.innerHTML = string.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: () => {
    player.n += 1;
    if (player.n === string.length) {
      window.clearInterval(player.id);
      return;
    }
    write.innerText = string.substr(0, player.n);
    output.innerHTML = string.substr(0, player.n);
    write.scrollTop = write.scrollHeight;
  },
  play: () => {
    return (player.id = setInterval(player.run, player.time));
  },
  clear: () => {
    window.clearInterval(player.id);
  },
  slow: () => {
    player.time = 300;
    player.clear();
    player.play();
  },
  normal: () => {
    player.time = 30;
    player.clear();
    player.play();
  },
  fast: () => {
    player.time = 3;
    player.clear();
    player.play();
  },
};
player.init();
