package com.revature.util;

import java.io.IOException;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
/**
 * Utility class that uses Jackson to convert a Java <code> Object </code> into
 * its JSON string representation (and vice-versa).
 *
 */
public class JSONUtil {
	private static ObjectMapper objectMapper;
	
	/**
	 * Returns a singleton instance of an ObjectMapper from Jackson Core package
	 * @return <code> ObjectMapper </code>
	 */
	public static ObjectMapper getMapper() {
		if (objectMapper == null)
			objectMapper = new ObjectMapper();
		else
			return objectMapper;
		
		return objectMapper;
	}
	
	/**
	 * Returns <code> String </code> representation of a Java object that is
	 * meant to be written to a JSON file, likely in a HttpResponse document (Content Type: applicaiton/json)
	 * @param obj
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
		} catch (IOException e) {
			e.printStackTrace();
		}
	
		return jsonString;
		
	}
	
	
}
