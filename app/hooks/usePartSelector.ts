import { useAtom, atom } from "jotai"

const selectedPart = atom("clothes")

export function usePartSelector() {
  return useAtom(selectedPart)
}
