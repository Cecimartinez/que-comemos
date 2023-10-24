import { AlignLeft } from "lucide-react"
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
            <SheetContent className="bg-white" side={side}>

            </SheetContent>
          </Sheet>
        ))}
      </div>
    </>
  )
}