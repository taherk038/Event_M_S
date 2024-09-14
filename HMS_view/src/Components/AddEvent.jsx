import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EventService from '../service/EventService';

const AddEvent = () => {
  const Navigate = useNavigate();

  const [eve, setEvent] = useState({
    id: "",
    name: "",
    date: "",
    size: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setEvent({...eve,  [e.target.name]: value });
  };
  
  const saveEvent=(e)=>{
    e.preventDefault();
    EventService.saveEms(eve).
    then((response)=>{
      console.log("saved",response)
      Navigate("/")
    })
    .catch((error)=>{
      console.log(error)
    });
  }

  const reset=(e)=>{
    e.preventDefault();
    setEvent({
      id: "",
    name: "",
    date: "",
    size: "",
    })
  }

  
  return (
    <>
      <div className="bg-slate-800 max-w-xl mx-40 my-20 rounded shadow py-4 px-8">
        <div className="item-center text-4xl text-center py-4 px-8">
          <p> Add New Event</p>
        </div>

        <div className="flex items-center space-x-2">
          <label>Name</label>
          <input
            className="w-full py-2 my-4 text-slate-800 "
            name="name"
            type="text"
            placeholder="Name"
            value={eve.name}
            onChange={handleChange}
          ></input>
        
          </div>
          <div className="flex items-center space-x-2">
          <label>Date </label>
          <input
            className="w-full py-2 my-4 text-slate-800 "
            name="date"
            type="date"
            placeholder="Date"
            value={eve.date}
            onChange={handleChange}
          ></input>
          </div>

          <div className="flex items-center space-x-2">
          <label>Size</label>
          <input
            className="w-full py-2 my-4 text-slate-800"
            name="size"
            type="number"
            placeholder="Size"
            value={eve.email}
            onChange={handleChange}
          ></input>
          <br />
        </div>

        <div className="text-center tracking-wider ">
          <button 
          onClick={saveEvent}
          className="bg-green-400 hover:bg-green-700  mx-4 my-4 px-6 py-2 rounded">
            Save
          </button>
          <button
          onClick={reset}
          className="bg-blue-400 hover:bg-blue-700 mx-4 my-4 px-6 py-2 rounded">
            Clear
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

export default AddEvent;
