import {useCallback, useState} from "react";
import {createBoard} from "../utils/createBoard";
import {Board} from "../components/Board/Board";
import {changeActive} from "./changeActive";
import {swapBowls} from "./swapBowls";
import {markAsNeedDestroy} from "./markAsNeedDestroy";
import {deleteBowls} from "./deleteBowls";
import {addBowls} from "./addBowls";
import {countScore} from "./countScore";

export const Game =() => {
  const [board, setBoard] = useState(createBoard())
  const [currentActive, setCurrentActive] = useState<[number, number]>()
  const [score, setScore] = useState(0);

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
      setTimeout(() => setBoard((prevState) => {
        const tempBoard = markAsNeedDestroy(prevState, x, y);
        return markAsNeedDestroy(tempBoard, activeX, activeY)
      }),
        1_000);

      setTimeout(
        () => setBoard((prevState) => deleteBowls(prevState)),
        2_000)
      setTimeout(
        () => setBoard((prevState) => {
          setScore((prevScore) => prevScore + countScore(prevState))
          return addBowls(prevState)
        }),
        3_000
      );
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

  return <>
    <h1 className="text-3xl font-bold p-4">Score: {score}</h1>
    <Board board={board} onSelect={handleSelect} />
    </>
}