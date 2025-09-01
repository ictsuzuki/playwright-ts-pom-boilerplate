import { type Locator, type Page } from '@playwright/test';
import { PATHS } from '../data/paths';
import { BasePage } from './BasePage';

export class SalaryInsightsPage extends BasePage{
    private roleTextField: Locator;
    private countryTextField: Locator;
    private searchButton: Locator;
    private titleResult: Locator;
    private salaryAmount: Locator;

    constructor(page: Page){
        super(page); 
        this.roleTextField = page.locator('input[name=role]');
        this.countryTextField = page.locator('input[name="country"]');
        this.searchButton = page.locator('button[type="submit"]');
        this.titleResult = page.locator('[data-qa="salary-table"] h2');
        this.salaryAmount = page.locator('[data-qa="salary-table"] g.recharts-cartesian-axis-ticks:nth-child(1) div[class]');
    }

    get getTitleResultElem() {
        return this.titleResult;
    }

    get getSalaryAmountElem() {
        return this.salaryAmount;
    }

    async goto() {
        await this.page.goto(`dev/${PATHS.SALARY_INSIGHTS}`);
    }

    async fillRoleTextField(role: string) {
        await this.roleTextField.pressSequentially(role, { delay: 300 });
    }

    async selectCorrectRoleOption(role: string) {
        const roleOption = this.page.locator(`[data-text="${role}"]`);
        await roleOption.click();
    }

    async selectCorrectCountryOption(country: string) {
        const roleOption = this.page.getByText(country);
        await roleOption.click();
    }

    async fillCountryTextFile(country: string) {
        await this.countryTextField.pressSequentially(country, { delay: 200 });
    }

    async clickOnSearchButton() {
        await this.searchButton.click();
    }

    // Flows
    async checkSlaryPerRoleAndCountry(role: string, country: string) {
        await this.fillRoleTextField(role);
        await this.selectCorrectRoleOption(role);
        await this.fillCountryTextFile(country);
        await this.selectCorrectCountryOption(country);
        await this.clickOnSearchButton(); 
        await this.waitForElementToBeVisible(this.titleResult);
    }
}