// ===================== COURSE REVIEWS =====================
export const courseReviews = [
  {
    id: 1,
    code: 'CE 201',
    name: 'Fluid Mechanics',
    professor: 'Prof. Rajesh Kumar',
    semester: 3,
    difficulty: 'Medium',
    rating: 4,
    review: 'Great foundation course. Prof. Kumar\'s lectures are very structured. Assignments are manageable but exams can be tricky with numerical problems. Highly recommended to attend all tutorials.',
  },
  {
    id: 2,
    code: 'CE 301',
    name: 'Structural Analysis',
    professor: 'Prof. Amita Sharma',
    semester: 5,
    difficulty: 'Hard',
    rating: 3,
    review: 'One of the toughest CE courses. The stiffness method section requires a lot of practice. Scoring well needs consistent effort throughout the semester. The course is very rewarding conceptually.',
  },
  {
    id: 3,
    code: 'CE 221',
    name: 'Solid Mechanics',
    professor: 'Prof. Suresh Patil',
    semester: 4,
    difficulty: 'Medium',
    rating: 4,
    review: 'Well-taught course with clear derivations. The lab component is enjoyable. Focus on understanding Mohr\'s circle thoroughly as it appears across several topics and exams.',
  },
  {
    id: 4,
    code: 'CE 101',
    name: 'Engineering Drawing & Graphics',
    professor: 'Prof. Meena Joshi',
    semester: 1,
    difficulty: 'Easy',
    rating: 5,
    review: 'Perfect introductory course. The drawing skills you develop here will help throughout your engineering career. Grading is fair, and the prof is very approachable.',
  },
  {
    id: 5,
    code: 'CE 403',
    name: 'Foundation Engineering',
    professor: 'Prof. Prakash Nair',
    semester: 7,
    difficulty: 'Hard',
    rating: 3,
    review: 'Requires strong grasp of Soil Mechanics. Lots of empirical formulas to remember. The design project is interesting. Best to start problem sets early rather than cramming before exams.',
  },
  {
    id: 6,
    code: 'CE 341',
    name: 'Transportation Engineering',
    professor: 'Prof. Vijay Iyer',
    semester: 6,
    difficulty: 'Easy',
    rating: 4,
    review: 'Relatively chill course with interesting real-world applications. The field visit to MMRDA office is a highlight. Good for students interested in urban planning and mobility.',
  },
  {
    id: 7,
    code: 'CE 251',
    name: 'Environmental Engineering',
    professor: 'Prof. Lakshmi Rao',
    semester: 5,
    difficulty: 'Medium',
    rating: 4,
    review: 'Very relevant for sustainable development careers. Water treatment and sewage design sections are detailed. The prof encourages participation and makes abstract concepts concrete.',
  },
  {
    id: 8,
    code: 'CE 311',
    name: 'Concrete Technology',
    professor: 'Prof. Anand Desai',
    semester: 6,
    difficulty: 'Easy',
    rating: 5,
    review: 'Excellent course for understanding construction materials. Mix design experiments in the lab are hands-on and fun. Very useful if you plan to go into construction or project management.',
  },
];

// ===================== MINOR REVIEWS =====================
export const minorReviews = [
  {
    id: 1,
    code: 'CS Minor',
    name: 'Computer Science Minor',
    department: 'CSE',
    difficulty: 'Hard',
    rating: 4,
    review: 'Very demanding but extremely rewarding. Courses like Data Structures and Algorithms push you to think differently. Great for students interested in tech roles or higher studies abroad.',
  },
  {
    id: 2,
    code: 'MAN Minor',
    name: 'Management Minor',
    department: 'SOM',
    difficulty: 'Medium',
    rating: 5,
    review: 'Perfect blend of engineering and business thinking. SOM faculty are industry-connected. Extremely useful for consulting or MBA aspirants. Grading is relative and manageable.',
  },
  {
    id: 3,
    code: 'ENE Minor',
    name: 'Energy Systems Minor',
    department: 'Energy Sci.',
    difficulty: 'Medium',
    rating: 4,
    review: 'Highly relevant for sustainability careers. Covers solar, wind, and grid systems comprehensively. Good synergy with CE courses on environmental engineering.',
  },
  {
    id: 4,
    code: 'SC Minor',
    name: 'Systems & Control Minor',
    department: 'EE',
    difficulty: 'Hard',
    rating: 3,
    review: 'Math-heavy minor — be prepared for Laplace transforms and state-space models. Great for students who want to get into automation or robotics. Attendance and tutorials are essential.',
  },
];

