import { FC } from "react"
import { usePartSelector } from "~/hooks/usePartSelector"

type TabPreviewProps = {
  children?: React.ReactNode
  partName: string
  label: string
}

const PreviewTab: FC<TabPreviewProps> = (props) => {
  const { children, label, partName } = props
  const [selected, setSelected] = usePartSelector()
  const isSelected = selected === partName

  return (
    <div
      onClick={() => setSelected(partName)}
      className={
        "w-full border-4 flex flex-col grid-cols-1 bg-white " +
        " " +
        (isSelected ? "selector-border-selected" : "selector-border")
      }
    >
      <div>{children}</div>
      <h2 className="text-center capitalize font-bold select-none">{label}</h2>
    </div>
  )
}

export default PreviewTab
