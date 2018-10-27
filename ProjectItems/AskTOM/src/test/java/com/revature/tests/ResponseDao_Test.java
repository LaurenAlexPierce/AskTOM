package com.revature.tests;

import java.util.List;

import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import com.revature.beans.Response;
import com.revature.beans.Tom;
import com.revature.beans.Topic;
import com.revature.daos.PrivilegeDaoImpl;
import com.revature.daos.ResponseDaoImpl;
import com.revature.daos.TomDaoImpl;
import com.revature.daos.TopicDaoImpl;

public class ResponseDao_Test {
	
	//create daos needed for testing
	ResponseDaoImpl rd = new ResponseDaoImpl();
	TomDaoImpl td = new TomDaoImpl();
	TopicDaoImpl tpd = new TopicDaoImpl();
	PrivilegeDaoImpl pd = new PrivilegeDaoImpl();
	//placeholder for the id of the inserted object we are testing
	int i;

  @BeforeClass
  public void setupResponse() {
	  //insert a response in database for testing
	  Tom testTom = td.selectTomById(1);
	  Topic topic = tpd.selectTopicById(1);
	  Response r = new Response("testing",0, topic,testTom);
	  i = rd.insertResponse(r);
  }
  
  @AfterClass
  public void teardownResponse() {
	  //remove response from database post testing
	  rd.removeResponse(i);
  }
  @Test
  public void testSelectResponse() {
	 //grab response by test inserted response 
	 Response res = rd.selectResponseById(i);
	 //set testing fields for content
	 String testContent = res.getContent();
	 //test the content should = testing
	 Assert.assertEquals(testContent, "testing");
  }
  @Test
  public void testUpdateResponse() {
	  //set a response object to our testing object at ID = i
	  Response r = rd.selectResponseById(i);
	  //change content
	  r.setContent("test1");
	  //update object to new content in database
	  rd.updateResponseById(r);
	  //reset object
	  r = null;
	  //grab object from database
	  r = rd.selectResponseById(i);
	  //set testing field for content
	  String testContent = r.getContent();
	  //assert that the content = test1 as intended
	  Assert.assertEquals(testContent, "test1");
  }
  @Test
  public void testGetAll() {
	  //get list of all response objects that exist
	  List<Response> rl = rd.getAllResponse();
	  //create a response placeholder to test against
	  Response testR = new Response();
	  //iterate to find proper test response we created
	  for(Response r : rl) {
		  if(r.getId()==i)
		  {
			  testR = r;
		  }
	  }
	  //set test field content
	  String testContent = testR.getContent();
	  //assert: testContent should equal testing
	  Assert.assertEquals(testContent, "testing");
  }
  @Test
  public void testGetAllResponsesByTopic() {
	  //get list of all response objects that exist by a specific id
	  List<Response> rl = rd.getAllResponseByTopic(1);
	  //create a response placeholder to test against
	  Response testR = new Response();
	  //iterate to find proper test response we created
	  for(Response r : rl) {
		  if(r.getId()==i) {
			  testR = r;
		  }
	  }
	  //set test field content
	  String testContent = testR.getContent();
	  //assert: testContent should equal testing
	  Assert.assertEquals(testContent, "testing");
  }
}
