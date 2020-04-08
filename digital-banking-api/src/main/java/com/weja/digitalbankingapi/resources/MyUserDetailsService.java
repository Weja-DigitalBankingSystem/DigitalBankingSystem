package com.weja.digitalbankingapi.resources;

import com.weja.digitalbankingapi.models.MyUserDetails;
import com.weja.digitalbankingapi.models.Client;
import com.weja.digitalbankingapi.models.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        Optional<Client> user = userRepository.findByUserName(userName);

        user.orElseThrow(()->new UsernameNotFoundException(userName+"Not Found."));
        return user.map(MyUserDetails::new).get();
    }
}
