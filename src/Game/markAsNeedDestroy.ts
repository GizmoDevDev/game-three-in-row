import {BowlItem} from "../types/BowlItem";
import {GAME_SETTING} from "../consts";

export const markAsNeedDestroy = (board: BowlItem[][], x: number, y: number) => {
  const currentType = board[x][y].type;
  let newBoard = board
  let minX = x;
  let maxX = x + 1;

  for (;minX > 0; minX--) {
    if (board[minX - 1][y].type !== currentType) break;
  }
  for(; maxX < GAME_SETTING.ROW_COUNT; maxX++) {
    if (board[maxX]?.[y].type !== currentType) break;
  }

  if (maxX - minX >= 3) {
    const newColumns = newBoard
      .filter((column, index) => index >= minX && index < maxX)
      .map((column) => {
        return [
          ...column.slice(0, y),
          {...column[y], needDestroy: true}
        ]
      })
    newBoard = [
      ...newBoard.slice(0, minX),
      ...newColumns,
      ...newBoard.slice(maxX)
    ]
  }


  let minY = y;
  let maxY = y + 1;

  for (;minY > 0; minY--) {
    if (board[x][minY - 1].type !== currentType) break;
  }
  for(; maxY < board[x].length; maxY++) {
    if (board[x][maxY].type !== currentType) break;
  }

  if (maxY - minY >= 3) {
    const newBowls: BowlItem[] = newBoard[x]
      .filter((bowl, index) => index >= minY && index < maxY)
      .map((bowl) => ({...bowl, needDestroy: true}))
    const newColumn: BowlItem[] = [
      ...(newBoard[x].slice(0, minY)),
      ...newBowls,
      ...(newBoard[x].slice((maxY)))
    ]
    newBoard = [
      ...newBoard.slice(0, x),
      newColumn,
      ...newBoard.slice(x + 1)
    ]
  }
  return newBoard
}