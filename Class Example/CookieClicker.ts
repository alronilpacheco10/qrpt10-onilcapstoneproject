import { BasePage } from "./basePage";
import {By} from 'selenium-webdriver'

export class CookieClicker extends BasePage {
    //selectors what we are manipulation
    engBtn: By = By.xpath('')
    bigCookie: By = By.css('')
    legacyBtn: By = By.xpath('//div[text()="Legacy"]')
    ascendBtn: By = By.xpath('')
    reincarnateBtn: By = By.css('')
    yesBtn: By = By.xpath('')
    twitterBtn: By = By.css('')
    constructor() {
        super({url: "https://orteil.dashnet.org/cookieclicker/"})
    }

    async repeatClick(clickAmount, elementClick) {
        for (let i = 0; i < clickAmount; i++){
            await this.click(elementClick)
        }
    }

    async tabSwitch() {
        let myTabs = await this.driver.getAllWindowHandles()
        await this.driver.switchTo().window(myTabs[1])
        await this.driver.sleep(1000)
        await this.driver.close()
        await this.driver.switchTo().window(myTabs[0])
    }

}