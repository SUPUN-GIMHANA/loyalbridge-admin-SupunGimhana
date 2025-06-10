package com.LoyalBridge.LoyalBridge.Controller;

import com.LoyalBridge.LoyalBridge.dto.UserDto;
import com.LoyalBridge.LoyalBridge.entity.Login;
import com.LoyalBridge.LoyalBridge.entity.Partner;
import com.LoyalBridge.LoyalBridge.entity.User;
import com.LoyalBridge.LoyalBridge.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v1/test")
public class Controller {

    @Autowired
    private UserService userService;

    @PostMapping(path = "/saveLogin")
    public String saveLogin(@RequestBody List<UserDto> saveLoginDto) {
        userService.saveLoginService(saveLoginDto);
        return "Saved";
    }

    @PostMapping(path = "/saveUsers")
    public String saveUsers(@RequestBody List<UserDto> saveUserDto) {
        userService.saveUserService(saveUserDto);
        return "Saved";
    }

    @PostMapping(path = "/savePartner")
    public String savePartner(@RequestBody List<UserDto> savePartnerDto) {
        userService.savePartnerService(savePartnerDto);
        return "Saved";
    }

    @GetMapping(path = "/getSaveLogin")
    public List<Login> getSaveLogin() {
        return userService.getLogin();
    }

    @GetMapping(path = "getUser")
    public List<User> getSaveUsers() {
        return userService.getUser();
    }

    @GetMapping(path = "/getPartner")
    public List<Partner> getSavePartner() {
        return userService.getpartner();
    }

    @PutMapping(path = "/updateUser")
    public String updateUser(@RequestBody UserDto userDto) {
        String message = userService.updateUser(userDto);
        return message;
    }
    @PutMapping(path = "/upadatePartner")
    public String upadatePartner(@RequestBody UserDto userDto) {
        String message = userService.updatePartner(userDto);
        return message;
    }

    @DeleteMapping(path = "/deletePartner/{id}")
    public String deletePartner( @PathVariable (value = "id") String partnerName) {
        String message = userService.deletePatner(partnerName);
        return message;
    }


}
