import { Icon } from "@iconify/react";


export default function HeaderSticky() {
  return (
    <header className="sticky top-0  z-10 border-b px-4 py-3">
                 <div className="flex justify-between items-center">
                    <h1>Inicio</h1>
                    <button className="flex gap-2 items-center">
                    <span>200 usuarios</span>
                    <Icon icon={"mdi:dots-vertical"} />
                    </button>
            </div>
          </header>
  )
}
