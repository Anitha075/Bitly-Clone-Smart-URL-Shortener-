package com.url.url_shortener_sb.security.jwt;

import jakarta.persistence.Entity;
import lombok.Data;

@Data
public class JwtAuthenticationResponse {
    private String token;

}
