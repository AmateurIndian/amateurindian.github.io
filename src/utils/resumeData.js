import React from 'react';

import { IoLogoMedium } from "@react-icons/all-files/io5/IoLogoMedium";
import { IoLogoTwitter } from "@react-icons/all-files/io5/IoLogoTwitter";
import { IoLogoGithub } from "@react-icons/all-files/io5/IoLogoGithub";
import { IoLogoLinkedin } from "@react-icons/all-files/io5/IoLogoLinkedin";
import aws1 from '../assets/images/AWS1.png';
import dzone from '../assets/images/dzone.png';
import tns from '../assets/images/thenewstack.png';
import devops from '../assets/images/devops.png';
import thundra from '../assets/images/thundrablog.png';
import atlascomm from '../assets/images/atlascom.png';
import defaultAtlassianImage from '../assets/images/atlassian-community-opengraph.png';




export default{
    name: 'Sarjeel Yusuf',
    title: 'Engineer Turned Product Manager',
    job_role: 'Product Manager',
    company: 'Atlassian',
    email: 'sarj93@gmail.com',
    phone: '+905514426217',
    address: '25/7, Ufuk University Cadessi, Cukurambar, Ankara - 06510 TURKEY',

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
        atlassian:{
            company: 'Atlassian',
            date: 'July 2019 - Present',
            job: 'Product Manager',
            description: '- Introduced and responsible for Opsgenie\'s DevOps enabling flagship feature. \n- Responsible for all pure UI related projects and introduced the new navigation bar which resulted in a direct increase of 0.4 in Opsgenie CSAT score. \n- Involved in building an Atlassian wide data platform product. \n- Product Management to four teams across three different time zones.',
        },
        atlassianENG:{
            company: 'Atlassian',
            date: 'February 2019 - July 2019',
            job: 'Software Engineer',
            description: '- Co-lead in building Opsgenie\'s In-app announcemnt microservice. \n- Developed short-codes for the products SMS messaging service. \n- Worked on Atlassian microservices on AWS architecture',
        },
        thundra:{
            company: 'Thundra.io',
            date: 'July 2018 - February 2019',
            job: 'Junior Software Engineer',
            description: '- Worked alongside a senior engineer to build the first version of Thundra\'s .NET agent. \n- Co-lead in building onboarding dashboard using React.js and associated tools. \n- Debugging detected bugs by using monitoring tools such as AWS CloudWatch.'
        },
        tarla:{
            company: 'Tarla.io',
            date: 'January 2018 - June 2018',
            job: 'Machine Learning Engineer',
            description: '- Performed Image processing on satellite images of farmland to detect different crops in a field. \n- Performed data mining, and classification along with techniques such as SVM and Clustering, and eventually branching out into neural networks. '
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
        aws1:{
            issuer: 'Amazon Web Services',
            level: 'Cloud Practitioner',
            date: 'Jul 2019 - Jul 2022',
            link: 'https://www.youracclaim.com/badges/34c407e9-b7cd-4083-9c53-ad1e02e8b6db?source=linked_in_profile',
            image: aws1
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

    blogs: [
        {
            tag: "Product Management",
            image: "https://hackernoon.com/images/fNRMw5jFDeSGIovubGOuX9XvR0Z2-bj3v310a.jpeg",
            title: "Are We Measuring Product Success Correctly? - Advice for PMs",
            link: "https://hackernoon.com/are-we-measuring-product-success-correctly-advice-for-pms-z54f34dt"
        },

        {
            tag: "Cloud Computing",
            image: "https://blog.thundra.io/hubfs/CaaS%20Services%20Through%20AWS,%20Azure,%20and%20Google%20Cloud.png",
            title: "CaaS Services Through AWS, Azure, and Google Cloud",
            link: "https://blog.thundra.io/caas-services-through-aws-azure-and-google-cloud"
        },

        {
            tag: "Cloud Computing",
            image: "https://dz2cdn3.dzone.com/thumbnail?fid=13817578&w=125&caller=dzImageFid-article.listV2&uri=/users/3508676/syedsarj.html&h=45",
            title: "Breaking Down Serverless Anti-Patterns",
            link: "https://dzone.com/articles/breaking-down-serverless-anti-patterns"
        },

        {
            tag: "Cloud Computing",
            image: "https://cdn.thenewstack.io/media/2020/10/8bfc6b06-lion-4683920_1280-1024x682.jpg",
            title: "A 2020 Guide to Computing on Amazon Web Services",
            link: "https://thenewstack.io/a-2020-guide-to-computing-on-amazon-web-services/"
        },

        {
            tag: "DevOps",
            image: "https://blog.thundra.io/hubfs/Blog-Featured-Image%28StrengtheningObservabilityWithDashboardasCode%29.png",
            title: "Strengthening Observability With Dashboard as Code",
            link: "https://blog.thundra.io/strengthening-observability-with-dashboard-as-code"
        },

        {
            tag: "Cloud Computing",
            image: "https://cdn.thenewstack.io/media/2020/10/b00d98be-peacock-feathers-3013486_1280-1024x683.jpg",
            title: "Avoiding Serverless Anti-Patterns with Observability",
            link: "https://thenewstack.io/avoiding-serverless-anti-patterns-with-observability/"
        },

        {
            tag: "DevOps",
            image: "https://3ovyg21t17l11k49tk1oma21-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/serverless.jpg",
            title: "How Serverless Technologies Can Achieve Optimal DevOps Practices",
            link: "https://devops.com/how-serverless-technologies-can-achieve-optimal-devops-practices/"
        },

        {
            tag: "DevOps",
            image: "https://miro.medium.com/max/1000/1*NLHywA0dSJyTR_mIP5pKYA.png",
            title: "An Observability Balancing Act With Gitops",
            link: "https://medium.com/thundra/an-observability-balancing-act-with-gitops-a3366daef7a1"
        },

        {
            tag: "DevOps",
            image: "https://dz2cdn1.dzone.com/thumbnail?fid=13521088&w=125&caller=dzImageFid-article.listV2&uri=/users/3508676/syedsarj.html&h=200",
            title: "Under the Hood of GitOps",
            link: "https://dzone.com/articles/under-the-hood-of-gitops"
        },

        {
            tag: "Cloud Computing",
            image: "https://miro.medium.com/max/1000/1*eDfkZLSUz27AaEwF1LSL4g.png",
            title: "Expanding the Serverless War Chest With AWS EFS",
            link: "https://blog.thundra.io/expanding-the-serverless-war-chest-with-aws-efs"
        },

        {
            tag: "DevOps",
            image: "https://community.atlassian.com/html/assets/atlassian-community-opengraph.png",
            title: "DevOps Just Got a Whole Lot Easier with Opsgenie and AWS CloudFormation Registry and CLI",
            link: "https://community.atlassian.com/t5/DevOps-Articles/DevOps-Just-Got-a-Whole-Lot-Easier-with-Opsgenie-and-AWS/ba-p/1230979"
        },

        {
            tag: "Cloud Computing",
            image: "https://dz2cdn2.dzone.com/thumbnail?fid=13271929&w=125&caller=dzImageFid-article.listV2&uri=/users/3508676/syedsarj.html&h=200",
            title: "The Serverless Path to DevOps",
            link: "https://dzone.com/articles/the-serverless-path-to-devops"
        },

        {
            tag: "Cloud Computing",
            image: "https://blog.thundra.io/hubfs/2.1.png",
            title: "The Comforts of GraphQL with AWS AppSync",
            link: "https://blog.thundra.io/the-comforts-of-graphql-with-aws-appsync"
        },

        {
            tag: "Cloud Computing",
            image: "https://dz2cdn2.dzone.com/thumbnail?fid=13088613&w=125&caller=dzImageFid-article.listV2&uri=/users/3508676/syedsarj.html&h=200",
            title: "Provisioned Concurrency: The Silver Bullet to AWS Lambda Cold Starts",
            link: "https://dzone.com/articles/provisioned-concurrency-the-silver-bullet-to-aws-l"
        },

        {
            tag: "Cloud Computing",
            image: "https://dz2cdn3.dzone.com/thumbnail?fid=12937666&w=125&caller=dzImageFid-article.listV2&uri=/users/3508676/syedsarj.html&h=200",
            title: "Introducing Quantum-as-a-Service with AWS Braket",
            link: "https://dzone.com/articles/introducing-quantum-as-a-service-with-aws-braket"
        },

        {
            tag: "Cloud Computing",
            image: "https://blog.thundra.io/hubfs/blog-images/lambda%20destinations/lambda-destinations.png",
            title: "A Step Towards Observability with Lambda Destinations",
            link: "https://blog.thundra.io/a-step-towards-observability-with-lambda-destinations"
        },

        {
            tag: "Cloud Computing",
            image: "https://dz2cdn1.dzone.com/thumbnail?fid=12744020&w=125&caller=dzImageFid-article.listV2&uri=/users/3508676/syedsarj.html&h=200",
            title: "Rethinking Serverless Architectures With Eventbridge",
            link: "https://dzone.com/articles/rethinking-serverless-architectures-with-eventbrid"
        },

        {
            tag: "Cloud Computing",
            image: "https://dz2cdn4.dzone.com/thumbnail?fid=12525335&w=125&caller=dzImageFid-article.listV2&uri=/users/3508676/syedsarj.html&h=200",
            title: "Rethinking Serverless Architectures With Eventbridge",
            link: "https://dzone.com/articles/explaining-eventbridge-amidst-the-hype"
        },

        {
            tag: "Cloud Computing",
            image: "https://blog.thundra.io/hubfs/blog-images/%5BBlogBuilding%20Serverless%20IoT%20Systems%20from%20Node-RED%20to%20AWS%20Lambda%5D/%C4%B1ot-nodered-to-aws-lambda.png",
            title: "Building Serverless IoT Systems from Node-RED to AWS Lambda",
            link: "https://blog.thundra.io/building-serverless-iot-systems-from-node-red-to-aws-lambda"
        },

        {
            tag: "Cloud Computing",
            image: "https://community.atlassian.com/html/assets/atlassian-community-opengraph.png",
            title: "Building for the Cloud with Atlassian's Opsgenie and AWS Eventbridge",
            link: "https://community.atlassian.com/t5/Opsgenie-articles/Building-for-the-Cloud-with-Atlassian-s-Opsgenie-and-AWS/ba-p/1244404"
        },

        {
            tag: "Cloud Computing",
            image: "https://dz2cdn1.dzone.com/thumbnail?fid=12218584&w=125&caller=dzImageFid-article.listV2&uri=/users/3508676/syedsarj.html&h=200",
            title: "Accelerating Agile With Serverless",
            link: "https://dzone.com/articles/accelerating-agile-with-serverless"
        },

        {
            tag: "Cloud Computing",
            image: "https://dz2cdn2.dzone.com/thumbnail?fid=11995113&w=125&caller=dzImageFid-article.listV2&uri=/users/3508676/syedsarj.html&h=200",
            title: "Getting It Right Between EC2, Fargate and Lambda",
            link: "https://dzone.com/articles/getting-it-right-between-ec2-fargate-and-lambda"
        },

        {
            tag: "Cloud Computing",
            image: "https://dz2cdn2.dzone.com/thumbnail?fid=11885473&w=125&caller=dzImageFid-article.listV2&uri=/users/3508676/syedsarj.html&h=200",
            title: "The Best of Both Worlds With AWS Fargate",
            link: "https://dzone.com/articles/the-best-of-both-worlds-with-aws-fargate"
        },

        {
            tag: "Cloud Computing",
            image: "https://dz2cdn2.dzone.com/thumbnail?fid=11815237&w=125&caller=dzImageFid-article.listV2&uri=/users/3508676/syedsarj.html&h=200",
            title: "Using IoT and Serverless: Tackling Global Issues",
            link: "https://dzone.com/articles/using-iot-with-serverless-to-tackle-global-issues"
        },

        {
            tag: "Cloud Computing",
            image: "https://dz2cdn2.dzone.com/thumbnail?fid=11815237&w=125&caller=dzImageFid-article.listV2&uri=/users/3508676/syedsarj.html&h=200",
            title: "Using IoT and Serverless: Tackling Global Issues",
            link: "https://dzone.com/articles/using-iot-with-serverless-to-tackle-global-issues"
        },

        {
            tag: "Cloud Computing",
            image: "https://blog.thundra.io/hubfs/blog-images/Making%20AppSync%20Easier%20with%20Thundra/making-appsync-easier-with-thundra.png",
            title: "Making AppSync Easier with Thundra",
            link: "https://blog.thundra.io/making-appsync-easier-with-thundra"
        },

        {
            tag: "Cloud Computing",
            image: "https://dz2cdn2.dzone.com/thumbnail?fid=11714597&w=125&caller=dzImageFid-article.listV2&uri=/users/3508676/syedsarj.html&h=200",
            title: "Holy Grail of Solutions: Solving .NET Lambda Cold Start Part 2",
            link: "https://dzone.com/articles/holy-grail-of-solutions-solving-net-lambda-cold-st"
        },

        {
            tag: "Cloud Computing",
            image: "https://dz2cdn4.dzone.com/thumbnail?fid=11691719&w=125&caller=dzImageFid-article.listV2&uri=/users/3508676/syedsarj.html&h=200",
            title: "The Fundamental Problem: Solving .NET Lambda Cold Starts, Part 1",
            link: "https://dzone.com/articles/the-fundamental-problem-solving-net-lambda-cold-st"
        },

        {
            tag: "Cloud Computing",
            image: "https://dz2cdn4.dzone.com/thumbnail?fid=11092787&w=125&caller=dzImageFid-article.listV2&uri=/users/3508676/syedsarj.html&h=200",
            title: "The Comforts of GraphQL With AWS AppSync",
            link: "https://dzone.com/articles/the-comforts-of-graphql-with-aws-appsync"
        },

        {
            tag: "Cloud Computing",
            image: "https://blog.thundra.io/hubfs/detailed-serverless-monitoring-blog.png",
            title: "Detailed Serverless Monitoring Using a Completely Automated Approach",
            link: "https://blog.thundra.io/detailed-serverless-monitoring-using-a-completely-automated-approach"
        },





    ]

};