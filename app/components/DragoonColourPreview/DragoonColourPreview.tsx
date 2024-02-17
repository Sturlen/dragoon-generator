import { FC } from "react"

type DragoonColourPreviewProps = {
  thumbnailPath: string
  selected: string
  partName: string
  subtitle?: string
}

const DragoonColourPreview: FC<DragoonColourPreviewProps> = (props) => {
  const { thumbnailPath, subtitle, selected, partName } = props
  const isSelected = selected === partName

  return (
    <div
      className={
        "w-4/5 m-2 border-4 grid grid-cols-1 bg-white" +
        " " +
        (isSelected ? "selector-border-selected" : "selector-border")
      }
    >
      <img src={thumbnailPath} className="my-1 hidden lg:block" alt="" />
      {subtitle && (
        <h1 className="text-center capitalize font-bold">{subtitle}</h1>
      )}
    </div>
  )
}

export default DragoonColourPreview
