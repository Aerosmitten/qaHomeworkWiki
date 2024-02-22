import { SpecPage } from "./employeeManagerPage";
const chromedriver = require("chromedriver");
import { WebDriver, By, Builder, until, Capabilities } from "selenium-webdriver";

const driver: WebDriver = new Builder()
.withCapabilities(Capabilities.chrome())
.build();

const page = new SpecPage(driver, 'https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html');

const bernice: By = By.name("employee1")
const nameInput: By = By.name("nameEntry")
const saveButton: By = By.id("saveBtn")
const addEmployee: By = By.name("addEmployee")
const phillip: By = By.name("employee3")
const titleInput: By = By.name("titleEntry")

//I want to write three tests:

// First test: Create a test for changing Bernice Ortiz's name
// Second test: Create a test to crete a new employee
// Third test: Create a test to give Phillip a promotion by changing his title

describe("Employee Manager v1.2 ", () => {

    beforeEach(async () => {
        await driver.get(
            "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html"
        );
      });
      afterAll(async () => {
        await driver.quit();
      });
      describe("Creating a test for changing Bernice Ortiz's name", () => {
        test("Changing an employee's name", async () => {

            // Steps for the First Test:
//1. Click on "Bernice Ortiz" to open the employee card
//2. Click into the name input field
//3. Clear the name input field
//4. Enter the new name
//5. Locate and click the save button

await driver.findElement(bernice).click();
await driver.wait(until.elementIsVisible(await driver.findElement(nameInput)));
await driver.findElement(nameInput).clear();
await driver.findElement(nameInput).sendKeys("Oreo Ritz");
await driver.findElement(saveButton).click();
        });
      });

      describe("New Employee", () => {
        test("Adding a New Employee", async () => {

//Steps for the Second Test:
//1. Locate and click the "+ Add Employee" button
// Not quite sure if I'm needing to edit the new employee or just creating a new employee card 

await driver.findElement(addEmployee).click ();
await driver.wait(until.elementIsVisible);
        });
      });

      describe("Give him a promotion!", () => {
        test("Phillip gets promoted", async () => {

//Steps for the Third Test:
//1. Click on Phillip Weaver
//2. Click into the title input field
//3. Clear the title input field
//4. Enter the new title
//5. Locate and click the save button

await driver.findElement(phillip).click ();
await driver.wait(until.elementIsVisible(await driver.findElement(titleInput)));
await driver.findElement(titleInput).clear ();
await driver.findElement(titleInput).sendKeys("Manager of Managers");
await driver.findElement(saveButton).click ();
        });
      });
}); 



