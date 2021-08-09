const LoginPage = require("../pageobjects/login.page");
const DashboardPage = require("../pageobjects/dashboard.page");
const ContractGeneralInfoPage = require("../pageobjects/create-contract/create-contract-general-info.page");
const ContractPaymentDetailsPage = require("../pageobjects/create-contract/create-contract-payment-details.page");
const ContractExtrasPage = require("../pageobjects/create-contract/create-contract-extras.page");
const ContractCompliancePage = require("../pageobjects/create-contract/create-contract-compliance.page");
const ContractsPage = require("../pageobjects/contracts/contracts.page.js");

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

  it("should create a fixed rate contract", async () => {
    await DashboardPage.createFixedRateContract();
    await ContractGeneralInfoPage.fillFixedGeneralInfo(
      testDataObject[1].contractName,
      testDataObject[1].jobTitle,
      testDataObject[1].scopeOfWork,
    );
    await DashboardPage.goNext();
    await ContractPaymentDetailsPage.fillFixedPaymentDetails(
      testDataObject[1].rate,
      testDataObject[1].currency,
      testDataObject[1].paymentSchedule,
    );
    await DashboardPage.goNext();
    await DashboardPage.goNext();
    await ContractExtrasPage.fillExtras(
      testDataObject[1].specialClause,
    );
    await DashboardPage.goNext();
    await ContractCompliancePage.fillCompliance(
      testDataObject[1].residenceCountry,
      testDataObject[1].residenceState,
    );
    await ContractCompliancePage.createContract();

    await expect(DashboardPage.getCreateContract).toHaveText(testDataObject[1].contractName);
  });
});
