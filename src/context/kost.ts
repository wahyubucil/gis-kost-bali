import { createContext, useContext } from "react";
import { Kost } from "../interfaces/Kost";

export interface KostContextData {
  kost: Kost | null;
  setKost: (kost: Kost) => void;
}

export const KostContext = createContext<KostContextData>({
  kost: null,
  setKost: () => {},
});

export function useKost() {
  return useContext(KostContext);
}
