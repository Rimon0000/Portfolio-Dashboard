import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAppDispatch } from "@/redux/hook";
import { FilePenLine, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { TBlogItem } from "@/type/blog/blog";
import { useDeleteSkillMutation, useGetAllSkillsQuery } from "@/redux/features/skills/skillsApi";
import { removeSkill } from "@/redux/features/skills/skillsSlice";
import { TSkillItem } from "@/type/projects/project";
import UpdateSkill from "./UpdateSkill";

const AllSkills = () =>{
  const { data } = useGetAllSkillsQuery(undefined);
  const dispatch = useAppDispatch()
  const [deleteSkill] = useDeleteSkillMutation();


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
        await deleteSkill(id).unwrap();
        dispatch(removeSkill(id));
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
            <h1 className="text-center text-xl font-bold my-5">All Skills</h1>
            <div className=" my-3 mr-5 flex items-end justify-end">
              <Link to="/add-skill"><Button>Add New Skill</Button></Link>
            </div>

            <Table className="font-semibold">
              <TableCaption>A list of my skills!</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Image</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data?.data?.map((item : TSkillItem) => (
                  <TableRow key={item._id}>
                    <TableCell className="font-medium"><img src={item.icon} alt="" /></TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell className="text-right flex items-center justify-end place-content-center mt-7"> 
                      <Button onClick={() => handleDelete(item._id)} variant="destructive" className=" hover:bg-slate-700 px-2 py-2 rounded-md">
                        <Trash2/>
                      </Button>
                      <hr className="border-2 mx-2 h-7 bg-slate-800"></hr>                    
                      <UpdateSkill item={item}></UpdateSkill>
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

export default AllSkills;