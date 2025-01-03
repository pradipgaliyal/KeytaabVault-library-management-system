package com.keytaabvault.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import com.keytaabvault.entity.Book;

@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer {
 
	public String theAllowedOrigins = "http://localhost:3000";
	
	@Override
	public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config,CorsRegistry cors) {
		
		HttpMethod unsportedActions[] = {HttpMethod.POST,HttpMethod.PATCH,HttpMethod.PUT,HttpMethod.DELETE};
		config.exposeIdsFor(Book.class);
		disableHttpMethods(Book.class, config, unsportedActions);
		
		/*Configure CORS Mapping*/
		cors.addMapping(config.getBasePath()+"/**")
		.allowedOrigins(theAllowedOrigins);
	}
	
	private void disableHttpMethods(Class theClass, RepositoryRestConfiguration config , HttpMethod []unsupportedActions) {
		config.getExposureConfiguration()
		.forDomainType(theClass)
		.withItemExposure((metdata,httpMethods) ->httpMethods
				.disable(unsupportedActions))
		.withCollectionExposure((metdata,httpMethods)-> 
		httpMethods.disable(unsupportedActions));
	}
}
