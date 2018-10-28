package com.revature.servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.revature.beans.Response;
import com.revature.daos.ResponseDao;
import com.revature.daos.ResponseDaoImpl;
import com.revature.util.JSONUtil;
import static com.revature.util.LoggingUtil.log;

/**
 * Servlet implementation class UpvoteServlet
 */
public class UpvoteServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UpvoteServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Increment number of votes for a particular response
		Integer responseId = Integer.parseInt(request.getParameter("responseId"));
		
		ResponseDao responseDao = new ResponseDaoImpl();
		
		Response responseToUpvote = responseDao.selectResponseById(responseId);
		
		Integer currentVotes = responseToUpvote.getVotes(); 
		
		if (responseToUpvote != null) {
			// ASSERT: response retrieved from Db,
			//				proceed with incrementing its votes and updating its record in Db
			responseToUpvote.setVotes(++currentVotes);
			
			Response updatedResponse = responseDao.updateResponseById(responseToUpvote);
			
			if (updatedResponse != null) {
				// ASSERT: response successfully updated in Db
				response.getWriter().print(JSONUtil.convertJavaToJSON(currentVotes));
				log.info("Response upvoted. Response ID: " + updatedResponse.getId() +
							" Current votes: " + updatedResponse.getVotes());
			}
			
			
		}
	}

}
