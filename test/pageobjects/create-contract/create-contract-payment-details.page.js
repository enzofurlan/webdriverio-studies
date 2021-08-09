const Page = require("../page");

class ContractPaymentDetailsPage extends Page {
  get inputRate() { return $("[name=\"rate\"]"); }

  get inputCurrency() { return $("div=USD - US Dollar"); }

  get inputFixedPaymentSchedule() { return $("div=Month"); }

  get inputPYGPaymentSchedule() { return $("div=Hour"); }

  async fillFixedPaymentDetails(rate, currency, schedule) {
    await this.inputRate.setValue(rate);

    await this.inputCurrency.click();
    await $(`div=${currency.toString()}`).click();

    await this.inputFixedPaymentSchedule.click();
    await $(`div=${schedule.toString()}`).click();
  }

  async fillPYGPaymentDetails(rate, currency, schedule) {
    await this.inputRate.setValue(rate);

    await this.inputCurrency.click();
    await $(`div=${currency.toString()}`).click();

    await this.inputPYGPaymentSchedule.click();
    await $(`div=${schedule.toString()}`).click();
  }
}

module.exports = new ContractPaymentDetailsPage();
