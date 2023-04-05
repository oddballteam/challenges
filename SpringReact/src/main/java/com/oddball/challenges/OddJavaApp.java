package com.oddball.challenges;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@SpringBootApplication
@Configuration(proxyBeanMethods = false)
@EntityScan("com.oddball.challenges")
public class OddJavaApp {
	public static void main(String[] args) {
		SpringApplication.run(OddJavaApp.class, args);
	}
}