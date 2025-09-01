import { test, expect } from '@playwright/test';
import { SalaryInsightsPage } from '../pages/salaryInsights.page';
import { ROLES, COUNTRIES } from '../data/testData';


test.describe('Salary range test cases', () => {
  test.beforeEach(async ({ page }) => {
    const salaryInsightsPage = new SalaryInsightsPage(page);

    await salaryInsightsPage.goto();
  });

  test('Role: Accountant - Country: Brazil', async ({ page }) => {
    const salaryInsightsPage = new SalaryInsightsPage(page);

    await salaryInsightsPage.checkSlaryPerRoleAndCountry(ROLES.ACCOUNTANT, COUNTRIES.BRAZIL);
    
    expect(salaryInsightsPage.getTitleResultElem).toContainText(ROLES.ACCOUNTANT);
    expect(salaryInsightsPage.getTitleResultElem).toContainText(COUNTRIES.BRAZIL);
    expect(salaryInsightsPage.getSalaryAmountElem).not.toBeNull();
  });

  test('Role: QA Automation Engineer - Country: Canada', async ({ page }) => {
    const salaryInsightsPage = new SalaryInsightsPage(page);

    await salaryInsightsPage.checkSlaryPerRoleAndCountry(ROLES.QA_ENGINEER, COUNTRIES.CANADA);
    
    expect(salaryInsightsPage.getTitleResultElem).toContainText(ROLES.QA_ENGINEER);
    expect(salaryInsightsPage.getTitleResultElem).toContainText(COUNTRIES.CANADA);
    expect(salaryInsightsPage.getSalaryAmountElem).not.toBeNull();
  });

  test('Role: Software Engineer - Country: Japan', async ({ page }) => {
    const salaryInsightsPage = new SalaryInsightsPage(page);

    await salaryInsightsPage.checkSlaryPerRoleAndCountry(ROLES.SOFTWARE_ENGINEER, COUNTRIES.JAPAN);
    
    expect(salaryInsightsPage.getTitleResultElem).toContainText(ROLES.SOFTWARE_ENGINEER);
    expect(salaryInsightsPage.getTitleResultElem).toContainText(COUNTRIES.JAPAN);
    expect(salaryInsightsPage.getSalaryAmountElem).not.toBeNull();
  });
})




