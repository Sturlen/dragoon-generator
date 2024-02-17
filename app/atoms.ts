import { atomWithStorage } from "jotai/utils"

export const DEFAULT_COLOR = "#c084fc"

export const handItemCurrent = atomWithStorage<null | number>("handItem", null)
export const clothCurrent = atomWithStorage<null | number>("cloth", null)
export const eyeCurrent = atomWithStorage("eye", 0)
export const hatCurrent = atomWithStorage<null | number>("hat", null)
export const hornCurrent = atomWithStorage("horn", 0)
export const moustacheCurrent = atomWithStorage<null | number>(
  "moustache",
  null
)
export const frameCurrent = atomWithStorage<null | number>("frame", null)
export const hatBackCurrent = atomWithStorage<null | number>("hatBack", null)

export const baseColorCurrent = atomWithStorage("baseColor", DEFAULT_COLOR)
export const backgroundColorCurrent = atomWithStorage(
  "backgroundColor",
  "#ffffff"
)
