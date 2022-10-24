import './App.css'
import {createBoard} from "./utils/createBoard";
import {Board} from "./components/Board/Board";
import {useCallback, useState} from "react";

function App() {
  const [board, setBoard] = useState(createBoard())
  const handleSelect = useCallback((x: number, y: number) => {
    setBoard((prevBoard) => {
      const row = prevBoard[x];
      return [
        ...prevBoard.slice(0, x),
        [...row.slice(0, y), {...row[y], isActive: !row[y].isActive}, ...row.slice(y + 1)],
        ...prevBoard.slice((x + 1))
      ]
    })
  }, []);
  return (
    <div>
      <Board board={board} onSelect={handleSelect} />
    </div>
  )
}

export default App
