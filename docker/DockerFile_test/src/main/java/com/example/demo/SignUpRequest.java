package com.example.demo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Getter
@NoArgsConstructor
@AllArgsConstructor
public class SignUpRequest {

    private String username;

    private String password;

    private String studentNum;

    private String name;

    private Integer fieldId;
}