// ===================== BTP / IDP PROJECTS =====================
export const projects = [
  {
    id: 1,
    title: 'Seismic Vulnerability Assessment of Old Mumbai Structures',
    student: 'Arjun Mehta (2020)',
    year: '2023–24',
    professor: 'Prof. Ravi Sinha',
    description: 'Evaluated structural risk of pre-1970 residential buildings in Dharavi using pushover analysis. Developed a rapid visual screening framework adapted for Mumbai\'s building stock.',
  },
  {
    id: 2,
    title: 'Optimisation of Water Distribution Networks using GIS',
    student: 'Priya Nair (2021)',
    year: '2024–25',
    professor: 'Prof. Bharat Sharma',
    description: 'Used EPANET 2.0 with GIS data to model water loss in BMC\'s Zone 4 distribution network. Proposed pipe replacement prioritisation based on hydraulic performance index.',
  },
  {
    id: 3,
    title: 'Machine Learning Approaches for Pavement Condition Prediction',
    student: 'Karan Singh (2020)',
    year: '2023–24',
    professor: 'Prof. Prashant Garg',
    description: 'Applied Random Forest and XGBoost classifiers on IRI and PCI data from National Highways to predict pavement deterioration rates and plan maintenance windows.',
  },
  {
    id: 4,
    title: 'Finite Element Analysis of RC Beams with GFRP Reinforcement',
    student: 'Ananya Kulkarni (2021)',
    year: '2024–25',
    professor: 'Prof. Vikram Rao',
    description: 'Modelled corrosion-resistant GFRP-reinforced concrete beams in ABAQUS, comparing load-deflection behaviour with conventional steel-reinforced sections under static and cyclic loading.',
  },
];

// ===================== RESEARCH BOOKLET =====================
export const professors = [
  {
    id: 1,
    name: 'Prof. Ravi Sinha',
    department: 'Structural Engineering',
    areas: ['Earthquake Engineering', 'Seismic Risk', 'RC Structures'],
    website: 'https://www.civil.iitb.ac.in',
  },
  {
    id: 2,
    name: 'Prof. Shishir Kumar Jha',
    department: 'Geotechnical Engineering',
    areas: ['Ground Improvement', 'Pile Foundations', 'Liquefaction'],
    website: 'https://www.civil.iitb.ac.in',
  },
  {
    id: 3,
    name: 'Prof. Bharat Lohani',
    department: 'Remote Sensing & GIS',
    areas: ['LiDAR', 'Photogrammetry', 'Urban Mapping'],
    website: 'https://www.civil.iitb.ac.in',
  },
  {
    id: 4,
    name: 'Prof. Roshni T.',
    department: 'Water Resources Engineering',
    areas: ['Hydrology', 'Climate Change', 'Groundwater Modelling'],
    website: 'https://www.civil.iitb.ac.in',
  },
  {
    id: 5,
    name: 'Prof. Manu Santhanam',
    department: 'Construction Materials',
    areas: ['Durability', 'Supplementary Cementitious Materials', 'Concrete Mix Design'],
    website: 'https://www.civil.iitb.ac.in',
  },
  {
    id: 6,
    name: 'Prof. C. S. Manohar',
    department: 'Applied Mechanics',
    areas: ['Structural Dynamics', 'Uncertainty Quantification', 'Stochastic Mechanics'],
    website: 'https://www.civil.iitb.ac.in',
  },
];

// ===================== INTERNSHIPS =====================
export const internships = [
  {
    id: 1,
    title: 'Structural Design Intern — L&T Construction',
    company: 'Larsen & Toubro',
    category: 'Core',
    location: 'Mumbai / Chennai',
    duration: '2 months',
    author: 'Rohan Verma',
    batch: 'B.Tech 2022',
    date: 'June 2024',
    excerpt: 'Worked on design of a 15-storey RC frame in Hyderabad. Learned ETABS, IS 456 code checks, and site coordination. Very hands-on and recommend for those interested in structural careers.',
  },
  {
    id: 2,
    title: 'Transport Planning Intern — Arup',
    company: 'Arup',
    category: 'Core',
    location: 'Gurugram',
    duration: '8 weeks',
    author: 'Neha Pillai',
    batch: 'B.Tech 2022',
    date: 'May 2024',
    excerpt: 'Contributed to traffic demand modelling for a metro corridor project. Used VISUM for network assignment and prepared EIA report sections. Multicultural team, fantastic mentoring.',
  },
  {
    id: 3,
    title: 'Strategy Analyst Intern — McKinsey & Company',
    company: 'McKinsey',
    category: 'Non-Core',
    location: 'Mumbai',
    duration: '10 weeks',
    author: 'Siddharth Jain',
    batch: 'B.Tech 2022',
    date: 'May 2024',
    excerpt: 'Infrastructure practice engagements on port logistics and smart city projects. Case-based problem solving and client presentation skills were the biggest takeaways from this stint.',
  },
  {
    id: 4,
    title: 'Research Intern — IISc Bangalore (Water Resources)',
    company: 'IISc',
    category: 'Research',
    location: 'Bangalore',
    duration: '2 months',
    author: 'Divya Krishnan',
    batch: 'B.Tech 2023',
    date: 'June 2024',
    excerpt: 'Worked under Prof. D. Nagesh Kumar on rainfall-runoff modelling using SWAT for Krishna river basin. Published a conference paper at HYDRO 2024. Great exposure to academic research.',
  },
  {
    id: 5,
    title: 'Infrastructure Intern — AECOM Australia',
    company: 'AECOM',
    category: 'International',
    location: 'Melbourne, Australia',
    duration: '3 months',
    author: 'Ankit Sharma',
    batch: 'B.Tech 2021',
    date: 'Nov 2023',
    excerpt: 'Part of the tunnelling team for Melbourne Metro expansion. Exposure to TBM operations, geotechnical risk registers, and Australian standards. Living costs are high but stipend covers it.',
  },
  {
    id: 6,
    title: 'Urban Development Intern — NITI Aayog',
    company: 'NITI Aayog',
    category: 'Core',
    location: 'New Delhi',
    duration: '6 weeks',
    author: 'Kavya Menon',
    batch: 'B.Tech 2023',
    date: 'May 2025',
    excerpt: 'Worked on the Smart Cities Mission evaluation framework. Helped draft policy briefs and analyse data from 100 smart cities. Excellent exposure to governance and public policy.',
  },
];

