package com.taher.crud_operation;

import java.util.*;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmsServiceImpl implements EmsService {
    
    @Autowired
    private EmsRepository emsRepository;

    @Override

    public String creatEms(Event ems) {
        EmsEntity emsEntity=new EmsEntity();
        BeanUtils.copyProperties(ems,emsEntity);
        emsRepository.save(emsEntity);
    //    list.add(emp);
       return "saved successfully";
    }

    @Override
    public List<Event> readEms() {
       List<EmsEntity> emslist= emsRepository.findAll();
       List<Event> list=new ArrayList<>();
       for(EmsEntity emsEntity: emslist){
        Event ems=new Event();
        ems.setId(emsEntity.getId());
        ems.setName(emsEntity.getName());
        ems.setDate(emsEntity.getDate());
        ems.setSize(emsEntity.getSize());
        list.add(ems);
       }
       return list;
    }

    @Override
    public Event readEmsById(Long id) {
        EmsEntity emsEntity = emsRepository.findById(id).get();
        Event ems=new Event();
        BeanUtils.copyProperties(emsEntity, ems);
        return ems;
    }

    @Override
    public boolean deleteEms(Long id) {
       
        EmsEntity ems = emsRepository.findById(id).get();
        
         emsRepository.delete(ems);

        //iski wajah se run hora tha
        // for (Employee emp : list) {
        //     if (emp.getId().equals(id)) {
        //         list.remove(emp);
        //         return true;  // Employee found and removed
        //     }
        // }
        return true;
        

    }

    @Override
    public String updateEms(Long id, Event emp) {
        EmsEntity em=emsRepository.findById(id).get();
        
        em.setName(emp.getName());
        em.setDate(emp.getDate());
        em.setSize(emp.getSize());

        emsRepository.save(em);

        return "Updated successfully";
    }

   
       
    

}
