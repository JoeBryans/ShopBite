import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Search, SearchIcon } from "lucide-react"

export default function Searchs() {
  return (
    <Dialog>
      <DialogTrigger asChild>
      <SearchIcon size={30} className="cursor-pointer "/>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="opacity-80">Search for product</DialogTitle>
        
        </DialogHeader>
          <div className="flex items-center gap-4 ">
           
            <Input id="search" placeholder="search..." className="col-span-3 font-semibold " /> 
            <Search size={30} className="cursor-pointer " />
          </div>
          
      
      </DialogContent>
    </Dialog>
  )
}
