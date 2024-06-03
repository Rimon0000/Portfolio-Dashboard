/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useAddProjectMutation } from "@/redux/features/projects/projectsApi";
import { useQueryClient } from "react-query";
import { toast } from "sonner";

const AddProject = () => {
    const [AddProject] = useAddProjectMutation()
    const queryClient = useQueryClient();

    //handle new project
    const handleAddNewProject = async(e: any) =>{
    e.preventDefault();

    const form = e.target;
    const image = form.image.value;
    const title = form.title.value;
    const live = form.live.value;
    const client = form.client.value;
    const server = form.server.value;
    const description = form.description.value;
    const technology = form.technology.value;
    const features = form.features.value;

    const newProject = {
      image,
      title,
      live,
      client,
      server,
      description,
      technology,
      features,
    }
    console.log(newProject);

    AddProject(newProject)
    toast.success("Project Added successful.");
    queryClient.invalidateQueries("projects");
    form.reset()
}

  return (
    <div className="text-center my-3">
        <h1 className="text-3xl font-semibold mb-5"> Add a New Project</h1>
        <div className="w-full flex justify-center items-center">
            <form onSubmit={handleAddNewProject} className="bg-slate-100 shadow-md rounded px-8 pt-6 w-full lg:w-4/5"> 
                <div className="lg:flex md:flex gap-3">
                <div className="mb-2 w-full">
                    <Label htmlFor="Image" className="flex text-left py-2 text-base">Image</Label>
                    <input className="shadow  border rounded w-full py-2 px-3 text-gray-700"
                      name="image"
                      type="text"
                      placeholder="Image URL"
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
                </div>

                <div className="lg:flex md:flex gap-3">
                <div className="mb-2 w-full">
                    <Label htmlFor="Live Site" className="flex text-left py-2 text-base">Live Site</Label>
                    <input className="shadow  border rounded w-full py-2 px-3 text-gray-700"
                      name="live"
                      type="text"
                      placeholder="Put Your Live Link"
                      required/>
                </div>
                <div className="mb-2 w-full">
                    <Label htmlFor="Github Client" className="flex text-left py-2 text-base">Github Client</Label>
                    <input className="shadow  border rounded w-full py-2 px-3 text-gray-700"
                      name="client"
                      type="text"
                      placeholder="Github Client"
                      required/>
                </div>
                <div className="mb-2 w-full">
                    <Label htmlFor="Github Server" className="flex text-left py-2 text-base">Github Server</Label>
                    <input className="shadow  border rounded w-full py-2 px-3 text-gray-700"
                      name="server"
                      type="text"
                      placeholder="Github Server"
                      required/>
                </div>
                </div>

                <div className="lg:flex md:flex gap-3">
                <div className="mb-2 w-full">
                    <Label htmlFor="Description" className="flex text-left py-2 text-base">Description</Label>
                    <textarea className="shadow  border rounded w-full py-2 px-3 text-gray-700 h-[120px]"
                      name="description"
                      placeholder="Description"
                      required/>
                </div>
                <div className="mb-2 w-full">
                    <Label htmlFor="Technology" className="flex text-left py-2 text-base">Technology</Label>
                    <textarea className="shadow  border rounded w-full py-2 px-3 text-gray-700 h-[120px]"
                      name="technology"
                      placeholder="Technology"
                      required/>
                </div>
                </div> 
                <div className="mb-2">
                    <Label htmlFor="Features" className="flex text-left py-2 text-base">Features</Label>
                    <textarea className="shadow  border rounded w-full py-2 px-3 text-gray-700 h-[120px]"
                      name="features"
                      placeholder="Features"
                      required/>
                </div>
                <div className="pb-3 mt-3">
                  <Button type="submit">Add Project</Button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default AddProject;
