import {BowlItem} from "../types/BowlItem";
import {GAME_SETTING} from "../consts";

export const countScore = (board: BowlItem[][]) => {
  const bowlsCount =  board.reduce<number>((acc, column) =>
    acc + GAME_SETTING.ROW_COUNT - column.length,
    0);
  return bowlsCount * bowlsCount;
}