package com.revature.tests;

import java.util.List;

import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import com.revature.beans.Privilege;
import com.revature.daos.PrivilegeDaoImpl;

public class PrivilegeDao_Test {

	static PrivilegeDaoImpl pd = new PrivilegeDaoImpl();
	static Privilege p = new Privilege();


	@Test
	public void selectPrivilegeByIdTest() {
		//retrieving id by previously inserted administrator id of '1'
		p = pd.selectPrivilegeById(1);
		String testName = p.getName();

		Assert.assertEquals(testName, "admin");
	}

	@Test
	public void insertPrivilegeTest() {
		//creating new Privilege object, and storing id of newly inserted privilege object
		Privilege testPriv = new Privilege();
		testPriv.setName("test");
		int testId = pd.insertPrivilege(testPriv);
		//retrieving the privilege object from database to test if insert worked.
		Privilege testPriv2 = pd.selectPrivilegeById(testId);
		String testName = testPriv2.getName();
		//since no method can retrieve newly inserted privilege due to sequence unknown
		//we remove privilege here as we can't know id to remove in a AfterClass.
		pd.removePrivilege(testPriv2.getId());
		//test inserted value of privilege's name
		Assert.assertEquals(testName, "test");
	}

	@Test
	public void getAllPrivilegesTest() {
		List<Privilege> listTest = pd.getAllPrivileges();
		String testName1, testName2;
		//set testName1 = to first element's name of retrieved list
		Privilege p = listTest.get(0);
		testName1 = p.getName();
		//set testName2 = to second element's name of retrieved list
		p = listTest.get(1);
		testName2 = p.getName();
	
		/*
		 * getAll method will return ALL of the privileges.
		 * We will only test this method against the privileges 
		 * that we know will always be in the list regardless of 
		 * how many new privileges are added. 
		 */
		Assert.assertEquals(testName1, "admin");
		Assert.assertEquals(testName2, "user");
	}
	
	@Test
	public void updatePrivilegeTest() {
		//insert new privilege to test for updating the name field
		int testId = pd.insertPrivilege(new Privilege("tester"));
		Privilege p = pd.selectPrivilegeById(testId);
		//change name of 'p', then call update()
		p.setName("testUpdate");
		pd.updatePrivilegeById(p);
		//retrieve privilege from database to test if update worked
		p = pd.selectPrivilegeById(testId);
		String testName = p.getName();
		//since no method can retrieve newly inserted privilege due to sequence unknown
		//we remove privilege here as we can't know id to remove in a AfterClass.
		pd.removePrivilege(testId);
		//test if updated name worked
		Assert.assertEquals(testName, "testUpdate");
	}
}
