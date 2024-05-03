import type { LinksFunction, MetaFunction } from "@remix-run/node"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"
import styles from "./tailwind.css"

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
})

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }]

export default function App() {
  return (
    <html lang="en" className="h-full font-dragoon">
      <head>
        <Meta />
        <Links />
      </head>
      <body
        className="bg-purple-300 flex min-h-full flex-col"
        style={{
          backgroundImage: "url(/backgrounds/generator-rescaled.png)",
          backgroundSize: "50%",
        }}
      >
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        {/* <footer className="fixed inset-x-0 bottom-0 h-12 bg-purple-500"></footer> */}
      </body>
    </html>
  )
}
