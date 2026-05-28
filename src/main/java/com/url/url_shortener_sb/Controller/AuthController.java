package com.url.url_shortener_sb.Controller;

import com.url.url_shortener_sb.Service.UserService;
import com.url.url_shortener_sb.dtos.LoginRequest;
import com.url.url_shortener_sb.dtos.RegisterRequest;
import com.url.url_shortener_sb.models.User;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@AllArgsConstructor
public class AuthController {

    private UserService userService;

    @PostMapping("/public/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest request) {
       return ResponseEntity.ok(userService.authenticationUser(request));


    }


    @PostMapping("/public/register")
    public ResponseEntity<?> registerUser(@RequestBody RegisterRequest registerRequest){
       // System.out.println(registerRequest);

        User user=new User();
        user.setUsername(registerRequest.getUsername());
        user.setRole("ROLE_USER");
        userService.registerUser(user);
        return ResponseEntity.ok("User Registered Successfully");
    }
}
