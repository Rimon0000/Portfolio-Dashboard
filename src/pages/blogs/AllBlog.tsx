import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAppDispatch } from "@/redux/hook";
import { FilePenLine, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { useDeleteBlogMutation, useGetAllBlogsQuery } from "@/redux/features/blogs/blogsApi";
import { TBlogItem } from "@/type/blog/blog";
import { removeBlog } from "@/redux/features/blogs/blogsSlice";

const AllBlog = () =>{
  const { data } = useGetAllBlogsQuery(undefined);
  const dispatch = useAppDispatch()
  const [deleteBlog] = useDeleteBlogMutation();


  //handle delete
   const handleDelete = async(id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then( async(result) => {
      if (result.isConfirmed) {
        await deleteBlog(id).unwrap();
        dispatch(removeBlog(id));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }

    return (
        <div>
            <h1 className="text-center text-xl font-bold my-5">All Blogs</h1>
            <div className=" my-3 mr-5 flex items-end justify-end">
              <Link to="/add-blog"><Button>Add New Blog</Button></Link>
            </div>

            <Table className="font-semibold">
              <TableCaption>A list of my blogs!</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Image</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Live</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data?.data?.map((item : TBlogItem) => (
                  <TableRow key={item._id}>
                    <TableCell className="font-medium"><img src={item.image} alt="" /></TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.category}</TableCell>
                    <TableCell className="text-right flex items-center justify-end place-content-center mt-7"> 
                      <Button onClick={() => handleDelete(item._id)} variant="destructive" className=" hover:bg-slate-700 px-2 py-2 rounded-md">
                        <Trash2/>
                      </Button>
                      <hr className="border-2 mx-2 h-7 bg-slate-800"></hr>                    
                        <Link to={`/update-blog/${item._id}`}>
                        <Button className="hover:bg-slate-600 hover:text-white  px-2 py-2 rounded-md" variant="secondary">
                          <FilePenLine></FilePenLine>
                        </Button>
                        </Link>
                      </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>Total</TableCell>
                  <TableCell className="text-right">{data?.data?.length}</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
            

        </div>
    )
}

export default AllBlog;