// ===================== SCHOLARSHIPS =====================
export const scholarships = [
  {
    name: 'OPJEMS Scholarship',
    eligibility: 'CGPA > 8.5, 2nd year onwards, all branches',
    deadline: '31 October',
    amount: '₹40,000/year',
    link: '#',
  },
  {
    name: 'KVPY Fellowship (now SRF)',
    eligibility: 'Pre-final or final year, science and engineering',
    deadline: '15 September',
    amount: '₹20,000/month stipend',
    link: '#',
  },
  {
    name: 'INSDAG Steel Design Award',
    eligibility: 'Final year CE/Structural students with steel design thesis',
    deadline: '28 February',
    amount: '₹1,00,000 (1st prize)',
    link: '#',
  },
  {
    name: 'HUDCO Chair Fellowship',
    eligibility: 'Students working on housing/urban infrastructure projects',
    deadline: '30 November',
    amount: '₹25,000 + certificate',
    link: '#',
  },
];

// ===================== COMPETITIONS =====================
export const competitions = [
  {
    id: 1,
    name: 'ASCE Student Steel Bridge Competition',
    organizer: 'American Society of Civil Engineers',
    category: 'Structural Design',
    description: 'Student teams design and build a scaled steel bridge under weight and deflection constraints. IIT Bombay has participated consistently with strong finishes at the national level.',
  },
  {
    id: 2,
    name: 'National Concrete Design Championship',
    organizer: 'Ultratech Cement / CII',
    category: 'Materials & Design',
    description: 'Teams develop innovative concrete mix designs for specific performance targets. Opens for final-year and postgraduate students. Prize money of ₹3 Lakhs for winners.',
  },
  {
    id: 3,
    name: 'Smart India Hackathon — Infrastructure Track',
    organizer: 'Ministry of Education, GoI',
    category: 'Innovation',
    description: 'National-level hackathon where teams solve real infrastructure challenges posed by PSUs and government ministries. CE students regularly make it to the grand finale.',
  },
];

// ===================== INTERNATIONAL PROGRAMS =====================
export const international = [
  {
    id: 1,
    university: 'ETH Zürich',
    country: 'Switzerland',
    program: 'Student Exchange Program',
    duration: '1 semester (Spring)',
    deadline: '1 October (for Spring)',
    description: 'Exchange to one of the world\'s top civil engineering schools. Courses in structural mechanics, hydrology, and geotechnics. CGPA cutoff typically 8.5+.',
  },
  {
    id: 2,
    university: 'TU Delft',
    country: 'Netherlands',
    program: 'International Exchange',
    duration: '1 semester',
    deadline: '15 November (for Spring)',
    description: 'Excellent for students interested in water management, coastal engineering, or urban planning. IIT Bombay has a bilateral agreement facilitating IRCC nominations.',
  },
  {
    id: 3,
    university: 'National University of Singapore',
    country: 'Singapore',
    program: 'Student Exchange Program (SEP)',
    duration: '1 semester',
    deadline: '15 September (for Sem 2)',
    description: 'Popular choice for CE students. Courses in geotechnical, structural, and environmental engineering. Culturally close to India, making the transition smooth.',
  },
];

