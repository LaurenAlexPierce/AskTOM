package com.revature.servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import com.revature.beans.Tom;
import com.revature.daos.TomDao;
import com.revature.daos.TomDaoImpl;
import com.revature.util.JSONUtil;

/**
 * Servlet implementation class LoginServlet
 */
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	Logger log = Logger.getRootLogger();
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Handle login request document from client side, searching for record in db using 'username' parameter
		TomDao userDao = new TomDaoImpl();
		Tom user = null;
		// Set content type of response document
		response.setContentType("application/json");
		String username = null; // Assigned to JSON response document as key-value pair
		Integer privId = -1;
		
		// Get parameters by name from request document
		String inputUsername = request.getParameter("username");
		String inputPassword = request.getParameter("password");
		
		user = userDao.selectTomByUsername(inputUsername);
		
		if (user == null) {
			// ASSERT: User not found,
			// 			empty response document returned to Web Container
			log.info("No user found in database. Returned an empty response document to Web Container.\n"
					+ "Username posted: " + inputUsername );
		} else if (!user.getPassword().equals(inputPassword)) {
			// ASSERT: User found, but passwords do NOT match
			//			so an empty response document of type "application/json" is returned to Web Container
			log.info("Password for username does not match. Returned an empty response document to Web Container.\n"
					+ " Username posted: " + inputUsername );
			
		} else {
			// ASSERT: User found, and passwords match, so return response with string representation of username
			// 			and privId Integer Java Objects (in JSON)
			username = inputUsername;
			privId = user.getPrivId().getId();
			
			// Write JSON string version of username and privId objects to response document
			response.getWriter().write(JSONUtil.convertJavaToJSON(username));
			response.getWriter().write(JSONUtil.convertJavaToJSON(privId));
			
			log.info("User found and password matches. Username and privId Integer returned in JSON format./n"
					+ "Username: " + user.getUsername() + "Privledge Id: " + user.getPrivId());
		}
		
		

		
		// ASSERT: request and response documents sent back to Web Container (then client)
		
	}

}
