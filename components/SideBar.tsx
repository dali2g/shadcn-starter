"use client"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Settings } from "lucide-react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useTheme } from "next-themes"


export default function SideNavbar() {
    const { setTheme, theme } = useTheme()
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className=" bg-background text-foreground">
          <Settings/>
          </Button>

      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="font-semibold">Actions Center</SheetTitle>
          <SheetDescription className="mt-5 font-medium">
            Switch Themes : 
          </SheetDescription>
        </SheetHeader>
        <Button
        className="mt-5"
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <Sun className="h-[1.5rem] w-[1.3rem] dark:hidden" />
          <Moon className="hidden h-5 w-5 dark:block" />
          <span className="sr-only">Toggle theme</span>
        </Button>
        <SheetFooter>
          <SheetClose asChild>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
