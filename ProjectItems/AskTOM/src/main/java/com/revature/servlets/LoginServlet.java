package com.revature.servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.revature.beans.Tom;
import com.revature.daos.TomDao;
import com.revature.daos.TomDaoImpl;
import com.revature.util.JSONUtil;

/**
 * Servlet implementation class LoginServlet
 */
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
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
		
		// Get parameters by name from request document
		String inputUsername = (String)request.getParameter("username");
		String inputPassword = (String)request.getParameter("password");
		
		user = userDao.selectTomByUsername(inputUsername);
		
		if (user == null) {
			// ASSERT: User not found
		} else if (!user.getPassword().equals(inputPassword)) {
			// ASSERT: User found, but passwords do NOT match
			
		} else {
			// ASSERT: User found, and passwords match
		}
		response.getWriter().write(JSONUtil.convertJavaToJSON(user));
		
		
		

	}

}
