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
import { usePartSelector } from "~/hooks/usePartSelector"
import PreviewTab from "../PreviewTab"

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

  const [selected, setSelected] = usePartSelector()

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
      <div className="grid w-full grid-cols-1 md:grid-cols-4 h-full gap-4">
        <div className="h-full p-4">
          <div
            ref={ref}
            className="w-full m-auto grid grid-cols-1 grid-rows-1 h-min justify-items-center shrink"
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

          <div className="flex flex-col pt-4 w-full">
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

        <div className="h-full md:col-span-3">
          <div className="text-lg grid grid-cols-2 grid-rows-2 lg:grid-cols-8 lg:grid-rows-1 sm:grid-cols-4 sm:grid-rows-2 justify-stretch items-stretch">
            <PreviewTab partName="clothes" label="clothes">
              <DragoonGeneratorSelector imagePath={cloth?.item} />
            </PreviewTab>
            <PreviewTab partName="eyes" label="eyes">
              <DragoonGeneratorSelector imagePath={eye?.item} />
            </PreviewTab>
            <PreviewTab partName="hats" label="hats">
              <DragoonGeneratorSelector imagePath={hat?.item} />
            </PreviewTab>
            <PreviewTab partName="handItems" label="extras">
              <DragoonGeneratorSelector imagePath={handItem?.item} />
            </PreviewTab>
            <PreviewTab partName="horns" label="horns">
              <DragoonGeneratorSelector imagePath={horn.item} />
            </PreviewTab>
            <PreviewTab partName="moustaches" label="moustaches">
              <DragoonGeneratorSelector imagePath={moustache?.item} />
            </PreviewTab>
            <PreviewTab partName="colour" label="colours">
              <DragoonColourPreview thumbnailPath={newColorsButton} />
            </PreviewTab>
            <PreviewTab partName="frames" label="frames">
              <DragoonColourPreview thumbnailPath={framesButton} />
            </PreviewTab>
          </div>
          <div className="border-2 border-black bg-white">
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
        </div>
      </div>
    </>
  )
}

export default DragoonGenerator
