import { Dialog } from "@headlessui/react"
import { atom, useAtom } from "jotai"

export const creditsOpen = atom(false)

const DragoonGeneratorCreditsModal = () => {
  const [isOpen, setIsOpen] = useAtom(creditsOpen)
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-[100]"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true">
        <div className="fixed inset-0 flex items-center justify-center">
          <Dialog.Panel className="p-4 text-2xl bg-purple-300 rounded font-dragoon">
            <Dialog.Title className="text-3xl border-b-2 border-black">
              Dragoon Generator Credits
            </Dialog.Title>
            <div className="px-2 pt-4">
              <p>Parts by agito</p>
              <p>Frame art, backgrounds, buttons, font by 127</p>
              <p>Website development by ~sky, tastelikenyan</p>
              <p>Project management, testing by AC1D</p>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  )
}

export default DragoonGeneratorCreditsModal
