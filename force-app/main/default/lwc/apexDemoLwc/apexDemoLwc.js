import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/accountController.getAccountList'
import getAccountById from '@salesforce/apex/accountController.getAccountById'
import getContactList from '@salesforce/apex/accountController.getContactList'
export default class ApexDemoLwc extends LightningElement {
    conList
    result
    @wire(getAccountList)
    accountList({data,error}){
        if(data){
            this.result = data

        }
        if(error){
            console.error(error)
        }
    }

    @wire(getAccountById,{"accId":"0016F00002T15kAQAR"})
    accById

    handleLoad(){
        getContactList().then(result=>{
            return result
        }).then(result =>{
            this.conList = result
        }).catch(error=>{
            console.log(error)
        })
    }
}