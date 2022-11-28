import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`);
  await page.goto('');
});

test('to have at least 1 wikipedia link', async ({ page }) => {
  const homePage = new HomePage(page)
  await homePage.searchInputEN.fill('michael jordan');
  await homePage.searchButton.click();
  await expect(homePage.link('wikipedia.org')).toBeVisible()
});


test('to have at least 1 nba.com link', async ({ page }) => {
  const homePage = new HomePage(page)
  await homePage.searchInputEN.fill('michael jordan');
  await homePage.searchButton.click();
  await expect(homePage.link('nba.com')).toBeVisible()
});