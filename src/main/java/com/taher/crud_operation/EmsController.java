package com.taher.crud_operation;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import jakarta.persistence.PostUpdate;

@RestController
@CrossOrigin("http://localhost:5173/")

public class EmsController  {
    
    // EmployeeService employeeService =new EmployeeServiceImpl();
    
    //Dependency Injection
    @Autowired
    EmsService emsService ;


    @GetMapping("ems")
    public List<Event> getAllems(){
       
        return emsService.readEms();
    }


    @GetMapping("ems/{id}")
    public Event getAllemsById(@PathVariable Long id){
       
        return emsService.readEmsById(id);
    }

    @PostMapping("ems")
    public String createEms(@RequestBody Event ems){
     
     return emsService.creatEms(ems);
    }

    @DeleteMapping("ems/{id}")
    public String deleteEms(@PathVariable Long id){
        if(emsService.deleteEms(id)){
            return "Deleted Successfully";
        }
        return "Not found";
    }

    @PutMapping("ems/{id}")
    public String  updateEms(@PathVariable Long id,@RequestBody Event ems){
         
        return  emsService.updateEms(id,ems);
    }

}

