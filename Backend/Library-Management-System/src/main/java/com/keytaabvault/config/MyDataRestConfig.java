package com.keytaabvault.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
//import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer {
 
	public String theAllowedOrigins = "http://localhost:3000";
	
	//@Override
//	public void configureRepositoryRestConfigurer(RepositoryRestConfigurer config,CorsRegistry cors) {
//		
//	}
}
