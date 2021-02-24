import { LightningElement } from "lwc";
import pubsubnew from "c/pubsubnew";

export default class PubsubChildTwo extends LightningElement {
    accordionList = [
        {
            id: 1,
            name: 'Success',
            selected: false,
            className: 'accordion success'
        },
        {
            id: 2,
            name: 'Info',
            selected: false,
            className: 'accordion info'
        },
        {
            id: 3,
            name: 'Warning',
            selected: false,
            className: 'accordion warning'
        },
        {
            id: 4,
            name: 'Danger',
            selected: false,
            className: 'accordion danger'
        }
    ];
  connectedCallback() {
    this.callSubscriber();
  }

  callSubscriber() {
    pubsubnew.subscribe("accordionTriggered", this.subscriberCallback);
  }

  subscriberCallback = (event)=> {
    let updatedList = this.accordionList.map(item=>{
        return item.name === event ? {...item , selected:true}:{...item, selected:false}
    })
    this.accordionList = updatedList;
}
}
