//package com.revature.tests;
//
//import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.firefox.FirefoxDriver;
//import org.testng.annotations.AfterClass;
//import org.testng.annotations.BeforeClass;
//import org.testng.annotations.Test;
//
//public class RegisterTest {
//  public static WebDriver driver;
//  public final String url = "http://18.219.234.217:8085/AskTom/register";
//	
//  @BeforeClass
//  public void setup() {
//	  System.setProperty("webdriver.gecko.driver", "drivers/geckodriver");
//	  driver = new FirefoxDriver();
//	  driver.get(url);
//  }
//
//  @AfterClass
//  public void teardown() throws InterruptedException{
//	  driver.quit();
//  }
//  
//  
//  @Test
//  public void registerTom() {
//	  driver.findElement(By.name("register-username")).sendKeys("newUser");
//	  driver.findElement(By.name("register-password")).sendKeys("newPassword");
//	  driver.findElement(By.name("register-password-confirm")).sendKeys("newPassword");
//	  driver.findElement(By.name(""));
//  }
//}