// ===================== BLOGS =====================
export const blogs = [
  {
    id: 1,
    title: 'How I Landed a Core Internship at L&T Construction',
    author: 'Rohan Verma',
    batch: 'B.Tech 2022',
    date: 'July 15, 2024',
    category: 'Internships',
    excerpt: 'Breaking into core civil engineering roles requires more than a good CGPA. Here\'s my journey from preparation to final offer — tips on resume, technical interviews, and networking.',
    bannerColor: '#1e3a5f',
  },
  {
    id: 2,
    title: 'My Semester Exchange at ETH Zürich — An Honest Review',
    author: 'Ishaan Tiwari',
    batch: 'B.Tech 2021',
    date: 'June 2, 2024',
    category: 'Semester Exchange',
    excerpt: 'Six months in Switzerland changed my perspective on engineering education. From problem sets in German to skiing trips on weekends — everything you need to know before applying.',
    bannerColor: '#c9a84c',
  },
  {
    id: 3,
    title: 'Getting into Research as a Third-Year CE Student',
    author: 'Aishwarya Menon',
    batch: 'B.Tech 2022',
    date: 'May 20, 2024',
    category: 'Research',
    excerpt: 'Research can seem intimidating when you\'re unsure where to start. I share how I approached professors, secured an SRF internship at IISc, and what the experience was like.',
    bannerColor: '#2a4f7f',
  },
  {
    id: 4,
    title: 'Cracking Consulting at McKinsey as a CE Student',
    author: 'Siddharth Jain',
    batch: 'B.Tech 2022',
    date: 'April 10, 2024',
    category: 'Placements',
    excerpt: 'Being a civil engineer in consulting isn\'t a disadvantage — it\'s an advantage. I share my case prep timeline, the resources I used, and why your analytical mindset is your biggest asset.',
    bannerColor: '#8B4513',
  },
  {
    id: 5,
    title: 'A Complete Guide to CE Course Selection in Semester 5',
    author: 'Priya Nair',
    batch: 'B.Tech 2023',
    date: 'March 25, 2024',
    category: 'Academics',
    excerpt: 'Semester 5 is a turning point — elective choices, department core overload, and minor courses. I break down each option with workload estimates and career relevance ratings.',
    bannerColor: '#1e3a5f',
  },
  {
    id: 6,
    title: 'Working at AECOM in Melbourne: The International Internship Experience',
    author: 'Ankit Sharma',
    batch: 'B.Tech 2021',
    date: 'Feb 14, 2024',
    category: 'Internships',
    excerpt: 'From visa applications to TBM operations — a month-by-month account of my three months in Australia working on the Melbourne Metro expansion project.',
    bannerColor: '#c9a84c',
  },
  {
    id: 7,
    title: 'From IITB to NUS: Exchange Life in Singapore',
    author: 'Kaveri Iyer',
    batch: 'B.Tech 2022',
    date: 'Jan 28, 2024',
    category: 'Semester Exchange',
    excerpt: 'Singapore is everything Mumbai isn\'t — clean roads, zero traffic, and impeccable public transport. Yet so culturally familiar. Read about my courses, food, travel and overall experience.',
    bannerColor: '#8B4513',
  },
  {
    id: 8,
    title: 'How the IIT Bombay Placement Season Works for CE Students',
    author: 'Karan Singh',
    batch: 'B.Tech 2021',
    date: 'Dec 5, 2023',
    category: 'Placements',
    excerpt: 'A transparent guide to the IITB placement process — DAP tests, technical interviews, company shortlists, and the dreaded Day 1 anxiety. What nobody tells you before placement season.',
    bannerColor: '#2a4f7f',
  },
  {
    id: 9,
    title: 'Undergraduate Research at IIT Bombay: Getting Started',
    author: 'Arjun Mehta',
    batch: 'B.Tech 2022',
    date: 'Nov 18, 2023',
    category: 'Research',
    excerpt: 'IIT Bombay is a research powerhouse but accessing it as an undergrad requires initiative. I list the best labs in Civil Engineering, how to cold-email profs, and what to expect.',
    bannerColor: '#c9a84c',
  },
];

// ===================== TEAM =====================
export const subgroupHeads = [
  {
    id: 1,
    name: 'Aryan Kapoor',
    subgroup: 'Academics',
    year: '3rd Year, B.Tech',
    email: 'academics.damp@iitb.ac.in',
    linkedin: '#',
    description: 'Manages course reviews, project booklets, and academic guidance resources. Works with seniors to keep content updated every semester.',
  },
  {
    id: 2,
    name: 'Shreya Agarwal',
    subgroup: 'Internships & Placements',
    year: '3rd Year, B.Tech',
    email: 'placements.damp@iitb.ac.in',
    linkedin: '#',
    description: 'Oversees internship blogs, placement preparation resources, and industry outreach. Coordinates with the Placement Cell for exclusive CE student sessions.',
  },
  {
    id: 3,
    name: 'Varun Nambiar',
    subgroup: 'Events & Outreach',
    year: '4th Year, B.Tech',
    email: 'events.damp@iitb.ac.in',
    linkedin: '#',
    description: 'Organises DAMP talks, mentorship sessions, alumni interactions, and manages social media presence. Ensures the community remains active year-round.',
  },
  {
    id: 4,
    name: 'Ananya Roy',
    subgroup: 'Community & Alumni',
    year: '4th Year, B.Tech',
    email: 'alumni.damp@iitb.ac.in',
    linkedin: '#',
    description: 'Maintains the alumni database, coordinates mentorship pairings, and curates semester exchange chronicles and achievement posts.',
  },
];

export const dampc = [
  {
    id: 1,
    name: 'Anika Sharma',
    role: 'Overall Head, Civil DAMP',
    year: '4th Year, B.Tech',
    email: 'anika.sharma@iitb.ac.in',
    linkedin: '#',
    description: 'Oversees the entire mentorship program, coordinating between subgroup heads, faculty, and the student body to ensure smooth execution of all DAMP initiatives.',
  },
  {
    id: 2,
    name: 'Rohan Gupta',
    role: 'Overall Head, Civil DAMP',
    year: '4th Year, B.Tech',
    email: 'rohan.gupta@iitb.ac.in',
    linkedin: '#',
    description: 'Responsible for strategic planning, budget allocation, and acting as the primary liaison between the department administration and the mentorship committee.',
  }
];

