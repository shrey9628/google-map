var app = angular.module("mymap", []);

app.directive("map", function () {
    return {
        link: function (scope, element, attrs) {
            $('#googlemap').gmap3({
        center:[28.7038695, 77.14887590000001],
        zoom:15
      })
      .marker([
        {position:[77.14887590000001, 77.14343780000002]},
        {address:"NP block pitam pura", icon: "http://maps.google.com/mapfiles/marker_grey.png"}
        ])
      .marker([
        {position:[28.7055099, 77.14887590000001]},
        {address:"Hotel City Park, Adarsh Nagar, Pitampura, Delhi, India", icon: "http://maps.google.com/mapfiles/marker_grey.png"}
        ])
      .on('click', function (marker) {
        marker.setIcon('http://maps.google.com/mapfiles/marker_green.png');
      });

        },
        restrict: "A" // Element Level, Attribute Level , Class Level
    }
});
