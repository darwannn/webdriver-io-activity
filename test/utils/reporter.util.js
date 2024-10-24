import allure from "@wdio/allure-reporter";

import file from "./file.util";

class Reporter {
  async addLog(strMsg) {
    await file.appendTxtFile(global.strPath, strMsg);
    await allure.addStep(strMsg);
  }
}

export default new Reporter();
