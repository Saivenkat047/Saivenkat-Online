import project1 from "../assets/BusBooking.png";
import project2 from "../assets/NewsApp.png";
import project3 from "../assets/MovieSearch.png";

export const fallback = {
  name: 'Sai Venkata Satish Pilla',
  title: 'Software Developer',
  email: 'saivenkatasatishpilla@gmail.com',
  phone: '+91 9014924945',
  location: 'Hyderabad, India',
  summary:
    'Front-end focused dev with ~1.3 years experience building scalable, responsive, visually engaging apps across web and mobile.',
  achievements: ['Solved 200+ LeetCode problems'],
  skills: ["React", "JavaScript", "Node.js", "Java", "PostgreSQL", "MongoDB", "React Native", "Docker", "Swagger", "TypeScript", "Tailwind CSS", "Git"],
  experience: [
    {
      company: 'La Trandasys',
      title: 'Software Engineer Trainee',
      location: 'Visakhapatnam, India',
      start: 'Oct 2024',
      end: 'Present',
      bullets: [
        'Developed and maintained a financial data mobile application for U.S.-based companies using React Native.',
        'Implemented key financial features including displaying income statements, balance sheets, cash flow statements, dividend details, and company ratios.',
        'Built interactive candlestick and line charts with support for day-wise, weekly, monthly, and yearly views.',
        'Integrated real-time news features, delivering both company-specific and general market news.',
        'Implemented OAuth authentication with Google, Facebook, and email/password login options to enhance security and user experience.',
        'Collaborated closely with cross-functional teams to deliver pixel-perfect, responsive, and scalable mobile solutions.',
      ],
    },
    {
      company: 'Mantra Technologies',
      title: 'Software Engineer Trainee',
      location: 'Hyderabad, India',
      start: 'Feb 2024',
      end: 'Sep 2024',
      bullets: [
        'Developed and maintained React JS web applications, collaborating closely with the backend team to integrate front-end components with server-side APIs.',
        'Participated in debugging and troubleshooting issues reported by testers, ensuring quick resolution and high-quality product delivery.',
        'Utilized tools like Postman and Swagger to test and verify API endpoints, contributing to seamless backend and frontend integration.',
      ],
    },
  ],
  projects: [
    {
    id: 1,
      name: 'Bus Ticket Booking',
      tech: ["JavaScript", "TailwindCSS", "MySQL", "Spring Boot"],
      link: 'https://bee-bus.vercel.app/',
      description: 'Seat selection, booking and payments',
      img: project1,
    },
    {
    id: 2,
      name: 'Daily News',
      tech: ["React.js", "REST API"],
      link: 'https://news-app-peach-two.vercel.app/',
      description: 'Real-time news app focused on speed and accessibility',
      img: project2,
    },
    {
    id: 3,
      name: 'Movie Search',
      tech: ["Vue.js", "JavaScript"],
      link: 'https://searchmovies6464.netlify.app/',
      description: 'A movie search app built with Vue.js and JavaScript, allowing users to find movies quickly and easily',
      img: project3,
    },
  ],
  links: {
    linkedin : 'https://linkedin.com/in/sai-venkata-satish-pilla',
    github : 'https://github.com/satish6664',
    leetcode : 'https://leetcode.com/u/saivenkat047/',
  }
};
