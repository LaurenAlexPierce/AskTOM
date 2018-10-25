package com.revature.servlets;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.revature.beans.Response;
import com.revature.daos.ResponseDao;
import com.revature.daos.ResponseDaoImpl;

/**
 * Servlet implementation class GetAllResponsesForTopicServlet
 */
public class GetAllResponsesForTopicServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetAllResponsesForTopicServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Get Topic_id parameter from request and search db for corresponding responses
		ResponseDao responseDao = new ResponseDaoImpl();
		
		List<Response> responses = null;
		
		Integer topicId = Integer.parseInt(request.getParameter("topicId"));
		
		
		
		
		
		
	}

}
