import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/refreshContactController.getContacts';
import { updateRecord } from 'lightning/uiRecordApi';
import {ShowToastEvent } from 'lightning/platformShowToastEvent';
import {refreshApex} from '@salesforce/apex'
const columns = [
    {label: "First Name" , fieldName : "FirstName" , editable : true},
    {label: "Last Name" , fieldName : "LastName" , editable : true},
    {label: "Email" , fieldName : "Email" , type: "email"},
]

export default class RefreshDemoLWC extends LightningElement {
    columns = columns
    draftValues = []
    @wire(getContacts)
    contacts
    
    get contactLength(){
        return this.contacts && this.contacts.data && this.contacts.data.length ? 'Yes' : 'No'
    }
    handleSave(event){
        console.log(event.detail.draftValues)
        const promises = [...event.detail.draftValues].map(item=> {
            return updateRecord({fields:item})
                 
        })

        Promise.all(promises).then(result=>{
            this.showToastMsg('Success','Contact Updated')
            this.draftValues = []
            refreshApex(this.contacts)
        }).catch(error=>{
            this.showToastMsg('Error',error.message , 'error')
        })

    }

    showToastMsg(title,message,variant){
        this.dispatchEvent(
            new ShowToastEvent({
            title :title,
            message : message,
            variant : variant || 'success'
        })
        
        )
    }
}