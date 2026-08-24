export interface CoachProfile {
  slug: string;
  name: string;
  role: string;
  initials: string;
  image?: string;
  tagline: string;
  badge: string;
  experience: string;
  certifications: string;
  intro: string[];
  playingCareer: {
    summary: string;
    highlights: string[];
  };
  coachingExperience: {
    summary: string;
    notablePlayers?: { name: string; achievement: string }[];
    points?: string[];
  };
  philosophy: string;
  expertise: string[];
  qualifications?: string[];
  whyPlayersLove: {
    summary: string;
    points: string[];
  };
  ctaHeading: string;
  ctaText: string;
  motto: string;
}

export const COACH_PROFILES: Record<string, CoachProfile> = {
  "rahul-singh": {
    slug: "rahul-singh",
    name: "Rahul Singh",
    role: "Head Coach",
    initials: "RS",
    image: "/rahul-singh.jpg",
    tagline: "Developing Champions Through Experience, Discipline & Dedication",
    badge: "Former AITA Men's Top 35 · Head Coach",
    experience: "12+ Years Competitive & Coaching Experience",
    certifications: "National Level Coaching Specialist · AITA Experienced",
    intro: [
      "With years of competitive playing experience and a proven coaching record, Rahul Singh has established himself as one of the leading tennis coaches in Delhi. A former Top 35 AITA Men's player, Rahul combines his competitive background with a modern coaching approach to help players unlock their full potential.",
      "Throughout his coaching journey, Rahul has worked with players across all age groups and playing levels—from beginners taking their first steps in tennis to nationally ranked junior athletes competing at the highest level. His ability to understand each player's individual strengths and create structured development plans has helped numerous players achieve outstanding results.",
    ],
    playingCareer: {
      summary:
        "Rahul has represented himself in numerous national-level tournaments and built an impressive competitive career. These experiences allow him to share valuable insights into competitive tennis with every player he coaches.",
      highlights: [
        "AITA Men's Career Best Ranking: No. 35 in India",
        "Winner of multiple AITA Men's Singles & Doubles National Ranking Tournaments",
        "Gold Medalist – CBSE National Tennis Championship",
        "Bronze Medalist – National School Games (SGFI)",
        "Represented Delhi State in premier national competitive events",
      ],
    },
    coachingExperience: {
      summary:
        "As a coach, Rahul has successfully developed several nationally ranked players by focusing on strong technical fundamentals, tactical awareness, physical preparation, and match confidence. Along with these high-performance achievements, Rahul has coached numerous beginners, intermediate, advanced, and tournament players, helping each athlete progress according to their individual goals.",
      notablePlayers: [
        { name: "Tushar Mittal", achievement: "All India Rank 8 (Under-16)" },
        { name: "Deepam Malik", achievement: "All India Rank 13 (Under-16)" },
        { name: "Neelakshi Lather", achievement: "Top 20 All India (Under-14)" },
        { name: "Ayush", achievement: "Delhi Representative & SGFI National Silver Medalist" },
      ],
      points: [
        "Structured technical correction for forehand, backhand, and serve mechanics",
        "Tactical match-play simulation and situational pressure training",
        "Comprehensive tournament scheduling and ranking progression planning",
        "Confidence and mental resilience building for competitive matches",
      ],
    },
    philosophy:
      "Every player has unique potential. My role as a coach is to create an environment where players build strong fundamentals, develop confidence through disciplined training, and enjoy the process of continuous improvement. Success is not achieved overnight—it is built through consistency, hard work, and the right guidance.",
    expertise: [
      "Junior Player Development",
      "High Performance Coaching",
      "Technical Development",
      "Tactical Match Preparation",
      "Tournament Planning",
      "Beginner to Advanced Coaching",
      "Mental Preparation",
      "Match Strategy",
    ],
    whyPlayersLove: {
      summary:
        "Rahul believes that great coaching is built on trust, communication, and consistency. His approachable nature, disciplined coaching style, and commitment to every player's development create an environment where athletes feel motivated to learn, compete, and achieve their goals.",
      points: [
        "Patient, clear, and actionable feedback during every drill",
        "Individual attention given to every player's technical strengths and weaknesses",
        "High-energy training sessions that balance discipline with enjoyment",
        "Deep competitive insight gained from playing on the national tour",
      ],
    },
    ctaHeading: "Join Rahul Singh at Sports Life Tennis Academy",
    ctaText:
      "Train under one of Delhi's experienced tennis coaches and experience a structured player development program designed to help you improve, compete, and grow with confidence.",
    motto: "Train with Purpose. Compete with Confidence. Grow with Sports Life.",
  },

  "mukul-singh": {
    slug: "mukul-singh",
    name: "Mukul Singh",
    role: "Head Coach",
    initials: "MS",
    image: "/mukul-singh.jpg",
    tagline: "Developing High-Performance Players Through Experience, Discipline & Excellence",
    badge: "5x AITA National Winner · Head Coach",
    experience: "National & University Level Champion · Elite Coach",
    certifications: "High-Performance Player Development Specialist",
    intro: [
      "Mukul Singh is one of the Head Coaches at Sports Life Tennis Academy, bringing years of competitive playing experience and professional coaching expertise to the academy. As a former national-level player and accomplished coach, Mukul is passionate about helping players unlock their full potential through structured training, technical excellence, and a player-first approach.",
      "Having worked with beginners, recreational players, nationally ranked juniors, and internationally ranked athletes, Mukul believes that every player deserves individual attention, clear guidance, and an environment that inspires continuous improvement. His coaching philosophy combines strong technical fundamentals with tactical awareness, physical development, and mental resilience to prepare players for success both on and off the court.",
    ],
    playingCareer: {
      summary:
        "Mukul has enjoyed an outstanding competitive tennis career, representing Delhi at various prestigious tournaments and achieving success at national and university levels. These experiences provide Mukul with a deep understanding of competitive tennis and the dedication required to perform at the highest level.",
      highlights: [
        "Winner of 5 AITA National Ranking Tournaments (Under-16)",
        "Winner of the CBSE All India National Singles Championship",
        "Represented Delhi at National School Games & Secured Silver Medal",
        "Winner of the University of Delhi Inter-College Tennis Championship",
        "Multiple podium finishes at CBSE Zonal, DAV National & Inter-University tournaments",
      ],
    },
    coachingExperience: {
      summary:
        "Mukul has built an impressive coaching career by working with players across every stage of development—from complete beginners to high-performance athletes. He has previously coached national and international ranked players, guiding several athletes to Top-20 national rankings across U-14, U-16, and U-18 categories.",
      points: [
        "High-performance squad training tailored for national tournament circuits",
        "Modern biomechanics and footwork agility drills for court coverage",
        "Specialized match analysis and real-time tactical adjustments",
        "Proven track record of mentoring junior players into Top-20 national rankings",
      ],
    },
    philosophy:
      "Success in tennis is built through discipline, consistency, and a willingness to keep learning every day. My goal is to create an environment where every player enjoys the process of improvement while developing the skills, mindset, and confidence required to perform at their best.",
    expertise: [
      "High-Performance Player Development",
      "Professional Tennis Coaching",
      "Junior Development",
      "Technical Stroke Development",
      "Tactical Match Preparation",
      "Tournament Planning",
      "Footwork & Movement Training",
      "Match Strategy",
      "Beginner to Advanced Coaching",
      "Mental Preparation for Competition",
    ],
    whyPlayersLove: {
      summary:
        "Mukul is known for his calm personality, positive attitude, and ability to build strong relationships with players. His sessions are energetic, disciplined, and focused on continuous improvement. Players appreciate his attention to detail, personalized coaching approach, and commitment to helping them achieve both their short-term and long-term goals.",
      points: [
        "Calm, motivating demeanor that instills confidence in players under pressure",
        "Meticulous attention to biomechanics, grip adjustments, and swing path",
        "Dynamic footwork drills that translate directly into tournament match play",
        "Equal dedication towards young beginners and elite national competitors",
      ],
    },
    ctaHeading: "Join Mukul Singh at Sports Life Tennis Academy",
    ctaText:
      "Train with a coach who combines national-level playing experience, professional coaching expertise, and a passion for developing complete athletes. Whether your goal is to learn tennis, compete at the highest level, or take your game to the next stage, Mukul is committed to helping you achieve your full potential.",
    motto: "Develop Your Skills. Build Your Confidence. Achieve Your Potential with Sports Life Tennis Academy.",
  },

  "samriti-punyani": {
    slug: "samriti-punyani",
    name: "Samriti Punyani",
    role: "Head Coach",
    initials: "SP",
    image: "/samriti-punyani.jpg",
    tagline: "Empowering Players Through Excellence, Education & Experience",
    badge: "PTR Certified · NIS Qualified Coach · M.P.Ed. · Former AIR 21",
    experience: "14+ Years Competitive & Coaching Journey",
    certifications: "NIS Bengaluru (PGDSC) · NIS Patiala · M.P.Ed. · B.P.Ed. · PTR",
    intro: [
      "Samriti Punyani is one of the Head Coaches at Sports Life Tennis Academy and brings together the experience of a national-level player, a qualified sports coach, and a passionate mentor. With over 14 years of experience in competitive tennis, she has represented India at state, national, and international events while dedicating herself to developing the next generation of tennis players.",
      "As an NIS-qualified coach with advanced degrees in physical education, Samriti believes that great coaching is about much more than teaching strokes. Her focus is on building technically sound players, developing confidence, nurturing discipline, and creating an environment where every athlete can grow both on and off the court.",
    ],
    playingCareer: {
      summary:
        "Samriti has enjoyed an exceptional competitive tennis journey, consistently performing at national and university-level championships across India. Her competitive experience allows her to guide aspiring players with practical insights gained through years of competing at the highest levels.",
      highlights: [
        "Achieved an All India Ranking of No. 21 in Women's Tennis",
        "Represented Punjabi University, Patiala at the Khelo India University Games (2020)",
        "Bronze Medalist – Delhi Olympics (2019)",
        "Gold Medalist – All India University Tennis Championship (2018)",
        "Gold Medalist – All India University Tennis Championship (2019)",
        "Multiple medals at All India Inter-University Championships",
        "Multiple Gold & Silver Medals at National School Games representing Delhi",
      ],
    },
    coachingExperience: {
      summary:
        "Samriti brings a deeply scientific, biomechanical, and long-term athlete development (LTAD) approach to coaching. She combines rigorous physical conditioning principles with personalized stroke development.",
      points: [
        "Long-Term Athlete Development (LTAD) framework for juniors and competitive players",
        "Specialized leadership in Women's tennis coaching and empowerment",
        "Scientific physical fitness, agility, and injury prevention routines",
        "Holistic player mentorship focusing on technical precision and mental strength",
      ],
    },
    philosophy:
      "Every player learns differently. My role is to create a positive, supportive, and disciplined environment where players enjoy the game, build confidence, and continuously strive to become better athletes and better individuals.",
    expertise: [
      "Junior Player Development",
      "Women's Tennis Coaching",
      "Technical Development",
      "Match Preparation",
      "Beginner to Advanced Coaching",
      "Individual & Group Training",
      "Tennis Clinics & Camps",
      "Long-Term Athlete Development",
      "Mental Confidence & Motivation",
    ],
    qualifications: [
      "Professional Tennis Registry (PTR) – International Coach Certification",
      "National Institute of Sports (NIS), Bengaluru – Post Graduate Diploma in Sports Coaching (Tennis)",
      "National Institute of Sports (NIS), Patiala – Sports Coaching Certification",
      "Master of Physical Education (M.P.Ed.)",
      "Bachelor of Physical Education (B.P.Ed.)",
      "Bachelor of Commerce (B.Com.)",
    ],
    whyPlayersLove: {
      summary:
        "Samriti is known for her patient approach, excellent communication skills, and ability to motivate players of every age. She believes in creating an enjoyable yet disciplined atmosphere where players develop confidence, technical excellence, and a lifelong passion for tennis.",
      points: [
        "Patient, encouraging mentorship that creates a safe, motivating space to learn",
        "Scientific approach combining physical education, fitness, and tennis biomechanics",
        "Strong focus on long-term growth and personal development beyond the court",
        "Deep inspiration for female student-athletes and young junior players across Delhi",
      ],
    },
    ctaHeading: "Join Samriti Punyani at Sports Life Tennis Academy",
    ctaText:
      "Train with a coach who combines national-level competitive experience, advanced coaching education, and a passion for player development. Whether you're taking your first steps in tennis or preparing for competitive tournaments, Samriti is committed to helping every player achieve their full potential.",
    motto: "Inspire. Develop. Achieve. Grow with Sports Life Tennis Academy.",
  },
};
