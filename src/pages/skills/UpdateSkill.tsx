/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DialogClose } from "@radix-ui/react-dialog"
import { toast } from "sonner"
import { FilePenLine } from "lucide-react"
import { TSkillItem } from "@/type/projects/project"
import { useUpdateSkillMutation } from "@/redux/features/skills/skillsApi"


const UpdateSkill = ({item}: {item: TSkillItem}) =>{
    const {_id, icon, title} = item
    
    const [updateSkill] = useUpdateSkillMutation()

  //update skill
  const handleUpdate = (e: any) =>{
    e.preventDefault()

    const form = e.target 
    const icon = form.icon.value
    const title = form.title.value

    const options = {
        id: _id,
        data: {
            icon,
            title
        }
    };
    
    updateSkill(options);
    toast.success("Skill Updated!");
};

    return (
        <Dialog>
          <DialogTrigger asChild>
          <Button className="hover:bg-slate-600 hover:text-white  px-2 py-2 rounded-md" variant="secondary">
              <FilePenLine></FilePenLine>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Update Supply</DialogTitle>
              <DialogDescription>
                Please donate to help us reach our goal.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleUpdate}>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="Icon" className="text-right">
                      Icon
                    </Label>
                    <Input 
                      name="icon"
                      defaultValue={icon}
                      className="col-span-3"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="title" className="text-right">
                      Title
                    </Label>
                    <Input 
                      name="title"
                      defaultValue={title}
                      className="col-span-3"
                      required
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                    <DialogClose asChild>
                        <Button type="submit">Confirm</Button>
                    </DialogClose>
                </div>
            </form> 
          </DialogContent>
        </Dialog>
    )
}

export default UpdateSkill;