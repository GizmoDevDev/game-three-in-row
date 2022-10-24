import {Bowl} from "../Bowl/Bowl";
import {BowlItem} from "../../types/BowlItem";

type Props = {
  board: BowlItem[][];
  onSelect: (x: number, y: number) => void;
}

export const Board = ({board, onSelect}: Props) => {
  return <div className="flex gap-2">
    {board.map((row, x) => {
      return <div className="flex flex-col-reverse gap-2">
          {row.map((bowl, y) => (
            <Bowl
              key={bowl.uuid}
              type={bowl.type}
              onClick={() => onSelect(x, y)}
              isActive={bowl.isActive}
              isHidden={bowl.needDestroy}
            />))}
        </div>
      })
    }
  </div>
}