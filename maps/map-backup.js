"use strict";
var locations = [
  ["1226", 17.423635, 78.503822],
  ["126", 17.445236, 78.434954],
  ["1336", 17.395949, 78.502404],
  ["6", 17.990704, 79.593533],
  ["2226", 19.664026, 78.525051],
  ["12", 17.249334, 80.151994],
  ["26", 18.442307, 79.131724],
  ["186", 18.675645, 78.099036],
  ["826", 17.055856, 79.277845],
  ["16", 17.141725, 79.606962],
  ["1289", 18.098793, 78.841362],
  ["333", 16.750588, 78.008452],
];

function initMap() {
  const uluru = {
    lat: -25.363,
    lng: 131.044,
  };

  //#####################################################################################
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: new google.maps.LatLng(17.423635, 78.503822),
    styles: [
      {
        elementType: "geometry",
        stylers: [
          {
            color: "#f5f5f5",
          },
        ],
      },
      {
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#616161",
          },
        ],
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#f5f5f5",
          },
        ],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#bdbdbd",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#eeeeee",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575",
          },
        ],
      },
      {
        featureType: "poi.business",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "poi.medical",
        stylers: [
          {
            visibility: "on",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
          {
            color: "#e5e5e5",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        featureType: "road.arterial",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            color: "#dadada",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "labels",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#616161",
          },
        ],
      },
      {
        featureType: "road.local",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e",
          },
        ],
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [
          {
            color: "#e5e5e5",
          },
        ],
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [
          {
            color: "#eeeeee",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#c9c9c9",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e",
          },
        ],
      },
    ],
  });

  //#######################################################################################
  const contentString = `<h2>Gandhi General Hospital</h2> <br>
  <table>
  <tbody>
    <tr>
      <td>Total Bed Capacity</td>
      <td>1890</td>
    </tr>
    <tr>
      <td>No.of Patients in ICU</td>
      <td>125</td>
    </tr>
    <tr>
      <td>No.of Patients with CPAP</td>
      <td>438</td>
    </tr>
    <tr>
      <td>No.of Patients Wards</td>
      <td>101</td>
    </tr>
    <tr>
      <td>Total no.of Patients</td>
      <td>664</td>
    </tr>
    <tr>
      <td>Total no.of Patients</td>
      <td>1226</td>
    </tr>
  </tbody>
</table>
  
  `;
  var image = "marker.svg";
  var hospitals = new Array();
  // const markers = new google.maps.Marker({
  //   position: new google.maps.LatLng(17.423635, 78.503822),
  //   map,
  //   icon: {
  //     url: image,
  //     labelOrigin: { x: 75, y: 10 },
  //   },
  //   title: "Ghandhi Hospitals",
  //   label: {
  //     text: "1226",
  //     fontSize: "30px",
  //   },
  // });
  class Hospital {
    constructor(item, contentString) {
      this.infowindow = new google.maps.InfoWindow({
        content: contentString,
      });
      this.marker = new google.maps.Marker({
        position: { lat: item[1], lng: item[2] },
        map: map,
        icon: image,
        title: item[0],
        map,
        icon: {
          url: image,
          labelOrigin: { x: 75, y: 10 },
        },
        label: {
          text: item[0],
          fontSize: "30px",
        },
      });
      this.marker.addListener("click", () => {
        this.infowindow.open(map, this.marker);
      });
    }
  }
  // var marker = new Array();
  for (var i = 0; i < locations.length; i++) {
    var item = locations[i];
    hospitals[i] = new Hospital(item, contentString);

    //Defination of info window
    // infowindows[i] = new google.maps.InfoWindow({
    //   content: contentString,
    // });
    //Defination of marker
    // var item = locations[i];
    // marker[i] = new google.maps.Marker({
    //   position: { lat: item[1], lng: item[2] },
    //   map: map,
    //   icon: image,
    //   title: item[0],
    //   map,
    //   icon: {
    //     url: image,
    //     labelOrigin: { x: 75, y: 10 },
    //   },
    //   label: {
    //     text: item[0],
    //     fontSize: "30px",
    //   },
    // });
    // infowindows[i].open(map, marker[i]);
    //click to open marker
    // marker[i].addListener("click", () => {
    //   infowindows[i].open(map, marker[i]);
    // });
  }
}
