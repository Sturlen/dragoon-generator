import { useAtom } from "jotai"
import { FC } from "react"
import { ChromePicker, ColorResult } from "react-color"
import { backgroundColorCurrent, baseColorCurrent } from "~/atoms"

const DragoonColourSelector: FC = () => {
  const [currentColor, setCurrentColor] = useAtom(baseColorCurrent)
  const [backgroundColor, setBackgroundColor] = useAtom(backgroundColorCurrent)

  const handleBaseColorChange = (color: ColorResult) => {
    setCurrentColor(color.hex)
  }

  const handleBackgroundColorChange = (color: ColorResult) => {
    setBackgroundColor(color.hex)
  }

  return (
    <div className="flex flex-wrap">
      <div>
        <ChromePicker
          color={currentColor}
          onChange={handleBaseColorChange}
          className="row-span-5"
        ></ChromePicker>
        <h2>Dragoon</h2>
      </div>
      <div>
        <ChromePicker
          color={backgroundColor}
          onChange={handleBackgroundColorChange}
          className="row-span-5"
        ></ChromePicker>
        <h2>Background</h2>
      </div>
    </div>
  )
}

export default DragoonColourSelector
