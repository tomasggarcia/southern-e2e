import { Page } from "@playwright/test";

class HomePage {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
    }

    public get searchInputEN() {
        return this.page.getByPlaceholder('Search the web without being tracked')
    }

    public get searchInputES() {
        return this.page.getByPlaceholder('Busca en la red sin que te rastreen')
    }

    public get searchButton() {
        return this.page.getByRole('button', { name: 'S' })
    }

    public get searchResultImage() {
        // return this.page.locator('.results--main >> img').nth(0)
        return this.page.locator('.module module--images >> img').nth(0)
    }

    link(url: string) {
        return this.page.locator(`a >> text=${url}`).nth(0)
    }

    async searchAction(input: string) {
        await this.searchInputEN.fill(input);
        await this.searchButton.click();
    }
}

export { HomePage }