export const mentors = [
  { id: 1, name: 'Rahul Desai', year: '3rd Year', subgroup: 'Academics', email: 'rahul.desai@iitb.ac.in', intro: 'Hi! I am Rahul. I love structures and can help you navigate the tricky math courses in your 2nd year.' },
  { id: 2, name: 'Sneha Patel', year: '3rd Year', subgroup: 'Academics', email: 'sneha.patel@iitb.ac.in', intro: 'Hey everyone, I am Sneha. Reach out if you need advice on minors, Honors, or managing heavy credit semesters!' },
  { id: 3, name: 'Mohit Verma', year: '4th Year', subgroup: 'Internships', email: 'mohit.verma@iitb.ac.in', intro: 'Currently interning at L&T. I can review your resume and help you prep for core company interviews.' },
  { id: 4, name: 'Pooja Sharma', year: '3rd Year', subgroup: 'Internships', email: 'pooja.sharma@iitb.ac.in', intro: 'Targeting non-core consulting? Let\'s do some mock cases together. I am always happy to chat over coffee.' },
  { id: 5, name: 'Aditya Joshi', year: '4th Year', subgroup: 'Events', email: 'aditya.joshi@iitb.ac.in', intro: 'Event management enthusiast. If you have ideas for new DAMP workshops or activities, I am your guy.' },
  { id: 6, name: 'Kritika Singh', year: '3rd Year', subgroup: 'Events', email: 'kritika.singh@iitb.ac.in', intro: 'I manage our logistics and coordinate with speakers. Catch me if you want to help out volunteering for DAMP events!' },
  { id: 7, name: 'Nikhil Rao', year: '4th Year', subgroup: 'Community', email: 'nikhil.rao@iitb.ac.in', intro: 'Passionate about building a strong alumni network. Feel free to ask me how to cold email professors or alumni.' },
  { id: 8, name: 'Divya Menon', year: '3rd Year', subgroup: 'Community', email: 'divya.menon@iitb.ac.in', intro: 'I run the SemEx Chronicles. If you are dreaming of a semester in Europe, I can guide you through the IRCC portal!' },
];

export const facultyCoordinator = {
  name: 'Prof. G. V. Ramana',
  designation: 'Faculty Coordinator, Civil DAMP',
  department: 'Department of Civil Engineering',
  specialisation: 'Geotechnical Engineering',
  email: 'gvramana@civil.iitb.ac.in',
  office: 'Room 115, Civil Engineering Building, IIT Bombay',
};

// ===================== EVENTS =====================
export const events = [
  {
    id: 1,
    name: 'DAMP Orientation 2025',
    date: 'July 28, 2025',
    day: '28',
    month: 'Jul',
    description: 'Annual orientation for first-year CE students. Seniors share tips on academics, hostel life, clubs, and internships. Includes a Q&A session and ice-breakers.',
    venue: 'LT 001, Civil Engineering Building',
  },
  {
    id: 2,
    name: 'Alumni Talk: Careers in Infrastructure Consulting',
    date: 'August 10, 2025',
    day: '10',
    month: 'Aug',
    description: 'Industry leader and IITB alumnus (batch of 2017) shares insights on consulting careers at Bain, McKinsey, and AECOM. Open to all CE students.',
    venue: 'Online (Google Meet)',
  },
  {
    id: 3,
    name: 'Research Fest 2025',
    date: 'September 5, 2025',
    day: '05',
    month: 'Sep',
    description: 'Undergraduate research showcases across all CE subgroups. Faculty judges, best project prizes worth ₹10,000. Great opportunity for BTP students to get feedback.',
    venue: 'Main Building Auditorium, IITB',
  },
  {
    id: 4,
    name: 'Internship Panel Discussion',
    date: 'October 12, 2025',
    day: '12',
    month: 'Oct',
    description: 'A panel of 5 seniors share their internship experiences across core, consulting, and research roles. Includes CV review workshops after the talk.',
    venue: 'Room 302, Civil Engineering Building',
  },
];

// ===================== ACHIEVEMENTS =====================
export const achievements = [
  {
    year: '2024',
    title: 'DAMP Resource Portal Launch',
    description: 'Launched the comprehensive digital resource portal with 200+ course reviews, internship guides, and research booklets, reaching 500+ students in the first month.',
  },
  {
    year: '2023',
    title: 'ASCE Steel Bridge Competition — National Runners-Up',
    description: 'IIT Bombay CE team (mentored by DAMP) secured 2nd place nationally at the ASCE Student Steel Bridge Competition held in New Delhi.',
  },
  {
    year: '2022',
    title: 'Best Mentorship Program — IIT Bombay Awards',
    description: 'Civil DAMP recognised as the best departmental academic mentorship program at the IIT Bombay Academic Excellence Awards ceremony.',
  },
  {
    year: '2021',
    title: 'SemEx Chronicles Initiative',
    description: 'Launched the "Semester Exchange Chronicles" blog series documenting student experiences at universities worldwide, now with 30+ detailed writeups.',
  },
  {
    year: '2019',
    title: 'Civil DAMP Founded',
    description: 'Civil DAMP was established by a group of motivated final-year students with the vision of creating a structured peer mentorship ecosystem within the department.',
  },
];

