const Page = require('../page');

class ContractCompliancePage extends Page {
    get inputCountry() { return  $('div=Select country') }
    get inputState() { return  $('div=Choose a state') }
    get btnCreateContract() { return  $('div=create contract') }
    get homePageElem () { return $ ('div=Cancel contract')}


    async fillCompliance (country, state) {
        await this.inputCountry.click();
        await $("div=" + country.toString()).click();

        await this.inputState.click();
        await $("div=" + state.toString()).click();
    }

    async createContract () {
        await this.btnCreateContract.click();
        await browser.waitUntil(() => {
            return this.homePageElem.isExisting()
        }, 5000);
    }

}

module.exports = new ContractCompliancePage();
