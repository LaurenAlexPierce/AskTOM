package com.revature.servlets;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import com.revature.beans.Topic;
import com.revature.daos.TopicDao;
import com.revature.daos.TopicDaoImpl;
import com.revature.util.JSONUtil;

/**
 * Servlet implementation class GetAllTopicsServlet
 */
public class GetAllTopicsServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	Logger log = Logger.getRootLogger();
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetAllTopicsServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Retrieve all Topic beans from TopicDao and convert them to JSON string to be sent back to Web Container (then client)
		TopicDao topicDao = new TopicDaoImpl();
		// Set content type of response document
		response.setContentType("application/json");
		List<Topic> topics = null;
		
		topics = topicDao.getAllTopics();
		
		if (topics == null) {
			// ASSERT: DB contains no topics
			// 			return empty response document
		} else {
			// ASSERT: List of Topic beans returned from TopicDAO,
			//			Write list as JSON string to response document
			String topicsJSONString = JSONUtil.convertJavaToJSON(topics);
			response.getWriter().write(topicsJSONString);
			log.info("Topics found. List of Topic objects returned in JSON format.");
		}
		
		// ASSERT: request and response documents sent back to Web Container (then client)
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
