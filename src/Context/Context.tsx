import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "jotai";

import { Theme } from "./Theme";

export default function Context({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Provider>
          {children}
        </Provider>
      </ThemeProvider>
    </>
  );
}
