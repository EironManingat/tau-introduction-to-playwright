import { expect, Locator, Page } from '@playwright/test';


export class UpdatedTopMenuPage{
    //AAA
    //Arrange
    //Act
    //Assert 
    readonly page:Page;
    readonly pwForJava:Locator;
    readonly docsLink:Locator
    readonly apiLink:Locator;
    readonly javaLink:Locator;
    readonly communityLink:Locator;
    readonly gitHubLink:Locator;
    readonly discordLink:Locator;
    readonly nightMode:Locator;
    readonly searchIcon:Locator;
    readonly searchPlaceholder:Locator;

    constructor (page:Page){
        this.page = page;
        this.pwForJava = page.getByRole('link',{name:'Playwright for Java'});
        this.docsLink = page.getByRole('link', {name:'Docs'});
        this.apiLink = page.getByRole('link',{name:'API'});
        this.javaLink = page.getByRole('button',{name:'Java'});
        this.communityLink = page.getByRole('link',{name:'Community'});
        this.gitHubLink = page.getByRole('link',{name:'GitHub repository'})
        this.discordLink = page.getByRole('link',{name:'Discord server'})
        this.nightMode = page.getByRole('button',{name:'Switch between dark and light mode'});
        this.searchIcon = page.getByRole('button', {name:'Search'});
        this.searchPlaceholder = page.locator('.DocSearch-Button-Placeholder');
    }

    async clickJava(){
        await this.pwForJava.click();
    }

    async clickDocs(){
        await this.docsLink.click();
    }
    
    async clickAPIs(){
        await this.apiLink.click();
    }

    async clickCommunity(){
        await this.communityLink.click();
    }

    async clickGitHub(){
        await this.gitHubLink.click();
    }

    async clickDiscord(){
        await this.discordLink.click();
    }

    async clickNightMode(){
        await this.nightMode.isVisible();
    }

    async clickSearchButton(){
        await this.searchIcon.click();
    }

    async assertSearchPlaceholder(){
        await this.searchPlaceholder.isVisible();
    }
}
export default UpdatedTopMenuPage;