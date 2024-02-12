import { LightningElement } from 'lwc';

export default class ParentDisplay extends LightningElement {

    message = 'Parent message Display';

    handlebyParent(event){

    this.message = event.detail.message;

    }


}