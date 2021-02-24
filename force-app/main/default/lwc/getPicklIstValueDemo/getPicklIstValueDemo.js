import { LightningElement, wire } from 'lwc';
import {getObjectInfo} from 'lightning/uiObjectInfoApi'
import {getPicklistValues} from 'lightning/uiObjectInfoApi'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'

export default class GetPicklIstValueDemo extends LightningElement {
    defaultRecordTypeId
    @wire(getObjectInfo,{
        objectApiName :ACCOUNT_OBJECT.objectApiName
    })objectInfo({data,error}){
        if(data){
            this.defaultRecordTypeId = data.defaultRecordTypeId
            console.log(data)
        }
        if(error){
            console.log(error)
        }
    }
  


  @wire(getPicklistValues, {
    recordTypeId: '$defaultRecordTypeId',
    fieldApiName: INDUSTRY_FIELD
  })
  IndustryPicklistValues;

  handleChamge(event) {
    this.picklistvalue = event.target.value;
  }

}
