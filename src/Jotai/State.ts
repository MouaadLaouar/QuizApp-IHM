import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

import code from "../assets/code.svg";

export const USER = atomWithStorage("USER", {
  nom: '',
  prenom: '',
  email: '',
  Id: '',
});

export const EXAMS = atom([{
  Name: 'Algo',
  icon: code,
  Passed: sessionStorage.getItem('ALGO-ANS') ? true : false,
}]);

export const Level = atom(1)

