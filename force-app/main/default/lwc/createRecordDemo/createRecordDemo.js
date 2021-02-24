import { LightningElement } from "lwc";
import { createRecord } from "lightning/uiRecordApi";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import INDUSTRY from "@salesforce/schema/Account.Industry";
import PHONE from "@salesforce/schema/Account.Phone";
import NAME from "@salesforce/schema/Account.Name";
import TYPE from "@salesforce/schema/Account.Type";
export default class CreateRecordDemo extends LightningElement {
  formFields = {
    Name: "",
    Industry: "",
    Phone: "",
    Type: ""
  };
  changeHandler(event) {
    const { name, value } = event.target;
    this.formFields = { ...this.formFields, [name]: value };
    console.log('@Account object '+ACCOUNT_OBJECT)
    console.log('@Account Phone'+ PHONE)
  }

  handleSave() {
    const fields = {};
    fields[NAME.fieldApiName] = this.formFields.Name;
    fields[PHONE.fieldApiName] = this.formFields.Phone;
    fields[INDUSTRY.fieldApiName] = this.formFields.Industry;
    fields[TYPE.fieldApiName] = this.formFields.Type;

    let recordInput = { apiName: ACCOUNT_OBJECT.objectApiName, fields };
    createRecord(recordInput).then((result) => {
      this.formFields = {};
      console.log("Account Created successfully" + result.id);
    }).catch((error)=>{
        console.log(error)
    })
  }
}
