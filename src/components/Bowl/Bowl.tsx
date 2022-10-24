import clsx from "clsx";

type Props = {
  type: number;
}

export const Bowl = ({type}: Props) => {
  return <div className={clsx('bowl', {
    'red-bowl': type === 0,
    'green-bowl': type === 1,
    'blue-bowl': type === 2,
    'yellow-bowl': type === 3,
    'purple-bowl': type === 4,
  })}></div>
}