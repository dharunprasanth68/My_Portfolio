import { LightningElement } from 'lwc';
import myPhoto from '@salesforce/resourceUrl/My_Photo'

export default class AboutMe extends LightningElement {
    imageURL = myPhoto + '/P1.png' ;
}