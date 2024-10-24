import fs from "fs";

import moment from "moment";

class File {
  async createTxtFile(strPath, strText) {
    const strDatTime = moment(new Date()).format("YYY-MM-DD HH:MM:SS");
    await fs.writeFile(
      `${strPath}.txt`,
      `[${strDatTime}] ${strText}\n`,
      async (err) => {
        if (err) throw err;
      }
    );
  }

  async createTxtFileReport(strText) {
    await fs.writeFile(`logs/table_report.txt`, strText, async (err) => {
      if (err) throw err;
    });
  }

  async appendTxtFileReport( strText) {
    await fs.appendFile(
      `logs/table_report.txt`,
      strText,
      { flag: "a+" },
      async (err) => {
        if (err) throw err;
      }
    );
  }

  async appendTxtFile(strPath, strText) {
    const strDatTime = moment(new Date()).format("YYY-MM-DD HH:MM:SS");
    await fs.appendFile(
      `${strPath}.txt`,

      `[${strDatTime}] ${strText}\n`,
      { flag: "a+" },
      async (err) => {
        if (err) throw err;
      }
    );
  }

  async deleteFolderContent(strFolder) {
    const arrDir = await fs.readdirSync(strFolder);
    await console.log(arrDir);
    for (const strFile of arrDir) {
      await fs.unlinkSync(`${strFolder}/${strFile}`);
    }
  }
}

export default new File();
