import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'

export default class NavToRecordPage extends NavigationMixin(LightningElement) {
    
  navigateToContact(){
    this[NavigationMixin.Navigate]({
        type : 'standard__recordPage',
        attributes : {
            recordId : '0036F00002bohvCQAQ',
            objectApiName : 'Contact',
            actionName : 'view'
        }
    })     
  }

  navigateToContactEdit(){
    this[NavigationMixin.Navigate]({
        type : 'standard__recordPage',
        attributes : {
            recordId : '0036F00002bohvCQAQ',
            objectApiName : 'Contact',
            actionName : 'edit'
        }
    })   
  }
  
}