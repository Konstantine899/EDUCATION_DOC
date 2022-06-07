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

  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
    }); // создаю новый объект класса т.е. здесь вызываеся constructor в который мы можем передать какие-то опции
  }

  addCompanyMarker(company: Company): void {}
}
