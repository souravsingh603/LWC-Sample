import { LightningElement, wire } from 'lwc';
import {getPicklistValuesByRecordType} from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import {getObjectInfo} from 'lightning/uiObjectInfoApi'
export default class GetPickListValuesByRecordType extends LightningElement {

    Industry
    pickListValue = null

    @wire(getObjectInfo,{
        objectApiName : ACCOUNT_OBJECT
    })objectInfo



    @wire(getPicklistValuesByRecordType,{
        objectApiName : ACCOUNT_OBJECT,
        recordTypeId : '$objectInfo.data.defaultRecordTypeId'
        
    })picklistValuesByRecordType({data,error}){
        if(data){
            console.log(data)
            this.Industry = data.picklistFieldValues.Industry
        }
        if(error){
            console.log(error)
        }
    } 
    handleChange(event){
            this.pickListValue = event.target.value
    }
   
   
      
}