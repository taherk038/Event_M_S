package com.taher.crud_operation;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmsRepository extends JpaRepository<EmsEntity,Long >{
    
}
