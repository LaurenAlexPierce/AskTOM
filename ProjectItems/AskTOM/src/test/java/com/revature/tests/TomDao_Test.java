package com.revature.tests;

import org.testng.Assert;
import org.testng.annotations.Test;

import com.revature.beans.Privilege;
import com.revature.beans.Tom;
import com.revature.daos.TomDaoImpl;

public class TomDao_Test {
	
	public static TomDaoImpl td = new TomDaoImpl();
	
//	@Test
//	public void testInsert() {
//		
//		//creating new Tom object, and storing id of newly inserted tom object
//		Tom testTom = new Tom();
//		Privilege priv = new Privilege(3,"test");
//		//set fields
//		testTom.setUsername("testName");
//		testTom.setPassword("testTom");
//		testTom.setPrivId(priv);
//		//retrieving the Tom object from database to test if insert worked.
//		int i = td.insertTom(testTom);
//		//set testTom to newly inserted Tom from database
//		testTom = td.selectTomById(i);
//		//set test fields
//		String testUname, testPassword;
//		testUname = testTom.getUsername();
//		testPassword = testTom.getPassword();
//		//assert user-name and password of newly inserted Tom
//		Assert.assertEquals(testUname, "testName");
//		Assert.assertEquals(testPassword, "testTom");
//	}



}
