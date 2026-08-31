import { atom, createStore }  from "jotai";

export const nameAtom = atom('Robin');


export const myStore = createStore();
myStore.set(nameAtom, 'Cuivre');