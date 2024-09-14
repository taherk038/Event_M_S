import { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import EventService from '../service/EventService';
const Table = () => {

  const [loading, setLoading]=useState(true)
  const [event, setEvent] = useState(null);
    const navigate=useNavigate();
    useEffect(()=>{
      const fetchData=async()=>{
        setLoading(true)
        try{
          const response=await EventService.getEms();
          setEvent(response.data);
        }
        catch(error){
          console.log(error);
        }
        setLoading(false)
      }
      fetchData();
    },[])

    const deleteEms=(e,id)=>{
      e.preventDefault();
      EventService.deleteEmsById(id).
      then(()=>{
       if(event){
        setEvent((prevElement)=>{
          return  prevElement.filter((event)=> event.id!=id)
        })
       }
       
      })
      
    }

    const editEms=(e,id)=>{
      e.preventDefault();
      navigate(`/editEms/${id}`)
    }
  return (
    <>
    <div className="container mx-auto my-8">
        <div>
          <button 
          onClick={()=> navigate("AddEvent")}
          className=" bg-slate-600 hover:bg-blue-700 mx-10 my-12 font-semibold px-12 py-2 rounded">
            Add Employee
          </button>
        </div>
        <div>
          <table className="shadow mx-10">
            <thead className=" bg-slate-600">
              <th className="px-6 py-3 tracking-wide uppercase">Name</th>
              <th className="px-6 py-3 tracking-wide uppercase">Date</th>
              <th className="px-6 py-3 tracking-wide uppercase">Size</th>
              <th className="px-6 py-3 tracking-wide uppercase">Action</th>
            </thead>
            {!loading  && (
            <tbody>
              {event.map((employee)=>(
              <tr key={employee.id} className="hover:bg-black ">
                <td className="text-left px-6 py-4 whitespace-nowrap">{employee.name}</td>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                {" "}
                {employee.date}
              
                </td>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  {" "}
                  {employee.size}
                </td>
                <td className="text-left px-6 py-4 whitespace-nowrap flex">
                  <a onClick={(e,id)=>editEms(e,employee.id)}
                  className='hover:text-blue-500 hover: cursor-pointer '>
                    Edit
                  </a>
                  <a onClick={(e,id)=>deleteEms(e,employee.id)}
                  className='hover:text-red-500 hover: cursor-pointer ' >
                    Delete
                  </a>
                </td>
              </tr>
             ))}
              
            </tbody>
            )}
          </table>
        </div>
      </div>
    </>
  )
}

export default Table