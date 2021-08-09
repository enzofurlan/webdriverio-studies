const Page = require("../page");

class ContractGeneralInfoPage extends Page {
  get inputContractName() { return $("[name=\"name\"]"); }

  get inputJobTitle() { return $("[name=\"jobTitle\"]"); }

  get inputScopeWork() { return $("[name=\"scope\"]"); }

  get inputStartDate() { return $("[class=\"calendar-input selected\"]"); }

  get getYesterdayDate() {
    const today = new Date();
    const yesterday = new Date(today);
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];

    yesterday.setDate(yesterday.getDate() - 1);

    const yesterdayElement = `${monthNames[yesterday.getMonth()].toString()
    } ${
      yesterday.getDate().toString()
    }, ${
      yesterday.getFullYear().toString()}`;

    return $(`[aria-label="${yesterdayElement}"]`);
  }

  async fillFixedGeneralInfo(contractName, jobTitle, scopeWork) {
    await this.inputContractName.setValue(contractName);
    await this.inputJobTitle.setValue(jobTitle);
    await this.inputScopeWork.setValue(scopeWork);
    await this.inputStartDate.click();
    await this.getYesterdayDate.click();
  }

  async fillPYGGeneralInfo(contractName, jobTitle, scopeWork) {
    await this.inputContractName.setValue(contractName);
    await this.inputJobTitle.setValue(jobTitle);
    await this.inputScopeWork.setValue(scopeWork);
  }
}

module.exports = new ContractGeneralInfoPage();
