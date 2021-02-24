import { LightningElement } from 'lwc';
import {APPLICATION_SCOPE,publish,subscribe, unsubscribe , createMessageContext , releaseMessageContext} 
from 'lightning/messageService';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c';

export default class LMCDemoLWC extends LightningElement {

    context = createMessageContext();
    inputValue = ''
    subscription = null;
    receivedMessage=''
    publishMessage(){
        const message = {
            lmsData : {
                value : this.inputValue
            }
        }

        publish(this.context , SAMPLEMC , message )
    }

    subscribeMessage(){
        if(this.subscription){
            return;
        }
        this.subscription = subscribe(this.context, SAMPLEMC, (message)=>{
            this.handleMessage(message)
        }, {scope : APPLICATION_SCOPE})
    }
    unsubscribeMessage(){
        unsubscribe(this.subscription)
        this.subscription = null
    }
    handleMessage(message){
        this.receivedMessage = message && message.lmsData ? message.lmsData.value : 'no message'
    }

    inputHandler(event){
        this.inputValue = event.target.value;
    }

    disconnectedCallback(){
        releaseMessageContext(this.context)
    }

}