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

router.post('/prototypes/tasklist', function(request, response) {

  var consentAnswer = request.session.data['consent-answer']
  if (consentAnswer == "yes"){
      response.redirect("/prototypes/tasklist")
  } else {
      response.redirect("/prototypes/consent/consent-refused")
  }
})