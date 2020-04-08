package com.weja.digitalbankingapi.models;

public class AuthencationResponse {

    private final String jwt;
    private final String loginpermitted = "permitted";

    public AuthencationResponse(String jwt)
    {
        this.jwt = jwt;
    }

    public String getJwt()
    {
        return jwt;
    }

    public String getLoginpermitted() {
        return loginpermitted;
    }
}
