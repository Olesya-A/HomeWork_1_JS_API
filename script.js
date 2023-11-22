"use strict";
/* Отслеживание изменения ориентации экрана:
Напишите код, который отслеживает изменение ориентации экрана устройства (с портретной на ландшафтную и наоборот) и выводит сообщение об этом на веб-странице. */

const text = document.querySelector(".orientation");
screen.orientation.addEventListener("change", () => {
  if (
    screen.orientation.type === "portrait-primary" ||
    screen.orientation.type === "portrait-secondary"
  ) {
    text.textContent =
      "Ваш экран сменил ориентацию с ландшафтной на портретную.";
  } else {
    text.textContent =
      "Ваш экран сменил ориентацию с портретной на ландшафтную.";
  }
});

/* Предупреждение о несохраненных данных:
Создайте веб-форму с текстовым полем. Реализуйте функционал, при котором при попытке закрыть вкладку браузера появляется диалоговое окно с предупреждением о возможности потери введенных, но несохраненных данных. */

const inputEl = document.querySelector(".input");

window.onbeforeunload = function () {
  return true;
};