// ===================== ALUMNI =====================
export const alumni = [
  {
    id: 1,
    name: 'Preethi Krishnamurthy',
    batch: 'B.Tech 2019',
    role: 'Senior Associate',
    company: 'McKinsey & Company',
    location: 'Dubai, UAE',
    linkedin: '#',
  },
  {
    id: 2,
    name: 'Vikram Menon',
    batch: 'B.Tech 2018',
    role: 'Structural Engineer',
    company: 'Arup London',
    location: 'London, UK',
    linkedin: '#',
  },
  {
    id: 3,
    name: 'Sunita Rao',
    batch: 'M.Tech 2020',
    role: 'PhD Researcher',
    company: 'MIT (EECS)',
    location: 'Cambridge, USA',
    linkedin: '#',
  },
  {
    id: 4,
    name: 'Rahul Kulkarni',
    batch: 'B.Tech 2020',
    role: 'Project Manager',
    company: 'L&T Construction',
    location: 'Mumbai, India',
    linkedin: '#',
  },
  {
    id: 5,
    name: 'Divya Nambiar',
    batch: 'B.Tech 2021',
    role: 'Urban Planner',
    company: 'World Bank',
    location: 'Washington D.C., USA',
    linkedin: '#',
  },
  {
    id: 6,
    name: 'Arjun Basu',
    batch: 'B.Tech 2019',
    role: 'Infrastructure Analyst',
    company: 'NITI Aayog',
    location: 'New Delhi, India',
    linkedin: '#',
  },
];

// ===================== SEMEX CHRONICLES =====================
export const semexBlogs = [
  {
    id: 1,
    title: 'Six Months at ETH Zürich: When Swiss Precision Meets Indian Chaos',
    author: 'Ishaan Tiwari',
    batch: 'B.Tech 2021',
    date: 'June 2024',
    university: 'ETH Zürich, Switzerland',
    excerpt: 'Navigating a world-class university, German lectures, and the Alps — a detailed month-by-month account of my exchange semester at one of Europe\'s top engineering schools.',
  },
  {
    id: 2,
    title: 'The NUS Experience: Engineering, Hawker Centres & Southeast Asia',
    author: 'Kaveri Iyer',
    batch: 'B.Tech 2022',
    date: 'January 2024',
    university: 'National University of Singapore',
    excerpt: 'Singapore felt like a stepping stone between India and the West. Smart city infrastructure all around you and NUS labs that make IITB look... well, different. Here\'s my full review.',
  },
  {
    id: 3,
    title: 'TU Delft & the Dutch Water Miracle: A CE Student\'s Dream Semester',
    author: 'Meera Pillai',
    batch: 'B.Tech 2021',
    date: 'August 2023',
    university: 'TU Delft, Netherlands',
    excerpt: 'A country that reclaimed land from the sea — studying water engineering here is surreal. I cover academics, cycling culture, Dutch housing costs, and why every CE student should consider Delft.',
  },
];

// ===================== LATEST BLOG POSTS (for home page) =====================
export const latestBlogs = blogs.slice(0, 3);

// ===================== UPCOMING EVENTS (for home page) =====================
export const upcomingEvents = events.slice(0, 2);

