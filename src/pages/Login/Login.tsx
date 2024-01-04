import { Style } from "./Login.style";
//
import { Button, TextField, Box, Typography, Container } from "@mui/material";

import { saveToLocalStorage } from "../../utils/localStorageUtils";

import useLevel from "../../hooks/useLevel";
import { USER } from "../../Jotai";
import { useSetAtom } from "jotai";

export default function Login() {
  const { NextLevel } = useLevel();
  const setuser = useSetAtom(USER);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const NewData = {
      nom: data.get("nom") as string,
      prenom: data.get("prenom") as string,
      email: data.get("email") as string,
      Id: data.get("Id") as string,
    };
    saveToLocalStorage("USER", NewData);
    setuser(NewData);
    NextLevel();
  };

  return (
    <>
      <Container component="main" maxWidth="xs" sx={Style.container}>
        <Box sx={Style.Box}>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="nom"
              label="Nom"
              name="nom"
              autoComplete="nom"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="prenom"
              label="Prenom"
              name="prenom"
              autoComplete="prenom"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Id"
              label="Id"
              id="Id"
              autoComplete="Id"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
