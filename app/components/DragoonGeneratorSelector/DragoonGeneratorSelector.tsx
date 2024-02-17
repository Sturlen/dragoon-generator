import { FC } from "react"
import { DEFAULT_COLOR } from "~/atoms"
import { baseBlackLine } from "~/images"
import DragoonItemBase from "../DragoonSelector/DragoonSelectorBase/DragoonSelectorBase"
import DragoonItemPreview from "../DragoonSelector/DragoonSelectorPreview/DragoonSelectorPreview"

type DragoonitemSelectorProps = {
  imagePath: string
  secondaryImagePath?: string
}

const DragoonGeneratorSelector: FC<DragoonitemSelectorProps> = ({
  secondaryImagePath,
  imagePath,
}) => {
  return (
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
  )
}

export default DragoonGeneratorSelector
