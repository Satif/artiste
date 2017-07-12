(function () {

  'use strict';

  angular
    .module('app.home')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController(Data, $timeout) {
    var self = this;
    
    self.data = Data[0];

    $timeout(function() {
      /* ---------------------------------------------------------------------- */
      /*  Index map
       /* ---------------------------------------------------------------------- */

      var gmapDiv = $("#google-map");
      var gmapMarker = gmapDiv.attr("data-address");

      gmapDiv.gmap3({
        zoom: 16,
        address: gmapMarker,
        oomControl: true,
        navigationControl: true,
        scrollwheel: false,
        styles: [
          {
            "featureType":"all",
            "elementType":"all",
            "stylers":[
              { "saturation":"-70" }
            ]
          }]
      })
        .marker({
          address: gmapMarker,
          icon: "/assets/images/map_pin.png"
        })
        .infowindow({
          content: "ArtSide, Drohobych"
        })
        .then(function (infowindow) {
          var map = this.get(0);
          var marker = this.get(1);
          marker.addListener('click', function() {
            infowindow.open(map, marker);
          });
        });


      /* Scroll to Top
       -------------------------------------------------------*/

      $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
          $("#back-to-top").addClass("show");
        } else {
          $("#back-to-top").removeClass("show");
        }
      });

      $('a[href="#top"]').on('click', function () {
        $('html, body').animate({scrollTop: 0}, 'slow');
        return false;
      });
    }, 0)
  }

})();
