import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`);
  await page.goto('');
});

test('to have at least 1 wikipedia link', async ({ page }) => {
  const homePage = new HomePage(page)
  await homePage.searchInput.fill('michael jordan');
  await homePage.searchButton.click();
  console.log(await homePage.wikipediaLink.count())
  expect(await homePage.wikipediaLink).toHaveCount(5)
});
