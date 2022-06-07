//src CustomMap.ts

//Instractions to other classes how be an arguments for 'addMarker'
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  color: string;

  markerContent(): string;
}

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

  addMarker(mappable: Mappable): void {
    // создаю маркер
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    }); // создаю новый объект класса т.е. здесь вызываеся constructor в который мы можем передать какие-то опции map position
    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });
      infoWindow.open(this.googleMap, marker); // Указываю карту и маркер
    });
  }
}
