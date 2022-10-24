import {BowlItem} from "../types/BowlItem";
import {GAME_SETTING} from "../consts";
import { createBowl } from "../utils/createBowl";

export const addBowls = (board: BowlItem[][]) => {
  return board.map((column) => {
    if (column.length === GAME_SETTING.ROW_COUNT) return column;
    const newColumn = [...column];
    for (let i = column.length; i < GAME_SETTING.COLUMN_COUNT; i++) {
      newColumn.push(createBowl());
    }
    return newColumn
  })
}