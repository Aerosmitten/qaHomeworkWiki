import {By, until, WebDriver, WebElement} from 'selenium-webdriver';
import { elementIsVisible, elementLocated } from 'selenium-webdriver/lib/until';

export class SpecPage {
    driver: WebDriver;
    url: string = 'https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html';
    employee1: By = By.name('employee1'); 

    constructor(driver: WebDriver, url: string) {
        this.driver = driver;
        this.url = url;
    };

    async navigate (){
        await this.driver.get(this.url);
        await this.driver.wait(until.elementLocated(this.employee1));
    };

    async getElement(elementBy: By): Promise<WebElement> {
        await this.driver.wait(until.elementLocated(elementBy));
        let element = await this.driver.findElement(elementBy);
        await this.driver.wait(until.elementIsVisible(element));
        return element;
    };

    async sendKeys(elementBy: By, keys: any) {
        await this.driver.wait(until.elementsLocated(elementBy));
        return this.driver.findElement(elementBy).sendKeys(keys);
    };

    async setInput(elementBy: By, keys: any): Promise<void>{
        let input = await this.getElement(elementBy);
        await input.clear ();
        return input.sendKeys(keys);    
    };

}