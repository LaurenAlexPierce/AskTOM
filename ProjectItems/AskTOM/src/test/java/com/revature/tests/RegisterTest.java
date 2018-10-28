//package com.revature.tests;
//
//import static org.testng.Assert.assertEquals;
//
//import java.util.ArrayList;
//import java.util.concurrent.TimeUnit;
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
//	  url = "http://18.219.234.217:8085/AskTOM";
//  }
//  
//  @BeforeClass
//  public void setup() {
//	  driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
//	  //takes you to the home page
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
//	  //checks that we are on the home page
//	  assertEquals(driver.getTitle(), "TomAngular");
//	  
//	  //navigates from home page to register page
//	  driver.findElement(By.cssSelector("nav div.col-2 a")).click();
//	  driver.findElement(By.cssSelector("nav a[routerlink=/register]")).click();
//	  
//	  
//	  //utilizes home page
//	  driver.findElement(By.name("register-username")).sendKeys("newUser");
//	  driver.findElement(By.name("register-password")).sendKeys("newPassword");
//	  driver.findElement(By.name("register-password-confirm")).sendKeys("newPassword");
//	  driver.findElement(By.name(""));
//  }
//}
