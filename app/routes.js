//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

var NotifyClient = require('notifications-node-client').NotifyClient,
    notify = new NotifyClient(process.env.NOTIFYAPIKEY);

//pulling in from MOJ risk widgets
router.get('/scores', function (req, res) {
    const riskScores = {
      current: {
        date: '23 Jul 2021 at 12:00:00',
        scores: {
          RSR: {
            level: 'HIGH',
            score: 11.34,
            type: 'RSR'
          },
          OSPC: {
            level: 'MEDIUM',
            score: 8.76,
            type: 'OSP/C'
          },
          OSPI: {
            level: 'LOW',
            score: 3.45,
            type: 'OSP/I'
          }
        }
      },
      historical: [
        {
          date: '14 May 2019 at 12:00:00',
          scores: {
            RSR: {
              level: 'HIGH',
              score: 10.3,
              type: 'RSR'
            },
            OSPC: {
              level: 'MEDIUM',
              score: 7.76,
              type: 'OSP/C'
            },
            OSPI: {
              level: 'LOW',
              score: 3.45,
              type: 'OSP/I'
            }
          }
        },
        {
          date: '12 September 2018 at 12:00:00',
          scores: {
            RSR: {
              level: 'MEDIUM',
              score: 5.34,
              type: 'RSR'
            },
            OSPC: {
              level: 'MEDIUM',
              score: 6.76,
              type: 'OSP/C'
            },
            OSPI: {
              level: 'LOW',
              score: 3.45,
              type: 'OSP/I'
            }
          }
        }
      ]
    }
  
    const widgetData = {
      mappa: {
        level: 'CAT 2/LEVEL 1',
        isNominal: false,
        lastUpdated: '10th October 2021'
      },
      flags: [
        'Hate Crime'
      ],
      roshRiskSummary: {
        overallRisk: 'VERY_HIGH',
        riskToChildren: 'LOW',
        riskToPublic: 'VERY_HIGH',
        riskToKnownAdult: 'MEDIUM',
        riskToStaff: 'HIGH',
        lastUpdated: '10th October 2021'
      }
    }
  
    res.render('scores', { riskScores, widgetData })
  })

// Review Applications prototype

// The URL here needs to match the URL of the page that the user is on
// when they type in their email address
router.post('/prototypes/check-answers', function (req, res) {

  notify.sendEmail(
    // this long string is the template ID, copy it from the template
    // page in GOV.UK Notify. It’s not a secret so it’s fine to put it
    // in your code.
    '447f971e-304d-4c26-9a1c-0fd7aaf70063',
    // `emailAddress` here needs to match the name of the form field in
    // your HTML page
    req.body.emailAddress
  );

  // This is the URL the users will be redirected to once the email
  // has been sent
  res.redirect('/prototypes/submission-confirmed');
});

// Consent routing
router.post('/prototypes/consent/all-in-one', function(request, response) {

  var consentAnswer = request.session.data['consent-answer']
  if (consentAnswer == "yes"){
      response.redirect("/prototypes/consent/consent-given")
  } else {
      response.redirect("/prototypes/consent/consent-refused")
  }
})

// Address history routing
router.post('/prototypes/address-history/address-history-manual-v2-1', function(request, response) {

  var previousAddressAnswer = request.session.data['previous-address']
  if (previousAddressAnswer == "yes"){
      response.redirect("/prototypes/address-history/address-history-manual-v2-2a")
  } else {
      response.redirect("/prototypes/address-history/address-history-manual-v2-2b")
  }
})

// Equality and diversity routing
router.post('/prototypes/equality-diversity/equality-diversity-opt-in', function(request, response) {

  var previousAddressAnswer = request.session.data['equalities-info']
  if (previousAddressAnswer == "yes"){
      response.redirect("/prototypes/equality-diversity/equality-diversity-disability")
  } else {
      response.redirect("/prototypes/tasklists/tasklist")
  }
})

router.post('/prototypes/equality-diversity/equality-diversity-ethnicity', function(request, response) {

  var previousAddressAnswer = request.session.data['ethnicity']
  if (previousAddressAnswer == "white"){
      response.redirect("/prototypes/equality-diversity/equality-diversity-ethnicity-white")
  } else if (previousAddressAnswer == "multiple") {
      response.redirect("/prototypes/equality-diversity/equality-diversity-ethnicity-mixed-multiple")
  } else if (previousAddressAnswer == "asian") {
    response.redirect("/prototypes/equality-diversity/equality-diversity-ethnicity-asian-british")
  } else if (previousAddressAnswer == "black") {
    response.redirect("/prototypes/equality-diversity/equality-diversity-ethnicity-black")
  } else if (previousAddressAnswer == "other") {
    response.redirect("/prototypes/equality-diversity/equality-diversity-ethnicity-other")
  } else {
    response.redirect("/prototypes/equality-diversity/equality-diversity-religion")
  }
})

// OASys pre-population routing
router.post('/prototypes/risks-and-needs/risk-to-self/v4/oasys-not-available', function(request, response) {

  var previousAddressAnswer = request.session.data['oasys-prepopulate']
  if (previousAddressAnswer == "yes"){
      response.redirect("/prototypes/risks-and-needs/risk-to-self/v4/pnomis-info")
  } else {
      response.redirect("/prototypes/tasklists/tasklist")
  }
})

// Eligibility routing
router.post('/prototypes/eligibility-checker/eligibility-flat', function(request, response) {

  var previousAddressAnswer = request.session.data['eligibility-check']
  if (previousAddressAnswer == "yes"){
      response.redirect("/prototypes/tasklists/tasklist-without-required-tasks")
  } else {
      response.redirect("/prototypes/eligibility-checker/eligibility-fail")
  }
})