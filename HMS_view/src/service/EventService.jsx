import axios from 'axios';

const BASE_SPRING_URL="http://localhost:8080/ems"

class EmployeeService{
    saveEms(event){
    return axios.post(BASE_SPRING_URL,event)
    }
    getEms(){
        return axios.get(BASE_SPRING_URL)
    }
    getEmsById(id){
        return axios.get(BASE_SPRING_URL+"/"+id)
    }
    deleteEmsById(id){
        return axios.delete(BASE_SPRING_URL+"/"+id)
    }
    updateEmsById(employee,id){
        return axios.put(BASE_SPRING_URL+"/"+id,event)
    }

}

export default new EmployeeService();