import { LightningElement, wire } from "lwc";
import { getRecordCreateDefaults } from "lightning/uiRecordApi";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";

export default class GetRecordCreateDefaultDemo extends LightningElement {
  tableHeader;
  tableBody;
  @wire(getRecordCreateDefaults, {
    objectApiName: ACCOUNT_OBJECT.objectApiName
  })
  recordCreateDefaults({ data, error }) {
    if (data) {
      console.log(data);
      const { fields } = data.objectInfos.Account;
      this.tableHeader = ["apiName", "length", "required", "lable", "dataType"];
      this.tableBody = Object.keys(fields).map((item) => {
        const { apiName, dataType, length, required, label } = fields[item];
        return { apiName, dataType, length, label, required };
      });

      console.log("Tbody " + JSON.stringify(this.tableBody));
    }
    if (error) {
      console.log(error);
    }
  }
}
