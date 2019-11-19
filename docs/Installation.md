# Installation

Follow this instructions to setup a working demo environment.

## Prerequisites

* OpenShift Container Platform 3.6
* User with cluster-admin role
* OpenShift router with [support for wildcard routes](https://docs.openshift.com/container-platform/3.6/install_config/router/default_haproxy_router.html#using-wildcard-routes) 

## Deployment

1. Setup the environment. Login as a cluster admin and create the required templates.

    ```bash
    $ oc login -u system:admin
    $ oc create -f https://raw.githubusercontent.com/jboss-openshift/application-templates/ose-v1.4.7/jboss-image-streams.json -n openshift
    $ for i in {https,mysql,mysql-persistent,postgresql,postgresql-persistent}; do oc create -f https://raw.githubusercontent.com/jboss-openshift/application-templates/ose-v1.4.7/sso/sso71-$i.json -n openshift; done
    ```

1. Create project for Red Hat Single Sign On.

    ```bash
    $ oc new-project rh-sso --display-name='Red Hat Single Sign On'
    $ oc create -f https://raw.githubusercontent.com/jboss-openshift/application-templates/ose-v1.4.7/secrets/sso-app-secret.json -n rh-sso
    $ oc policy add-role-to-user view system:serviceaccount:rh-sso:sso-service-account
    $ oc new-app sso71-mysql-persistent -p HTTPS_NAME=jboss -p HTTPS_PASSWORD=mykeystorepass -p SSO_ADMIN_USERNAME=keyadmin -p SSO_ADMIN_PASSWORD=keypassword
    ```

1. Create project for API Implementation.

    ```bash
    $ oc new-project service --display-name='Alert Center Backend Service'
    $ oc process -f https://raw.githubusercontent.com/jbossdemocentral/3scale-security-oidc-demo/master/support/templates/amq63-basic-template.json -p MQ_USERNAME=admin -p MQ_PASSWORD=admin | oc create -f -
    $ oc process -f https://raw.githubusercontent.com/jbossdemocentral/3scale-security-oidc-demo/master/support/templates/accidentalert-backend-template.json -p APP_NAME=accidentalert-backend -p GIT_REPO=https://github.com/jbossdemocentral/3scale-security-oidc-demo.git -p GIT_REF=master -p CONTEXT_DIR=/projects/myaccidentalert -p ACTIVEMQ_BROKER_USERNAME=admin -p ACTIVEMQ_BROKER_PASSWORD=admin -p CPU_REQUEST=1 -p MEMORY_REQUEST=512Mi -p MEMORY_LIMIT=1024Mi | oc create -f -
    ```

1. Create project for ui app. Replace the URL env vars with your actual environment hostnames.

    ```bash
    $ oc new-project www
    $ oc process -f https://raw.githubusercontent.com/jbossdemocentral/3scale-security-oidc-demo/master/support/templates/accidentalert-ui-template.json -p SSO_URL='https://secure-sso-rh-sso.apps.d2a7.openshift.opentlc.com' -p BACKEND_URL='http://accidentalert-backend-service.apps.d2a7.openshift.opentlc.com' -p APPLICATION_HOSTNAME='www-accidentalert-ui.apps.d2a7.openshift.opentlc.com' | oc create -f -
    ```

1. Create project for 3scale.

    ```bash
    $ oc new-project threescale
    $ oc new-app -f https://raw.githubusercontent.com/3scale/3scale-amp-openshift-templates/2.1.0-GA/amp/amp.yml --param WILDCARD_DOMAIN=amp.apps.d2a7.openshift.opentlc.com --param ADMIN_PASSWORD=password --param WILDCARD_POLICY=Subdomain
    ```

## Config

1. Import the insurance [realm](support/templates/insurance-realm.json) into Red Hat Single Sign On.
1. Add role 'manage-clients' to the 3sale-admin client's service account.
1. Write down the service account secret.
1. Create the backend service in 3scale. 
    1. Select OIDC as authentication mechanism.
    1. Set name "Accident Report API"
    1. Set system name "accidentalert"
1. Create an application plan.
    1. Set name "Law Enforcement"
    1. Set system name "lawenforcement"
    1. Publish the plan
1. Config the backend service API.
    1. Fill in the Private Base URL with the backend service OpenShift route.
    1. Fill in the information of the RH SSO endpoint for 3scale zync.
1. Create the accidentalert-ui application.
    1. Set description "Accident Report Web Application"
    1. Set name "Accident Report App"
1. Make the application client public in RH SSO.
1. Update the application clientId in the web ui code.
