# Accident Alert Web Application

Red Hat Insurance Accident Alert Web Application is an HTML application secured with Red Hat Single Sign On (RH-SSO) that allows authorized entities to report accidents.

## Installation

To make installation easier, we provide an openshift template to install the web application. Follow these steps to get a running instance of the accident alert web application:

1. Install Openshift template

        oc create -f ../../templates/accidentalert-ui-template.json -n openshift

## Deployment

1. Add application to your project

        oc new-app accidentalert-ui-template -p SSO_URL=<sso_url> -p BACKEND_URL=<backend_url> -p APPLICATION_HOSTNAME=<hostname>

## Usage

Login into the application opening a web browser and navigating to \<hostname\>

## Support & Ownership

Feel free to ask [Hugo Guerrero](hguerrer@redhat.com) if you need some support when there are any questions left or if you need some support.