//src CustomMap.ts
import { User } from "./User";
import { Company } from "./Company";

export class CustomMap {
  private googleMap: google.maps.Map;

  //инициализирую карту и отображаю ее на экране
  constructor(mapDivId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(mapDivId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: User | Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    }); // создаю новый объект класса т.е. здесь вызываеся constructor в который мы можем передать какие-то опции
  }

  // addCompanyMarker(company: Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lng,
  //     },
  //   }); // создаю новый объект класса т.е. здесь вызываеся constructor в который мы можем передать какие-то опции
  // }
}
