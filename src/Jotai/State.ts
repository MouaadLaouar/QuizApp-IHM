import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const USER = atomWithStorage("USER", {
  nom: '',
  prenom: '',
  email: '',
  Id: '',
});
export const Level = atom(1)

