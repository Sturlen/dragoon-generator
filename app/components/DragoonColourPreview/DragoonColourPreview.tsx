import { FC } from "react"

type DragoonColourPreviewProps = {
  thumbnailPath: string
}

const DragoonColourPreview: FC<DragoonColourPreviewProps> = (props) => {
  const { thumbnailPath } = props

  return <img src={thumbnailPath} className="my-1 hidden lg:block" alt="" />
}

export default DragoonColourPreview
