package com.weja.digitalbankingapi.controller;

import com.weja.digitalbankingapi.resources.MyUserDetailsService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {


    @GetMapping("/login")
    public String login()
    {
        return "login";
    }
}
