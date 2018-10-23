package com.revature.tests;

import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import com.revature.beans.Privilege;
import com.revature.daos.PrivilegeDaoImpl;

public class PrivilegeDao_Test {
	
static PrivilegeDaoImpl pd = new PrivilegeDaoImpl();
	
  @BeforeClass
  public void beforeClass() {
	  Privilege p = new Privilege();
	  p.setId(3);
	  p.setName("test");
	  pd.insertPrivilege(p);
  }

  @AfterClass
  public void afterClass() {
	  pd.removePrivilege(3);
  }
  
  @BeforeTest
  public void beforeTest() {
  }

  @Test
  public void f() {
  }

  @AfterTest
  public void afterTest() {
  }

}
