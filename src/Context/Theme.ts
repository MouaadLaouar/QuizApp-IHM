import { createTheme } from "@mui/material/styles";

export const Theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "10px",
          color: "white",
        },
      },
      variants: [
        {
          props: { variant: "contained" },
          style: {
            backgroundColor: "#31304D",
            "&:hover": {
              backgroundColor: "#31304D",
              boxShadow: "none",
            },
          },
        },
      ],
    },
  },
});
