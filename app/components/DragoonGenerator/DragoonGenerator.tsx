import {
  backgroundColorCurrent,
  baseColorCurrent,
  clothCurrent,
  DEFAULT_COLOR,
  eyeCurrent,
  frameCurrent,
  handItemCurrent,
  hatCurrent,
  hornCurrent,
  moustacheCurrent,
  hatBackCurrent,
} from "~/atoms"
import { useAtom, SetStateAction } from "jotai"
import { FC, useRef, useState } from "react"
import DragoonGeneratorSelector from "~/components/DragoonGeneratorSelector/DragoonGeneratorSelector"
import DragoonPreview from "~/components/DragoonPreview/DragoonPreview"
import { Form, Link, useTransition } from "@remix-run/react"
import DragoonPartsPreview from "../DragoonPartsPreview/DragoonPartsPreview"
import DragoonColourPreview from "../DragoonColourPreview/DragoonColourPreview"
import DragoonColourSelector from "../DragoonColourSelector/DragoonColourSelector"
import { framesButton, newColorsButton } from "~/images"

import { nameBanner, yourMessage } from "~/images/dragoonGenerator/form"
import DragoonConfirmationModal from "../DragoonConfirmationModal/DragoonConfirmationModal"
import DragoonGeneratorCreditsModal from "../DragoonGeneratorCreditsModal/DragoonGeneratorCreditsModal"
import { asImage } from "~/utils/download"

type DragoonGeneratorItem = {
  item: string
  new: boolean
}

type DragoonGeneratorProps = {
  clothes: DragoonGeneratorItem[]
  eyes: DragoonGeneratorItem[]
  hats: DragoonGeneratorItem[]
  handItems: DragoonGeneratorItem[]
  horns: DragoonGeneratorItem[]
  moustaches: DragoonGeneratorItem[]
  frames: DragoonGeneratorItem[]
  hatsBack: DragoonGeneratorItem[]
}

