# API Security with OpenID Connect

## Introduction

_Securing APIs with OpenID Connect using 3scale API Management and Red Hat Single Sign On_ demo is a multi-product demo showing how Red Hat 3scale API Management and Red Hat Single Sign On can be use to evolve APIs security.

**Audience**

* Developers
* Architects
* IT Security
* Integratorion Specialists


**Products and Projects**

* OpenShift Container Platform
* Red Hat 3scale API Management
* Red Hat Single Sign On
* Red Hat Fuse
* Red Hat AMQ

**Duration**

The basic scenarios can be completed in 25 - 30 minutes. The time to complete the advanced scenario depends on the optional scenarios that you want to try.

**Video Overview**

[![API Security with OpenID Connect](docs/images/video-thumbnail.png)](https://vimeo.com/259970326 "API Security with OpenID Connect - Click to Watch!")


## Deployment
To deploy the demos, request the **3Scale API Security with OIDC** workshop from the [Red Hat Product Demo System (RHPDS)](https://rhpds.redhat.com/catalog/explorer). 

If you want to deploy in your own OpenShift cluster you can follow the installation instructions.

**Provisioning**
Workshop provisioning takes a maximum of 60 - 75 minutes.

If the workshop fails to deploy, resubmit your provisioning request. If deployment continues to fail after three attempts, open a ticket by [clicking here](https://redhat.service-now.com/help?id=sc_cat_item&sys_id=00c0316a1bf39450e43942a7bc4bcbd1).

After your provisioning request is received, the Red Hat Product Demo System sends you a series of email messages with updates about the status of the request. When your environment is ready to use, you receive a final email that includes information about how to access the environment.


**Github Repo:** http://github.com/jbossdemocentral/3scale-security-oidc-demo

## Demo Overview

Shadowman Insurance Corporation is one of the largest insurance providers in the country. Shadowman Insurance has developed a Web Application for customers to report accidents. It is a simple form that can be submitted (There is no additional logic implemented after the submit).

The application initially consist of 2 services:
UI service: written in Node.js which allows to report an accident 
Back-end service: exposed via a REST interface and (in the beginning) a public route. The back-end service is just a facade, nothing happens with the data and the request.


### Accident Alerts

Shadowman Insurance CSO (Chief Security Officer) requested that all external facing services be compliant with the corporate security policy. Shadowman's were concerned about the security of this application and discovered the application was completely unprotected with a lot of security holes. 

This workshop walks you through all the security holes and demonstrates how we can close these security holes with the help of the Red Hat portfolio.


## Demo Objectives

* Disable external access to backend service
* Configure 3scale service to receive POST methods on the internal backend service endpoint
* Update Alert Center Portal web application with the secured code using RH SSO Javascript adapter
* Update the deploy configuration with the new build of the Alert Center Portal using the gated backend service endpoint
* Show the 3scale service analytics after posting reports using the gated service
* OPTIONAL - update the application plan to rate-limit the application

![Demo](docs/images/3scale-security-oidc-demo.png)

## Additional Scenarios
Explore the additional scenarios where we explore things such as creating an API product from scratch instead of using the pre configure one on 3Scale, blocking access to all the clients in case of massive hack, implementing social logins for SSO.

## Support & Ownership

Feel free to ask [Hugo Guerrero](https://github.com/hguerrero) if you need some support when there are any questions left or if you need some support.
