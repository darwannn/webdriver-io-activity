import page from "../page_objects/page";
import obj from "../utils/obj.util";
import moment from "moment";
import reporter from "../utils/reporter.util.js";
import { browser } from "@wdio/globals";
import file from "../utils/file.util.js";
describe("Activity", () => {
  const newPostalCode = moment(new Date()).format("MMSS");
  const password = "testing";
  const emailAddress = `test_${moment(new Date()).format(
    "YYYYMMDDHHMM"
  )}2_8@test.com`;
  const dummyData = [
    {
      firstName: "Buen",
      lastName: "Uy",
      dob: "1965-10-01",
      email: "buen@test.com",
      street1: "Sioson",
      street2: "Pama",
      city: "Marilao",
      stateProvince: "Bulacan",
      postalCode: "3019",
      country: "Philippines",
      phone: "09283748556",
    },
    {
      firstName: "Andrea",
      lastName: "San Luis",
      dob: "1925-06-23",
      email: "ane@test.com",
      street1: "Abad",
      street2: "Purok",
      city: "Bamban",
      stateProvince: "Tarlac",
      postalCode: "3023",
      country: "Vietnam",
      phone: "09283735264",
    },
    {
      firstName: "Lewis Jan",
      lastName: "Miranda",
      dob: "1998-05-04",
      email: "lewis@test.com",
      street1: "San Juan",
      street2: "Cruz",
      city: "Dalandanan",
      stateProvince: "Valenzuela",
      postalCode: "5080",
      country: "India",
      phone: "09283735344",
    },
  ];

  it("Fill Sample Form_TC001", async () => {
    await browser.pause(1000);
    reporter.addLog("1. Navigate to thinking tester website");
    console.log(emailAddress);
    await page.navigate();

    reporter.addLog("2. User click the Sign up button");
    await obj.clickObject(page.signUpBtn);

    reporter.addLog("3. User fill first name field.");
    await obj.setObjectValue(page.firstNameEdit, "SampleFirstName");

    reporter.addLog("4. User fill last name field.");
    await obj.setObjectValue(page.lastNameEdit, "SampleLastName");

    reporter.addLog("5. User fill email field.");
    await obj.setObjectValue(page.emailEdit, emailAddress);

    reporter.addLog("6. User fill password field.");
    await obj.setObjectValue(page.passwordEdit, password);

    reporter.addLog("7. Click Submit Button.");
    await obj.clickObject(page.submitSignUpBtn);

    await expect(page.logoutBtn).toExist();
  });

  it("Heroku App Login User_TC002", async () => {
    await browser.pause(1000);
    reporter.addLog("1. Navigate to thinking tester website");
    await page.navigate();

    reporter.addLog("2. User fill email field.");

    await obj.setObjectValue(page.emailEdit, emailAddress);

    reporter.addLog("3. User fill password field.");

    await obj.setObjectValue(page.passwordEdit, password);

    reporter.addLog("4. Click Submit Button.");
    await obj.clickObject(page.submitSignInBtn);

    await expect(page.logoutBtn).toExist();
  });

  it("Heroku App Add Contact TC003", async () => {
    await browser.pause(1000);
    reporter.addLog("1. Navigate to thinking tester website");
    await page.navigate();

    reporter.addLog("2. Login using the save credentials.");

    await obj.setObjectValue(page.emailEdit, emailAddress);

    await obj.setObjectValue(page.passwordEdit, password);

    await obj.clickObject(page.contactSubmitBtn);

    await expect(page.logoutBtn).toExist();

    for (let i in dummyData) {
      reporter.addLog("3. User clicks the Add New Contact Button");
      await obj.clickObject(page.addContactBtn);

      reporter.addLog("4. User fill first name field.");
      await obj.setObjectValue(
        page.contactFirstNameEdit,
        dummyData[i].firstName
      );

      reporter.addLog("5. User fill last name field.");
      await obj.setObjectValue(page.contactLastNameEdit, dummyData[i].lastName);

      reporter.addLog("6. User fill date of birth field.");
      await obj.setObjectValue(page.contactBirthdateEdit, dummyData[i].dob);

      reporter.addLog("7. User fill email field.");
      await obj.setObjectValue(page.contactEmailEdit, dummyData[i].email);

      reporter.addLog("8. User fill street address 1 field.");
      await obj.setObjectValue(page.contactStreet1Edit, dummyData[i].street1);
      await obj.setObjectValue(page.contactPhoneEdit, dummyData[i].phone);

      reporter.addLog("9. User fill street address 2 field.");
      await obj.setObjectValue(page.contactStreet2Edit, dummyData[i].street2);

      reporter.addLog("10. User fill city field.");
      await obj.setObjectValue(page.contactCityEdit, dummyData[i].city);

      reporter.addLog("11. User fill state or province field.");
      await obj.setObjectValue(
        page.contactStateProvinceEdit,
        dummyData[i].stateProvince
      );

      reporter.addLog("12. User fill postal code field.");
      await obj.setObjectValue(
        page.contactPostalCodeEdit,
        dummyData[i].postalCode
      );

      reporter.addLog("13. User fill country field.");
      await obj.setObjectValue(page.contactCountryEdit, dummyData[i].country);

      reporter.addLog("14. Click Submit Button.");
      await obj.clickObject(page.submitSignInBtn);

      await expect(
        $(
          `//table[@id='myTable']//tr//td[text()="${dummyData[i].firstName} ${dummyData[i].lastName}"]`
        )
      ).toExist();
      await expect(
        $(`//table[@id='myTable']//tr//td[text()="${dummyData[i].dob}"]`)
      ).toExist();
      await expect(
        $(`//table[@id='myTable']//tr//td[text()="${dummyData[i].email}"]`)
      ).toExist();
      await expect(
        $(`//table[@id='myTable']//tr//td[text()="${dummyData[i].phone}"]`)
      ).toExist();
      await expect(
        $(
          `//table[@id='myTable']//tr//td[text()="${dummyData[i].street1} ${dummyData[i].street2}"]`
        )
      ).toExist();
      await expect(
        $(
          `//table[@id='myTable']//tr//td[text()="${dummyData[i].city} ${dummyData[i].stateProvince} ${dummyData[i].postalCode}"]`
        )
      ).toExist();
      await expect(page.logoutBtn).toExist();

      await expect(
        $(`//table[@id='myTable']//tr//td[text()="${dummyData[i].country}"]`)
      ).toExist();
    }
  });

  it("Heroku App Edit Contact TC004", async () => {
    await browser.pause(1000);
    reporter.addLog("1. Navigate to thinking tester website");
    await page.navigate();

    reporter.addLog("2. Login using the save credentials.");

    await obj.setObjectValue(page.emailEdit, emailAddress);

    await obj.setObjectValue(page.passwordEdit, password);

    await obj.clickObject(page.submitSignInBtn);

    await expect(page.logoutBtn).toExist();

    reporter.addLog("3. User clicks the first contact on the table");
    await obj.clickObject(page.firstContactTableItem);

    reporter.addLog("4. User clicks the edit contact button");
    await obj.clickObject(page.editContactBtn);

    reporter.addLog("5. User edit the postal code to the date and time today");

    await page.contactPostalCodeEdit.clearValue();
    await browser.pause(2000);
    await obj.setObjectValue(page.contactPostalCodeEdit, newPostalCode);

    reporter.addLog("6. Click Submit Button.");
    reporter.addLog("14. Click Submit Button.");
    await obj.clickObject(page.contactSubmitBtn);

    await expect(page.formContactDetails).toExist();
    await expect(
      $(`//form[@id='contactDetails']//span[text()="${newPostalCode}"]`)
    ).toExist();
  });

  it("Heroku App Delete Contact TC005", async () => {
    await browser.pause(1000);
    reporter.addLog("1. Navigate to thinking tester website");
    await page.navigate();

    reporter.addLog("2. Login using the save credentials.");

    await obj.setObjectValue(page.emailEdit, emailAddress);

    await obj.setObjectValue(page.passwordEdit, password);

    await obj.clickObject(page.submitSignInBtn);

    await expect(page.logoutBtn).toExist();

    reporter.addLog("3. User clicks the last contact on the table");
    const userToDelete = await page.lastContactTableItem;
    await obj.clickObject(page.lastContactTableItem);

    reporter.addLog("4. User clicks the delete contact button");
    await obj.clickObject(page.deleteContactBtn);

    reporter.addLog("5. User clicks OK");
    await browser.acceptAlert();

    await expect(
      $(`//table[@id='myTable']//tr//td[text()="${userToDelete}"]`)
    ).not.toExist();
  });

  it("Heroku App Export Contacts on File_TC006", async () => {
    await browser.pause(1000);
    reporter.addLog("1. Navigate to thinking tester website");
    await page.navigate();

    reporter.addLog("2. Login using the save credentials.");

    await obj.setObjectValue(page.emailEdit, "2024102416104@test.com");

    await obj.setObjectValue(page.passwordEdit, password);

    await obj.clickObject(page.submitSignInBtn);

    await expect(page.contactTable).toExist();

    reporter.addLog(
      "3. User creates a text file containing all the details of the existing contacts in the table."
    );
    await file.createTxtFileReport("");
    const rowCount = await $$(
      '//table[@id="myTable"]//tr[@class="contactTableBodyRow"]'
    );
    console.log("rowCount", rowCount);
    for (let j = 1; j <= rowCount.length; j++) {
      for (let i = 1; i <= 7; i++) {
        const tableHead = await $(
          `//table[@id='myTable']//thead//tr/th[${i}]`
        ).getText();
        const tableRow = await $(
          `//table[@id='myTable']//tr[${j}][@class='contactTableBodyRow']//td[${
            i + 1
          }]`
        ).getText();
        await file.appendTxtFileReport(`${tableHead}:${tableRow}\n`);
        console.log(tableHead, tableRow);
      }
      await file.appendTxtFileReport(`\n\n`);
    }
  });
});
