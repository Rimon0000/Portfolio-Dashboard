/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { useNavigate, useParams } from "react-router-dom"
import { useQueryClient } from "react-query"
import { useGetSingleBlogQuery, useUpdateBlogMutation } from "@/redux/features/blogs/blogsApi"
import { Calendar } from "@/components/ui/calendar"
import {  Popover,  PopoverContent,  PopoverTrigger,} from "@/components/ui/popover"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import React, { useEffect } from "react"


const UpdateBlog = () =>{
  const { id } = useParams();
  const {data} = useGetSingleBlogQuery(id)
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [date, setDate] = React.useState<Date>()

  useEffect(() => {
    // Set previous date as default when data is available
    if (data?.data?.date) {
      setDate(new Date(data.data.date));
    }
  }, [data]);


    const {_id, image, title, category, description} = data?.data || {}
    
    const [updateBlog] = useUpdateBlogMutation()

  //update supply
  const handleUpdate = (e: any) =>{
    e.preventDefault()

    const form = e.target;
    const image = form.image.value;
    const title = form.title.value;
    const category = form.category.value;
    const description = form.description.value;

    const options = {
        id: _id,
        data: {
            image,
            title,
            category,
            date,
            description
        }
    };
    
    updateBlog(options);
    toast.success("blog Updated!");
    queryClient.invalidateQueries("blogs");
    navigate("/all-blogs");
};

    return (
      <div className="text-center my-3">
      <h1 className="text-3xl font-semibold mb-5"> Update Blog</h1>
      <div className="w-full flex justify-center items-center">
          <form onSubmit={handleUpdate} className="bg-slate-100 shadow-md rounded px-8 pt-6 w-full lg:w-3/5"> 
          <div className="mb-2 w-full">
                    <Label htmlFor="Image" className="flex text-left py-2 text-base">Image</Label>
                    <input className="shadow  border rounded w-full py-2 px-3 text-gray-700"
                      name="image"
                      type="text"
                      placeholder="Image URL"
                      defaultValue={image}
                      required/>
                </div>
                <div className="mb-2 w-full">
                    <Label htmlFor="Title" className="flex text-left py-2 text-base">Title</Label>
                    <input className="shadow  border rounded w-full py-2 px-3 text-gray-700"
                      name="title"
                      type="text"
                      placeholder="Title"
                      defaultValue={title}

                      required/>
                </div>
                <div className="lg:flex md:flex items-center mx-auto gap-3">
                <div className="mb-2 w-full">
                    <Label htmlFor="Category" className="flex text-left py-2 text-base">Category</Label>
                    <input className="shadow  border rounded w-full py-2 px-3 text-gray-700"
                      name="category"
                      type="text"
                      placeholder="Category"
                      defaultValue={category}
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
                      defaultValue={description}
                      required/>
                </div>
              <div className="pb-3 mt-3">
                <Button type="submit">Update</Button>
              </div>
          </form>
      </div>
  </div>
    )
}

export default UpdateBlog;