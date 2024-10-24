import reporter from "./reporter.util.js";

class Obj {
  /** **********************************
  @function clickObject | @author daramos_20241023
  @description Click object
  @param {Object} objElement
  @returns <none>
  ********************************** **/
  async clickObject(objElement) {
    await reporter.addLog("Started Function: clickObject");
    await objElement.waitForExist();
    await objElement.click();
    const strXpath = await objElement.selector;
    await reporter.addLog(
      `Completed Function: clickObject - Successfully Clicked [${strXpath}]`
    );
  }

  /** **********************************
  @function setObjectValue | @author daramos_20241023
  @description Set object value
  @param {Object} objElement
  @param {String} strText
  @returns <none>
  ********************************** **/
  async setObjectValue(objElement, strText) {
    await reporter.addLog("Started Function: setObjectValue");
    await objElement.waitForExist();
    await objElement.setValue(strText);
    const strXpath = await objElement.selector;
    await reporter.addLog(
      `Completed Function: setObjectValue - Object [${strXpath}] Text [${strText}]`
    );
  }

  /** **********************************
  @function getObjText | @author daramos_20241023
  @description Will get objectText
  @param {Object} objElement
  @returns <none>
  ********************************** **/
  async getObjText(objElement) {
    await reporter.addLog("Started Function: getObjText");
    await objElement.waitForExist();
    const strText = await objElement.getText();
    const strXpath = await objElement.selector;
    await reporter.addLog(
      `Completed Function: getObjText - Object [${strXpath}] Text [${strText}]`
    );
    return objElement.getText();
  }

  /** **********************************
  @function getObjText | @author daramos_20241023
  @description Will get objectValue
  @param {Object} objElement
  @returns <none>
  ********************************** **/
  async getObjValue(objElement) {
    await reporter.addLog("Started Function: getObjValue");
    await objElement.waitForExist();
    const strText = await objElement.getValue();
    const strXpath = await objElement.selector;
    await reporter.addLog(
      `Completed Function: getObjValue - Object [${strXpath}] Text [${strText}]`
    );
    return objElement.getValue();
  }
}

export default new Obj();
