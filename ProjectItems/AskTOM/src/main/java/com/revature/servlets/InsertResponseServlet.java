package com.revature.servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import com.revature.beans.Response;
import com.revature.beans.Tom;
import com.revature.beans.Topic;
import com.revature.daos.ResponseDao;
import com.revature.daos.ResponseDaoImpl;
import com.revature.daos.TomDao;
import com.revature.daos.TomDaoImpl;
import com.revature.daos.TopicDao;
import com.revature.daos.TopicDaoImpl;
import com.revature.util.JSONUtil;

/**
 * Servlet implementation class InsertResponseServlet
 */
public class InsertResponseServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	Logger log = Logger.getRootLogger();
	
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
		response.setContentType("application/json");
		
		String username = request.getParameter("response-username");
		String content = request.getParameter("response-content");
		
		ResponseDao responseDao = new ResponseDaoImpl();
		TopicDao topicDao = new TopicDaoImpl();
		TomDao tomDao = new TomDaoImpl();
		
		// Check Db to make sure Topic and Tom / user exists in db
		Topic topic = topicDao.selectTopicById(Integer.parseInt(request.getParameter("topicId")));
		Tom user = tomDao.selectTomByUsername(username);
		
		Boolean responseSuccess = false;
		
		if (topic != null && user != null) {
			// ASSERT: topic AND user found in db
			//			proceed with populating new Response to be inserted in Db
			Response newResponse = new Response();
			
			newResponse.setUserId(user);
			newResponse.setContent(content);
			newResponse.setTopicId(topic);
			newResponse.setVotes(0);
			
			Integer responseId = responseDao.insertResponse(newResponse);
			
			if (responseId != null) {
				// ASSERT: Response successfully inserted into Db
				responseSuccess = true;
				log.info("Response successfully inserted into Db.");
			}
		}
		
		// ASSERT: servlet response sent back to client in JSON form
		response.getWriter().write(JSONUtil.convertJavaToJSON(responseSuccess));
		
	}

}
