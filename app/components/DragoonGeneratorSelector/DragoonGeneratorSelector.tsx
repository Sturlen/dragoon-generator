import { FC } from "react"
import { DEFAULT_COLOR } from "~/atoms"
import { baseBlackLine } from "~/images"
import DragoonItemBase from "../DragoonSelector/DragoonSelectorBase/DragoonSelectorBase"
import DragoonItemPreview from "../DragoonSelector/DragoonSelectorPreview/DragoonSelectorPreview"

type DragoonitemSelectorProps = {
  imagePath?: string
  secondaryImagePath?: string
  partName: string
  label: string
  selected: string
}

const DragoonGeneratorSelector: FC<DragoonitemSelectorProps> = ({
  partName,
  secondaryImagePath,
  imagePath,
  selected,
  label,
}) => {
  const isSelected = selected === partName

  return (
    <div
      className={
        "w-4/5 m-2 border-4 grid grid-cols-1 bg-white" +
        " " +
        (isSelected ? "selector-border-selected" : "selector-border")
      }
    >
      <div className="hidden lg:grid">
        <DragoonItemPreview image={imagePath} styleProps="stacked z-20" />
        {secondaryImagePath ? (
          <DragoonItemPreview
            image={secondaryImagePath}
            styleProps="stacked z-90"
          />
        ) : (
          <></>
        )}
        <DragoonItemPreview
          styleProps="stacked z-10 opacity-50"
          image={baseBlackLine}
        />
        {/*We override the style definitions to disable the preview's outline*/}
        <DragoonItemBase
          className="stacked opacity-30"
          color={DEFAULT_COLOR}
          style={{}}
        />
      </div>
      <h1 className="font-bold text-center capitalize row-span-1">{label}</h1>
    </div>
  )
}

export default DragoonGeneratorSelector
