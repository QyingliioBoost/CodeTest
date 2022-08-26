'use strict';

// ѡ���Ԫ��
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');

const activePlayer0 = document.querySelector('.player--0');
const activePlayer1 = document.querySelector('.player--1');

let score, currentScore, activePlayer;

// ��ʼ״̬
const init = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore1.textContent = 0;
  currentScore0.textContent = 0;

  diceEl.classList.add('hidden');
  document.querySelector('.btn--roll').classList.remove('hidden');
  document.querySelector('.btn--hold').classList.remove('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
};
init();

const switchPlayer = function () {
  activePlayer0.classList.toggle('player--active');
  activePlayer1.classList.toggle('player--active');
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. ���������
  const dice = Math.trunc(Math.random() * 6) + 1;
  // 2. ��ʾ������
  diceEl.classList.remove('hidden');
  // FIXME �޸��ļ���ַ
  diceEl.src = `dice-${dice}.png`;
  // 3. ����Ƿ���һ
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // ת�����
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  score[activePlayer] += currentScore; //�����ܷ���
  document.getElementById(`score--${activePlayer}`).textContent =
    score[activePlayer]; // ��ʾ����Ļ

  if (score[activePlayer] >= 100) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    diceEl.classList.add('hidden');

    document.querySelector('.btn--roll').classList.add('hidden');
    document.querySelector('.btn--hold').classList.add('hidden');
  } else {
    switchPlayer();
  }
});

btnNew.addEventListener('click', function () {
  init();
});
