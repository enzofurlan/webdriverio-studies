const Page = require("../page");

class ContractExtrasPage extends Page {
  get btnAddClause() { return $("div=add a special clause"); }

  get inputClause() { return $("[class=\"textarea pt-4 pr-7 pl-7 resizable pb-4 \"]"); }

  async fillExtras(clause) {
    await this.btnAddClause.click();
    await this.inputClause.setValue(clause);
  }
}

module.exports = new ContractExtrasPage();
