import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import styles from './Cegep.module.css';

export const Cegep = () => {
  const [searchSkill, setSearchSkill] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [selectedSemester, setSelectedSemester] = useState('all');

  const semesters = ['all', 'semester1', 'semester2', 'semester3', 'semester4', 'semester5', 'semester6'];
  
  const courseDescriptions = {
    "Mathematics For Computer Science": "Covers discrete mathematics, logic, proofs, and mathematical reasoning essential for computer science.",
    "Computing/IT Fundamentals": "Introduction to computer hardware, software, and basic IT concepts.",
    "Object Oriented Programming with Java 1": "Basic programming concepts using Java, including classes, objects, and inheritance.",
    "User Experience/Web Interface": "Principles of UI/UX design and implementation of web interfaces using HTML and CSS.",
    "Web Programming and JS Libraries": "Advanced web development using JavaScript and modern frameworks.",
    "Object Oriented Programming with Java 2": "Advanced Java programming concepts and design patterns.",
    "Operating Systems using Linux": "Linux system administration and operating system concepts.",
    "Config, Mng and Maint": "Computer systems configuration, management, and maintenance procedures.",
    "Project Management with QM": "Software project management methodologies and quality management.",
    "Database Design Intro SQL": "Database design principles and SQL programming.",
    "Networking and Security": "Computer networking fundamentals and security protocols.",
    ".Net Development": "Building applications using C# and .NET framework.",
    "Java Web Programming": "Server-side web development using Java technologies.",
    "Intro to IOT and EMB System": "Introduction to Internet of Things and embedded systems.",
    "Web development with PHP": "Server-side web development using PHP.",
    "System Analysis and Design": "Software system analysis and design methodologies.",
    "Mobile Application Dev": "Android mobile application development using Kotlin.",
    "Game Development": "Game development principles using Unity and C#.",
    "Web Services and Dist Comp": "Distributed computing and web services architecture.",
    "Database Admin and Security": "Database administration and security practices.",
    "Mobile Application Development 2: IOS": "iOS mobile application development using Swift.",
    "Final Project 1": "First phase of capstone project implementation.",
    "Azure for SQL Developers": "Cloud database management using Azure SQL.",
    "IoT: Design and Prototyping": "Advanced IoT development and prototyping.",
    "Professional Integration": "Professional development and industry integration.",
    "Final Project 2": "Final phase of capstone project implementation.",
    "Internship (Field Experience)": "Practical industry experience through internship.",
    "Managing Big Data": "Big data management and analysis techniques.",
    "Comprehensive Assessment": "Final program assessment and evaluation."
  };

  const courseSkills = {
    "Mathematics For Computer Science": ["Math", "Logic", "Problem Solving"],
    "Computing/IT Fundamentals": ["Computer Basics", "Hardware", "Software"],
    "Object Oriented Programming with Java 1": ["Java", "OOP", "Programming"],
    "User Experience/Web Interface": ["HTML", "CSS", "UI/UX"],
    "Web Programming and JS Libraries": ["JavaScript", "Web Development", "Frontend"],
    "Object Oriented Programming with Java 2": ["Java", "OOP", "Advanced Programming"],
    "Operating Systems using Linux": ["Linux", "Command Line", "Operating Systems"],
    "Config, Mng and Maint": ["Hardware", "Computer Systems", "Maintenance"],
    "Project Management with QM": ["Project Management", "Team Work", "Documentation"],
    "Database Design Intro SQL": ["SQL", "Database", "Data Management"],
    "Networking and Security": ["Networking", "Security", "Protocols"],
    ".Net Development": ["C#", ".NET", "Backend"],
    "Java Web Programming": ["Java", "Web Development", "Backend"],
    "Intro to IOT and EMB System": ["IoT", "Arduino", "Hardware"],
    "Web development with PHP": ["PHP", "Web Development", "Backend"],
    "System Analysis and Design": ["System Design", "Analysis", "Architecture"],
    "Mobile Application Dev": ["Mobile", "Android", "Kotlin"],
    "Game Development": ["Unity", "C#", "Game Design"],
    "Web Services and Dist Comp": ["Microservices", "API", "Distributed Systems"],
    "Database Admin and Security": ["Database", "Security", "Administration"],
    "Mobile Application Development 2: IOS": ["iOS", "Swift", "Mobile"],
    "Final Project 1": ["Project Management", "Development", "Team Work"],
    "Azure for SQL Developers": ["Azure", "Cloud", "SQL"],
    "IoT: Design and Prototyping": ["IoT", "Python", "Hardware"],
    "Professional Integration": ["Professional Skills", "Career Development"],
    "Final Project 2": ["Project Management", "Development", "Team Work"],
    "Internship (Field Experience)": ["Professional Experience", "Industry Work"],
    "Managing Big Data": ["Big Data", "Data Analysis", "PySpark"],
    "Comprehensive Assessment": ["Evaluation", "Assessment"]
  };


  const Cegep = {
    semester1: [
      {
        name: "Mathematics For Computer Science",
        code: "201-N11-LA",
        teacher: "Brendan Cordy"
      },
      {
        name: "Computing/IT Fundamentals",
        code: "420-N11-LA",
        teacher: "Lucia Eve Berger"
      },
      {
        name: "Object Oriented Programming with Java 1",
        code: "420-N12-LA",
        teacher: "Ishtiaq Shahriar"
      },
      {
        name: "User Experience/Web Interface",
        code: "420-N13-LA",
        teacher: "Jennifer Liutec"
      }
    ],
    semester2: [
      {
        name: "Web Programming and JS Libraries",
        code: "420-N24-LA",
        teacher: "Elaheh Mozaffari"
      },
      {
        name: "Object Oriented Programming with Java 2",
        code: "420-N22-LA",
        teacher: "Ishtiaq Shariar"
      },
      {
        name: "Operating Systems using Linux",
        code: "420-N23-LA",
        teacher: "Brendan Wood"
      },
      {
        name: "Config, Mng and Maint",
        code: "420-N21-LA",
        teacher: "Robert Bierman"
      },
      {
        name: "Project Management with QM",
        code: "420-N25-LA",
        teacher: "Jennifer Liutec"
      }
    ],
    semester3: [
      {
        name: "Database Design Intro SQL",
        code: "420-N31-LA",
        teacher: "Robert Bierman"
      },
      {
        name: "Networking and Security",
        code: "420-N32-LA",
        teacher: "Brendan Wood"
      },
      {
        name: ".Net Development",
        code: "420-N33-LA",
        teacher: "Brendan Wood"
      },
      {
        name: "Java Web Programming",
        code: "430-N34-LA",
        teacher: "Reza Mirsalari"
      },
      {
        name: "Intro to IOT and EMB System",
        code: "420-N35-LA",
        teacher: "Elaheh Mozaffari"
      }
    ],
    semester4: [
      {
        name: "Web development with PHP",
        code: "420-N41-LA",
        teacher: "Laura Marianella Zapata Aspiazu"
      },
      {
        name: "System Analysis and Design",
        code: "420-N42-LA",
        teacher: "Reza Mirsalari"
      },
      {
        name: "Mobile Application Dev",
        code: "420-N43-LA",
        teacher: "Istiaque Shariar"
      },
      {
        name: "Game Development",
        code: "420-N44-LA",
        teacher: "Brendan Wood"
      },
      {
        name: "Web Services and Dist Comp",
        code: "420-N45-LA",
        teacher: "Christine Gerard"
      }
    ],
    semester5: [
      {
        name: "Database Admin and Security",
        code: "420-N51-LA",
        teacher: "Kawser Nafi"
      },
      {
        name: "Mobile Application Development 2: IOS",
        code: "420-N52-LA",
        teacher: "Robert Connolly"
      },
      {
        name: "Final Project 1",
        code: "420-N53-LA",
        teacher: "Bahman Zamani"
      },
      {
        name: "Azure for SQL Developers",
        code: "420-N54-LA",
        teacher: "Reza Mirsalari"
      },
      {
        name: "IoT: Design and Prototyping",
        code: "420-N55-LA",
        teacher: "Brendan Wood/Haikel Hichiri"
      },
      {
        name: "Professional Integration",
        code: "420-N56-LA",
        teacher: "Amin Ranj Bar"
      }
    ],
    semester6: [
      {
        name: "Final Project 2",
        code: "420-N61-LA",
        teacher: "Bahman Zamani"
      },
      {
        name: "Internship (Field Experience)",
        code: "420-M62-LA",
        teacher: "Amin Ranj Bar"
      },
      {
        name: "Managing Big Data",
        code: "420-M63-LA",
        teacher: "Kawser Nafi"
      },
      {
        name: "Comprehensive Assessment",
        code: "420-M64-LA",
        teacher: "Amin Ranj Bar"
      }
    ]
  };
  const getAllSkills = () => {
    const skillSet = new Set();
    Object.values(courseSkills).forEach(skills => {
      skills.forEach(skill => skillSet.add(skill));
    });
    return Array.from(skillSet).sort();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    setSearchSkill(e.target.value);
  };

  const handleSkillClick = (skill) => {
    setSearchSkill(skill);
    setIsDropdownOpen(false);
  };

  const filterCourses = (courses) => {
    if (!searchSkill) return courses;
    return courses.filter(course => {
      const skills = courseSkills[course.name] || [];
      return skills.some(skill => 
        skill.toLowerCase().includes(searchSkill.toLowerCase())
      );
    });
  };
  const getFilteredSkills = () => {
    const allSkills = getAllSkills();
    if (!searchSkill) return allSkills;
    return allSkills.filter(skill => 
      skill.toLowerCase().includes(searchSkill.toLowerCase())
    );
  };

  return (
    <div className={styles.container}>
      <a href="/extra/class" className={styles.backLink}>
        <ArrowLeft className={styles.backIcon} />
        Back to Education
      </a>
      
      <h1 className={styles.mainTitle}>Computer Science Technology Cegep</h1>    
      <select 
  value={selectedSemester} 
  onChange={(e) => setSelectedSemester(e.target.value)}
  className={styles.semesterSelect}
>
  <option value="all">Search by Semesters</option>
  <option value="semester1">Semester 1</option>
  <option value="semester2">Semester 2</option>
  <option value="semester3">Semester 3</option>
  <option value="semester4">Semester 4</option>
  <option value="semester5">Semester 5</option>
  <option value="semester6">Semester 6</option>
</select>
      
      <div className={styles.searchContainer} ref={dropdownRef}>
        <div className={styles.searchWrapper}>
          <Search className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search by skills (e.g. Java, Python, Web Development)..."
            value={searchSkill}
            onChange={handleSearch}
            onFocus={() => setIsDropdownOpen(true)}
            className={styles.searchInput}
          />
        </div>
        
        {(isDropdownOpen || searchSkill) && (
          <div className={styles.dropdown}>
            {getFilteredSkills().map((skill, index) => (
              <button
                key={index}
                onClick={() => handleSkillClick(skill)}
                className={styles.dropdownItem}
              >
                {skill}
              </button>
            ))}
          </div>
        )}
      </div>
      
  

{Object.entries(Cegep)
  .filter(([semester]) => selectedSemester === 'all' || semester === selectedSemester)
  .map(([semester, semesterCegep]) => {
    const filteredCourses = filterCourses(semesterCegep);
    if (filteredCourses.length === 0) return null;
        
        return (
          <div key={semester} className={styles.semesterSection}>
            <h2 className={styles.semesterTitle}>
              {semester.charAt(0).toUpperCase() + semester.slice(1).replace(/(\d+)/, ' $1')}
            </h2>
            <div className={styles.courseGrid}>
              {filteredCourses.map((course, index) => (
                <div key={index} className={styles.courseCard}>
                  <div>
                    <h3 className={styles.courseName}>{course.name}</h3>
                    <p className={styles.courseCode}>{course.code}</p>
                    <p className={styles.courseDescription}>
                    {courseDescriptions[course.name]}
                    </p>
                    <div className={styles.skillTags}>
                      {courseSkills[course.name]?.map((skill, i) => (
                        <span key={i} className={styles.skillTag}>
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className={styles.teacherInfo}>
                      <p className={styles.teacherLabel}>Teacher:</p>
                      <p className={styles.teacherName}>{course.teacher}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cegep;