const LoginPage = require("../pageobjects/login.page");
const DashboardPage = require("../pageobjects/dashboard.page");
const ContractGeneralInfoPage = require("../pageobjects/create-contract/create-contract-general-info.page");
const ContractPaymentDetailsPage = require("../pageobjects/create-contract/create-contract-payment-details.page");
const ContractCompliancePage = require("../pageobjects/create-contract/create-contract-compliance.page");
const ContractsPage = require("../pageobjects/contracts/contracts.page");

const testDataObject = require("../test-data.json");

describe("Create a Contract Page", () => {
  before(async () => {
    await LoginPage.open();
    await LoginPage.login(
      testDataObject[0].username,
      testDataObject[0].password,
    );
  });

  after(async () => {
    await ContractsPage.openContracts();
    await ContractsPage.cancelContract();
  });

  it("should create a pay as you go rate contract", async () => {
    await DashboardPage.createPYGContract();
    await ContractGeneralInfoPage.fillPYGGeneralInfo(
      testDataObject[2].contractName,
      testDataObject[2].jobTitle,
      testDataObject[2].scopeOfWork,
    );
    await DashboardPage.goNext();
    await ContractPaymentDetailsPage.fillPYGPaymentDetails(
      testDataObject[2].rate,
      testDataObject[2].currency,
      testDataObject[2].paymentSchedule,
    );
    await DashboardPage.goNext();
    await browser.pause(1000); // found an issue that if datetime is not loaded, contract can't be created.
    await DashboardPage.goNext();
    await DashboardPage.goNext();
    await ContractCompliancePage.fillCompliance(
      testDataObject[2].residenceCountry,
      testDataObject[2].residenceState,
    );
    await ContractCompliancePage.createContract();
    await expect(DashboardPage.getCreateContract).toHaveText(testDataObject[2].contractName);
  });
});
