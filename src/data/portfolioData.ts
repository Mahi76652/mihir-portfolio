export const personalInfo = {
  name: 'Mihir Pal Singh',
  title: 'Junior Developer',
  tagline: 'Building the future, one line of code at a time',
  email: 'mihirsingh191@gmail.com',
  phone: '+91-7898461039',
  location: 'India',
  linkedin: 'https://www.linkedin.com/in/mihir-pal-singh-9a5537259',
  github: 'https://github.com/mihirpalsingh',
  resumeUrl: '/resume.pdf'
};

export const roles = [
  'Computer Science Engineer',
  'Data Science Enthusiast',
  'Full Stack Developer',
  'Machine Learning Practitioner',
  'ServiceNow Developer'
];

export const aboutSummary = `
A passionate and detail-oriented Computer Science graduate with hands-on experience 
in full-stack development, data science, and ServiceNow platform. Proven ability to 
design and implement scalable solutions, with a strong foundation in problem-solving 
and continuous learning. Seeking opportunities to contribute to innovative projects 
while growing technical expertise in a collaborative environment.
`;

export const skills = {
  'Data Science & Machine Learning': [
    'Python',
    'Pandas',
    'NumPy',
    'Scikit-learn',
    'TensorFlow',
    'Data Visualization',
    'Statistical Analysis',
    'Predictive Modeling'
  ],
  'Web Development & Backend': [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React.js',
    'Node.js',
    'Express.js',
    'REST APIs',
    'Git & GitHub'
  ],
  'Databases & Tools': [
    'MySQL',
    'MongoDB',
    'PostgreSQL',
    'Docker',
    'VS Code',
    'Jupyter Notebook',
    'Postman',
    'Figma'
  ],
  'ServiceNow Platform': [
    'ServiceNow CSA',
    'ServiceNow CAD',
    'ITSM',
    'Workflow Automation',
    'Scripting',
    'Service Portal'
  ]
};

export const experiences = [
  {
    id: 1,
    role: 'Junior Developer',
    company: 'i-Connectresources Pvt. Ltd.',
    location: 'India',
    type: 'Full-time',
    period: '2025 - Present',
    description: 'Working on full-stack development projects with focus on modern web technologies and cloud solutions.',
    responsibilities: [
      'Developed and maintained responsive web applications using React.js and Node.js',
      'Implemented RESTful APIs and integrated third-party services',
      'Collaborated with cross-functional teams to deliver projects on time',
      'Optimized application performance and improved code quality',
      'Participated in code reviews and mentored junior team members'
    ],
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Git']
  },
  {
    id: 2,
    role: 'IT Intern',
    company: 'i-Connectresources Pvt. Ltd.',
    location: 'India',
    type: 'Internship',
    period: '2024 - 2025',
    description: 'Gained hands-on experience in software development and IT operations.',
    responsibilities: [
      'Assisted in developing internal tools and automation scripts',
      'Supported database management and data analysis tasks',
      'Contributed to bug fixes and feature enhancements',
      'Documented technical processes and created user guides',
      'Learned agile development methodologies and best practices'
    ],
    technologies: ['Python', 'SQL', 'HTML/CSS', 'JavaScript', 'Git']
  }
];

