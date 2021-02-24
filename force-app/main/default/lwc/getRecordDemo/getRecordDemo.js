import { LightningElement, wire,api } from 'lwc';
import {getRecord , getFieldValue} from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import OWNER_NAME_FIELD from '@salesforce/schema/Account.Owner.Name';
import PHONE from '@salesforce/schema/Account.Phone';
import INDUSTRY from '@salesforce/schema/Account.Industry';
import ANNUAL_RVENUE from '@salesforce/schema/Account.AnnualRevenue'

export default class GetRecordDemo extends LightningElement {
    @api recordId
    result ={}
    @wire(getRecord,{
        recordId : '$recordId',
        fields : [NAME_FIELD,OWNER_NAME_FIELD,PHONE,INDUSTRY,ANNUAL_RVENUE]
    })recordData

    get name(){
        return getFieldValue(this.recordData.data,NAME_FIELD)
    }
    get industry(){
        return getFieldValue(this.recordData.data,INDUSTRY)
    }
    get phone(){
        return getFieldValue(this.recordData.data,PHONE)
    }

    get annualRevenue(){
        return getFieldValue(this.recordData.data,ANNUAL_RVENUE)
    }
    // recordData({data,error}){
    //     if(data){
    //         console.log(JSON.stringify(data))
    //         const {fields} = data
    //         Object.keys(fields).forEach(item=>{
    //             let value = fields[item] && fields[item].diplayValue ? fields[item].diplayValue : fields[item].value

    //             this.result= {...this.result , [item]: value}
    //         })
    //     }
    //     if(error){
    //         console.error(error)
    //     }
    // }
}