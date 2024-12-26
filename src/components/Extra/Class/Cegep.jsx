import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import styles from './Cegep.module.css';

export const Cegep = () => {
  const [searchSkill, setSearchSkill] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  return (
    <div className={styles.container}>
      <a href="/class" className={styles.backLink}>
        <ArrowLeft className={styles.backIcon} />
        Back to Education
      </a>
      
      <h1 className={styles.mainTitle}>Computer Science Technology Cegep</h1>
      
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
        
        {isDropdownOpen && (
          <div className={styles.dropdown}>
            {getAllSkills().map((skill, index) => (
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
      
      {Object.entries(Cegep).map(([semester, semesterCegep]) => {
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