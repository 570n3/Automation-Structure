import { expect } from "@playwright/test";
import { test } from "../../../pages/homepage/homepage.fixture";
import { STORAGE_PATH } from "../../../constants/storage-path";

test.describe.configure({ mode: "parallel" });

test.use({
  fixtureOptions: { sessionStoragePath: STORAGE_PATH.CUSTOMER_ADMIN },
});

test.afterEach(async ({ context }) => { 
  await context.close();
});

test("Test-01: Verify User logged in", async () => {

});

test("Test-02: Verify Table Column Names", async () => {


});

