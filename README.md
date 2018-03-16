# API Security with OpenID Connect

_Securing APIs with OpenID Connect using 3scale API Management and Red Hat Single Sign On_ demo is a multi-product demo showing how Red Hat 3scale API Management and Red Hat Single Sign On can be use to evolve APIs security.

**Products and Projects**

* OpenShift Container Platform
* Red Hat 3scale API Management
* Red Hat Single Sign On
* Red Hat Fuse
* Red Hat AMQ

**Provisioning Time:** ~15 min

**Guide:** 

**Github Repo:** http://github.com/jbossdemocentral/3scale-security-oidc-demo

## Background

Shadowman Insurance Corporation is one of the largest providers of car and life insurance in the country. The company also insures motorcycles, boats, RVs and commercial vehicles, and provides home insurance through select companies. Being one of the largest auto insurers, with over 13 million policies in force. Shadowman Insurance primarily offers its services through the Internet or by phone and through partner independent insurance agents.

To stay competitive, they decide to start the new "Digital transformation Project" by transforming their entire business and organizational activities, processes to fully leverage the digital technologies. Part of their project is expand their partner ecosystem and enhance their customer experience.

### Accident alert and Claim

Shadowman Insurance partner accident customer helpdesk center collects report of the clients and report back to Shadowman daily. And would like to automate and kick off the claim process for their client. as well as allowing instant report from partner systems. Shadowman Insurance Corporation would like to integrate both Alert and Claim. As much as Shadowman Insurance's urgency to provide these capability. They were also concern about the security of the service they provide. No compromise when it comes to the safty of the client data and it's system.

### API Security

Shadowman Insurance CSO (Chief Security Officer) requested that all external facing services be compliant with the corporate security policy. They currently have a web application using Red Hat Single Sign On to secure the Accident Alert Center Portal. In this demo we will integrate the backend REST service with the Alert Center portal using an API Gateway secured service instead of the old legacy endpoint.

### Demo Objectives

* Disable external access to backend service
* Configure 3scale service to receive POST methods on the internal backend service endpoint
* Update Alert Center Portal web application with the secured code using RH SSO Javascript adapter
* Update the deploy configuration with the new build of the Alert Center Portal using the gated backend service endpoint
* Show the 3scale service analytics after posting reports using the gated service
* OPTIONAL - update the application plan to rate-limit the application

![Demo](docs/images/3scale-security-oidc-demo.png)

## Installation

### Prerequisites

* OpenShift Container Platform 3.6
* User with cluster-admin role
* OpenShift router with [support for wildcard routes](https://docs.openshift.com/container-platform/3.6/install_config/router/default_haproxy_router.html#using-wildcard-routes) 

<TODO>

## Deployment

<TODO>

## Usage

<TODO>

### Support & Ownership

Feel free to ask [Hugo Guerrero](hguerrer@redhat.com) if you need some support when there are any questions left or if you need some support.