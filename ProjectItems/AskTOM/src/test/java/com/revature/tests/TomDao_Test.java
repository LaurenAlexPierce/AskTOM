package com.revature.tests;

import java.util.List;

import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.Test;

import com.revature.beans.Privilege;
import com.revature.beans.Tom;
import com.revature.daos.PrivilegeDaoImpl;
import com.revature.daos.TomDaoImpl;

public class TomDao_Test {
	
	public static TomDaoImpl td = new TomDaoImpl();
	public static PrivilegeDaoImpl pd = new PrivilegeDaoImpl();
	
	@Test
	public void testInsert() {
		
		//creating new Tom object, and storing id of newly inserted tom object
		Tom testTom = new Tom();
		Privilege priv = pd.selectPrivilegeById(2);
		//set fields
		testTom.setUsername("testName");
		testTom.setPassword("testTom");
		testTom.setPrivId(priv);
		//retrieving the Tom object from database to test if insert worked.
		int i = td.insertTom(testTom);
		//set testTom to newly inserted Tom from database
		testTom = td.selectTomById(i);
		//set test fields
		String testUname, testPassword;
		testUname = testTom.getUsername();
		testPassword = testTom.getPassword();
		//assert user-name and password of newly inserted Tom
		Assert.assertEquals(testUname, "testName");
		Assert.assertEquals(testPassword, "testTom");
	}
	@Test
	public void testUpdate() {
		//set tom object
		Tom tom = td.selectTomByUsername("testName");
		tom.setPassword("testUpdate");
		//update with new password
		td.updateTomById(tom);
		String testPass = tom.getPassword();
		//assert
		Assert.assertEquals(testPass, "testUpdate");
	}
	@AfterTest
	public void teardown() {
		Tom tom = td.selectTomByUsername("testName");
		td.removeTom(tom.getId());
	}

	@Test
	public void testRetrieveById() {
		//create a tom and use 'selectTomById'
		Tom tom = td.selectTomById(1);
		String testName;
		//set user-name = to tom objects
		testName = tom.getUsername();
		//tom at id 1 should be 'lauren'
		Assert.assertEquals(testName, "lauren");
	}

	@Test
	public void testRetrieveByUname() {
		//set field user-name 'carmani'
		String enterName = "carmani";
		//get tom by 'enterName'
		Tom tom = td.selectTomByUsername(enterName);
		String testName;
		//set testName = to retrieved tom's user-name
		testName = tom.getUsername();
		//name should be 'carmani'
		Assert.assertEquals(testName, "carmani");
	}
	
	@Test
	public void testGetToms() {
		//call get all method
		List<Tom> lt = td.getAllToms();
		//position 2 = greg
		Tom test1 = lt.get(1);
		//position 4 = erik
		Tom test2 = lt.get(3);
		//set string testers
		String testUname1, testUname2;
		testUname1 = test1.getUsername();
		testUname2 = test2.getUsername();
		//assert that user-names match
		Assert.assertEquals(testUname1, "greg");
		Assert.assertEquals(testUname2, "erik");
		
	}



}
