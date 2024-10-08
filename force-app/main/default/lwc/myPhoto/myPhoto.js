import { LightningElement } from 'lwc';
import Images from'@salesforce/resourceUrl/My_Photo'

export default class MyPhoto extends LightningElement {
    imageURL = Images;
}