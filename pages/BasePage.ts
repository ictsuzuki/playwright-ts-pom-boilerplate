import { expect, type Locator, type Page } from '@playwright/test';
import { PATHS } from '../data/paths';

export class BasePage {
    protected page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async waitForElementToBeVisible(element: Locator) {
        return element.waitFor({state: 'visible'});
    }
}