//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {

  var editText = $('#edit-text');
  var revertText = $('#revert-text');
  var upToDate = $('#up-to-date');
  var textArea = $('.oasys-textarea');
  var continueButton = $('#button-save-and-continue');
  
  var originalOASys = $('#oasys-textarea').text();
  
  // Risk section - Click "edit text", make text area editable, hide 'edit text' button, show 'revert to oasys' button 
  $(editText).on('click', (function(){
    $(textArea).attr("disabled", false);
    $(continueButton).addClass("govuk-button--disabled");
    $(revertText).removeClass('govuk-!-display-none');
    $(this).addClass('govuk-!-display-none');

    if ((upToDate).prop("checked") === true) {
      upToDate.prop("checked", false);
    } else {
      console.log('not checked');
    }

  }))

  // Risk section - Check 'confirm up to date' checkbox, disable text area
  $(upToDate).on('click', (function(){
    $(textArea).attr("disabled", true);
    $(continueButton).attr("disabled", false);
    $(continueButton).removeClass("govuk-button--disabled");
    $(editText).removeClass('govuk-!-display-none');
    $(revertText).addClass('govuk-!-display-none');
  }))

  // Risk section - Click 'revert back to oasys', replace whatever is in text area with original value
  $(revertText).on('click', (function(){
    $(textArea).val(originalOASys);
  }))

  if ((upToDate).prop("checked") === true) {
    upToDate.prop("checked", false);
  } else {
    console.log('not checked');
  }

})


