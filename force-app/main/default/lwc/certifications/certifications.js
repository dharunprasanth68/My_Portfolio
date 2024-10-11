import { LightningElement } from 'lwc';
import logos from '@salesforce/resourceUrl/Logo_Portfolio'
export default class Certifications extends LightningElement {
    pd1Logo = logos + '/img/pd1.png';
    adminLogo = logos + '/img/admin.png';
    rangerLogo = logos + '/img/ranger.png';
    asuSfLogo = logos + '/img/asuSf.png';
    gdaLogo = logos + '/img/gda.png';

    pdURL = 'https://www.salesforce.com/trailblazer/dharunprasanth98';
}