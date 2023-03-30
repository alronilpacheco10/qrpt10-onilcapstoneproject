import {By} from "selenium-webdriver"
import {BasePage} from "./basePage"

export class Google extends BasePage {
    remoteserach: By = By.xpath('(//a[@class="d-inline-flex align-center justify-space-between rounded text-decoration-none"])[2]')
    jobcategory: By = By.xpath('(//span[@class="dropdown-trigger-text"])[1]')
    experience: By = By.xpath('(//span[@class="dropdown-trigger-text"])[2]')
    industry: By = By.xpath('(//span[@class="dropdown-trigger-text"])[3]')
    compnaysize: By = By.xpath('(//span[@class="dropdown-trigger-text"])[4]')
    devengr: By = By.xpath('(//span[@class="item-title"])[12]')
    midlevel: By = By.xpath('(//span[@class="item-title"])[2]')
    aerospace: By = By.xpath('(//span[@class="item-icon"])[3]')
    numemployees: By = By.xpath('(//span[@class="item-title"])[3]')
    clearfilter: By = By.xpath('//button[@class="filter-control clear-filters-button"]')
    homepage: By = By.xpath('//img[@class="desktop visible"]')
    searchbutton: By = By.xpath('//button[@class="menu-search"]')
    inputsearch: By = By.xpath('//input[@class="search-input"]')
    viewjobs: By = By.xpath('//a[@href="/jobs"]')
    remotefilter: By = By.xpath('(//button[@class="bix-dropdown-trigger"])[1]')
    remoteselected: By = By.xpath('(//span[@class="item-title"])[2]')


    constructor() {
        super({url: "https://builtin.com/"});
    }   

    
}