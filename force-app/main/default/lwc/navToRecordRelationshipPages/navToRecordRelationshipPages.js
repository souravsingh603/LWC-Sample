import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'

export default class NavToRecordRelationshipPages extends NavigationMixin(LightningElement) {

    navToRelationshipView(){

        this[NavigationMixin.Navigate]({
            type : 'standard__recordRelationshipPage',
            attributes : {
                objectApiName : 'Account',
                recordId : '0016F00002T15k9QAB',
                relationshipApiName : 'Contacts',
                actionName : 'view'
            }
        })
    }

  
}