export const projects = [
  {
    id: 1,
    title: 'ForecastHR',
    subtitle: 'Employee Management System',
    description: 'A comprehensive HR management platform designed to streamline employee data management, attendance tracking, and performance evaluation. Features include role-based access control, automated reporting, and intuitive dashboards.',
    image: '/projects/forecasthr.jpg',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT Auth'],
    features: [
      'Employee profile management with document storage',
      'Attendance tracking with biometric integration',
      'Performance evaluation and feedback system',
      'Automated payroll calculations',
      'Role-based access control'
    ],
    githubUrl: 'https://github.com/mihirpalsingh/forecasthr',
    liveUrl: null,
    category: 'Full Stack'
  },
  {
    id: 2,
    title: 'OncoScreen',
    subtitle: 'Preventive Oncology Screening Platform',
    description: 'A healthcare platform focused on early cancer detection through risk assessment questionnaires, appointment scheduling, and patient data management. Helps connect patients with oncology specialists.',
    image: '/projects/oncoscreen.jpg',
    technologies: ['React.js', 'Python', 'Flask', 'PostgreSQL', 'Machine Learning'],
    features: [
      'Cancer risk assessment questionnaire',
      'Appointment scheduling system',
      'Patient history and records management',
      'ML-based risk prediction model',
      'Integration with diagnostic centers'
    ],
    githubUrl: 'https://github.com/mihirpalsingh/oncoscreen',
    liveUrl: null,
    category: 'Healthcare'
  },
  {
    id: 3,
    title: 'GoldPrice AI',
    subtitle: 'Gold Price Prediction System',
    description: 'Machine learning model that predicts gold prices based on historical data and market indicators. Uses time series analysis and various ML algorithms to provide accurate forecasts.',
    image: '/projects/goldprice.jpg',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'LSTM'],
    features: [
      'Historical data analysis and visualization',
      'Multiple ML model comparison',
      'Time series forecasting with LSTM',
      'Interactive price trend charts',
      'Model performance metrics'
    ],
    githubUrl: 'https://github.com/mihirpalsingh/gold-price-prediction',
    liveUrl: null,
    category: 'Machine Learning'
  },
  {
    id: 4,
    title: 'ShopEase',
    subtitle: 'Online Shopping System',
    description: 'A full-featured e-commerce platform with product catalog, shopping cart, secure checkout, and order management. Includes admin panel for inventory and order management.',
    image: '/projects/shopease.jpg',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Stripe API', 'Redux'],
    features: [
      'Product catalog with search and filters',
      'Shopping cart with persistent storage',
      'Secure payment integration with Stripe',
      'Order tracking and history',
      'Admin dashboard for inventory management'
    ],
    githubUrl: 'https://github.com/mihirpalsingh/shopease',
    liveUrl: null,
    category: 'E-Commerce'
  },
  {
    id: 5,
    title: 'RentWheels',
    subtitle: 'Car Rental Website',
    description: 'A car rental platform allowing users to browse vehicles, check availability, make bookings, and manage reservations. Features location-based search and pricing calculator.',
    image: '/projects/rentwheels.jpg',
    technologies: ['React.js', 'Node.js', 'MySQL', 'Google Maps API', 'JWT'],
    features: [
      'Vehicle browsing with filters',
      'Real-time availability checking',
      'Location-based search',
      'Pricing calculator with dynamic rates',
      'Booking management system'
    ],
    githubUrl: 'https://github.com/mihirpalsingh/rentwheels',
    liveUrl: null,
    category: 'Full Stack'
  },
  {
    id: 6,
    title: 'RecipeHub',
    subtitle: 'Food Recipe Website',
    description: 'A recipe sharing platform where users can discover, save, and share recipes. Features include ingredient search, meal planning, and nutritional information.',
    image: '/projects/recipehub.jpg',
    technologies: ['React.js', 'Firebase', 'Tailwind CSS', 'Spoonacular API'],
    features: [
      'Recipe search by ingredients',
      'User authentication and profiles',
      'Save and organize favorite recipes',
      'Nutritional information display',
      'Meal planning calendar'
    ],
    githubUrl: 'https://github.com/mihirpalsingh/recipehub',
    liveUrl: null,
    category: 'Web App'
  }
];

export const education = {
  degree: 'Bachelor of Technology',
  field: 'Computer Science and Engineering',
  institution: 'Shri Shankaracharya Technical Campus, Bhilai',
  location: 'Chhattisgarh,India',
  period: '2019 - 2023',
  cgpa: '8.5/10',
  achievements: [
    'Dean\'s List for academic excellence',
    'Winner of Inter-College Hackathon 2023'
  ]
};

export const certifications = [
  {
    name: 'Data Science Certification',
    provider: 'Coursera / IBM',
    date: '2023',
    credentialId: 'DS-2023-001',
    url: '#'
  },
  {
    name: 'Machine Learning with AI',
    provider: 'Stanford Online',
    date: '2023',
    credentialId: 'ML-2023-002',
    url: '#'
  },
  {
    name: 'ServiceNow Certified System Administrator (CSA)',
    provider: 'ServiceNow',
    date: '2024',
    credentialId: 'CSA-2024-001',
    url: '#'
  },
  {
    name: 'ServiceNow Certified Application Developer (CAD)',
    provider: 'ServiceNow',
    date: '2024',
    credentialId: 'CAD-2024-001',
    url: '#'
  }
];

export const interests = [
  {
    name: 'Cycling',
    icon: 'Bike',
    description: 'Long-distance cycling and exploring new routes'
  },
  {
    name: 'Football',
    icon: 'Trophy',
    description: 'Playing and following football matches'
  },
  {
    name: 'Music',
    icon: 'Music',
    description: 'Listening to various genres and discovering new artists'
  },
  {
    name: 'Learning',
    icon: 'BookOpen',
    description: 'Continuously learning new technologies and skills'
  }
];
