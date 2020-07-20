const functions = require('firebase-functions');
const admin = require('firebase-admin')
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

admin.initializeApp()

exports.markerSub = functions.https.onRequest((req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    let position, icon, title
    if (
        req.query.title &&
        req.query.icon &&
        req.query.position0 &&
        req.query.position1
    ) {
        if (
            req.query.position0 < 44.466927 &&
            req.query.position1 < 25.905418 &&
            req.query.position0 > 44.425751 &&
            req.query.position1 > 25.83787
        ) {
            position = req.query.position
        } else {
            return res.status(400).json(false)
        }

        switch (req.query.icon) {
            case 'meeting':
                icon = 'iconMeeting'
                break;
            case 'warn1':
                icon = 'iconWarn1'
                break;
            case 'warn2':
                icon = 'iconWarn2'
                break;
            case 'warn3':
                icon = 'iconWarn3'
                break;
            case 'interest':
                icon = 'iconInterest'
                break;
            case 'restricted':
                icon = 'iconRestricted'
                break;
            default:
                return res.status(400).json(false)
        }



        try{
            admin.firestore().collection(`/marker_subs/`).doc().set({
                title: req.query.title,
                icon: icon,
                position: [req.query.position0, req.query.position1]
            })
            return res.json(true)
        } catch(err) {
            return res.status(400).json(false)
        }
    } else {
        return res.status(400).json(false)
    }
});
