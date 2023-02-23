import { atom, selector } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltroDeEventos } from "../interfaces/IFiltrosDeEventos";
import { eventosAsync } from "./hooks/seletores";


export const listaDeEventosState = atom<IEvento[]>({
  key: "listaDeEventosState",
  default: eventosAsync
});

export const filtroDeEventos = atom<IFiltroDeEventos>({
  key: "filtroDeEventos",
  default:{}
})

