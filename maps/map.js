"use strict";

function initMap() {
  //#####################################################################################
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: new google.maps.LatLng(17.423635, 78.503822),
    styles: mapstyle,
  });

  //#######################################################################################

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        // infoWindow.setPosition(pos);
        // infoWindow.setContent('Location found.');
        // infoWindow.open(map);
        map.setCenter(pos);
        map.setZoom(11);
      },
      function () {
        console.log("got the loaction");
        // handleLocationError(true, infoWindow, map.getCenter());
      }
    );
  } else {
    // Browser doesn't support Geolocation
    console.log("didn't get  the loaction");
    // handleLocationError(false, infoWindow, map.getCenter());
  }

  //#######################################################################################
  class Hospital {
    constructor(item, image) {
      this.contentString = `<h2>${item["name"]}</h2> <br>
      <table>
      <tbody>
        <tr>
          <td>Total Bed Capacity</td>
          <td>${item["obeds"]["TBC"]}</td>
        </tr>
        <tr>
          <td>No.of Patients in ICU</td>
          <td>${item["obeds"]["ICU"]}</td>
        </tr>
        <tr>
          <td>No.of Patients with CPAP</td>
          <td>${item["obeds"]["CPAP"]}</td>
        </tr>
        <tr>
          <td>No.of Patients Wards</td>
          <td>${item["obeds"]["wards"]}</td>
        </tr>
        <tr>
          <td>Total no.of Patients</td>
          <td>${item["obeds"]["tnp"]}</td>
        </tr>
        <tr>
          <td>Total no.of Beds Available</td>
          <td style="font-size: large; font-weight: bold;">${item["abeds"]}</td>
        </tr>
      </tbody>
    </table>  
      `;

      this.infowindow = new google.maps.InfoWindow({
        content: this.contentString,
      });
      this.marker = new google.maps.Marker({
        position: {
          lat: item["location"]["lat"],
          lng: item["location"]["lng"],
        },
        map: map,
        icon: image,
        title: item["name"],
        map,
        icon: {
          url: image,
          labelOrigin: { x: 75, y: 10 },
        },
        label: {
          text: item["abeds"].toLocaleString(),
          fontSize: "30px",
        },
      });
      this.marker.addListener("click", () => {
        this.infowindow.open(map, this.marker);
      });
    }
  }
  var ghospitals = new Array();
  var phospitals = new Array();
  for (var i = 0; i < hps["Ghptls"].length; i++) {
    var item = hps["Ghptls"][i];
    const image = "gmarker.svg";
    ghospitals[i] = new Hospital(item, image);
  }
  for (var i = 0; i < hps["Phptls"].length; i++) {
    var item = hps["Phptls"][i];
    const image = "pmarker.svg";
    phospitals[i] = new Hospital(item, image);
  }
}
