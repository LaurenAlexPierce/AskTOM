package com.revature.tests;

import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import com.revature.beans.Privilege;
import com.revature.daos.PrivilegeDaoImpl;

public class PrivilegeDao_Test {
	
static PrivilegeDaoImpl pd = new PrivilegeDaoImpl();
static Privilege p = new Privilege();
  @BeforeClass
  public void beforeClass() {

	
  }

  @AfterClass
  public void afterClass() {
	  
  }
  
  @BeforeTest
  public void beforeTest() {
  }

  @Test
  public void selectPrivilegeByIdTest() {
	p = pd.selectPrivilegeById(1);
	String testName = p.getName();
	
	Assert.assertEquals(testName,"admin");
	
  }

  @AfterTest
  public void afterTest() {
  }

}
