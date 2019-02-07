import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public data = {
    consumerDetails: {
      firstName: 'John',
      lastName: 'Doe'
    },

    items: [
      {
        name: 'Awesome Product',
        price: 1999.0,
        sku: 'AWSMPRDCT',
        quantity: 2,
        leasable: true,
        warranty: {
          name: 'Awesome Warranty',
          price: 100.0,
          sku: 'AWSMWRNTY'
        }
      }
    ],
    taxAmount: 199.0,
    shipingAmount: 19.0,
    totalAmount: 4216.0,

    onDataUpdate(updateData, callback) {
      return {};
    },

    callback(token, data, error) {
      // Do something with token / data, or handle error
    }
  };

  CAtest() {
    alert('afds');
  }

}
