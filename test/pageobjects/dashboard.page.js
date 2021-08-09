const Page = require('./page');

class DashboardPage extends Page {
    get btnNext () { return $('div=next') }
    get getCreateContract() { return $('//*[@id="root"]/div/div/div/div[1]/div[1]/h1') }

    async goNext () {
        await this.btnNext.click();
    }

    createFixedRateContract () {
        return super.open('create/fixed');
    }

    createPYGContract () {
        return super.open('create/pay-as-you-go');
    }

}

module.exports = new DashboardPage();
