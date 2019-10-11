const UI = (() => {
  const board = document.getElementById('board');
  const cells = Array.from(board.children);
  const score = document.getElementById('score');
  const form = document.getElementById('form');

  const getCells = () => cells;
  const getForm = () => form;

  const updateFormPlaceholders = (p1, p2) => {
    form[1].placeholder = p1.getName();
    form[2].placeholder = p2.getName();
  };

  const renderCell = (cell, mark) => {
    cell.classList = `cell marked ${mark}`;
  };

  const resetBoard = () => {
    board.classList.add('active');
    cells.forEach((cell) => {
      cell.classList = 'cell unmarked';
    });
  };

  const deactivateBoard = () => {
    board.classList.remove('active');
  };

  const updateScore = (p1, p2) => {
    score.innerHTML = `<span> ${p1.getName()} </span>
                       <span>${p1.getScore()}</span>
                       <span>${p2.getScore()}</span>
                       <span>${p2.getName()} </span>`;
  };

  const colorWinner = (winningStreak) => {
    winningStreak.forEach((i) => {
      cells[i].classList.add('win');
    });
  };

  return {
    getCells,
    getForm,
    updateFormPlaceholders,
    renderCell,
    resetBoard,
    deactivateBoard,
    updateScore,
    colorWinner,
  };
})();

export default UI;