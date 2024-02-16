import { ActionArgs, HeadersFunction, json, redirect } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { ClientOnly } from "remix-utils"
import { cloth, eye, hat, handItem, horn, moustache, hatBack } from "~/images"
import styles from "~/components/DragoonGenerator/DragoonGenerator.css"

import DragoonGenerator from "~/components/DragoonGenerator/DragoonGenerator"
import frames from "~/images/dragoonGenerator/frames"

export async function loader() {
  return json({
    clothes: cloth,
    eyes: eye,
    handItems: handItem,
    hats: hat,
    horns: horn,
    moustaches: moustache,
    frames: frames,
    hatsBack: hatBack,
  })
}

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
  const viewData = useLoaderData()

  return (
    <div className="h-screen p-0 bg-purple-300 sm:p-4 2xl:p-8 font-dragoon lg:overflow-hidden">
      <ClientOnly>{() => <DragoonGenerator {...viewData} />}</ClientOnly>
    </div>
  )
}
