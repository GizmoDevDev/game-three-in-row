import {BowlItem} from "../types/BowlItem";
import {createBowl} from "./createBowl";
import {GAME_SETTING} from '../consts'

export const createBoard = (): BowlItem[][] => {
  const board: BowlItem[][] = [];
  for (let i = 0; i < GAME_SETTING.COLUMN_COUNT; i++) {
    const row: BowlItem[] = [];
    for (let j = 0; j < GAME_SETTING.ROW_COUNT; j++) {
      row.push(createBowl());
    }
    board.push(row);
  }

  return board;
}