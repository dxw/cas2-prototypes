//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {

  // Risk section - Switch text area edit state based on radio selection
  $('#radio-edited').on('click', (function(){
    $('#oasys-textarea').attr("disabled", false);
    $('#button-save-and-continue').addClass("govuk-button--disabled");
  }))

  $('#radio-up-to-date').on('click', (function(){
    $('#oasys-textarea').attr("disabled", true);
  }))

  // Risk section - Change click status and styling of confirm button based on above selection
  $('#radio-up-to-date').on('click', (function(){
    $('#button-save-and-continue').attr("disabled", false);
    $('#button-save-and-continue').removeClass("govuk-button--disabled");
  }))

})