const DragoonGenerator: FC<DragoonGeneratorProps> = (props) => {
  const [clothIndex, setCloth] = useAtom(clothCurrent)
  const [eyeIndex, setEye] = useAtom(eyeCurrent)
  const [hatIndex, setHat] = useAtom(hatCurrent)
  const [handItemIndex, setHandItem] = useAtom(handItemCurrent)
  const [hornIndex, setHorn] = useAtom(hornCurrent)
  const [moustacheIndex, setMoustache] = useAtom(moustacheCurrent)
  const [frameIndex, setFrame] = useAtom(frameCurrent)
  const [hatBackIndex, setHatBack] = useAtom(hatBackCurrent)

  const [currentColor, setCurrentColor] = useAtom(baseColorCurrent)
  const [backgroundColor, setBackgroundColor] = useAtom(backgroundColorCurrent)

  const [selected, setSelected] = useState("clothes")
  const [isOpen, setIsOpen] = useState(false)
  const [isCreditsOpen, setIsCreditsOpen] = useState(false)
  const [author, setAuthor] = useState("")
  const [message, setMessage] = useState("")

  const {
    clothes,
    eyes,
    hats,
    handItems,
    horns,
    moustaches,
    frames,
    hatsBack,
  } = props
  const cloth = clothes[clothIndex]
  const eye = eyes[eyeIndex]
  const hat = hats[hatIndex]
  const handItem = handItems[handItemIndex]
  const horn = horns[hornIndex]
  const moustache = moustaches[moustacheIndex]
  const frame = frames[frameIndex]
  const hatBack = hatsBack[hatBackIndex]

  const handleReset = () => {
    setCloth(null)
    setEye(0)
    setHat(null)
    setHatBack(null)
    setHandItem(null)
    setHorn(0)
    setMoustache(null)
    setFrame(null)
    setCurrentColor(DEFAULT_COLOR)
    setBackgroundColor("#ffffff")
  }

  const specialSetHat = (idx: SetStateAction<null>) => {
    setHat(idx)
    setHatBack(idx + 1)
  }

  const partSetterMap = {
    clothes: setCloth,
    eyes: setEye,
    hats: specialSetHat,
    handItems: setHandItem,
    horns: setHorn,
    moustaches: setMoustache,
    colour: null,
    frames: setFrame,
  }

  const isOptional = (partName: string): boolean => {
    return [
      "clothes",
      "hats",
      "handItems",
      "moustaches",
      "frames",
      "hatsBack",
    ].includes(partName)
  }
  const ref = useRef<HTMLDivElement>(null)

  return (
    <>
      <DragoonGeneratorCreditsModal
        isOpen={isCreditsOpen}
        setIsOpen={setIsCreditsOpen}
      />
      <div className="flex gap-x-8">
        <div className="w-1/4">
          <div
            ref={ref}
            className="w-full m-auto grid grid-cols-1 grid-rows-1 h-min justify-items-center shrink xl:w-3/4 2xl:w-full"
          >
            <DragoonPreview
              handItem={handItem?.item}
              hat={hat?.item}
              eye={eye.item}
              moustache={moustache?.item}
              cloth={cloth?.item}
              horn={horn.item}
              frame={frame?.item}
              hatBack={hatBack}
              currentColor={currentColor}
              backgroundColor={backgroundColor}
            />
          </div>

          <div className="flex flex-col pt-4">
            <button
              type="button"
              onClick={() => {
                asImage(ref.current)
              }}
              className="w-full px-2 py-2 text-xl text-white bg-purple-500 border-2 border-black border-solid xl:text-2xl rounded-md"
            >
              Download!
            </button>
            <div className="pt-4"></div>
            <button
              type="button"
              onClick={() =>
                confirm("Are you sure you want to reset?") && handleReset()
              }
              className="w-full px-2 py-2 text-xl text-white bg-red-500 border-2 border-black border-solid xl:text-2xl rounded-md"
            >
              Reset
            </button>
          </div>
        </div>

        <div
          className="p-4 h-fit w-fit max-h-min"
          style={{
            backgroundImage: "url(/backgrounds/generator-rescaled.png)",
            backgroundSize: "50%",
          }}
        >
          <h2 className="font-sans text-4xl antialiased font-bold">
            Build your dragoon:
          </h2>
          <div className="text-lg grid grid-cols-2 grid-rows-2 sm:grid-cols-7 sm:grid-rows-1 xl:grid-cols-7 xl:grid-rows-1 xl:text-2xl">
            <div onClick={() => setSelected("clothes")}>
              <DragoonGeneratorSelector
                imagePath={cloth?.item}
                partName="clothes"
                label="clothes"
                selected={selected}
              />
            </div>
            <div onClick={() => setSelected("eyes")}>
              <DragoonGeneratorSelector
                imagePath={eye.item}
                partName="eyes"
                label="eyes"
                selected={selected}
              />
            </div>
            <div onClick={() => setSelected("hats")}>
              <DragoonGeneratorSelector
                imagePath={hat?.item}
                secondaryImagePath={hatBack}
                partName="hats"
                label="hats"
                selected={selected}
              />
            </div>
            <div onClick={() => setSelected("handItems")}>
              <DragoonGeneratorSelector
                imagePath={handItem?.item}
                partName="handItems"
                label="extras"
                selected={selected}
              />
            </div>
            <div onClick={() => setSelected("horns")}>
              <DragoonGeneratorSelector
                imagePath={horn.item}
                partName="horns"
                label="horns"
                selected={selected}
              />
            </div>
            <div onClick={() => setSelected("moustaches")}>
              <DragoonGeneratorSelector
                imagePath={moustache?.item}
                partName="moustaches"
                label="face"
                selected={selected}
              />
            </div>
            <div className="grid grid-rows-2 grid-cols-1 xl:gap-4">
              <div onClick={() => setSelected("colour")}>
                <DragoonColourPreview
                  thumbnailPath={newColorsButton}
                  partName="colour"
                  selected={selected}
                />
              </div>
              <div onClick={() => setSelected("frames")}>
                <DragoonColourPreview
                  thumbnailPath={framesButton}
                  partName="frames"
                  selected={selected}
                />
              </div>
            </div>
          </div>
          <div>
            {selected === "colour" ? (
              <DragoonColourSelector />
            ) : (
              <DragoonPartsPreview
                key={selected}
                images={props[selected]}
                secondaryImages={
                  selected === "hats" ? props["hatsBack"] : undefined
                }
                setIndex={partSetterMap[selected]}
                optional={isOptional(selected)}
              ></DragoonPartsPreview>
            )}
          </div>
          <div className="pt-3 text-xl xl:text-2xl">
            Want the selen font for yourself?{" "}
            <a
              className="px-4 py-1 text-white bg-purple-500 border-2 border-black border-solid rounded-md"
              href="/fonts/Selen2-Regular.ttf"
            >
              Download here!
            </a>
            <button
              className="float-right px-4 py-1 -mt-1 text-white bg-purple-500 border-2 border-black border-solid rounded-md"
              onClick={() => setIsCreditsOpen(true)}
            >
              Credits
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default DragoonGenerator
