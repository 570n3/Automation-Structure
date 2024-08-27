import { Page } from "@playwright/test";
import { Component } from "./homepage.component";
import pageComponent from "../../components/homepage.component";


export class ePage {

    readonly page: Page;
    readonly alertsComponent: Component;
    readonly alertsTableComponent: pageComponent;
    

    constructor(page: Page) {
        this.page = page;
        this.alertsComponent = new Component(page);
        this.alertsTableComponent = new pageComponent(page);
    }

    async visit() {
        await this.page.goto("/");
        await this.page.waitForLoadState('load');
    }
}
