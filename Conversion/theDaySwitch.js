'use strict';

let week;
const weeks = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
const words = [
  'The warm smile,if the quality.',

  "Life is short, so don't wake up with regret every day.",

  'Give yourself a smile and tell yourself that it will be better today.',

  'What ever with the past has gone, the best is always yet to come',

  'Life is sad at times, but it is up to you to make your own life happy.',

  'Around the galaxy, there are no brighter stars than you.',

  'Cross the stars over the moon to meet your better self.',
];
// document.querySelector('.words').textContent = words[0];
// 点击转换后的操作
document.querySelector('.conversion').addEventListener('click', function () {
  // 获取输入的年月日值
  const year = Number(document.querySelector('.year').value);
  const month = Number(document.querySelector('.month').value);
  const day = Number(document.querySelector('.day').value);

  // 判断是星期几
  if (month > 12 || month < 1 || day > 31 || day < 1) {
    document.querySelector('.days').textContent = 'Sssunday!!!';
    document.querySelector('.words').textContent = 'You might be in a dream.';
  } else {
    if (month === 1 || month === 2) {
      month += 12;
      year--;
    }
    week =
      (day +
        1 +
        2 * month +
        (3 * (month + 1)) / 5 +
        year +
        year / 4 -
        year / 100 +
        year / 400) %
      7;

    switch (Math.trunc(week)) {
      case 1:
        document.querySelector('.days').textContent = weeks[0];
        document.querySelector('.words').textContent = words[0];
        break;

      case 2:
        document.querySelector('.days').textContent = weeks[1];
        document.querySelector('.words').textContent = words[1];
        break;

      case 3:
        document.querySelector('.days').textContent = weeks[2];
        document.querySelector('.words').textContent = words[2];
        break;

      case 4:
        document.querySelector('.days').textContent = weeks[3];
        document.querySelector('.words').textContent = words[3];
        break;

      case 5:
        document.querySelector('.days').textContent = weeks[4];
        document.querySelector('.words').textContent = words[4];
        break;

      case 6:
        document.querySelector('.days').textContent = weeks[5];
        document.querySelector('.words').textContent = words[5];
        break;

      case 7:
        document.querySelector('.days').textContent = weeks[6];
        document.querySelector('.words').textContent = words[6];
        break;
    }
  }
});
