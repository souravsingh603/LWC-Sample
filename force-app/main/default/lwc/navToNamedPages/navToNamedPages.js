import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'

export default class NavToNamedPages extends NavigationMixin(LightningElement) {

    navg(type, pageName){
        this[NavigationMixin.Navigate]({
            type : type,
            attributes : {
                pageName : pageName
            }
        })

    }

    navigateToChatter(){

        this.navg('standard__namedPage','chatter')
        // this[NavigationMixin.Navigate]({
        //     type : 'standard__namedPage',
        //     attributes : {
        //         pageName : 'chatter'
        //     }
        // })
    }

    navigateToHome(){
        this.navg('standard__namedPage','home')

        // this[NavigationMixin.Navigate]({
        //     type : 'standard__namedPage',
        //     attributes : {
        //         pageName : 'home'
        //     }
        // })
    }
}