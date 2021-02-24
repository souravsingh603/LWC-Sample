import { LightningElement } from "lwc";
import pubsubnew from "c/pubsubnew";

export default class PubsubChildOne extends LightningElement {
  buttonHandler(evt) {
    this.eventPublisher(evt.target.innerText);
  }
  eventPublisher(data) {
    pubsubnew.publish("accordionTriggered", data);
  }
}
