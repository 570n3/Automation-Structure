import { test as base } from "@playwright/test";
import { ePage } from "./homepage.page";
import { FixtureOptions } from "../../interfaces/fixture-options";


type Fixtures = {
    Page: ePage;
    fixtureOptions: FixtureOptions;
};

export const test = base.extend<Fixtures>({
    fixtureOptions: [{}, { option: true }],
    Page: async ({ browser, fixtureOptions }, use) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        const alertsPage = new ePage(page);
        await alertsPage.visit()

        await use(alertsPage);

        await page.close();
    },
});