package com.weja.digitalbankingapi.models.repositories;

import com.weja.digitalbankingapi.models.AccountDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface AccountDetailRepository extends JpaRepository<AccountDetail, Integer> {

    List<AccountDetail> findByUserName(String userName);
}
