import { Google } from './googlePage'
import { Driver } from 'selenium-webdriver/chrome'
const fs = require('fs')
const google = new Google()

test('do a search', async () => {
    await google.navigate()
    await google.search('fry bread')
    let text = await google.getResults()
    expect(text).toContain('fry bread')
    await fs.writeFile(`${__dirname}/google.png`,
    await google.driver.takeScreenshot(), "base64",
    async (e) => {
        if (e) console.error(e)
        else console.log('save succesful')
    
})
    fs.writeFile(`${__dirname}/text.txt`, text, (e) => {
        if (e) console.error(e)
        else console.log('Save sSccesful')
    })
})   
afterAll(async () => {
    await google.driver.quit()
})