import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
interface Props {
  HandleClick: any;
  handleChange: any;
  overview: any[];
}
export default function Additional_Info({
  HandleClick,
  overview,
  handleChange,
}: Props) {
  return (
    <Dialog>
      <DialogTrigger>
        <span className="btn btn-ghost btn-sm border-2  w-full  text-left  rounded-lg py-2">
          Additional Info
        </span>
      </DialogTrigger>
      <DialogContent className="md:max-w-[800px] w-[95%]">
        <DialogHeader>
          <DialogTitle className="opacity-80">
            Add Additional information for your product
          </DialogTitle>
        </DialogHeader>
        <Button className="w-max px-4" onClick={HandleClick}>
          Add
        </Button>
        <div className="flex flex-col max-h-[50vh] overflow-auto gap-4 ">
          {overview.map((val: any, i: number) => {
            return (
              <div key={i} className="flex items-center gap-4 ">
                <Input
                  id="search"
                  placeholder="title"
                  name="title"
                  value={val.title}
                  className="col-span-3 font-semibold "
                  onChange={(e) => handleChange(e, i)}
                />
                <Input
                  id="search"
                  name="info"
                  placeholder="info"
                  className="col-span-3 font-semibold "
                  value={val.info}
                  onChange={(e) => handleChange(e, i)}
                />
              </div>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}
