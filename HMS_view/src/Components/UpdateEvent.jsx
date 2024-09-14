import  { useState ,useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import EventService from '../service/EventService';

const UpdateEvent = () => {

  const Navigate = useNavigate();
const {id} =useParams();
  
  const [eve, setEvent] = useState({
    id: id,
    name: "",
    date: "",
    size: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setEvent({...eve,  [e.target.name]: value });
  };

  useEffect(()=>{
    const fetchData=async()=>{
      
      try{
        const response=await EventService.getEmsById(eve.id);
        setEvent(response.data);
      }
      catch(error){
        console.log(error);
      }
     
    }
    fetchData();
  },[])
  
  const UpdateEvent=(e)=>{
    e.preventDefault();
    EventService.updateEmsById(eve,id).
    then((response)=>{
        console.log("saved",response)
      Navigate("/")
    }).
    catch((error)=>{
        console.log(error)
    })
   
  }

  
  return (
    <>
      <div className="bg-slate-800 max-w-xl mx-40 my-20 rounded shadow py-4 px-8">
        <div className="item-center text-4xl text-center py-4 px-8">
          <p> Update Employee</p>
        </div>

        <div className="mx-10 my-2">
          <input
            className="w-full py-2 my-4 text-slate-800 "
            name="name"
            type="text"
            placeholder="Name"
            value={eve.name}
            onChange={handleChange}
          ></input>
          <br />
          <input
            className="w-full py-2 my-4 text-slate-800 "
            name="date"
            type="date"
            placeholder="Date"
            value={eve.date}
            onChange={handleChange}
          ></input>
          <br />
          <input
            className="w-full py-2 my-4 text-slate-800"
            name="size"
            type="number"
            placeholder="Size"
            value={eve.size}
            onChange={handleChange}
          ></input>
          <br />
        </div>

        <div className="text-center tracking-wider ">
          <button 
          onClick={UpdateEvent}
          className="bg-green-400 hover:bg-green-700  mx-4 my-4 px-6 py-2 rounded">
            Update
          </button>
          
          <button
            onClick={() => Navigate("/")}
            className="bg-red-400 hover:bg-red-700 mx-4 my-4 px-6 py-2 rounded"
          >
            Cancel{" "}
          </button>
        </div>
      </div>
    </>
  );
};



export default UpdateEvent