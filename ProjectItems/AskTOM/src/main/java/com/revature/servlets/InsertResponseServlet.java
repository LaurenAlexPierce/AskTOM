package com.revature.servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.revature.beans.Response;
import com.revature.beans.Topic;
import com.revature.daos.ResponseDao;
import com.revature.daos.ResponseDaoImpl;
import com.revature.daos.TopicDao;
import com.revature.daos.TopicDaoImpl;

/**
 * Servlet implementation class InsertResponseServlet
 */
public class InsertResponseServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public InsertResponseServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Get assign values to new Response bean
		ResponseDao responseDao = new ResponseDaoImpl();
		TopicDao topicDao = new TopicDaoImpl();
		
		Topic topicId = topicDao.selectTopicById(Integer.parseInt(request.getParameter("topicId")));
		
		// topicDao.getTopicById
		String content = request.getParameter("response-content");
		Integer votes = 0;
		String username = request.getParameter("response-username");
		
		Response newResponse = new Response();
		
		
		
		// responseDao.insertResponse(r);
		
	}

}
