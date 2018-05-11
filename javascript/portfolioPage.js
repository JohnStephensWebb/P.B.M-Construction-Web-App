document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");


    $.getJSON("items.json", function(content){
      console.log(content)

      for (var i = 0; i < content.length; i++) {
      let cardHtml =
        `<div class="col s12 m6">
          <div class="card">
            <div class="card-image">
              <img src="${content[i].img}">
              <span class="card-title">${content[i].title}</span>
            </div>
            <div class="card-content">
              <p>${content[i].cardContent}</p>
            </div>
            <div class="card-action">
              <a class="waves-effect waves-light btn modal-trigger" href="#${content[i].id}">Details</a>

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
        let portfolio = $("#portfolio")
        portfolio.append(cardHtml)
      }

      $('#modal1').modal();
      $('#modal2').modal();
      $('#modal3').modal();
      $('#modal4').modal();
      $('#modal5').modal();
      $('#modal6').modal();
    })




    $(".button-collapse").sideNav();

    $('body').removeClass('fade-out');
});
