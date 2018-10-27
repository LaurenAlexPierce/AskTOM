package com.revature.tests;

import java.util.List;

import org.testng.Assert;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;
import com.revature.beans.Tom;
import com.revature.beans.Topic;
import com.revature.daos.PrivilegeDaoImpl;
import com.revature.daos.TopicDaoImpl;

public class TopicDao_Test {
	
	public TopicDaoImpl td = new TopicDaoImpl();
	public PrivilegeDaoImpl pd = new PrivilegeDaoImpl();
	
	@Test
	public void testSelectTopic() {
		//topic at #1 name should = Angular
		Topic topic = td.selectTopicById(1);
		String testName;
		//set testName to topic's name
		testName = topic.getName();
		//tom at id 1 should be 'Angular'
		Assert.assertEquals(testName, "Angular");
	}
	
	@Test
	public void testUpdateTopic() {
		//add new topic as testTopic
		Topic topic = new Topic("TestTopic", pd.selectPrivilegeById(2));
		int i = td.insertTopic(topic);
		//set new name and update
		topic.setName("testName");
		td.updateTopicById(topic);
		//grab topic object from database 
		topic = td.selectTopicById(i);
		String testName = topic.getName();
		//assert, topic's should be "testName"
		Assert.assertEquals(testName, "testName");
		//remove topic added
		td.removeTopic(i);
		Topic testTopic = td.selectTopicById(i);
		//assert that my object is actually null after calling remove
		Assert.assertNull(testTopic);
	}
	
	@Test
	public void testGetAllTopics() {
		//call get all method
				List<Topic> lt = td.getAllTopics();
				//position 1 = Angular
				Topic test1 = lt.get(0);
				//position 2 = Hibernate
				Topic test2 = lt.get(1);
				//set string testers
				String testUname1, testUname2;
				testUname1 = test1.getName();
				testUname2 = test2.getName();
				//assert that user-names match
				Assert.assertEquals(testUname1, "Angular");
				Assert.assertEquals(testUname2, "Hibernate");
	}

}
