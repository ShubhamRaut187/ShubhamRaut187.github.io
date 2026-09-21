interface Education {
    logo: string,
    company: string,
    role: string,
    durationRange: string,
    location: string,
    websiteUrl: string,
    description: string,
};

export const EDUCATION_INFORMATION: Education[] = [
    {
        logo: 'https://media.licdn.com/dms/image/v2/D560BAQGnrGDvNbuurg/company-logo_200_200/company-logo_200_200/0/1737373064896/masaischool_logo?e=1759968000&v=beta&t=sn8o8LVHee81Gp25WzoqiA_bsKilq3k1eZ1fOiMZmL0',
        company: 'Masai School',
        role: 'Full Stack Web Development',
        durationRange: 'November 2022 - July 2023',
        location: 'Bengaluru | Remote',
        websiteUrl: 'https://www.masaischool.com/',
        description: 'I completed a fast-paced full-stack web development program at Masai School, mastering the MERN stack in just a few months. This challenging journey equipped me with hands-on experience in building real-world projects, strengthening my technical skills, and preparing me to thrive in collaborative, fast-paced environments.'
    },
    {
        logo: 'https://kaveri.edu.in/ksjc/wp-content/uploads/sites/7/2022/10/KGI-round-logo.png',
        company: 'College of Coputer Sciences',
        role: 'Master of Computer Science',
        durationRange: 'July 2022 - April  2024',
        location: 'Pune',
        websiteUrl: 'https://ccspune.in/',
        description: 'I hold a Master’s degree in Computer Science from the College of Computer Sciences, where I gained a deep understanding of core computer science principles, with a strong focus on practical applications.'
    },
    {
        logo: 'https://kaveri.edu.in/ksjc/wp-content/uploads/sites/7/2022/10/KGI-round-logo.png',
        company: 'Kaveri College of Arts, Science & Commerce',
        role: 'Bachelor of Computer Science',
        durationRange: 'July 2019 - April 2022',
        location: 'Pune',
        websiteUrl: 'https://kavericollege.org/',
        description: 'I completed a 3-year Bachelor in Computer Science from Kaveri College of Computer Science, a renowned institute in Pune. During this program, I gained a solid foundation in computer science concepts and valuable hands-on experience. I also served as the NSS representative, which enhanced my leadership and teamwork skills while giving me opportunities to contribute to community development projects.'
    }
];

interface Work extends Education {
    // logo: string,
    // company: string,
    // role: string,
    // durationRange: string,
    // location: string,
    // websiteUrl: string,
    // description: string,
}

export const WORK_INFORMATION: Work[] = [
    {
        logo:'https://media.licdn.com/dms/image/v2/D560BAQGHVSDeWZ5Fqw/company-logo_200_200/company-logo_200_200/0/1719256048875/knorex_logo?e=1759968000&v=beta&t=mB1tqL38D7TNwYiQOjG1W_3pRDuM14Fw3Rxpb7tDqzk',
        company: 'Knorex',
        role: 'Software Engineer',
        durationRange: 'April 2024 - Present',
        location: 'Pune | On site',
        websiteUrl: 'https://www.knorex.com/',
        description: 'I work as a Software Engineer at Knorex India, a leading AdTech company, where I am responsible for building new features, maintaining web apps, and ensuring seamless product performance through collaboration with cross-functional teams like QA and UI/UX. I work closely with teams across Vietnam, Singapore, India, and my reporting office in Singapore, driving global collaboration to deliver high-quality, bug-free products with exceptional user experiences.',
    },
    {
        logo: 'https://media.licdn.com/dms/image/v2/D560BAQGnrGDvNbuurg/company-logo_200_200/company-logo_200_200/0/1737373064896/masaischool_logo?e=1759968000&v=beta&t=sn8o8LVHee81Gp25WzoqiA_bsKilq3k1eZ1fOiMZmL0',
        company: 'Masai School',
        role: 'Assesment Assistant',
        durationRange: 'November 2023 - April 2024',
        location: 'Bengaluru | Remote | Internship',
        websiteUrl: 'https://www.masaischool.com/',
        description: 'I completed a 6-month internship at Masai School as an Assessment Assistant, where I conducted weekly doubt-solving sessions, assisted students with their assignments, and facilitated technical interviews for practice. This role enhanced my mentoring skills and deepened my understanding of core concepts while helping students succeed in their learning journey.'
    }
];

