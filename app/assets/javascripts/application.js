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

//   const riskScores = {
//     current: {
//       date: '23 Jul 2021 at 12:00:00',
//       scores: {
//         RSR: {
//           level: 'HIGH',
//           score: 11.34,
//           type: 'RSR'
//         },
//         OSPC: {
//           level: 'MEDIUM',
//           score: 8.76,
//           type: 'OSP/C'
//         },
//         OSPI: {
//           level: 'LOW',
//           score: 3.45,
//           type: 'OSP/I'
//         }
//       }
//     },
//     historical: [
//       {
//         date: '14 May 2019 at 12:00:00',
//         scores: {
//           RSR: {
//             level: 'HIGH',
//             score: 10.3,
//             type: 'RSR'
//           },
//           OSPC: {
//             level: 'MEDIUM',
//             score: 7.76,
//             type: 'OSP/C'
//           },
//           OSPI: {
//             level: 'LOW',
//             score: 3.45,
//             type: 'OSP/I'
//           }
//         }
//       },
//       {
//         date: '12 September 2018 at 12:00:00',
//         scores: {
//           RSR: {
//             level: 'MEDIUM',
//             score: 5.34,
//             type: 'RSR'
//           },
//           OSPC: {
//             level: 'MEDIUM',
//             score: 6.76,
//             type: 'OSP/C'
//           },
//           OSPI: {
//             level: 'LOW',
//             score: 3.45,
//             type: 'OSP/I'
//           }
//         }
//       }
//     ]
//   }

//   const widgetData = {
//     roshRiskSummary: {
//       hasBeenCompleted: true,
//       overallRisk: 'VERY_HIGH',
//       riskInCommunity: {
//         'Children': 'LOW',
//         'Public': 'VERY_HIGH',
//         'Known Adult': 'MEDIUM',
//         'Staff': 'HIGH'
//       },
//       riskInCustody: {
//         'Children': 'LOW',
//         'Public': 'VERY_HIGH',
//         'Known Adult': 'MEDIUM',
//         'Staff': 'HIGH',
//         'Prisoners': 'MEDIUM'
//       },
//       lastUpdated: '10th October 2021'
//     },
//     mappa: {
//       level: 'CAT 2/LEVEL 1',
//       isNominal: false,
//       lastUpdated: '10th October 2021'
//     },
//     flags: [
//       'Hate Crime'
//     ]
//   }

//   res.render('scores', { riskScores, widgetData })


// module.exports = router


