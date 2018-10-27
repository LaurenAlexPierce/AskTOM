package com.revature.servlets;

import java.io.IOException;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.revature.beans.Privilege;
import com.revature.beans.Tom;
import com.revature.daos.PrivilegeDao;
import com.revature.daos.PrivilegeDaoImpl;
import com.revature.daos.TomDao;
import com.revature.daos.TomDaoImpl;
import com.revature.util.JSONUtil;
import static com.revature.util.LoggingUtil.log;

/**
 * Servlet implementation class RegisterServlet
 */
public class RegisterServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public RegisterServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Determine how to handle registration if a user is already found to have the same username from request document
		TomDao tomDao = new TomDaoImpl();
		PrivilegeDao privDao = new PrivilegeDaoImpl();
		// Set response content type to json
		response.setContentType("appliction/json");
		Boolean registerSuccess = false; // Wrapper object to be written in response document and handled by Angular
		Tom newTom = null;
		
		
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		String confirmPassword = request.getParameter("passwordConfirm");
		Privilege privId = privDao.selectPrivilegeById(Integer.parseInt(request.getParameter("privId")));
		
		Tom tomInDb = tomDao.selectTomByUsername(username);
		log.trace("Inside RegisterServlet: Checking if Tom is NOT in Db and password and confirm password are equal.");
		
		if (tomInDb == null && password.equals(confirmPassword)) {
			// ASSERT: (AFFIRMATIVE BRANCH) No user found in Db with same username
			//			AND password equals confirmPassword
			log.trace("Inside RegisterServlet: Checking if Tom is in Db and password and confirm password are equal.");
			newTom = new Tom();
			newTom.setUsername(username);
			newTom.setPassword(password);
			newTom.setPrivId(privId);
			
			if(tomDao.insertTom(newTom) != null) {
				registerSuccess = true;
				log.info("New user (Tom) successfully inserted into Db");
			}
			
		}
		
		// Send JSON response doc back with key: "registerSuccess" and value: true or false to be handled
		// in Angular
		response.getWriter().write(JSONUtil.convertJavaToJSON(registerSuccess));
	}

}
