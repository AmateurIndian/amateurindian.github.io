import React from 'react';

import { IoLogoMedium } from "@react-icons/all-files/io5/IoLogoMedium";
import { IoLogoTwitter } from "@react-icons/all-files/io5/IoLogoTwitter";
import { IoLogoGithub } from "@react-icons/all-files/io5/IoLogoGithub";
import { IoLogoLinkedin } from "@react-icons/all-files/io5/IoLogoLinkedin";
import {IoLogoYoutube} from "@react-icons/all-files/io5/IoLogoYoutube";
import { IoGlobeSharp } from "@react-icons/all-files/io5/IoGlobeSharp";
import aws1 from '../assets/images/AWS1.png';
import coreDev from "../assets/images/dzone_badge.png";
import dzone from '../assets/images/dzone.png';
import hubspot from '../assets/images/hubspot_cert.png';
import datadog from '../assets/images/datadog_badge.png';
import awscomm from '../assets/images/aws_comm_badge.png';
import tns from '../assets/images/thenewstack.png';
import devops from '../assets/images/devops.png';
import thundra from '../assets/images/thundrablog.png';
import atlascomm from '../assets/images/atlascom.png';
import defaultAtlassianImage from '../assets/images/atlassian-community-opengraph.png';





export default{
    name: 'Sarjeel Yusuf',
    title: 'Engineer Turned Product Manager',
    job_role: 'Product Manager',
    company: 'Datadog',
    email: 'sarj93@gmail.com',
    phone: '+905514426217',
    address: '11 Rue du Dr Paul Brousse, Paris - 75017 FRANCE',

    social:{
        linkedin:{
            link: 'https://www.linkedin.com/in/syedsarj/',
            icon: <IoLogoLinkedin/>
        },
        github:{
            link: 'https://github.com/AmateurIndian',
            icon: <IoLogoGithub/>
        },
        twitter:{
            link: 'https://twitter.com/SarjeelY',
            icon: <IoLogoTwitter/>
        },
        medium:{
            link: 'https://medium.com/@yusuf_82810',
            icon: <IoLogoMedium/>
        }
    },

    work:{
        ddog:{
            company: 'Datadog',
            date: 'November 2021 - Present',
            job: 'Product Manager',
            description: 'DevOps Automation \nIncident App',
        },
        atlassian:{
            company: 'Atlassian',
            date: 'July 2019 - November 2021',
            job: 'Product Manager',
            description: 'Introduced and fully owned next-gen flagship solution which aligns JSM and Opsgenie to shifting market demands. \nImplemented AAARRR principles to promote growth in new flagship features increasing utilization. \nLed Frontend team in revamping product navigation, validated using A/B testing, achieving improvement in CSAT score by 0.4. \nLed company-wide platform platform project unifying data layer to increase velocity of when building cross-product features. \nManaged teams across 4 time zones to align and coordinate on OKRs achiving desired KPIs',
        },
        atlassianENG:{
            company: 'Atlassian',
            date: 'February 2019 - July 2019',
            job: 'Software Engineer',
            description: 'Co-lead in building Opsgenie\'s In-app announcemnt microservice. \nDeveloped short-codes for the products SMS messaging service. \Implmented basecode for Opsgenie\'s new scheduling microservices on AWS architecture',
        },
        thundra:{
            company: 'Thundra.io',
            date: 'July 2018 - February 2019',
            job: 'Software Engineer',
            description: 'Worked alongside a senior engineer to build the first version of Thundra\'s .NET agent.Co-lead in building onboarding dashboard using React.js and associated tools. \nDebugging detected bugs by using monitoring tools such as AWS CloudWatch.'
        },
        tarla:{
            company: 'Tarla.io',
            date: 'January 2018 - June 2018',
            job: 'Machine Learning Engineer',
            description: 'Performed image processing on satellite images of farmland to detect different crops in a field. \nPerformed data mining, and classification along with techniques such as SVM and Clustering, and eventually branching out into neural networks. '
        },   
    },

    education:{
        bilkent:{
            institution: 'Bilkent University',
            date: '2014 - 2018 (Ankara, TURKEY)',
            degree: 'Bachelors in Computer Engineering',
            description: 'Honors Student',
        },
        tcs:{
            institution: 'The Cambridge School',
            date: '2011- 2013 (Kolkata, INDIA)',
            degree: 'CIE-A Levels',
            description: '5 subjects: A*, A, A, A, A',
        },
    },

    certification:{

        awscomm:{
            issuer: 'Amazon Web Services',
            level: 'AWS Community Builder',
            date: 'May 2021',
            link: 'https://aws.amazon.com/developer/community/community-builders/',
            image: awscomm
        },

        aws1:{
            issuer: 'Amazon Web Services',
            level: 'Cloud Practitioner',
            date: 'Jul 2019',
            link: 'https://www.youracclaim.com/badges/34c407e9-b7cd-4083-9c53-ad1e02e8b6db?source=linked_in_profile',
            image: aws1
        },

        datadogintro:{
            issuer: 'Datadog Learning Center',
            level: 'Introduction to Datadog',
            date: 'May 2021',
            link: 'https://sarjeelyusufcv.s3.eu-central-1.amazonaws.com/certificates/datadog.pdf',
            image: datadog
        },

        inboundhub:{
            issuer: 'Hubspot Academy',
            level: 'Inbound Methodology',
            date: 'Feb 2021',
            link: 'https://sarjeelyusufcv.s3.eu-central-1.amazonaws.com/certificates/hubspot.png',
            image: hubspot
        },

        coreDev:{
            issuer: 'DZone',
            level: 'Core Member',
            date: 'Feb 2021',
            link: 'https://dzone.com/users/3508676/syedsarj.html',
            image: coreDev
        },
    },

    publications:{
        newstack:{
            publisher: 'The New Stack',
            link: 'https://thenewstack.io/author/sarjeelyusuf/',
            image: tns
        },
        dzone:{
            publisher: 'DZone',
            link: 'https://dzone.com/users/3508676/syedsarj.html',
            image: dzone
        },
        devops:{
            publisher: 'DevOps',
            link: 'https://devops.com/author/sarjeel-yusuf/',
            image: devops
        },
        thundrablog:{
            publisher: 'Thundra Blogs',
            link: 'https://blog.thundra.io/author/sarjeel-yusuf',
            image: thundra
        },
        atlascommunity:{
            publisher: 'Atlassian Community',
            link: 'https://community.atlassian.com/t5/user/viewprofilepage/user-id/2807082',
            image: atlascomm
        }
    },

    speaking: [

        {
            image: "https://sarjeelyusufcv.s3.eu-central-1.amazonaws.com/DD_DC.png",
            title: "5 Serverless Powerups for your DevOps Infrastructure in 5 minutes",
            eventName: "DevOps Days DC",
            date: "04/11/2021",
            description: "Adopting DevOps is hard, especially since there are barriers in the form of the required efforts, learning curve, and the potential cost of changing current practices. Therefore. in this lightning talk, we will go over 5 lightweight solutions in how serverless technologies can be leveraged to boost your DevOps infrastructure in a manner that will incur low cost and effort while unleashing maximum potential.",
            links:[
                {link: "https://www.youtube.com/watch?v=ouRW5PeN990&t=1260s", icon: <IoLogoYoutube/>},
                {link: "https://devopsdays.org/events/2021-washington-dc/welcome/", icon: <IoGlobeSharp/>}
            ] 
        },

        {
            image: "https://sarjeelyusufcv.s3.eu-central-1.amazonaws.com/DD_Cairo.jpeg",
            title: "5 Serverless Powerups for your DevOps Infrastructure in 5 minutes",
            eventName: "DevOps Days Cairo",
            date: "29/09/2021",
            description: "Adopting DevOps is hard, especially since there are barriers in the form of the required efforts, learning curve, and the potential cost of changing current practices. Therefore. in this lightning talk, we will go over 5 lightweight solutions in how serverless technologies can be leveraged to boost your DevOps infrastructure in a manner that will incur low cost and effort while unleashing maximum potential.",
            links:[
                {link: "https://www.youtube.com/watch?v=EpZqHb7F4lI", icon: <IoLogoYoutube/>},
                {link: "https://devopsdays.org/events/2021-cairo/welcome/", icon: <IoGlobeSharp/>}
            ] 
        },

        {
            image: "https://sarjeelyusufcv.s3.eu-central-1.amazonaws.com/pp.png",
            title: "Scaling Product Teams When Going Remote",
            eventName: "The Product People",
            date: "18/05/2021",
            description: "An intro into the general perception of remote work, especially in the current environment with COVID-19. Quantitative and qualitative data of how remote work has transformed in the past few years, the willingness to go remote, and actual response to remote work cultures in different team sizes and company cultures.",
            links:[
                {link: "https://www.meetup.com/productmanagementpeople/events/277607438/", icon: <IoGlobeSharp/>}
            ] 
        },

        {
            image: "https://sarjeelyusufcv.s3.eu-central-1.amazonaws.com/dod_kyiv.png",
            title: "5 Serverless Powerups for your DevOps Infrastructure in 5 minutes",
            eventName: "DevOps Days Kyiv",
            date: "22/04/2021",
            description: "Adopting DevOps is hard, especially since there are barriers in the form of the required efforts, learning curve, and the potential cost of changing current practices. Therefore. in this lightning talk, we will go over 5 lightweight solutions in how serverless technologies can be leveraged to boost your DevOps infrastructure in a manner that will incur low cost and effort while unleashing maximum potential.",
            links:[
                {link: "https://www.youtube.com/watch?v=K3VnleYz3uc&list=PL_O8YSX8ckfdHmLtsdpKy2oFwTOxe5BRs&index=19", icon: <IoLogoYoutube/>},
                {link: "https://devopsdays.com.ua/", icon: <IoGlobeSharp/>}
            ] 
        },

        {
            image: "https://sarjeelyusufcv.s3.eu-central-1.amazonaws.com/sc.png",
            title: "Serverless in a DevOps World",
            eventName: "[Poscast]: Serverless Chats",
            date: "02/01/2021",
            description: "On this episode, Jeremy chats with Sarjeel Yusuf about the value of DevOps for modern application development teams, how serverless makes it easier to shift left and deploy better software faster, why CI/CD is so important, and how serverless can help you automate all the things.",
            links:[
                {link: "https://www.youtube.com/watch?v=T7eUUUBRZQQ", icon: <IoLogoYoutube/>},
                {link: "https://www.serverlesschats.com/89/", icon: <IoGlobeSharp/>}
            ] 
        },

        {
            image: "https://sarjeelyusufcv.s3.eu-central-1.amazonaws.com/cff9b616-8a09-4230-8721-d25d4edf08f8.png",
            title: "DevOps for Monolith",
            eventName: "Atlassian team.work 2020 Summit",
            date: "28/10/2020",
            description: "As software building cultural practices evolve, we have seen a drift away from monolith to microservices. However, this change in shift is not experienced equally for all companies. This thus requires introspection into the available services and solutions for teams still running monolith systems. ",
            links:[
                {link: "https://events.atlassian.com/atlassian_teamwork_conference_2020_internal/home?sid=374000", icon: <IoGlobeSharp/>}
            ] 
        },

        {
            image: "https://sarjeelyusufcv.s3.eu-central-1.amazonaws.com/Screen+Shot+2021-02-02+at+20.50.05.png",
            title: "Better IoT with Serverless GraphQL",
            eventName: "GraphQL Asia",
            date: "22/02/2020",
            description: "IoT was meant to revolutionize how we were meant to integrate tech into our lives. However, IoT adoption is dismal due to a myriad of problems. The solution lies in the way we service our IoT devices on the data and compute layer, and a serverless GraphQL architecture has all the solutions.",
            links:[
                {link: "https://www.youtube.com/watch?v=GrFmeCz8oUo", icon: <IoLogoYoutube/>},
                {link: "https://graphql.asia/", icon: <IoGlobeSharp/>}
            ] 
        },

        {
            image: "https://sarjeelyusufcv.s3.eu-central-1.amazonaws.com/ndc_sydney.jpeg",
            title: "Tackling Dreaded .Net Cold Starts When Going Serverless",
            eventName: "NDC Sydney",
            date: "18/10/2019",
            description: "Cold starts are an inherited problem of serverless, but .NET developers suffer the most as cold start durations for .NET runtimes are the highest. It is imperative we know the issues with .NET, what is being done by serverless vendors to solve this, and how can developers overcome these cold starts.",
            links:[
                {link: "https://www.youtube.com/watch?v=ciuNxlMm358", icon: <IoLogoYoutube/>},
                {link: "https://ndcsydney.com/", icon: <IoGlobeSharp/>}
            ] 
        },

        {
            image: "https://sarjeelyusufcv.s3.eu-central-1.amazonaws.com/960x540.jpg",
            title: "Better IoT with Serverless GraphQL",
            eventName: "ServerlessDays Istanbul",
            date: "03/10/2019",
            description: "IoT was meant to revolutionize how we were meant to integrate tech into our lives. However, IoT adoption is dismal due to a myriad of problems. The solution lies in the way we service our IoT devices on the data and compute layer, and a serverless GraphQL architecture has all the solutions.",
            links:[
                {link: "https://istanbul.serverlessdays.io/", icon: <IoGlobeSharp/>}
            ] 
        },

        {
            image: "https://sarjeelyusufcv.s3.eu-central-1.amazonaws.com/730090180_1280x720.jpg",
            title: "The Right Way to Cloud Compute: Lessons Learnt at Opsgenie",
            eventName: "Atlas Camp Austria",
            date: "12/09/2019",
            description: "The cloud promises lower operational costs, but there is no one best cloud service and it all depends on your use case. It's important to know the dynamics between EC2, Fargate, and AWS Lambda to reap the full benefits of AWS.",
            links:[
                {link: "https://www.youtube.com/watch?v=ZoiTEvXMyuY", icon: <IoLogoYoutube/>},
                {link: "https://www.atlassian.com/atlascamp", icon: <IoGlobeSharp/>}
            ] 
        },


        {
            image: "https://sarjeelyusufcv.s3.eu-central-1.amazonaws.com/highres_479181436.png",
            title: "Reshaping Data Driven Application Development with GraphQL and AppSync",
            eventName: "Turkey Serverless",
            date: "10/03/2019",
            description: "The talk will include AWS Lambda functions, and the session shall conclude with a demonstration on integrating Lambda functions into the GraphQL schema, a discussion of the problems of using Lambda functions with GraphQL, and the solution to the issues that surface.",
            links:[
                {link: "https://kommunity.com/cloud-turkey/events/259463051", icon: <IoGlobeSharp/>}
            ] 
        },
    ]

};