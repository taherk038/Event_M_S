package com.taher.crud_operation;


import java.util.*;

public interface EmsService  {
    
    String creatEms(Event emp);
    List<Event> readEms();
    boolean deleteEms(Long id);
    String updateEms(Long id, Event emp);
    Event readEmsById(Long id);
    
}
