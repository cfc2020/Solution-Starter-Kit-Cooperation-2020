# Community collaboration in the context of COVID-19

The purpose of ProtectPlus is to help healthcare workers in a health crisis such as COVID19. This app allows the community to donate critical resources such as meals, safe place for health care workers to sleep and relax and so on. To protect the community, we must protect the healthcare workers first.

## Authors


- Prachi Khadke
- Georges Ajaka
- Anupama Murthi
- Dipesh Rawat
- Kelcey Gosserand


## Contents

1. [Overview](#overview)
2. [The idea and MVP](#the-idea-and-mvp)
3. [How it works](#how-it-works)
4. [Diagrams](#diagrams)
5. [Documents](#documents)
6. [Technology](#technology)
7. [Getting started](#getting-started)
8. [Resources](#resources)
9. [License](#license)

## Overview

### What's the problem?

There is a growing interest in enabling communities to cooperate among themselves to solve these problems, whether it be to advertise where supplies are held, offer assistance for collections, or other local services like volunteer deliveries.

In times of crisis, such as the 2020 SARS-COV-2 (COVID-19 or "Novel Coronavirus") crisis, while federal and local governments may be rolling out broad programs, cooperation at the local level is usually the most effective way of getting help to where it is most needed as quickly as possible. Traditional social media is one way of communicating within a community, but this is (by its very design) not locally focused, and often not sufficiently structured to enable rapid discovery of help needed.

In the COVID-19 crisis, we have already seen shortages of local food, medical equipment, and other supplies. In addition, the recommended (or required) self-isolation and social distancing measures can compound the problem by preventing people from easily getting to locations with the best stocks of supplies.

What is needed is a solution that empowers communities to easily connect and provide this information to each other.

### How can technology help?

Mobile, web, and cloud services enable rapid deployment of applications that can empower cooperation in the community. [Watson Assistant](https://www.ibm.com/cloud/watson-assistant/) is a service on [IBM Cloud](https://cloud.ibm.com) that allows you to build, train, and deploy conversational interactions into any application, device, or channel.

Creating a chatbot using Watson Assistant can help you address the issues that your users may face while trying to gather the necessary information. Embedding location/routing services (like [HERE](https://developer.here.com/products/routing)) can enhance such applications, giving optimum guidance so that they are outside of their isolation location for the minimum amount of time.

## The idea and MVP

The purpose of ProtectPlus is to help healthcare workers in a health crisis such as COVID19. This app allows the community to donate critical resources such as meals, safe place for health care workers to sleep and relax and so on. To protect the community, we must protect the healthcare workers first.

### Screens:

1. Login screen
2. Authentication
3. Screen for every type of donation.

    3a. Types of donations:
    * housing
    * medical supplies
    * food
    * ipad/ device for people in ICU (isolation)
    * groceries? (maybe later?)

    3b. APIs we can tap for donations/delivery
    * Gofundme (secure)
    * uber/courier

4. matching needs with availability
5. state diagram  + algorithm: yelp/google maps api
6. screen for healthcare professional/hospital administrator 
7. service provider (local restaurant) screen (with donation option)  

### Technical Architecture:
* connection to database (starter kit)
* Web-server (reactjs) 


### API References:
#### Delivery
* dropoff: https://www.dropoff.com/solutions/api/
* ubereats: https://developer.uber.com/docs/eats/introduction
* delivery.com: https://developers.delivery.com/
* parseur: https://parseur.com/use-case/food-delivery-order-api-for-grubhub-eat24-seamless#when-use-a-food-delivery-api

#### Donations
* Gofundme (https://charityapi.gofundme.com/)
* Facebook fundraisers:  https://www.facebook.com/fundraisers/about/personal-fundraising?sem_campaign_id=1885916387.75795640248.347791793248.Cj0KCQjwj7v0BRDOARIsAGh37irN6JJwPBiDD1pW3EAoLWdlPSNcyULRO1GII47gTaOCH3jvjh2L0TMaAsYEEALw_wcB&sem_adgroupid=c.kwd-296198580168&sem_keyword=gofundme
* 3. https://socialgood.fb.com/charitable-giving/fundraiser-api/

#### Additional references
* http://systrom.com/blog/the-metric-we-need-to-manage-covid-19/

## Documents

Trusted sources for COVID-19 Information:
- [CDC COVID-19 FAQ](https://www.cdc.gov/coronavirus/2019-ncov/faq.html)
- [WHO COVID-19 page](https://www.who.int/health-topics/coronavirus)
- [Johns Hopkins University Coronavirus (includes tracking map)](https://coronavirus.jhu.edu)
- [National Foundation for Infectious Diseases](https://www.nfid.org/infectious-diseases/frequently-asked-questions-about-novel-coronavirus-2019-ncov/)

## Technology

### IBM Cloud Services

- [Bot Asset Exchange](https://developer.ibm.com/code/exchanges/bots/)
- [IBM Watson Assistant](https://www.ibm.com/cloud/watson-assistant/)
- [How-to guides for chatbots](https://www.ibm.com/watson/how-to-build-a-chatbot)
- [Create a machine learning powered web app to answer questions](https://developer.ibm.com/patterns/create-a-machine-learning-powered-web-app-to-answer-questions-from-a-book/)
- [Learning path: Getting started with Watson Assistant](https://developer.ibm.com/series/learning-path-watson-assistant/)
- [Train a speech-to-text model](https://developer.ibm.com/patterns/customize-and-continuously-train-your-own-watson-speech-service/)
- [Enhance customer helpdesks with Smart Document Understanding using webhooks in Watson Assistant](https://developer.ibm.com/patterns/enhance-customer-help-desk-with-smart-document-understanding/)
- [Watson Voice Agent](https://cloud.ibm.com/catalog/services/voice-agent-with-watson)
- [Getting Started with Watson Voice Agent](https://cloud.ibm.com/docs/services/voice-agent?topic=voice-agent-getting-started)
- [Making Programmatic Calls from Watson Assistant](https://cloud.ibm.com/docs/assistant?topic=assistant-dialog-webhooks)
- [IBM Cloud Voice Agent with Twilio](https://developer.ibm.com/recipes/tutorials/ibms-voice-agent-with-watson-and-twilio/)
- [Build a Chatbot For Your Mobile App](https://developer.ibm.com/technologies/mobile/patterns/building-a-chatbot-with-kubernetes-watson-assistant-and-elastic-search)
- [Build a cross-platform mobile app using React Native](https://developer.ibm.com/technologies/mobile/patterns/build-a-cross-platform-mobile-app-to-search-company-news-and-gain-insights)
- [Building successful mobile apps article series](https://developer.ibm.com/series/building-successful-mobile-apps/)
- [Chat Bot Slack Integration](https://developer.ibm.com/technologies/artificial-intelligence/videos/integrating-watson-assistant-with-slack-using-built-in-integrations/#)
- [Chat Bot Slack deployment](https://cloud.ibm.com/docs/assistant?topic=assistant-deploy-slack)
- [Node-RED Slack integration](https://www.ibm.com/cloud/blog/create-a-chatbot-on-ibm-cloud-and-integrate-with-slack-part-1)

### HERE Technologies

- [HERE.com API Key](https://developer.here.com/ref/IBM_starterkit_Covid?create=Freemium-Basic)
- [HERE Maps](https://developer.here.com/products/maps)
- [HERE Routing](https://developer.here.com/products/routing)
- [Integrate interactive maps and location features into your application](https://developer.here.com/documentation/)

## Getting started

### Prerequisites

- Register for an [IBM Cloud](https://www.ibm.com/account/reg/us-en/signup?formid=urx-42793&eventid=cfc-2020?cm_mmc=OSocial_Blog-_-Audience+Developer_Developer+Conversation-_-WW_WW-_-cfc-2020-ghub-starterkit-cooperation_ov75914&cm_mmca1=000039JL&cm_mmca2=10008917) account.
- Install and configure [IBM Cloud CLI](https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started#overview).
- Register for a [HERE](https://developer.here.com/ref/IBM_starterkit_Covid?create=Freemium-Basic) account.
- Install [React Native CLI dependencies](https://reactnative.dev/docs/getting-started.html) (for iOS).
    - [Node.js](https://nodejs.org/en/)
    - [Watchman](https://facebook.github.io/watchman/docs/install)
    - [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)
    - [CocoaPods](https://guides.cocoapods.org/using/getting-started.html)
- Clone the [repository](https://github.com/Call-for-Code/Solution-Starter-Kit-Cooperation-2020).

### Steps

1. [Set up an instance of Watson Assistant](#1-set-up-an-instance-of-watson-assistant).
1. [Provision a CouchDB instance using Cloudant](#2-Provision-a-CouchDB-instance-using-Cloudant).
1. [Generate an API Key from the HERE Developer Portal](#3-generate-an-api-key-from-the-here-developer-portal).
1. [Run the server](#4-run-the-server).
1. [Run the mobile application](#5-run-the-mobile-application).

### 1. Set up an instance of Watson Assistant

Log in to IBM Cloud and provision a Watson Assistant instance.

1. Provision an instance of **Watson Assistant** from the [IBM Cloud catalog](https://cloud.ibm.com/catalog/services/watson-assistant).
1. Launch the Watson Assistant service.
1. [Create an **Assistant**](https://cloud.ibm.com/docs/assistant?topic=assistant-assistant-add).
1. [Add a dialog skill](https://cloud.ibm.com/docs/assistant?topic=assistant-skill-dialog-add) to the **Assistant** by importing the [`starter-kit-cooperation-dialog-skill.json`](./starter-kit/assistant/starter-kit-cooperation-dialog-skill.json) file.
1. Go back to All Assistants page, open **Settings** from the action menu ( **`⋮`** ) and click on **API Details**.
1. Note the **Assistant ID**, **API Key**, and **Assistant URL**. For **Assistant URL**, make note of the base URL/domain (e.g., `https://api.us-south.assistant.watson.cloud.ibm.com` or `https://api.eu-gb.assistant.watson.cloud.ibm.com`) and not the full directory/path. You will need all three of these values in Step 4 below.

1. Go to **Preview Link** to get a link to test and verify the dialog skill.

### 2: Provision a CouchDB instance using Cloudant

Log into the IBM Cloud and provision a [CouchDB instance using Cloudant](https://www.ibm.com/cloud/cloudant).

1. From the catalog, select Databases and then the Cloudant panel.
1. Once selected, you can choose your Cloudant plan -- there is a free tier for simple testing that is sufficient to run this CIR example. You should choose an appropriate region, give the service a name, and it is recommended you choose **Use only IAM** under **Available authentication methods**. You can leave the other settings with their defaults. Click the blue **Create** button when ready.
1. Once your Cloudant instance has been created, you need to create a service credential that the CIR API Server can use to communicate with it. By selecting your running Cloudant instance, you can choose **Service credentials** from the left-hand menu. Create a new service credential and give it a name (it doesn't matter what you call it).
1. Once created, you can display the credentials by selecting **view service credentials**, and then copy the credential, so you are ready to paste it into the code of the API server in Step 4.

### 3. Generate an API Key from the HERE Developer Portal

The application uses HERE Location Services for maps, searching, and routing.

To access these services, you'll need an API key. Follow the instructions outlined in the [HERE Developer Portal](https://developer.here.com/ref/IBM_starterkit_Covid?create=Freemium-Basic) to [generate a JavaScript API key](https://developer.here.com/documentation/authentication/dev_guide/topics/api-key-credentials.html).

### 4. Run the server

To set up and launch the server application:

1. Go to the `starter-kit/server-app` directory of the cloned repo.
1. Copy the `.env.example` file in the `starter-kit/server-app` directory, and create a new file named `.env`.
1. Edit the newly created `.env` file and update the `ASSISTANT_URL`, `ASSISTANT_ID`, and `ASSISTANT_IAM_APIKEY` with the values from the dialog skill's API Detail page in Watson Assistant, from Step 1. Also, update the `CLOUDANT_ID` and `CLOUDANT_IAM_APIKEY` with the values from the service credential you created in Step 2. (Note that the `username` from the credential is what should be used for the `CLOUDANT_ID`.)
1. Edit the **name** value in the `manifest.yml` file to your application name (for example, _my-app-name_).
1. From a terminal:
    1. Go to the `starter-kit/server-app` directory of the cloned repo.
    1. Install the dependencies: `npm install`.
    1. Launch the server application locally or deploy to IBM Cloud:
        - To run locally:
            1. Start the application: `npm start`.
            1. The server can be accessed at <http://localhost:3000>.
        - To deploy to IBM Cloud:
            1. Log in to your IBM Cloud account using the IBM Cloud CLI: `ibmcloud login`.
            1. Target a Cloud Foundry org and space: `ibmcloud target --cf`.
            1. Push the app to IBM Cloud: `ibmcloud app push`.
            1. The server can be accessed at a URL using the **name** given in the `manifest.yml` file (for example,  <https://my-app-name.bluemix.net>).

### 5. Run the mobile application

To run the mobile application (using the Xcode iOS Simulator):

1. Go to the `starter-kit/mobile-app` directory of the cloned repo.
1. Copy the `.env.example` file in the `starter-kit/mobile-app` directory, and create a file named `.env`.
1. Edit the newly created `.env` file:
    - Update the `STARTER_KIT_SERVER_URL` with the URL to the server app launched in the previous step.
    - Update the `HERE_APIKEY` with the API key generated in the HERE Developer Portal.
1. From a terminal:
    1. Go to the `starter-kit/mobile-app` directory.
    1. Install the dependencies: `npm install`.
    1. Go to the `ios` directory: `cd ios`.
    1. Install pod dependencies: `pod install`.
    1. Return to the `mobile-app` directory: `cd ../`.
    1. Launch the app in the simulator: `npm run ios`. You should be running at least iOS 13.0.
    1. The first time you launch the simulator, you should ensure that you set a Location in the Features menu.

With the application running in the simulator, you should be able to navigate through the various screens:

![Intro Screen](/images/0-screen-home.png)
![Donate Screen](/images/1-screen-donate.png)
![Search Screen](/images/2-screen-search.png)
![Chat Screen](/images/5-screen-chat.png)
![Map1 Screen](/images/3-screen-map.png)
![Map2 Screen](/images/4-screen-map.png)

## Resources

- [IBM Cloud](https://www.ibm.com/cloud)
- [Watson Assistant](https://cloud.ibm.com/docs/assistant?topic=assistant-getting-started)
- [IBM Cloudant](https://cloud.ibm.com/docs/Cloudant?topic=cloudant-overview)
- [HERE Location Services](https://developer.here.com/documentation)
- [Node.js](https://nodejs.org)
- [React Native](https://reactnative.dev/)
- [IBM Blockchain for Developers](https://developer.ibm.com/technologies/blockchain/)

## License

This solution starter is made available under the [Apache 2 License](LICENSE).