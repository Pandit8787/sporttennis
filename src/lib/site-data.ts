export const ACADEMY = {
  name: "Sports Life Tennis Academy",
  short: "Sports Life",
  tagline: "Player-first tennis coaching across Delhi, from first lesson to competitive tournament play",
  phone: "+91 81305 14603, +91 92665 79159",
  whatsapp: "+919266579159",
  email: "abhiney@sportslifetennisacademy.com",
  emails: [
    "abhiney@sportslifetennisacademy.com",
    "kabhiney@gmail.com",
  ],
  address: "DDA Roshanara Club, Shakti Nagar, Delhi-110007",
  hours: [
    { day: "Tuesday – Sunday", time: "Morning & Evening Sessions" },
  ],
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "YouTube", href: "https://youtube.com" },
    { label: "Twitter", href: "https://twitter.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "WhatsApp", href: "https://wa.me/919266579159" },
    { label: "Facebook", href: "https://facebook.com" },
  ],
};

export const NAV = [
  { label: "Home", to: "/" },
  {
    label: "About Us",
    to: "/about",
    children: [
      { label: "About Us Overview", to: "/about", description: "Who we are and our leadership in Delhi" },
      { label: "Our Story & Why Us", to: "/about/our-story", description: "The journey that shaped Sports Life & what makes us different" },
      { label: "Meet the Founder", to: "/about/meet-founder", description: "Abhiney Kumar's vision & Spanish coaching" },
      { label: "Our Vision, Mission & Values", to: "/about/our-vision-mission", description: "Building India's trusted tennis ecosystem" },
    ],
  },
  { label: "Meet Our Team", to: "/team" },
  {
    label: "Our Centres",
    to: "/centres",
    children: [
      { label: "All Centres Overview", to: "/centres", description: "3 Delhi Centres with 25 Courts" },
      { label: "Roshanara Club", to: "/centres/roshanara-club", description: "North Delhi · 4 Synthetic · 2 Clay · 3 Grass" },
      { label: "Major Dhyan Chand Complex", to: "/centres/major-dhyan-chand-sports-complex", description: "Ashok Vihar · 4 Synthetic · 2 Clay" },
      { label: "Punjabi Bagh Club", to: "/centres/punjabi-bagh-club", description: "West Delhi · 6 Clay · 4 Synthetic" },
    ],
  },
  { label: "Our Programs", to: "/programs" },
  {
    label: "Sports Life Initiatives",
    to: "/initiatives",
    children: [
      { label: "Initiatives Overview", to: "/initiatives", description: "Pathways beyond traditional training" },
      { label: "Sunday Match Play", to: "/initiatives/sunday-match-play", description: "Weekly tournament match play league" },
      { label: "Global Learning Initiatives", to: "/initiatives/global-learning", description: "Learning Beyond the Court · Masterclasses" },
    ],
  },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const;

export const STATS = [
  { value: 3, suffix: "", label: "centres in Delhi" },
  { value: 25, suffix: "", label: "tennis courts" },
  { value: 12, suffix: "", label: "synthetic courts" },
  { value: 10, suffix: "", label: "clay courts" },
];

export const WHY_US = [
  {
    title: "Player-centred development",
    body: "Every training plan is designed around the individual needs, goals and ability of the player.",
  },
  {
    title: "Structured pathways",
    body: "From toddlers and beginners to advanced competitors, each player follows a clear development pathway.",
  },
  {
    title: "Qualified coaching team",
    body: "Our coaches bring international exposure, competitive experience and modern coaching methods to every session.",
  },
  {
    title: "Regular match play",
    body: "Practice develops technique; competition builds confidence, decision-making and tournament readiness.",
  },
  {
    title: "Holistic growth",
    body: "We develop technical, tactical, physical, mental and personal strength so players grow off the court too.",
  },
  {
    title: "Community & opportunity",
    body: "We connect players, parents, schools, universities and partners to create meaningful tennis opportunities.",
  },
];

export const PROGRAMS = [
  {
    slug: "toddlers",
    name: "Toddlers Tennis (4–6 Years)",
    level: "Ages 4–6",
    duration: "Regular Batches",
    price: "On enquiry",
    summary: "Building a Love for Tennis Through Fun & Movement. Our Toddlers Program introduces young children to tennis through engaging activities that develop coordination, balance, agility, and confidence in a fun and supportive environment.",
    points: ["Coordination & balance", "Agility games", "Fun & supportive environment", "Positive first experience"],
    perfectFor: "Children aged 4–6 years",
  },
  {
    slug: "beginners",
    name: "Beginners Program",
    level: "The Perfect First Step",
    duration: "Regular Batches",
    price: "On enquiry",
    summary: "The Perfect First Step Into Tennis. Designed for players with little or no previous experience, this program focuses on developing the fundamental techniques, correct grip, footwork, coordination, and basic rallying skills while making learning enjoyable.",
    points: ["Fundamental techniques", "Correct grip & footwork", "Basic rallying skills", "Enjoyable learning"],
    perfectFor: "Children and adults starting their tennis journey",
  },
  {
    slug: "semi-intermediate",
    name: "Semi-Intermediate Program",
    level: "Building Confidence",
    duration: "Regular Batches",
    price: "On enquiry",
    summary: "Building Confidence & Consistency. As players become comfortable with the fundamentals, this program focuses on improving consistency, movement, shot selection, and match awareness while introducing more structured training and point play.",
    points: ["Consistency & movement", "Shot selection", "Match awareness", "Structured point play"],
    perfectFor: "Players with basic tennis knowledge looking to improve their game",
  },
  {
    slug: "intermediate",
    name: "Intermediate Program",
    level: "Next Level Tennis",
    duration: "Regular Batches",
    price: "On enquiry",
    summary: "Taking Your Game to the Next Level. This program develops advanced technical skills, tactical understanding, match strategy, physical conditioning, and competitive confidence through structured coaching and regular match play.",
    points: ["Advanced technical skills", "Tactical understanding", "Match strategy & conditioning", "Competitive confidence"],
    perfectFor: "Players preparing for competitive tennis",
  },
  {
    slug: "advanced-performance",
    name: "Advanced & Performance",
    level: "Competitive Excellence",
    duration: "Regular Batches",
    price: "On enquiry",
    summary: "Preparing Competitive Players for Success. Our Advanced Program and Performance Batch focus on high-intensity training, tournament preparation, tactical planning, match analysis and long-term athlete development.",
    points: ["High-intensity training", "Tournament preparation", "Tactical planning & match analysis", "Long-term athlete development"],
    perfectFor: "Competitive players aiming for district, state, national and international competition",
  },
  {
    slug: "adult",
    name: "Adult Tennis Program",
    level: "All Adult Levels",
    duration: "Regular Batches",
    price: "On enquiry",
    summary: "It's Never Too Late to Start Playing. Whether you're picking up a racquet for the first time, returning to tennis after years away, or looking to improve your game, our Adult Tennis Program provides a welcoming and professional environment for players of all abilities.",
    points: ["Fitness & agility", "Technique refinement", "Stress relief & wellness", "Welcoming community"],
    perfectFor: "Beginners, recreational players, and competitive adults",
  },
  {
    slug: "sunday-match-play",
    name: "Sunday Match Play",
    level: "All Levels",
    duration: "Every Sunday",
    price: "On enquiry",
    summary: "A structured weekly competitive match-play initiative giving players regular tournament match exposure, tactical debriefs, and competitive confidence.",
    points: ["Simulated tournament matches", "Supervisor coach debriefs", "Tactical shot selection", "Competitive pressure training"],
    perfectFor: "All players wanting real competitive match exposure",
  },
];

export const COACHES = [
  {
    name: "Abhiney Kumar",
    role: "Founder & Head Coach",
    initials: "AK",
    experience: "16+ years",
    cert: "International Coach · NIS · PTR · AITA-ITF",
    achievements: ["International coaching exposure", "Player-first philosophy", "Founder of Sports Life"],
    bio: "Abhiney Kumar is an International Tennis Coach and the Founder of Sports Life Tennis Academy. With over 16 years of playing experience and international coaching exposure, he is passionate about developing players through structured coaching, modern training methods, and a player-first approach. His vision is to build an organization that supports every aspect of a player's journey while contributing to the long-term growth of tennis in India.",
    image: "/abhiney-kumar-headshot.jpg",
  },
  {
    name: "Rahul Singh",
    role: "Head Coach",
    initials: "RS",
    experience: "Top 35 AITA Men's player",
    cert: "National-level coaching experience",
    achievements: ["Developed nationally ranked players", "Technical foundations", "Structured development plans"],
    bio: "Rahul Singh is a highly accomplished tennis coach and former AITA Men's Top 35 player with extensive experience in developing national-level athletes. Known for his disciplined coaching style and player-first approach, he specializes in building strong technical foundations while guiding players towards long-term competitive success.",
    image: "/rahul-singh.jpg",
  },
  {
    name: "Mukul Singh",
    role: "Head Coach",
    initials: "MS",
    experience: "National & university level",
    cert: "High-performance coaching",
    achievements: ["Top-20 national rankings", "Player development specialist", "Technical excellence"],
    bio: "Mukul Singh is an accomplished tennis coach with a strong competitive background and extensive experience in player development. Having worked with nationally and internationally ranked players, he is passionate about building technically sound, confident, and disciplined athletes through a player-first approach.",
    image: "/mukul-singh.jpg",
  },
  {
    name: "Samriti Punyani",
    role: "Head Coach",
    initials: "SP",
    experience: "14+ years",
    cert: "NIS-qualified · M.P.Ed. · B.P.Ed. · PTR",
    achievements: ["State, national and international experience", "Women’s tennis coaching", "Long-term athlete development"],
    bio: "Samriti Punyani is an accomplished tennis player and coach with over 14 years of experience in the sport. Having represented India at state, national, and international levels, she is passionate about developing players through structured coaching, personalized guidance, and a strong focus on long-term athlete development.",
    image: "/samriti-punyani.jpg",
  },
  {
    name: "Sachin",
    role: "Coach",
    initials: "S",
    experience: "Junior Coaching Expert",
    cert: "ITF Level 1 · AITA Certified",
    achievements: ["U-12 Player Development", "Toddler Tennis Specialist"],
    bio: "Newly joined senior youth coach specializing in U-10 and U-12 foundational programs.",
    image: "/coaches/rohit.jpg",
  },
  {
    name: "Ankit",
    role: "Coach",
    initials: "A",
    experience: "Adult & Match Play",
    cert: "PTR Certified · AITA Level 2",
    achievements: ["Adult Tennis Coaching", "Sunday Match Play League"],
    bio: "Recently hired specialist coach for adults, corporate sessions, and Sunday Match Play organization.",
    image: "/coaches/mohit.jpg",
  },
  {
    name: "Rahul",
    role: "Coach",
    initials: "R",
    experience: "Development coaching",
    cert: "Foundation & progression",
    achievements: ["Junior player support", "Progressive planning"],
    bio: "Works closely with youth players to build strong fundamentals and a love for the game.",
    image: "/coaches/rahul.jpg",
  },
  {
    name: "Ashish",
    role: "Coach",
    initials: "A",
    experience: "Technical coaching",
    cert: "Match play support",
    achievements: ["Performance development", "Technique refinement"],
    bio: "Supports players at every stage with structured drills and clear technical feedback.",
    image: "/coaches/ashish.jpg",
  },
  {
    name: "Vishal",
    role: "Coach",
    initials: "V",
    experience: "Player development",
    cert: "Training support",
    achievements: ["Skill progression", "Structured practice"],
    bio: "Focuses on helping players improve through clear technical guidance and steady progression.",
    image: "/coaches/vishal.jpg",
  },
  {
    name: "Rupesh",
    role: "Coach",
    initials: "R",
    experience: "Match play support",
    cert: "Foundation coaching",
    achievements: ["Court awareness", "Player confidence"],
    bio: "Builds confidence and consistency through simple, focused coaching methods.",
    image: "/coaches/rupesh.jpg",
  },
  {
    name: "Rohit",
    role: "Coach",
    initials: "R",
    experience: "Technical coaching",
    cert: "Progression support",
    achievements: ["Tactical awareness", "Development planning"],
    bio: "Supports players with practical coaching that focuses on growth at every stage.",
    image: "/coaches/rohit.jpg",
  },
  {
    name: "Mintu",
    role: "Coach",
    initials: "M",
    experience: "Junior training",
    cert: "Development coaching",
    achievements: ["Youth support", "Fun-based learning"],
    bio: "Helps young players build comfort, rhythm and confidence on court.",
    image: "/coaches/mintu.jpg",
  },
  {
    name: "Himanshu",
    role: "Coach",
    initials: "H",
    experience: "Performance training",
    cert: "Match preparation",
    achievements: ["Competitive readiness", "Focus and discipline"],
    bio: "Works with players to sharpen preparation, discipline and match awareness.",
    image: "/coaches/himanshu.jpg",
  },
  {
    name: "Ashok",
    role: "Coach",
    initials: "A",
    experience: "Development coaching",
    cert: "Training support",
    achievements: ["Consistency", "Technical clarity"],
    bio: "Supports aspiring players through clear instruction and consistent mentoring.",
    image: "/coaches/ashok.jpg",
  },
  {
    name: "Mohit",
    role: "Coach",
    initials: "M",
    experience: "Skill coaching",
    cert: "Foundation support",
    achievements: ["Fundamentals", "Progression"],
    bio: "Focused on laying strong foundations and creating a positive learning experience.",
    image: "/coaches/mohit.jpg",
  },
  {
    name: "Chetan",
    role: "Coach",
    initials: "C",
    experience: "Training support",
    cert: "Match readiness",
    achievements: ["Momentum", "Competitive support"],
    bio: "Helps players build confidence and maintain momentum across their development journey.",
    image: "/coaches/chetan.jpg",
  },
  {
    name: "Akhil",
    role: "Coach",
    initials: "A",
    experience: "Player development",
    cert: "Technical coaching",
    achievements: ["Skill refinement", "Consistency"],
    bio: "Encourages disciplined improvement and clear technical habits on court.",
    image: "/coaches/akhil.jpg",
  },
  {
    name: "Tarun",
    role: "Coach",
    initials: "T",
    experience: "Foundation coaching",
    cert: "Practice planning",
    achievements: ["Structured routines", "Confidence building"],
    bio: "Creates focused practice environments where players can grow with clarity and confidence.",
    image: "/coaches/tarun.jpg",
  },
  {
    name: "Rachna",
    role: "Coach",
    initials: "R",
    experience: "Development coaching",
    cert: "Player mentorship",
    achievements: ["Mentorship", "Motivation"],
    bio: "Supports players through encouraging guidance that builds confidence and long-term commitment.",
    image: "/coaches/rachna.jpg",
  },
  {
    name: "Rishi",
    role: "Coach",
    initials: "R",
    experience: "Training support",
    cert: "Progression coaching",
    achievements: ["Technical improvement", "Match awareness"],
    bio: "Works with players to sharpen technique and understanding of the game.",
    image: "/coaches/rishi.jpg",
  },
  {
    name: "Radhe",
    role: "Coach",
    initials: "R",
    experience: "Development coaching",
    cert: "Player support",
    achievements: ["Consistency", "Growth mindset"],
    bio: "Brings a calm, supportive approach that helps players grow step by step.",
    image: "/coaches/radhe.jpg",
  },
  {
    name: "Aman",
    role: "Coach",
    initials: "A",
    experience: "Performance support",
    cert: "Training guidance",
    achievements: ["Focus", "Competitive growth"],
    bio: "Contributes to player development with attention to discipline and performance habits.",
    image: "/coaches/aman.jpg",
  },
  {
    name: "Pratham",
    role: "Coach",
    initials: "P",
    experience: "Junior development",
    cert: "Progression coaching",
    achievements: ["Young player support", "Rally confidence"],
    bio: "Encourages young athletes to enjoy the game while building strong habits and confidence.",
    image: "/coaches/pratham.jpg",
  },
];

export const FACILITIES = [
  {
    name: "12 synthetic courts",
    body: "Courts designed for technical precision, fast-paced drills, match preparation and high-performance development.",
    tag: "Courts",
  },
  {
    name: "10 clay courts",
    body: "Clay surfaces that improve endurance, sliding, patience, and point construction in a complete game.",
    tag: "Surfaces",
  },
  {
    name: "3 grass courts",
    body: "Natural grass gives players quick reflexes, versatile footwork and adaptability for different tournament conditions.",
    tag: "Surfaces",
  },
  {
    name: "Structured player development",
    body: "Every session is planned around technical, tactical, physical and mental growth in a positive environment.",
    tag: "Development",
  },
  {
    name: "Match play opportunities",
    body: "Weekly and Sunday match play sessions help players apply what they learn under real competitive pressure.",
    tag: "Competition",
  },
  {
    name: "Global learning & mentorship",
    body: "Direct access to international coach masterclasses and Indian professionals beyond the court.",
    tag: "Community",
  },
];

export const CENTRES = [
  {
    slug: "roshanara-club",
    name: "Roshanara Club",
    location: "North Delhi",
    summary: "The flagship centre where Sports Life began in 2024, with 4 synthetic, 2 clay and 3 grass courts.",
    description:
      "Where the Sports Life journey began. Established in 2024, our flagship centre at Roshanara Club offers structured coaching and training facilities with 4 synthetic courts, 2 clay courts, and 3 grass courts, providing players with the opportunity to train on all major court surfaces in an inspiring environment.",
    photo:
      "/centre-gallery/whatsapp-20260813-171744-1.jpg",
  },
  {
    slug: "major-dhyan-chand-sports-complex",
    name: "Major Dhyan Chand Sports Complex",
    location: "Ashok Vihar",
    summary: "A modern centre for player development with 4 synthetic and 2 clay courts.",
    description:
      "In 2026, Sports Life Tennis Academy expanded to the Major Dhyan Chand Sports Complex with the vision of providing aspiring players access to structured coaching in a modern sporting environment. Today, the centre serves as a hub for structured player development, combining coaching, and a player-first philosophy. The complex offers 4 synthetic courts and 2 clay courts.",
    photo:
      "/centre-gallery/whatsapp-20260813-171844-2.jpg",
  },
  {
    slug: "punjabi-bagh-club",
    name: "Punjabi Bagh Club",
    location: "West Delhi",
    summary: "A premier destination with 4 synthetic and 6 clay courts and strong adult and Sunday match play programming.",
    description:
      "Punjabi Bagh Club brings tennis coaching and competitive match-play opportunities to players across Delhi. Combining 4 synthetic courts and 6 clay courts with a player-first approach, the centre offers a positive and dynamic environment for beginners, competitive players, and adults alike.",
    photo:
      "/centre-gallery/img_8064.jpg",
  },
] as const;

export const INITIATIVES = [
  {
    title: "Sunday Match Play",
    body: "Structured competitive matches for players of similar level, helping them improve decision-making, tactical shot selection, and match confidence.",
  },
  {
    title: "Global Learning Initiatives",
    body: "Learning Beyond the Court: Direct online interactive sessions with international coaches like Jofre Porta and Indian professionals like Vishnu Vardhan.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Six months at Sports Life Tennis Academy turned my daughter from a hesitant beginner into a state quarter-finalist. The coaching detail is unreal.",
    name: "Priya Nair",
    role: "Parent, Junior Squad",
  },
  {
    quote:
      "The video analysis sessions changed how I read the court. I finally understand why I was losing the long rallies.",
    name: "Rohit Deshpande",
    role: "Advanced Programme",
  },
  {
    quote:
      "I joined for fitness and stayed for the community. Best evening batch in the city, no exceptions.",
    name: "Anita George",
    role: "Adult Programme",
  },
  {
    quote:
      "Their S&C work rebuilt my ankle after a bad landing. I came back stronger than before the injury.",
    name: "Karthik Iyer",
    role: "Elite Squad",
  },
];

export const TRANSFORMATIONS = [
  {
    name: "Ishaan Verma",
    before: "District round-of-32, no ranking",
    after: "National Under-17 semifinalist",
    months: 14,
  },
  {
    name: "Sara Qureshi",
    before: "Recreational player, 3 years off court",
    after: "State doubles champion",
    months: 20,
  },
  {
    name: "Aditya Rane",
    before: "Recurring ankle injuries",
    after: "Full season, zero missed matches",
    months: 9,
  },
];

export const TIMELINE = [
  {
    year: "2008",
    title: "Two courts, one coach",
    body: "Arjun Menon starts weekend coaching for eleven kids in a rented hall.",
  },
  {
    year: "2012",
    title: "First national medal",
    body: "A Sports Life junior takes bronze at the National Under-13 championship.",
  },
  {
    year: "2016",
    title: "The Indiranagar centre",
    body: "Nine wooden courts, a performance gym and the first full-time squad.",
  },
  {
    year: "2020",
    title: "Analysis lab launched",
    body: "Four-angle video capture and data benchmarking added for every squad athlete.",
  },
  {
    year: "2023",
    title: "International breakthrough",
    body: "Two athletes qualify for the BWF World Junior Championships.",
  },
  {
    year: "2026",
    title: "Residential pathway",
    body: "Full-time elite residency opens with sports science and nutrition support.",
  },
];

export const AWARDS = [
  { year: "2025", title: "Academy of the Year", org: "State Badminton Association" },
  { year: "2024", title: "Best Junior Development Programme", org: "National Sports Council" },
  { year: "2023", title: "Coach of the Year — Arjun Menon", org: "State Badminton Association" },
  { year: "2022", title: "Excellence in Sports Infrastructure", org: "City Sports Federation" },
];

export const TOURNAMENTS = [
  {
    name: "Sports Life Open 2026",
    date: "12–15 September 2026",
    venue: "Sports Life Arena, Bengaluru",
    categories: "U13 · U15 · U17 · Open Singles · Open Doubles",
    status: "Registration open",
  },
  {
    name: "Feather Cup Junior Series",
    date: "24–26 October 2026",
    venue: "Sports Life Arena, Court 1–6",
    categories: "U11 · U13 · U15",
    status: "Registration open",
  },
  {
    name: "Corporate Shuttle League",
    date: "14 November 2026",
    venue: "Sports Life Arena",
    categories: "Team event · Mixed doubles",
    status: "Early bird",
  },
];

export const SCHEDULE = [
  { time: "09:00", court: "Court 1", match: "U15 Boys Singles — QF1" },
  { time: "10:15", court: "Court 2", match: "Open Women's Doubles — R16" },
  { time: "11:30", court: "Court 1", match: "U17 Girls Singles — QF2" },
  { time: "14:00", court: "Court 3", match: "Open Men's Singles — R16" },
  { time: "16:45", court: "Court 1", match: "Mixed Doubles — Semifinal" },
];

export const RESULTS = [
  {
    event: "Spring Feather Cup",
    winner: "Ishaan Verma",
    runner: "Tanmay Bhat",
    score: "21-18, 19-21, 21-14",
  },
  {
    event: "State Junior Open",
    winner: "Sara Qureshi",
    runner: "Divya Menon",
    score: "21-15, 21-17",
  },
  {
    event: "City Doubles League",
    winner: "Rane / Okoro",
    runner: "Shetty / Iyer",
    score: "21-19, 21-16",
  },
];

export const FAQS = [
  {
    q: "Do I need my own racquet to start?",
    a: "Yes, for the 1st day we provide racquet trial, then we suggest the racquet. The racquet can be purchased from the academy at the best price.",
  },
  {
    q: "How does the free trial work?",
    a: "Book a slot through the contact form and you get a 30–45 minutes session with a coach, including a short skill assessment and a personalized recommendation.",
  },
  {
    q: "What is the age range for the kids programme?",
    a: "Our kids programme runs from age 4 to 18, split into development stages so children always train with peers of similar ability.",
  },
  {
    q: "Can adults join if they've never played competitively?",
    a: "Absolutely. Most of our adult batch started at zero. Sessions are structured so complete beginners and returning players train in separate rotations.",
  },
  {
    q: "Do you help with tournament entries?",
    a: "Yes. Advanced and Performance athletes have entries, schedules and travel logistics coordinated by our tournament desk at no additional cost.",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  body: string[];
};

export const BLOG_CATEGORIES = [
  "All",
  "Training Tips",
  "Nutrition",
  "Fitness",
  "Tournament Updates",
  "Badminton Techniques",
];

export const BLOGS: BlogPost[] = [
  {
    slug: "six-corner-footwork-drill",
    title: "The six-corner footwork drill that fixes late arrivals",
    category: "Training Tips",
    date: "2026-07-28",
    readTime: "6 min",
    excerpt:
      "If you are reaching the shuttle a fraction late, the problem is almost never speed. It is the split step and the first push.",
    body: [
      "Most club players believe they lose rallies because they are slow. Video review tells a different story: they arrive late because the split step happens after the opponent's contact rather than a beat before it.",
      "The six-corner drill isolates that timing. Start at base, split on the coach's racket movement, push to the called corner, play a shadow shot, and recover with a chasse rather than a run. Six corners, four rounds, ninety seconds of rest.",
      "The correction to watch for is the first step. If it is a small shuffle instead of a hard push off the outside leg, you will always be half a step short on the deep backhand corner.",
      "Run this twice a week for a month and the deep corners stop feeling like emergencies. Add a shuttle to the drill only once the timing is automatic — chasing a real shuttle hides bad mechanics.",
    ],
  },
  {
    slug: "eating-for-three-match-days",
    title: "Eating for three match days in a row",
    category: "Nutrition",
    date: "2026-07-14",
    readTime: "5 min",
    excerpt:
      "Tournament weekends are won at breakfast. Here is the fuelling plan our elite squad uses across a three-day draw.",
    body: [
      "A knockout draw can mean five matches across three days with unpredictable court times. The athletes who fade in the third game are usually the ones who ate a single large meal and hoped for the best.",
      "Our squad works on a two-hour rhythm: a carbohydrate-led meal three hours before the first call, then a small, low-fibre snack every ninety minutes while waiting.",
      "Hydration matters more than any supplement. Aim for 500 ml with electrolytes in the hour before play and 150–250 ml at every changeover.",
      "After the last match of the day, protein within forty-five minutes and a proper carbohydrate refill at dinner. Recovery for tomorrow starts tonight.",
    ],
  },
  {
    slug: "ankle-proofing-your-season",
    title: "Ankle-proofing your season: the ten-minute pre-court routine",
    category: "Fitness",
    date: "2026-06-30",
    readTime: "7 min",
    excerpt:
      "Badminton's most common injury is entirely trainable. Ten minutes before court, three times a week.",
    body: [
      "Lateral ankle sprains account for the majority of the missed weeks we see. The landing mechanics after a jump smash are the usual culprit, but the underlying issue is single-leg control.",
      "The routine: calf raises to failure, single-leg balance with eyes closed, lateral hops with a two-second stick landing, and banded eversion work.",
      "Progress the hop distance only when you can stick the landing silently. Noise on landing means the ankle is absorbing force the hip should be taking.",
      "Athletes who complete this consistently through a season report noticeably fewer rolls and far more confidence pushing hard into the corners.",
    ],
  },
  {
    slug: "sports-life-open-2026-preview",
    title: "Sports Life Open 2026: draws, seeds and what to watch",
    category: "Tournament Updates",
    date: "2026-06-18",
    readTime: "4 min",
    excerpt:
      "Four days, six categories and the deepest under-17 field the tournament has ever hosted.",
    body: [
      "Entries close three weeks before the first serve and the under-17 boys' draw is already at capacity, with a qualifying round added for the first time.",
      "The open men's singles features two nationally ranked players returning from injury, which makes the bottom half of the draw genuinely unpredictable.",
      "Court 1 will run live streaming with match analytics on screen — rally length, smash counts and net-point conversion updated between games.",
      "Registration for all categories is handled through the tournaments page. Junior entries require an age-proof document at check-in.",
    ],
  },
  {
    slug: "deception-at-the-net",
    title: "Deception at the net without giving away your wrist",
    category: "Badminton Techniques",
    date: "2026-05-29",
    readTime: "6 min",
    excerpt:
      "Good deception is not a faster wrist. It is an identical preparation for three completely different shots.",
    body: [
      "Opponents read the net from your racket face, not your eyes. If the tumble and the lift look different at preparation, no amount of wrist speed saves you.",
      "Start by grooving one preparation position for the net kill, the tumble and the cross lift. Film it and check that the first sixty percent of the movement is identical.",
      "Only then add the late change. The deception lives in the final ten centimetres of racket travel, not in a big swing.",
      "Practise against a partner who calls the shot as they see it. When they start calling wrong more than half the time, the disguise is working.",
    ],
  },
  {
    slug: "building-a-training-week",
    title: "How to build a training week that does not burn you out",
    category: "Training Tips",
    date: "2026-05-11",
    readTime: "8 min",
    excerpt:
      "Five sessions of maximum intensity is not a plan. Here is how our coaches distribute load across seven days.",
    body: [
      "Every quality week has one clear hard day, one clear easy day, and everything else placed deliberately in between. Athletes who train hard every day plateau within two months.",
      "We structure the week around two high-intensity court sessions, two technical sessions at moderate load, one strength block, and one genuine rest day.",
      "The technical days are where skill actually gets built. Fatigue destroys motor learning, so we schedule them fresh rather than at the end of a brutal session.",
      "Track how you feel on a simple one-to-ten scale each morning. Three consecutive low scores means the week needs adjusting, not more discipline.",
    ],
  },
];
