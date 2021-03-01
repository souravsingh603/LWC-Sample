import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils'

export default class NavToObjectPages extends  NavigationMixin(LightningElement) {

    navigateToFilesHome(){

     
        this.navtb('standard__objectPage','ContentDocument','home')
      

        // this[NavigationMixin.Navigate]({
        //     type : 'standard__objectPage',
        //     attributes : {
        //         objectApiName : 'ContentDocument',
        //         actionName : 'home'
        //     }
        // })
    }

    navigateToContactNew(){
        const defaultFieldValues = encodeDefaultFieldValues({
            FirstName: 'Salesfore',
            LastName : 'Singh',
            LeadSource : 'Other'
        })

        this.navtb('standard__objectPage','Contact','new',defaultFieldValues)
    }

    navtb(type,objectApiName,actionName,defaultFieldValues){

        this[NavigationMixin.Navigate]({
            type : type,
            attributes : {
                objectApiName : objectApiName,
                actionName : actionName
            },
            state : {
                defaultFieldValues :defaultFieldValues
            }
        })
    }
    navigateToList(){

        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes :{
                objectApiName : 'Contact',
                actionName : 'list'
            },
            state :{
                filterName : 'Recent'
            }
        })
    }
}