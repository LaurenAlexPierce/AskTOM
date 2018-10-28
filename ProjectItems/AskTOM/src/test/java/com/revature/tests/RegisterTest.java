//package com.revature.tests;
//
//import java.util.ArrayList;
//
//import org.openqa.selenium.By;
//import org.openqa.selenium.WebElement;
//import org.openqa.selenium.htmlunit.HtmlUnitDriver;
//import org.testng.annotations.AfterClass;
//import org.testng.annotations.BeforeClass;
//import org.testng.annotations.Test;
//
//import com.gargoylesoftware.htmlunit.BrowserVersion;
//
//public class RegisterTest {
//  public static HtmlUnitDriver driver;
//  public String url;
//  ArrayList<WebElement> elements;
//  
//  public RegisterTest() {
//	  driver = new HtmlUnitDriver(BrowserVersion.CHROME);
//	  url = "http://18.219.234.217:8085/AskTom";
//  }
//  
//  @BeforeClass
//  public void setup() {
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
