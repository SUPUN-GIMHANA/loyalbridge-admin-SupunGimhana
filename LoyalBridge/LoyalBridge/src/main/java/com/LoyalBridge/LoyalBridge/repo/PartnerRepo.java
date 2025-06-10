package com.LoyalBridge.LoyalBridge.repo;

import com.LoyalBridge.LoyalBridge.entity.Partner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface PartnerRepo extends JpaRepository<Partner, String> {
}
