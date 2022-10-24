import {BowlItem} from "../types/BowlItem";
import {createBowl} from "./createBowl";

export const createBoard = (): BowlItem[][] => {
  const board: BowlItem[][] = [];
  for (let i = 0; i < 10; i++) {
    const row: BowlItem[] = [];
    for (let j = 0; j < 10; j++) {
      row.push(createBowl());
    }
    board.push(row);
  }

  return board;
}