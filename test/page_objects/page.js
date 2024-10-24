import { browser } from "@wdio/globals";
class Page {
  async navigate() {
    await browser.url("https://thinking-tester-contact-list.herokuapp.com/");
  }
  get firstNameEdit() {
    return $("//input[@id='firstName']");
  }
  get lastNameEdit() {
    return $("//input[@id='lastName']");
  }
  get emailEdit() {
    return $("//input[@id='email']");
  }
  get passwordEdit() {
    return $("//input[@id='password']");
  }

  get signUpBtn() {
    return $("//button[@id='signup']");
  }

  get submitSignUpBtn() {
    return $("//button[@id='submit']");
  }

  get submitSignInBtn() {
    return $("//button[@id='submit']");
  }
  get logoutBtn() {
    return $("//button[@id='logout']");
  }

  get addContactBtn() {
    return $("//button[@id='add-contact']");
  }

  get deleteContactBtn() {
    return $("//button[@id='delete']");
  }

  get editContactBtn() {
    return $("//button[@id='edit-contact']");
  }

  get contactFirstNameEdit() {
    return $("//input[@id='firstName']");
  }
  get contactLastNameEdit() {
    return $("//input[@id='lastName']");
  }

  get contactBirthdateEdit() {
    return $("//input[@id='birthdate']");
  }

  get contactStreet1Edit() {
    return $("//input[@id='street1']");
  }
  get contactStreet2Edit() {
    return $("//input[@id='street2']");
  }
  get contactCityEdit() {
    return $("//input[@id='city']");
  }
  get contactStateProvinceEdit() {
    return $("//input[@id='stateProvince']");
  }
  get contactPostalCodeEdit() {
    return $("//input[@id='postalCode']");
  }
  get contactCountryEdit() {
    return $("//input[@id='country']");
  }
  get contactEmailEdit() {
    return $("//input[@id='email']");
  }
  get contactPhoneEdit() {
    return $("//input[@id='phone']");
  }
  get contactSubmitBtn() {
    return $("//button[@id='submit']");
  }

  get contactTable() {
    return $("//table[@id='myTable']");
  }

  get firstContactTableItem() {
    return $(
      "//table[@id='myTable']//tr[1][@class='contactTableBodyRow']//td[2]"
    );
  }
  get lastContactTableItem() {
    return $("(//table[@id='myTable']//tr[last()])[2]//td[2]");
  }

  get formContactDetails() {
    return $("//form[@id='contactDetails']");
  }
}

export default new Page();
