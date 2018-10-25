package com.revature.servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.revature.beans.Privilege;
import com.revature.daos.PrivilegeDao;
import com.revature.daos.PrivilegeDaoImpl;
import com.revature.daos.TomDao;
import com.revature.daos.TomDaoImpl;

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
		
		
		String inputUsername = request.getParameter("username");
		String password = request.getParameter("password");
		String confirmPassword = request.getParameter("confirmPassword");
		Privilege privId = privDao.selectPrivilegeById(Integer.parseInt(request.getParameter("privId")));
		
		
		
		
	}

}