// ===================== CURRICULUM =====================
export const curriculum = [
  {
    semester: 1,
    label: 'Semester 1',
    credits: 25,
    courses: [
      { code: 'MA 101', name: 'Mathematics I (Calculus)', credits: 8, type: 'Institute Core' },
      { code: 'PH 107', name: 'Quantum Physics & Applications', credits: 6, type: 'Institute Core' },
      { code: 'CH 105', name: 'Organic & Inorganic Chemistry', credits: 6, type: 'Institute Core' },
      { code: 'CE 101', name: 'Engineering Drawing & Graphics', credits: 5, type: 'Dept Core' },
    ],
  },
  {
    semester: 2,
    label: 'Semester 2',
    credits: 27,
    courses: [
      { code: 'MA 106', name: 'Linear Algebra', credits: 8, type: 'Institute Core' },
      { code: 'PH 108', name: 'Electricity & Magnetism', credits: 6, type: 'Institute Core' },
      { code: 'CE 102', name: 'Engineering Mechanics', credits: 8, type: 'Dept Core' },
      { code: 'BB 101', name: 'Biology', credits: 5, type: 'Institute Core' },
    ],
  },
  {
    semester: 3,
    label: 'Semester 3',
    credits: 26,
    courses: [
      { code: 'CE 201', name: 'Fluid Mechanics', credits: 8, type: 'Dept Core' },
      { code: 'CE 203', name: 'Surveying', credits: 6, type: 'Dept Core' },
      { code: 'MA 205', name: 'Complex Analysis', credits: 6, type: 'Institute Core' },
      { code: 'CE 205', name: 'Earth Sciences for CE', credits: 6, type: 'Dept Core' },
    ],
  },
  {
    semester: 4,
    label: 'Semester 4',
    credits: 26,
    courses: [
      { code: 'CE 221', name: 'Solid Mechanics', credits: 8, type: 'Dept Core' },
      { code: 'CE 223', name: 'Hydraulics & Hydraulic Machines', credits: 6, type: 'Dept Core' },
      { code: 'CE 225', name: 'Soil Mechanics', credits: 6, type: 'Dept Core' },
      { code: 'HS 101', name: 'Economics', credits: 6, type: 'HSS Elective' },
    ],
  },
  {
    semester: 5,
    label: 'Semester 5',
    credits: 28,
    courses: [
      { code: 'CE 301', name: 'Structural Analysis', credits: 8, type: 'Dept Core' },
      { code: 'CE 251', name: 'Environmental Engineering', credits: 6, type: 'Dept Core' },
      { code: 'CE 341', name: 'Transportation Engineering', credits: 6, type: 'Dept Core' },
      { code: 'DE XXX', name: 'Dept Elective I', credits: 6, type: 'Dept Elective' },
      { code: 'HS XXX', name: 'HSS Elective II', credits: 2, type: 'HSS Elective' },
    ],
  },
  {
    semester: 6,
    label: 'Semester 6',
    credits: 26,
    courses: [
      { code: 'CE 311', name: 'Concrete Technology', credits: 6, type: 'Dept Core' },
      { code: 'CE 316', name: 'Design of Concrete Structures', credits: 8, type: 'Dept Core' },
      { code: 'DE XXX', name: 'Dept Elective II', credits: 6, type: 'Dept Elective' },
      { code: 'OE XXX', name: 'Open Elective / Minor', credits: 6, type: 'Open Elective' },
    ],
  },
  {
    semester: 7,
    label: 'Semester 7',
    credits: 24,
    courses: [
      { code: 'CE 403', name: 'Foundation Engineering', credits: 6, type: 'Dept Core' },
      { code: 'DE XXX', name: 'Dept Elective III', credits: 6, type: 'Dept Elective' },
      { code: 'OE XXX', name: 'Open Elective / Minor', credits: 6, type: 'Open Elective' },
      { code: 'CE 490', name: 'BTP Stage 1', credits: 6, type: 'Project' },
    ],
  },
  {
    semester: 8,
    label: 'Semester 8',
    credits: 22,
    courses: [
      { code: 'DE XXX', name: 'Dept Elective IV', credits: 6, type: 'Dept Elective' },
      { code: 'OE XXX', name: 'Open Elective / Minor', credits: 6, type: 'Open Elective' },
      { code: 'CE 491', name: 'BTP Stage 2', credits: 10, type: 'Project' },
    ],
  },
];

// ===================== CLUBS =====================
export const clubs = [
  {
    id: 1,
    name: 'ASCE Student Chapter, IITB',
    shortName: 'ASCE',
    description: 'The American Society of Civil Engineers student chapter at IIT Bombay. Organises the annual Steel Bridge Competition, concrete canoe contest, and industry interaction sessions.',
    members: 45,
    category: 'Technical',
    link: 'https://www.asce.org/communities/student-chapters',
  },
  {
    id: 2,
    name: 'Engineers Without Borders — IITB',
    shortName: 'EWB',
    description: 'Focuses on sustainable engineering solutions for underserved communities. Projects include rural water supply, sanitation design, and low-cost housing in Maharashtra.',
    members: 60,
    category: 'Social Impact',
    link: 'https://ewb-iitb.org',
  },
  {
    id: 3,
    name: 'Concrete Canoe Club',
    shortName: 'CCC',
    description: 'Students design and build a canoe made entirely from concrete, competing at national-level competitions. Combines structural design, material science, and teamwork.',
    members: 25,
    category: 'Technical',
    link: '#',
  },
  {
    id: 4,
    name: 'SEFI — Structural Engineering Forum of India (Student Wing)',
    shortName: 'SEFI',
    description: 'Organises guest lectures, workshops, and seminars on structural engineering topics. Collaborates with the Indian Concrete Institute and structural engineering firms.',
    members: 35,
    category: 'Technical',
    link: '#',
  },
  {
    id: 5,
    name: 'GeoTech Society',
    shortName: 'GTS',
    description: 'Student-run society focused on geotechnical engineering. Hosts soil testing workshops, site visits, and monthly reading group discussions on ground engineering papers.',
    members: 30,
    category: 'Technical',
    link: '#',
  },
  {
    id: 6,
    name: 'Sustainability Club — CE Chapter',
    shortName: 'SustainCE',
    description: 'Promotes sustainable construction practices, green building codes, and environmental impact awareness. Collaborates with IGBC for annual workshops.',
    members: 40,
    category: 'Social Impact',
    link: '#',
  },
];

