package com.weja.digitalbankingapi.resources;

import com.weja.digitalbankingapi.models.AccountDetail;
import com.weja.digitalbankingapi.models.AuthencationResponse;
import com.weja.digitalbankingapi.models.AuthenticationRequest;
import com.weja.digitalbankingapi.models.repositories.AccountDetailRepository;
import com.weja.digitalbankingapi.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;


@RestController
public class HomeResource {

    @Autowired
    private MyUserDetailsService userDetailService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtTokenUtil;

    @GetMapping("/")
    public String home()
    {
        return("Welcome");
    }

    @GetMapping("/client")
    public String client()
    {
        return("Welcome client");
    }

    @GetMapping("/employee")
    public String employee()
    {
        return("Welcome employee");
    }

    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity <?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception{
        try
        {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword())
            );
        }
        catch (BadCredentialsException e)
        {
            throw new Exception("Incorret username or password", e);
        }

        final UserDetails userDetails = userDetailService
                .loadUserByUsername(authenticationRequest.getUsername());

        final String jwt = jwtTokenUtil.generateToken(userDetails);

        return ResponseEntity.ok(new AuthencationResponse(jwt));
    }


    @Autowired
    private AccountDetailRepository accountDetailRepository;

    @RequestMapping(value = "/api/AccountDetail", method = RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity <?> accountDetail(HttpServletRequest request)
    {
        final String authorizationHeader = request.getHeader("Authorization");

        if(authorizationHeader != null && authorizationHeader.startsWith("Bearer "))
        {
            final String token = authorizationHeader.substring(7);
            final String username = jwtTokenUtil.extractUsername(token);
            return ResponseEntity.ok(accountDetailRepository.findByUserName(username));
        }
        else
            return ResponseEntity.ok("No Record Found");
    }
}
