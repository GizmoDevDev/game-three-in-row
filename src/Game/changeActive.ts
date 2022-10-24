import {BowlItem} from "../types/BowlItem";

export const changeActive = (board: BowlItem[][], x: number, y: number): BowlItem[][] => {
  const row = board[x];
  const newRow = [
    ...row.slice(0, y),
    {...row[y], isActive: !row[y].isActive},
    ...row.slice(y + 1)
  ]
  return [
    ...board.slice(0, x),
    newRow,
    ...board.slice((x + 1))
  ]
}