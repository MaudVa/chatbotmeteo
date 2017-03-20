var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (req.query['hub.mode'] === 'subscribe' &&
      req.query['hub.verify_token'] === '4P|snTKth,=u(O:)' {
    console.log("Validating webhook");
    res.status(200).send(req.query['hub.challenge']);
  } else {
    console.error("Failed validation. Make sure the validation tokens match.");
    res.sendStatus(403);
  }
});

module.exports = router;
