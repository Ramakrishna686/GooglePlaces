import { Component, OnInit} from '@angular/core';

@Component({
    selector : 'my-app',
    templateUrl: 'demo.html'
})
	
	
export class AppComponent {

globalVar:string;
address:string;



    public options = {componentRestrictions: { country: 'IN' }}

    getAddress(place:Object) {     
           console.log("Address", place);
       }



		selectCountry(acd:string)
		{
				console.log('Setting value : '+acd);
				this.globalVar =  acd ;
				this.options = {componentRestrictions: { country: '+'+this.globalVar+'+' }}
				console.log('After setup the Country:  '+this.options.componentRestrictions.country);
			
				

		}

	}	