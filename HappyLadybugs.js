/**
 * https://www.hackerrank.com/challenges/happy-ladybugs/problem
 *
 * @param {number} board - board string
 */

const fillSpace = (board, index) => {
  for (let idx = 0; idx < board.length; idx += 1) {
    // if there's a space
    if (board[idx] === '_') {
      // check adjacent positions
      if (board[idx - 1] === board[index] || board[idx + 1] === board[index]) {
        // move ladybug to empty space
        board[idx] = board[index];
        board[index] = '_';
        return true;
      }
    }
  }
  return false;
};

const checkUnhappyLadybug = (board) => {
  if (board[0] !== '_' && board[0] !== board[1]) {
    return false;
  }

  if (board[board.length - 1] !== '_' && board[board.length - 1] !== board[board.length - 2]) {
    return false;
  }
  for (let idx = 1; idx < board.length - 1; idx += 1) {
    if (board[idx] !== '_' && board[idx] !== board[idx - 1] && board[idx] !== board[idx + 1]) {
      return false;
    }
  }
  return true;
};
const unhappyLadybug = (board) => {
  let filledSpaces = 0;
  if (board[0] !== board[1] && board[1] !== '_') {
    if (fillSpace(board, 0)) {
      filledSpaces += 1;
    }
  }

  if (board[board.length - 1] !== board[board.length - 2] && board[board.length - 2] !== '_') {
    if (fillSpace(board, board.length - 1)) {
      filledSpaces += 1;
    }
  }
  for (let idx = 1; idx < board.length - 1; idx += 1) {
    if (board[idx] !== board[idx - 1] && board[idx] !== board[idx + 1]) {
      // unhappy ladybug
      if (fillSpace(board, idx)) {
        filledSpaces += 1;
      }
    }
  }
  return filledSpaces;
};
// Complete the happyLadybugs function below.
const happyLadybugs = (board) => {
  board = board.split('');

  while (unhappyLadybug(board) > 0) {
    unhappyLadybug(board);
  }
  if (checkUnhappyLadybug(board)) {
    return 'YES';
  }
  return 'NO';
};
happyLadybugs(['Y', 'Y', 'R', '_', 'B', '_', 'B', 'R'].join(''));
// console.log(happyLadybugs(['Y', 'Y', 'R', '_', 'B', '_', 'B', 'R'].join('')));
// console.log(happyLadybugs('RBY_YBR'));
// console.log(happyLadybugs('X_Y__X'));
// console.log(happyLadybugs('__'));
// console.log(happyLadybugs('B_RRBR'));
