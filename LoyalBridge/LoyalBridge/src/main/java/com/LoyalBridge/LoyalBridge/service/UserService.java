package com.LoyalBridge.LoyalBridge.service;

import com.LoyalBridge.LoyalBridge.dto.UserDto;
import com.LoyalBridge.LoyalBridge.entity.Login;
import com.LoyalBridge.LoyalBridge.entity.Partner;
import com.LoyalBridge.LoyalBridge.entity.User;

import java.util.List;

public interface UserService {

    void saveUserService(List<UserDto> saveUserDto);

    void savePartnerService(List<UserDto> savePartnerDto);

    void saveLoginService(List<UserDto> saveLoginDto);

    List<Login> getLogin();

    List<User> getUser();

    List<Partner> getpartner();

    String updateUser(UserDto userDto);

    String updatePartner(UserDto userDto);

    String deletePatner(String partnerName);
}
