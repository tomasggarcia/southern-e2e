import { Page } from "@playwright/test";

class HomePage {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
    }

    public get searchInput() {
        return this.page.getByPlaceholder('Search the web without being tracked')
    }

    public get searchButton() {
        return this.page.getByRole('button', { name: 'S' })
    }

    public get wikipediaLink() {
        // return this.page.getByRole('link', { name: 'Wikipedia' })
        return this.page.locator('text=w')
    }
}

export { HomePage }