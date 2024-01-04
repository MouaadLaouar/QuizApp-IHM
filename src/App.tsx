import { useEffect } from "react"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Exams from "./pages/Exams"

// Jotai - Atom
import { useAtom } from "jotai"
// import { atomWithStorage } from "jotai/utils"
import { Level } from "./Jotai"

export default function App() {
    const [LEVEL, setLEVEL] = useAtom(Level);

    useEffect(() => {
      const data = localStorage.getItem('USER')
        if (data) {
          setLEVEL(3);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    switch (LEVEL) {
      case 1:
        return (<Home />);
        break;
      case 2:
        return (<Login />)
        break;
      case 3:
        return (<Dashboard />)
        break;
      case 4:
        return (<Exams />)
        break;
    }
    
}
