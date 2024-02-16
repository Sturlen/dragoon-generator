import { toPng } from "html-to-image"

export const asImage = async (el) => {
  const dataUrl = await toPng(el)
  const link = document.createElement("a")
  link.download = "dragoon.png"
  link.href = dataUrl
  link.click()
}
