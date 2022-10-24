import { BowlItem } from "../types/BowlItem";

export const deleteBowls = (board: BowlItem[][]) => {
  return  board.map((column) => column.filter(({needDestroy}) => !needDestroy))
}