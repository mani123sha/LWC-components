import { LightningElement } from 'lwc';


export default class ChildDisplay extends LightningElement {
  
    count = 0;

    increaseCount() {
        this.dispatchEvent(new CustomEvent('increasecount', {
            detail: {
                message: 'Increased count to ' + (++this.count)
            }
        }));
    }

}