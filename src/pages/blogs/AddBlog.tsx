/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useQueryClient } from "react-query";
import { toast } from "sonner";
import { Calendar } from "@/components/ui/calendar"
import {  Popover,  PopoverContent,  PopoverTrigger,} from "@/components/ui/popover"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
 
import { cn } from "@/lib/utils"
import React from "react";
import { useAddBlogMutation } from "@/redux/features/blogs/blogsApi";

const AddBlog = () => {
    const [addBlog] = useAddBlogMutation()
    const queryClient = useQueryClient();
    const [date, setDate] = React.useState<Date>()


    //handle new project
    const handleAddNewBlog = async(e: any) =>{
    e.preventDefault();

    const form = e.target;
    const image = form.image.value;
    const title = form.title.value;
    const category = form.category.value;
    const description = form.description.value;

    const newBlog = {
      image,
      title,
      category,
      date,
      description,
    }

    addBlog(newBlog)
    toast.success("Blog Added successful.");
    queryClient.invalidateQueries("blogs");
    form.reset()
}

  return (
    <div className="text-center my-3">
        <h1 className="text-3xl font-semibold mb-5"> Add a New Blog</h1>
        <div className="w-full flex justify-center items-center">
            <form onSubmit={handleAddNewBlog} className="bg-slate-100 shadow-md rounded px-8 pt-6 w-full lg:w-3/5"> 
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
                <div className="lg:flex md:flex items-center mx-auto gap-3">
                <div className="mb-2 w-full">
                    <Label htmlFor="Category" className="flex text-left py-2 text-base">Category</Label>
                    <input className="shadow  border rounded w-full py-2 px-3 text-gray-700"
                      name="category"
                      type="text"
                      placeholder="Category"
                      required/>
                </div>
                <div className="mb-2 w-full">
                        <Label htmlFor="Date" className="flex text-left py-2 text-base">Pick a Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full justify-start text-left font-normal py-2",
                                !date && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                    </div>
                </div>
                <div className="mb-2">
                    <Label htmlFor="Description" className="flex text-left py-2 text-base">Description</Label>
                    <textarea className="shadow  border rounded w-full py-2 px-3 text-gray-700 h-[120px]"
                      name="description"
                      placeholder="Description"
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

export default AddBlog;
