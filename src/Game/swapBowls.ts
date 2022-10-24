import {BowlItem} from "../types/BowlItem";

export const swapBowls = (
  board: BowlItem[][],
  first: [number, number],
  second: [number, number]) => {
  const newBoard = [...board];
  const firstBowl = board[first[0]][first[1]];

  newBoard[first[0]] = [
    ...newBoard[first[0]].slice(0, first[1]),
    {...newBoard[second[0]][second[1]], isActive: false},
    ...newBoard[first[0]].slice(first[1] + 1)
  ];

  newBoard[second[0]] = [
    ...newBoard[second[0]].slice(0, second[1]),
    {...firstBowl, isActive: false},
    ...newBoard[second[0]].slice(second[1] + 1)
  ];

  return newBoard;
}