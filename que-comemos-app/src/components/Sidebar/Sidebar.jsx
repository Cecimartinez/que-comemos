import { AlignLeft, User2 } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../ui/Sheet"

export const Sidebar = () => {

  const SHEET_SIDES = ["left"]
  return (
    <>
      <div className="flex justify-start  items-start ">
        {SHEET_SIDES.map((side) => (
          <Sheet key={side}>
            <SheetTrigger asChild>
              <AlignLeft className="text-white w-10 h-10" />
            </SheetTrigger>
            <SheetContent className="bg-white font-poppins flex flex-col justify-between items-center" side={side}>

              <div className="flex my-14 ">
                <section className="   px-4 py-4 border-2 border-[#b4c1706d] bg-[#b4c17022] bg- rounded-full  justify-center items-center p-4">
                  <User2 className="w-full  text-neutral-500" />
                </section>

                <div className="flex flex-col justify-start mx-3  items-start  text-neutral-600 tracking-wider">
                  <h2 className="text-xl  font-semibold ">Cecilia Martinez</h2>
                  <h3 className="text-base   ">@cecidev</h3>
                </div>

              </div>

              <div className="my-10 border-2 px-14 py-7 rounded-5xl border-[#b4c1706d] cursor-pointer bg-[#b4c17022]">
                <button className="text-lg tracking-wider text-[#B4c170] w-full h-full font-medium ">Cerrar Sesión </button>
              </div>
            </SheetContent>
          </Sheet>
        ))}
      </div>
    </>
  )
}