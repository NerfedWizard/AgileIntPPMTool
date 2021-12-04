package com.loel.configurationData;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.loel.services.MapValidationErrorService;

/**
 * Ask about this and see how to maybe get rid of it or maybe it will be needed
 * at the end of the projects
 */
@Configuration
public class DataSourceConfiguration {
	@Bean
	public com.loel.services.MapValidationErrorService mapValdationErrorService() {
		return new MapValidationErrorService();
	}
}
