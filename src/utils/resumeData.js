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
import atlascomm from '../assets/images/atlascom.png'




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
    }

}