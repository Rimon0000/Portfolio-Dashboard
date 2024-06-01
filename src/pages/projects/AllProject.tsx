import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAppDispatch } from "@/redux/hook";
import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { useDeleteProjectMutation, useGetAllProjectsQuery } from "@/redux/features/projects/projectsApi";
import { removeProject } from "@/redux/features/projects/projectsSlice";
import { TProjectItem } from "@/type/projects/project";

const AllProject = () =>{
  const { data } = useGetAllProjectsQuery(undefined);
  const dispatch = useAppDispatch()
  const [deleteProject] = useDeleteProjectMutation();


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
        await deleteProject(id).unwrap();
        dispatch(removeProject(id));
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
            <h1 className="text-center text-xl font-bold my-5">All Projects</h1>
            <div className=" my-3 mr-5 flex items-end justify-end">
              <Link to="/add-project"><Button>Add New Projects</Button></Link>
            </div>

            <Table>
              <TableCaption>A list of my projects.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Image</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Live</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data?.data?.map((item : TProjectItem) => (
                  <TableRow key={item._id}>
                    <TableCell className="font-medium"><img src={item.image} alt="" /></TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell><a href={item.live} target="_blank">Live Site</a></TableCell>
                    <TableCell className="text-right flex items-center justify-end place-content-center mt-7"> 
                      <Button onClick={() => handleDelete(item._id)} variant="destructive" className=" hover:bg-slate-700 px-2 py-2 rounded-md">
                        <Trash2/>
                      </Button>
                      <hr className="border-2 mx-2 h-7 bg-slate-800"></hr>                    
                      {/* <UpdateSupplyModal item={item}></UpdateSupplyModal> */}
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

export default AllProject;