# API Security with OpenID Connect

## Introduction

_Securing APIs with OpenID Connect using 3scale API Management and Red Hat Single Sign On_ demo is a multi-product demo showing how Red Hat 3scale API Management and Red Hat Single Sign On can be use to evolve APIs security.

**Products and Projects**

* OpenShift Container Platform
* Red Hat 3scale API Management
* Red Hat Single Sign On
* Red Hat Fuse
* Red Hat AMQ

**Provisioning Time:** ~15 min

**Slides:** https://github.com/jbossdemocentral/3scale-security-oidc-demo/tree/master/docs/slides.pdf

**Video:**

[![API Security with OpenID Connect](docs/images/video-thumbnail.png)](https://vimeo.com/259970326 "API Security with OpenID Connect - Click to Watch!")

**Credentials**

Red Hat Single Sign On
  
* Username: **keyadmin**
* Password: **keypassword**

3scale API Management

* Username: **admin**
* Password: **password**

Web Application

* Username: **statepolice**
* Password: **password**

**Github Repo:** http://github.com/jbossdemocentral/3scale-security-oidc-demo

## Background

Shadowman Insurance Corporation is one of the largest insurance providers in the country. Shadowman Insurance primarily offers its services through the Internet and through partner independent insurance agents. To stay competitive, they decide to start the new "Digital transformation Project" by transforming their entire business and organizational activities, processes to fully leverage the digital technologies. 

### Accident Alerts

Shadowman Insurance accident customer helpdesk center collects external reports of the clients and send them back to Shadowman daily. The company wants to enable police and fire departments access to the accident alert center web application. Currently that application is used by the helpdesk from the internal (VPN) network. As much as Shadowman Insurance's urgency to provide these capability, they were also concern about the security of the service they provide. No compromise when it comes to the safty of the client data and it's system.

### API Security

Shadowman Insurance CSO (Chief Security Officer) requested that all external facing services be compliant with the corporate security policy. Currently the web application is using Red Hat Single Sign On to secure the Accident Alert Center Portal. In this demo the backend REST service will be integrated with the Alert Center portal using an API Gateway secured service instead of the legacy unsecured endpoint.

## Demo Objectives

* Disable external access to backend service
* Configure 3scale service to receive POST methods on the internal backend service endpoint
* Update Alert Center Portal web application with the secured code using RH SSO Javascript adapter
* Update the deploy configuration with the new build of the Alert Center Portal using the gated backend service endpoint
* Show the 3scale service analytics after posting reports using the gated service
* OPTIONAL - update the application plan to rate-limit the application

![Demo](docs/images/3scale-security-oidc-demo.png)

## Deployment

The easiest way to deploy this demos is to request it from [Red Hat Product Demo System (RHPDS)](https://rhpds.redhat.com). If you want to deploy in your own OpenShift cluster you can follow the [installation instructions](docs/Installation.md#installation).

## Support & Ownership

Feel free to ask [Hugo Guerrero](https://github.com/hguerrero) if you need some support when there are any questions left or if you need some support.
