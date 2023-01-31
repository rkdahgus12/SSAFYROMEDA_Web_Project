package com.ssafy.sfrmd.service.user;

import com.ssafy.sfrmd.domain.user.User;
import com.ssafy.sfrmd.domain.user.UserRepository;
import com.ssafy.sfrmd.dto.user.UserSignUpResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("userService")
public class UserService{

    @Autowired
    UserRepository userRepository;

    public User sighUpUser(UserSignUpResponse userSignUpDto) {
        User user = User.builder()
                .userEmail(userSignUpDto.getUserEmail())
                .userNickname(userSignUpDto.getUserNickName())
                .build();
        return userRepository.save(user);
    }

    public Boolean checkEmail(String userEamil) {
        return null;
    }

    public Long checkNickname(String userNickname) {
        return userRepository.countUserByUserNickname(userNickname);
    }
}
