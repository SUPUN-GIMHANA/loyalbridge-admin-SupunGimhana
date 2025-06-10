package com.LoyalBridge.LoyalBridge.service.impl;

import com.LoyalBridge.LoyalBridge.dto.UserDto;
import com.LoyalBridge.LoyalBridge.entity.Login;
import com.LoyalBridge.LoyalBridge.entity.Partner;
import com.LoyalBridge.LoyalBridge.entity.User;
import com.LoyalBridge.LoyalBridge.repo.LoginRepo;
import com.LoyalBridge.LoyalBridge.repo.PartnerRepo;
import com.LoyalBridge.LoyalBridge.repo.UserRepo;
import com.LoyalBridge.LoyalBridge.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.LoyalBridge.LoyalBridge.entity.User;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;


import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private LoginRepo loginRepo;

    @Override
    public void saveLoginService(List<UserDto> saveLoginDto) {
        for (UserDto LoginDto : saveLoginDto) {
            Login login = new Login(
                    LoginDto.getPassword(),
                    LoginDto.getUserName()
            );
            loginRepo.save(login);
        }

    }


    @Autowired
    private UserRepo userRepo;

    @Override
    public void saveUserService(List<UserDto> saveUserDto) {
        for (UserDto userDto : saveUserDto) {
            User user = new User(
                    userDto.getName(),
                    userDto.getId(),
                    userDto.getPhoneNo(),
                    userDto.getStatus(),
                    userDto.getFreeze(),
                    userDto.getRisk()
            );
            userRepo.save(user);
        }

    }

    @Autowired
    private PartnerRepo partnerRepo;

    @Override
    public void savePartnerService(List<UserDto> savePartnerDto) {
        for (UserDto partnerDto : savePartnerDto) {
            Partner partner = new Partner(
                    partnerDto.getPartnerName(),
                    partnerDto.getEmail(),
                    partnerDto.getRate(),
                    partnerDto.getIntegration()
            );
            partnerRepo.save(partner);
        }

    }

    @Override
    public List<Login> getLogin() {
        return loginRepo.findAll();
    }

    @Override
    public List<User> getUser() {
        return userRepo.findAll();
    }

    @Override
    public List<Partner> getpartner() {
        return partnerRepo.findAll();
    }

//    @Override
//    public String updateUser(UserDto userDto) {
//        if(userRepo.existsById(userDto.getName())){
//            User user = userRepo.getReferenceById(userDto.getName());
//
//            user.setName(userDto.getName());
//            user.setId(userDto.getId());
//            user.setPhoneNo(userDto.getPhoneNo());
//            user.setStatus(userDto.getStatus());
//            user.setFreeze(userDto.getFreeze());
//            user.setRisk(userDto.getRisk());
//
//            userRepo.save(user);
//            return userDto.getName() + " has been updated";
//        }else {
//            return "something went wrong";
//        }
//    }
@Override
public String updateUser(UserDto userDto) {
    System.out.println("Trying to update user: " + userDto.getName());

    if(userRepo.existsById(userDto.getName())){
        System.out.println("User found. Updating...");

        User user = userRepo.getReferenceById(userDto.getName());

        user.setName(userDto.getName());
        user.setId(userDto.getId());
        user.setPhoneNo(userDto.getPhoneNo());
        user.setStatus(userDto.getStatus());
        user.setFreeze(userDto.getFreeze());
        user.setRisk(userDto.getRisk());

        userRepo.save(user);
        return userDto.getName() + " has been updated";
    } else {
        System.out.println("User NOT found!");
        return "something went wrong";
    }
}

    @Override
    public String updatePartner(UserDto userDto) {
        System.out.println("Trying to update user: " + userDto.getPartnerName());

        if(userRepo.existsById(userDto.getPartnerName())){
            System.out.println("User found. Updating...");

            Partner partner = partnerRepo.getReferenceById(userDto.getName());

            partner.setPartnerName(userDto.getPartnerName());
            partner.setEmail(userDto.getEmail());
            partner.setRate(userDto.getRate());
            partner.setIntegration(userDto.getIntegration());


            partnerRepo.save(partner);
            return userDto.getPartnerName() + " has been updated";
        }else {
            System.out.println("User NOT found!");
            return "something went wrong";
        }
    }

    @Override
    public String deletePatner(String partnerName) {
        if(partnerRepo.existsById(partnerName)){
            partnerRepo.deleteById(partnerName);
            return partnerName + " has been deleted";
        }else {
            System.out.println("User NOT found!");
        }
        return "";
    }


}
