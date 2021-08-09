const Page = require('../page');

class ContractsPage extends Page {
    get btnCancelContract () { return $('[data-original-title="Cancel"]') }
    get btnConfirm() { return  $('div=yes, cancel') }

    async cancelContract () {
        await this.btnCancelContract.click();
        await browser.waitUntil(() => {
            return this.btnConfirm.isExisting()
        }, 5000);

        await this.btnConfirm.click();
        await browser.waitUntil(() => {
            return this.btnConfirm.waitForExist({ reverse: true })
        }, 5000);
    }

    openContracts () {
        return super.open('contracts');
    }

}

module.exports = new ContractsPage();