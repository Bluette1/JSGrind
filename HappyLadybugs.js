/**
 * https://www.hackerrank.com/challenges/happy-ladybugs/problem
 *
 * @param {number} board - board string
 */
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

const space = (boardMap) => {
  if (boardMap._ === undefined) {
    return false;
  }
  return true;
};

const boardMap = (board) => {
  const map = {};
  for (let idx = 0; idx < board.length; idx += 1) {
    if (map[board[idx]] === undefined) {
      map[board[idx]] = 1;
    } else {
      map[board[idx]] += 1;
    }
  }
  return map;
};

const isMultiples = (boardMap) => {
  const keys = Object.keys(boardMap);
  for (let idx = 0; idx < keys.length; idx += 1) {
    if (keys[idx] !== '_' && boardMap[keys[idx]] < 2) {
      return false;
    }
  }
  return true;
};

const happyLadybugs = (board) => {
  board = board.split('');
  const boardDict = boardMap(board);
  if (checkUnhappyLadybug(board)) {
    return 'YES';
  }
  if (space(boardDict) && isMultiples(boardDict)) {
    return 'YES';
  }
  return 'NO';
};
happyLadybugs('B_RRBR');
