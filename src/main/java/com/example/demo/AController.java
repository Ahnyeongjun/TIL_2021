package com.example.demo;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AController {
    @GetMapping("/1")
    Map<String, String> a() {
        Map<String, String> map = new HashMap<>();
        map.put("a", "a");
        return map;
    }
    @PostMapping
    void signUp2(@RequestBody String signUpRequest) {
        System.out.println(signUpRequest);
    }

}
