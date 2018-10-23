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
static Privilege p = new Privilege();
  @BeforeClass
  public void beforeClass() {
	  p.setName("test");
	  p.setId(pd.insertPrivilege(p));
	
  }

  @AfterClass
  public void afterClass() {
	  pd.removePrivilege(p.getId());
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
