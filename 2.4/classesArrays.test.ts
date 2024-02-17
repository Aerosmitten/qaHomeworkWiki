//LOOPS CLASSES ARRAYS AND SELENIUM
//!first step is importing everything we need from selenium-webdriver
import { Builder, Capabilities, By, until, WebDriver, WebElement } from "selenium-webdriver";

const chromedriver = require("chromedriver"); 
const driver = new Builder().withCapabilities(Capabilities.chrome()).build(); 

//create a reusable blueprint for new users
class Employees {
  name: string; 
  phone: number; 
  title: string; 
  
  //use this blueprint with constructor to create an object
  constructor(name:string, phone:number, title:string) {
      this.name = name;
      this.phone = phone;
      this.title = title;
  };
    
}; 

//create a variable called employees, that will use the blueprint we made up above
let employees: Array<Employees> = [
    new Employees("DeeTee", 8002822882, "Mathematician"),
    new Employees("Hilda", 9009012109, "Party Planner"),
    new Employees("Dr Carter", 1010234848, "Time Twister"),
    new Employees("Zebbie", 6936934242, "Adventurer")
]

 //Below are all the various HTML elements that we will be testing with
const addEmployee: By = By.name("addEmployee");
const newEmployee: By = By.xpath('//li[text() = "New Employee"]');
const nameInput: By = By.name("nameEntry");
const phoneInput: By = By.name('phoneEntry');
const titleInput: By = By.name('titleEntry');
const saveBtn: By = By.id('saveBtn');

//create a function which finds the variables described above and does something with them
let myFunc = async (employees) => {
    await driver.findElement(addEmployee).click();
    await driver.findElement(newEmployee).click();
    await driver.findElement(nameInput).clear();
    await driver.findElement(nameInput).sendKeys(employees.name);
    await driver.findElement(phoneInput).clear();
    await driver.findElement(phoneInput).sendKeys(employees.phone);
    await driver.findElement(titleInput).clear();
    await driver.findElement(titleInput).sendKeys(employees.title);
    await driver.findElement(saveBtn).click();
}; 

describe("should add employees to employee manager", () => {
    test("can add employees using myFunc", async () => {
        //pull up form page
        await driver.get("https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html"); 
        //loop through each employee object and call myFunc on them, to add them to employee register
        for(let i = 0; i < employees.length; i++) {
            await myFunc(employees[i]); 
        }; 
        //wait for 3 seconds
        await driver.sleep(3000); 
        //close out of the page
        await driver.quit(); 
    });
});