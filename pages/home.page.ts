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

    link(url: string) {
        return this.page.locator(`a >> text=${url}`).nth(0)
    }
}

export { HomePage }