package com.weja.digitalbankingapi;

import com.weja.digitalbankingapi.models.repositories.UserRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackageClasses = UserRepository.class)
public class DigitalBankingApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(DigitalBankingApiApplication.class, args);
	}

}
