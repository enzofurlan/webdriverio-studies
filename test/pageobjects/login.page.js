const Page = require("./page");

class LoginPage extends Page {
  get inputEmailAddress() { return $("[name=\"email\"]"); }

  get inputPassword() { return $("[name=\"password\"]"); }

  get btnLogIn() { return $("button[type=\"submit\"]"); }

  get homePageElem() { return $("//*[@id=\"root\"]/div/nav/div/div[1]/ul/div[1]/a/li/div[2]/p"); }

  async login(username, password) {
    await this.inputEmailAddress.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnLogIn.click();
    await browser.waitUntil(() => this.homePageElem.isExisting(), 5000);
  }

  open() {
    return super.open("login");
  }
}

module.exports = new LoginPage();
