import { LightningElement, wire } from 'lwc';
import {getObjectInfo} from 'lightning/uiObjectInfoApi'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'

export default class GetObjectInfoDemo extends LightningElement {
    defaultRecordTypeId
    @wire(getObjectInfo,{
        objectApiName :ACCOUNT_OBJECT
    })objectInfo({data,error}){
        if(data){
            this.defaultRecordTypeId = data.defaultRecordTypeId
            console.log(data)
        }
        if(error){
            console.log(error)
        }
    }
}