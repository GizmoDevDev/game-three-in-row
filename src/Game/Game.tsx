import {useCallback, useState} from "react";
import {createBoard} from "../utils/createBoard";
import {Board} from "../components/Board/Board";
import {changeActive} from "./changeActive";
import {swapBowls} from "./swapBowls";

export const Game =() => {
  const [board, setBoard] = useState(createBoard())
  const [currentActive, setCurrentActive] = useState<[number, number]>()

  const handleSelect = useCallback((x: number, y: number) => {
    const [activeX, activeY] = currentActive ?? [-111, -111];
    if (activeX === x && activeY === y) {
      setBoard((prevBoard) => changeActive(prevBoard, x, y))
      setCurrentActive(undefined)
      return
    }
    if ((Math.abs(activeX - x) === 1 && activeY === y)
      || (activeX === x && Math.abs(activeY - y) === 1)) {
      setBoard((prevState) =>
        swapBowls(prevState, [x, y], [activeX, activeY]))
      setCurrentActive(undefined)
      return
    }
     if (currentActive) {
       setBoard((prevBoard) =>
         changeActive(prevBoard, currentActive[0], currentActive[1]))
     }
    setBoard((prevBoard) => changeActive(prevBoard, x, y))
    setCurrentActive([x, y])
  }, [currentActive]);

  return <Board board={board} onSelect={handleSelect} />
}