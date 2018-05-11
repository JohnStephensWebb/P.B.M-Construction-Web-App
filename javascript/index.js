document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // $.getJSON("items.json")
    //   .done(function( json ) {
    //     console.log( "JSON Data:," json);
    //   })
    //   .fail(function( jqxhr, textStatus, error ) {
    //     var err = textStatus + ", " + error;
    //     console.log( "Request Failed: " + err );
    // });

    $.getJSON("items.json", function(content){
      console.log(content)


      for (var i = content.length-3; i < content.length; i++) {
      let cardHtml =
        `<div class="col s12 m4">
          <div class="card">
            <div class="card-image">
              <img src="${content[i].img}">
              <span class="card-title">${content[i].title}</span>
            </div>
            <div class="card-content">
              <p>${content[i].cardContent}</p>
            </div>
            <div class="card-action">
              <a class="waves-effect waves-light btn modal-trigger"     href="#${content[i].id}">Details</a>

              <!-- Modal Structure -->
              <div id="${content[i].id}" class="modal modal-fixed-footer">
                <div class="modal-content">
                  <h4>${content[i].modalHeader}</h4>
                  <p>${content[i].modalContent}</p>
                </div>
                <div class="modal-footer">
                  <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat ">Close</a>
                </div>
              </div>
            </div>
          </div>
        </div>`


        let homeCards = $("#cards")
        homeCards.append(cardHtml)
      }
      $('#modal4').modal();
      $('#modal5').modal();
      $('#modal6').modal();
    })

    $(".button-collapse").sideNav();

    $('.slider').slider();

   $('body').removeClass('fade-out');

});
