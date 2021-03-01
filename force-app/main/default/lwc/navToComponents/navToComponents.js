import { LightningElement, wire } from 'lwc';
import {NavigationMixin,CurrentPageReference} from 'lightning/navigation';
export default class NavToComponents extends NavigationMixin(LightningElement) {

    @wire(CurrentPageReference)
    pageReference

    get pgRef(){

        console.log('this.pageReferencec',JSON.stringify(this.pageReference))
        return this.pageReference.state.c__test ? this.pageReference.state.c__test : ''
    }

    navigateToAura(){
        this[NavigationMixin.Navigate]({
            type : 'standard__component',
            attributes : {
                componentName : 'c__navigateToAura'
                
            },

            state : {
                c__recordId : '12345'
            }
        })
    }

    handlerLwcNavigate(){

       var defination = {
            componentDef : "c:navigationLwcTarget",
            attributes : {
                recordId : '87897987'
            }
        }
        this[NavigationMixin.Navigate]({
            type : 'standard__webPage',
            attributes :{
                url : '/one/one.app#' + btoa(JSON.stringify(defination))
            }
        })
    }
}