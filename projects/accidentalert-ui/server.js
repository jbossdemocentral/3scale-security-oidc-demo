const express = require('express');
const { stringReplace } = require('string-replace-middleware');
const path = require('path');

const app = express();

console.log(process.env);

// writing from Deployment Config to temporary variables
const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3000/secured";
const KEYCLOAK_URL = process.env.KEYCLOAK_URL || "http://localhost:8080/auth";
const KEYCLOAK_REALM = process.env.KEYCLOAK_REALM || "insurance";
const KEYCLOAK_CLIENT_ID = process.env.KEYCLOAK_CLIENT_ID || "accidentui-client";
const KEYCLOAK_ROLE = process.env.KEYCLOAK_ROLE || "none";
const AUTHENTICATION_OPTION = process.env.AUTHENTICATION_OPTION || "none";

const PORT = process.env.PORT || 8080;

// adding values into the source code
app.use(stringReplace({
   'ENVIRONMENT.BACKEND_URL': BACKEND_URL,
   'ENVIRONMENT.KEYCLOAK_URL': KEYCLOAK_URL,
   'ENVIRONMENT.KEYCLOAK_REALM' : KEYCLOAK_REALM,
   'ENVIRONMENT.KEYCLOAK_CLIENT_ID': KEYCLOAK_CLIENT_ID,
   'ENVIRONMENT.KEYCLOAK_ROLE' : KEYCLOAK_ROLE,
   'ENVIRONMENT.AUTHENTICATION_OPTION': AUTHENTICATION_OPTION
}));

app.use('/assets/css', express.static(path.join(__dirname, '/node_modules/patternfly/dist/css')))
app.use('/assets/js', express.static(path.join(__dirname, '/node_modules/patternfly/dist/js')))
app.use('/assets/css', express.static(path.join(__dirname, '/node_modules/bootstrap-datepicker/dist/css')))
app.use('/assets/js', express.static(path.join(__dirname, '/node_modules/bootstrap-datepicker/dist/js')))
app.use(express.static(path.join(__dirname, '/templates/src')))

app.get('/', function(req, res) {
    res.render('index.html');
});

//app.listen(8080);
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