// ===================== IMPORTANT LINKS =====================
export const importantLinks = [
  {
    category: 'Academic Links',
    icon: '📚',
    links: [
      { title: 'ASC Timetable', url: 'https://asc.iitb.ac.in/', description: 'Official academic schedule and timetable' },
      { title: 'CE Department — Course List', url: 'https://www.civil.iitb.ac.in/newacad?q=node/6', description: 'Complete list of CE courses offered' },
      { title: 'Institute Electives PDF', url: 'https://www.iitb.ac.in/newacadhome/electives.jsp', description: 'List of electives from all departments' },
      { title: 'SAFE App (IITB)', url: 'https://portal.iitb.ac.in/asc/', description: 'Student Academic Feedback & Evaluation portal' },
    ],
  },
  {
    category: 'Placement & Internship',
    icon: '💼',
    links: [
      { title: 'Placement Cell — IITB', url: 'https://placements.iitb.ac.in/', description: 'Official placement office portal' },
      { title: 'Internship Portal', url: 'https://internship.iitb.ac.in/', description: 'IIT Bombay internship application portal' },
      { title: 'LinkedIn CE Alumni Group', url: 'https://www.linkedin.com/groups/12345678/', description: 'Network with CE alumni on LinkedIn' },
    ],
  },
  {
    category: 'Exchange & International',
    icon: '🌍',
    links: [
      { title: 'IRCC — IIT Bombay', url: 'https://www.iitb.ac.in/ircc/', description: 'International Relations & Corporate Communications' },
      { title: 'DAAD Scholarships', url: 'https://www.daad.de/en/', description: 'German Academic Exchange Service for research internships' },
      { title: 'Mitacs Globalink', url: 'https://www.mitacs.ca/our-programs/globalink-research-internship-students/', description: 'Research internships in Canada' },
      { title: 'ICCR Scholarships', url: 'https://www.iccr.gov.in/', description: 'Indian Council for Cultural Relations scholarships' },
      { title: 'NUS SEP Info', url: 'https://www.nus.edu.sg/gro/global-programmes/student-exchange', description: 'NUS exchange programme details' },
    ],
  },
  {
    category: 'Department Links',
    icon: '🏛️',
    links: [
      { title: 'CE Department Website', url: 'https://www.civil.iitb.ac.in/', description: 'Official Civil Engineering department website' },
      { title: 'Structural Engineering Lab', url: 'https://www.civil.iitb.ac.in/newacad?q=node/7', description: 'Heavy structures testing laboratory' },
      { title: 'Geotechnical Engineering Lab', url: 'https://www.civil.iitb.ac.in/newacad?q=node/8', description: 'Soil mechanics and foundation testing' },
      { title: 'Environmental Engineering Lab', url: 'https://www.civil.iitb.ac.in/newacad?q=node/9', description: 'Water quality and treatment research' },
    ],
  },
  {
    category: 'DAMP Resources',
    icon: '📖',
    links: [
      { title: 'SemEx Chronicles', url: '#community', description: 'Semester exchange experience blogs' },
      { title: 'Past DAMP Newsletters', url: '#', description: 'Archive of previous newsletter editions' },
      { title: 'Course Reviews Database', url: '#academics', description: 'Comprehensive course review collection' },
    ],
  },
  {
    category: 'IIT Bombay',
    icon: '🎓',
    links: [
      { title: 'IIT Bombay Main Site', url: 'https://www.iitb.ac.in/', description: 'Official IIT Bombay website' },
      { title: 'Gymkhana', url: 'https://gymkhana.iitb.ac.in/', description: 'Students\' Gymkhana portal' },
      { title: 'Student Alumni Connect (SAC)', url: 'https://sac.iitb.ac.in/', description: 'Student-alumni networking platform' },
      { title: 'Campus Map', url: 'https://www.iitb.ac.in/en/about-iit-bombay/campus-map', description: 'Interactive campus map' },
      { title: 'Hostel Guide', url: '#', description: 'Guide to hostels, mess, and campus life' },
    ],
  },
];

// ===================== ACADEMIC RESOURCES =====================
export const academicResources = [
  {
    category: 'PYQs (Previous Year Questions)',
    items: [
      { title: 'CE 201 - Fluid Mechanics PYQs (2018-2023)', type: 'PDF', size: '4.2 MB', link: '#' },
      { title: 'CE 301 - Structural Analysis Midsem PYQs', type: 'PDF', size: '2.1 MB', link: '#' },
      { title: 'CE 221 - Solid Mechanics Endsem Papers', type: 'PDF', size: '3.5 MB', link: '#' },
      { title: 'CE 341 - Transportation Engg Quizzes', type: 'Folder', size: '12 MB', link: '#' },
    ]
  },
  {
    category: 'Reference Books',
    items: [
      { title: 'Mechanics of Materials - R.C. Hibbeler', type: 'E-Book', size: '25 MB', link: '#' },
      { title: 'Soil Mechanics and Foundations - Muni Budhu', type: 'E-Book', size: '18 MB', link: '#' },
      { title: 'Fluid Mechanics - Frank M. White', type: 'E-Book', size: '30 MB', link: '#' },
    ]
  },
  {
    category: 'Lecture Notes & Slides',
    items: [
      { title: 'CE 102 Engineering Mechanics Full Notes', type: 'PDF', size: '15 MB', link: '#' },
      { title: 'Environmental Engg (CE 251) Slides', type: 'Folder', size: '45 MB', link: '#' },
      { title: 'Concrete Technology Lab Manual', type: 'PDF', size: '5 MB', link: '#' },
    ]
  }
];
