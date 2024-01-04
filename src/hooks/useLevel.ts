import { Level } from "../Jotai"
import { useAtom } from "jotai"

export default function useLevel() {
  const [LEVEL, setLEVEL] = useAtom(Level);

  const NextLevel = () => {
    setLEVEL(LEVEL + 1);
  }

  const ChangeLevel = (lvl: number) => {
    setLEVEL(lvl);
  }

  return { NextLevel, ChangeLevel };
}
