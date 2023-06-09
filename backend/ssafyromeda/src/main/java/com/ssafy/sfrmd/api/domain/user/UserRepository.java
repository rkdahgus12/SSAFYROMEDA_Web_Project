package com.ssafy.sfrmd.api.domain.user;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
    Optional<User> findByUserNo(Long userNo);
    Optional<User> findByUserEmail(String userEmail);
    Long countUserByUserNickname(String userNickname);
    Optional<User> findByUserRefreshToken(String userRefreshToken);
}
