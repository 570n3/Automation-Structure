import { Locator, Page } from "@playwright/test";

export class AlertComponent{
    readonly page: Page;


    constructor(page: Page){
        this.page= page;

    }
}