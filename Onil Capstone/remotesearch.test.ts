import { Google } from "./builtinPB";
import { BasePage } from "./basePage";
import { Driver } from "selenium-webdriver/chrome";

const builtin = new Google()

test('Search for Remote Jobs', async () => {
    await builtin.navigate()
    await builtin.driver.manage().window().maximize()
    await builtin.driver.sleep(2000)
    await builtin.click(builtin.remoteserach)
    await builtin.click(builtin.jobcategory)
    await builtin.driver.sleep(2000)
    await builtin.click(builtin.devengr)
    await builtin.driver.sleep(2000)
    await builtin.click(builtin.experience)
    await builtin.driver.sleep(2000)
    await builtin.click(builtin.midlevel)
    await builtin.driver.sleep(2000)
    await builtin.click(builtin.industry)
    await builtin.driver.sleep(2000)
    await builtin.click(builtin.aerospace)
    await builtin.driver.sleep(2000)
    await builtin.click(builtin.compnaysize)
    await builtin.driver.sleep(2000)
    await builtin.click(builtin.numemployees)
}) 