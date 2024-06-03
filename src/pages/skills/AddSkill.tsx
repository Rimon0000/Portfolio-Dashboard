/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useAddSkillMutation } from "@/redux/features/skills/skillsApi";
import { useQueryClient } from "react-query";
import { toast } from "sonner";

const AddSkill = () => {
    const [addSkill] = useAddSkillMutation()
    const queryClient = useQueryClient();


    //handle new project
    const handleAddNewSkill = async(e: any) =>{
    e.preventDefault();

    const form = e.target;
    const icon = form.icon.value;
    const title = form.title.value;
    const progress = form.progress.value;

    const newSkill = {
      icon,
      title,
      progress
    }

    addSkill(newSkill)
    toast.success("Skill Added successful.");
    queryClient.invalidateQueries("skills");
    form.reset()
}

  return (
    <div className="text-center my-3">
        <h1 className="text-3xl font-semibold mb-5"> Add a New Skill</h1>
        <div className="w-full flex justify-center items-center">
            <form onSubmit={handleAddNewSkill} className="bg-slate-100 shadow-md rounded px-8 pt-6 w-full lg:w-2/5"> 
                <div className="mb-2 w-full">
                    <Label htmlFor="Icon" className="flex text-left py-2 text-base">Icon</Label>
                    <input className="shadow  border rounded w-full py-2 px-3 text-gray-700"
                      name="icon"
                      type="text"
                      placeholder="Icon URL"
                      required/>
                </div>
                <div className="mb-2 w-full">
                    <Label htmlFor="Title" className="flex text-left py-2 text-base">Title</Label>
                    <input className="shadow  border rounded w-full py-2 px-3 text-gray-700"
                      name="title"
                      type="text"
                      placeholder="Title"
                      required/>
                </div>
                <div className="mb-2 w-full">
                    <Label htmlFor="Progress" className="flex text-left py-2 text-base">Progress</Label>
                    <input className="shadow  border rounded w-full py-2 px-3 text-gray-700"
                      name="progress"
                      type="text"
                      placeholder="Progress"
                      required/>
                </div>
                <div className="pb-3 mt-3">
                  <Button type="submit">Add Skill</Button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default AddSkill;
