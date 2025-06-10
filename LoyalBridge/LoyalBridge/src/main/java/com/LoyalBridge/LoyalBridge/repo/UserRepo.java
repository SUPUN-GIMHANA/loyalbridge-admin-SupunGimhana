//package com.LoyalBridge.LoyalBridge.repo;
//
//import org.apache.catalina.User;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
//import org.springframework.stereotype.Repository;
//
//@Repository
//@EnableJpaRepositories
//public interface UserRepo extends JpaRepository<User, Long> {
//}

package com.LoyalBridge.LoyalBridge.repo;

import com.LoyalBridge.LoyalBridge.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface UserRepo extends JpaRepository<User, String> {
}
