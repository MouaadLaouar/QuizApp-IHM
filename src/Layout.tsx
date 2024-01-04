import Context from "./Context";
import NavBar from "./Components/NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
  <>
  <Context>
    <NavBar />
    { children }
  </Context>
  </>
  );
}
