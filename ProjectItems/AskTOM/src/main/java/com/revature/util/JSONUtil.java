package com.revature.util;

import java.io.IOException;

import org.apache.log4j.Logger;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
/**
 * Utility class that uses Jackson to convert a Java <code> Object </code> into
 * its JSON string representation.
 *
 */
public class JSONUtil {
	private static Logger log = Logger.getRootLogger();
	
	private static ObjectMapper objectMapper;
	static {
		objectMapper = new ObjectMapper();
	}
	
	/**
	 * Returns <code> String </code> representation of a Java object that is
	 * meant to be written to a JSON file, likely in a HttpResponse document (Content Type: applicaiton/json)
	 * @param obj a Java <code> Object </code> instance
	 * @return <code> String </code> representation of object, or <br />
	 * 			<code> null </code> if object parameter is indeed null
	 */
	public static String convertJavaToJSON(Object obj) {
		String jsonString = null;
		
		try {
			jsonString = new String(objectMapper.writeValueAsString(obj));
			
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			log.warn("EXCEPTION: JsonProcessingException when attempting to write Object as a String");
		} catch (IOException e) {
			e.printStackTrace();
			log.warn("EXCEPTION: IOException when attempting to write Object as a String");
		}
	
		return jsonString;
		
	}
	
	
}
