import { pageObject } from "./2.7PageObject";
const page = new pageObject(); 

class Intern {
   name: string;
   phoneNumber: number;
   title: string;
   constructor(name: string, phoneNumber: number, title: string) {
      this.name = name
      this.phoneNumber = phoneNumber
      this.title = title
   };
}; 

let newInterns: Array<Intern> = [
   new Intern("Leto I Atreides", 5551235687, "Duke"),
   new Intern("Lady Jessica", 5553216879, "Concubine"),
   new Intern("Paul Atreides", 5552315796, "Kwisatz Haderach"),
   new Intern("Leto II Atreides", 6663336969, "God Emperor")
];

let addInterns = async (newInterns) => {
   await page.click(page.addEm); 
   await page.click(page.newEm); 
   await page.setInput(page.namInp, newInterns.name); 
   await page.setInput(page.phoInp, newInterns.phoneNumber); 
   await page.setInput(page.titleInp, newInterns.title); 
   await page.click(page.saveBtn); 
};

test('Can add the Atreides family', async () => {
    await page.navigate(); 
    await page.getElement(page.addEm);
    for(let i= 0; i < newInterns.length; i ++){
        await addInterns(newInterns[i]); 
    }; 
    await page.driver.quit(); 
})