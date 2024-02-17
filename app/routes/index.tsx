import { ActionArgs, HeadersFunction, json, redirect } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { ClientOnly } from "remix-utils"
import { cloth, eye, hat, handItem, horn, moustache, hatBack } from "~/images"
import styles from "~/components/DragoonGenerator/DragoonGenerator.css"

import DragoonGenerator from "~/components/DragoonGenerator/DragoonGenerator"
import frames from "~/images/dragoonGenerator/frames"
import DragoonGeneratorCreditsModal, {
  creditsOpen,
} from "~/components/DragoonGeneratorCreditsModal/DragoonGeneratorCreditsModal"
import { useAtom } from "jotai"

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "preload", href: "/buttons/submit-hover.png", as: "image" },
    { rel: "preload", href: "/buttons/reset-hover.png", as: "image" },
    { rel: "preload", href: "/backgrounds/all-background.png", as: "image" },
    { rel: "preload", href: "/fonts/Selen2-Regular.ttf", as: "font" },
  ]
}

export let headers: HeadersFunction = () => {
  return {
    "Cache-Control": `public, max-age=${60 * 10}, s-maxage=${
      60 * 60 * 24 * 30
    }`,
  }
}

export function meta() {
  return {
    title: "Build your Dragoon!",
  }
}

export default function Generator() {
  const viewData = {
    clothes: cloth,
    eyes: eye,
    handItems: handItem,
    hats: hat,
    horns: horn,
    moustaches: moustache,
    frames: frames,
    hatsBack: hatBack,
  }
  console.log("viewData", viewData)

  const [_, setIsCreditsOpen] = useAtom(creditsOpen)

  return (
    <div className="p-0 font-dragoon">
      <div data-header className="pb-4">
        <h1 className="font-sans text-4xl antialiased font-bold text-center p-4">
          Build your dragoon
        </h1>
      </div>
      <div className="flex flex-col h-[100%]">
        <div className="lg:max-w-[100rem] ml-auto mr-auto h-[100%]">
          <DragoonGenerator {...viewData} />
        </div>

        <div className="p-4"></div>

        <div
          data-footer
          className="text-xl xl:text-2xl flex-shrink-0 bg-fuchsia-400 h-16 p-4"
        >
          <div>
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

          <DragoonGeneratorCreditsModal />
        </div>
      </div>
    </div>
  )
}
