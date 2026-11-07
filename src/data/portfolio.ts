export const PORTFOLIO_DATA = {
  personal: {
    name: "DEBABRATA SAHU",
    role: "Aspiring VLSI Researcher & Digital Hardware Designer",
    degree: "B.Tech in Electronics & Communication Engineering",
    university: "NIST University",
    cgpa: "7.7/10",
    email: "debabratasahu05112003@gmail.com",
    linkedin: "https://www.linkedin.com/in/debabrata-sahu-05ad112003/",
    github: "https://github.com/debabratasahu567-cpu",
    resume: "/debabrata_cv.pdf",
    shortBio: "I explore efficient digital hardware architectures through RTL design, FPGA implementation, and VLSI-oriented research.",
    secondBio: "My work spans digital IC design, computer arithmetic, approximate computing, FPGA-based systems, and mixed-signal IC design.",
    aboutHeading: "ABOUT ME",
    aboutBody: "My interest in electronics began with fundamental logic and quickly evolved toward digital hardware design, RTL architectures, FPGA implementation, and VLSI.\n\nI explore Verilog-based RTL design, arithmetic architectures, and the trade-offs between hardware complexity, performance, and precision. This has led me to projects involving floating-point FMA architectures, approximate computing, and mixed-signal IC design.\n\nUltimately, my goal is to pursue a Master's degree in VLSI, digital IC design, and hardware-efficient computing."
  },
  stats: [
    { value: "VLSI & FPGA", label: "Primary Technical Focus" },
    { value: "Research + Internships", label: "Academic & Industry Exposure" },
    { value: "B.Tech ECE", label: "NIST University" }
  ],
  researchInterests: [
    {
      title: "DIGITAL IC DESIGN",
      description: "Design and implementation of efficient digital circuits and architectures for modern computing systems."
    },
    {
      title: "VLSI & HARDWARE ARCHITECTURES",
      description: "Exploring area-, performance-, and resource-efficient hardware architectures."
    },
    {
      title: "COMPUTER ARITHMETIC",
      description: "Interest in floating-point arithmetic, FMA architectures, arithmetic datapaths, and computational hardware."
    },
    {
      title: "APPROXIMATE COMPUTING",
      description: "Exploring the trade-offs between accuracy, area, power, and performance in approximate arithmetic circuits."
    },
    {
      title: "FPGA-BASED COMPUTING",
      description: "RTL implementation, FPGA synthesis, simulation, hardware evaluation, and architecture exploration."
    },
    {
      title: "EDA & DESIGN METHODOLOGIES",
      description: "Interest in RTL synthesis, optimization, verification, circuit simulation, and VLSI design methodologies."
    }
  ],
  projects: [
    {
      id: "01",
      title: "CONFIGURABLE FLOATING-POINT FMA UNIT",
      subtitle: "Mixed-Precision Arithmetic Architecture",
      category: "RTL DESIGN / FPGA / COMPUTER ARITHMETIC",
      image: "/projects/fma-unit.jpeg?v=2",
      description: "Designed a configurable floating-point fused multiply-add (FMA) architecture supporting mixed-precision computation. The design was implemented using Verilog HDL and evaluated using Xilinx Vivado, with emphasis on arithmetic correctness, configurability, and hardware implementation.",
      technologies: ["Verilog HDL", "Xilinx Vivado", "XSim", "RTL Design", "FPGA"],
      focus: ["Floating-point arithmetic", "Mixed-precision computation", "RTL architecture", "FPGA implementation", "Hardware optimization"],
      architecture: [
        "Input Operands", "Floating-Point Processing", "Multiplication", "Exponent Alignment", "Addition", "Normalization", "Rounding", "Output"
      ],



    },
    {
      id: "02",
      title: "APPROXIMATE MULTIPLIER",
      subtitle: "Hardware-Efficient Arithmetic for AI Applications",
      category: "VLSI / APPROXIMATE COMPUTING",
      image: "/projects/approximatemultiplier.png?v=2",
      description: "Designed an approximate multiplier architecture using inexact compressor logic for hardware-efficient arithmetic in AI-oriented applications. The design focuses on reducing hardware complexity and computational overhead while maintaining an acceptable level of multiplication accuracy.",
      technologies: ["Verilog HDL", "Xilinx Vivado", "XSim", "RTL Design", "FPGA"],
      architecture: [
        "Input Operands", "Partial Product Generation", "Approximate Compressor Tree", "Sum & Carry Generation", "Final Addition", "Output Product", "Error Analysis"
      ],
      focus: [
        "Approximate computing",
        "Digital multiplier architecture",
        "Inexact compressor design"
      ],
      evaluation: true,



    },
    {
      id: "03",
      title: "12-BIT DIGITAL-TO-ANALOG CONVERTER",
      subtitle: "Digital Signal to Analog Conversion Architecture",
      category: "MIXED-SIGNAL IC DESIGN",
      image: "/projects/12bitdigitaltoanalogconverter.jpeg?v=2",
      description: "Designed a 12-bit digital-to-analog conversion architecture to convert digital input values into corresponding analog voltage levels. The design focuses on digital signal representation, conversion accuracy, and understanding the fundamental principles of DAC architecture and signal generation.",
      technologies: ["Verilog HDL", "Xilinx Vivado", "XSim", "RTL Design", "FPGA"],
      architecture: [
        "12-Bit Digital Input", "Binary Data Processing", "Digital Value Mapping", "DAC Conversion", "Analog Voltage Generation", "Output Signal", "Simulation & Verification"
      ],
      focus: [
        "Digital-to-analog conversion",
        "12-bit resolution",
        "Digital signal processing",
        "RTL architecture",
        "FPGA-based design"
      ],



    },
    {
      id: "04",
      title: "TERAHERTZ METAMATERIAL ABSORBER-BASED SKIN CANCER DETECTION SYSTEM",
      subtitle: "Metamaterial-Based Biomedical Sensing Architecture",
      category: "ELECTROMAGNETIC DESIGN / CST / BIOMEDICAL APPLICATIONS",
      image: "/projects/terahertz.jpeg?v=2",
      description: "Designed and simulated a terahertz metamaterial absorber structure for distinguishing normal and cancerous skin tissues through their electromagnetic response. The architecture utilizes resonant absorption characteristics and analyzes frequency shifts to explore non-invasive biomedical sensing applications.",
      technologies: ["CST Studio Suite", "Electromagnetic Simulation", "Metamaterials", "Graphene", "Terahertz Technology"],
      architecture: [
        "Terahertz Wave Excitation", "Metamaterial Structure", "Electromagnetic Interaction", "Tissue Sample Integration", "Resonance Analysis", "Absorption Measurement", "Frequency Shift Analysis"
      ],
      focus: [
        "Terahertz technology",
        "Metamaterial absorber design",
        "Electromagnetic simulation",
        "Biomedical sensing",
        "Resonance optimization"
      ],



    },
    {
      id: "05",
      title: "DECENTRALIZED NETWORKS",
      subtitle: "Distributed Communication and Network Architecture",
      category: "DECENTRALIZED SYSTEMS / NETWORKS",
      image: "/projects/decentralized.png?v=2",
      description: "Explored decentralized network architectures that enable distributed communication and information exchange without relying on a centralized authority. The concept focuses on peer-to-peer connectivity, distributed data management, network reliability, and understanding decentralized communication models.",
      technologies: ["Computer Networks", "Distributed Systems", "Peer-to-Peer Networks", "Network Architecture"],
      architecture: [
        "Distributed Nodes", "Peer Discovery", "Node Authentication", "Peer-to-Peer Communication", "Data Exchange", "Distributed Processing", "Network Synchronization"
      ],
      focus: [
        "Decentralized architecture",
        "Peer-to-peer networking",
        "Distributed systems",
        "Network communication",
        "Data management"
      ],



    },
    {
      id: "06",
      title: "IoT-BASED MINING WORKER SAFETY HELMET",
      subtitle: "Real-Time Health and Environmental Monitoring System",
      category: "EMBEDDED / IoT",
      image: "/projects/smartmining.png?v=2",
      description: "Developed an IoT-based mining worker safety helmet integrating multiple sensors to monitor environmental conditions and worker health parameters. The system uses ESP32 for real-time data processing, cloud-based monitoring, and alert generation to improve safety in mining environments.",
      technologies: ["ESP32", "Arduino IDE", "ThingSpeak", "Blynk", "Pulse Sensor", "DHT11", "MQ-2 Gas Sensor", "LCD"],
      architecture: [
        "Sensor Data Acquisition", "Temperature & Humidity Monitoring", "Gas Concentration Detection", "Worker Pulse Monitoring", "ESP32 Data Processing", "Threshold Evaluation", "Buzzer & LED Alerts", "Cloud Data Monitoring"
      ],
      focus: [
        "Internet of Things (IoT)",
        "Embedded system design",
        "Health parameter monitoring",
        "Environmental sensing",
        "Real-time safety alerts"
      ],



    },
    {
      id: "07",
      title: "SMART AGRICULTURE MONITORING SYSTEM",
      subtitle: "Intelligent Soil and Environmental Monitoring Architecture",
      category: "EMBEDDED / IoT",
      image: "/projects/smartgreenhouse.png?v=2",
      description: "Developed an IoT-based smart agriculture monitoring system integrating multiple sensors to monitor soil moisture and environmental conditions. The system focuses on real-time data acquisition, environmental analysis, and intelligent monitoring to support efficient agricultural management and improved farming practices.",
      technologies: ["Arduino IDE", "ESP32", "Soil Moisture Sensor", "DHT11", "MQ-2 Gas Sensor", "IR Sensor", "Rain Sensor"],
      architecture: [
        "Sensor Data Acquisition", "Soil Moisture Monitoring", "Temperature & Humidity Monitoring", "Gas Detection", "Rainfall Detection", "ESP32 Data Processing", "Condition Evaluation", "Monitoring & Alerts"
      ],
      focus: [
        "Smart agriculture",
        "IoT-based monitoring",
        "Sensor integration",
        "Environmental monitoring",
        "Embedded system design"
      ],



    }
  ],
  experience: [
    {
      title: "RESEARCH INTERN — NIT JAMSHEDPUR",
      project: "Terahertz Metamaterial Absorber-Based Skin Cancer Detection System",
      date: "18 May 2026 – 18 June 2026",
      image: "/experience/nit-jamshedpur.jpg?v=2",
      description: "Completed a research internship at NIT Jamshedpur focused on the design and investigation of a terahertz metamaterial absorber for skin cancer detection applications.",
      details: [
        "Designed and modeled metamaterial structures.",
        "Performed electromagnetic simulations using CST Studio Suite.",
        "Analyzed S-parameters and absorption characteristics.",
        "Investigated resonance-frequency behavior.",
        "Studied the response of the absorber for different tissue conditions.",
        "Explored metamaterial-based sensing for biomedical applications."
      ]
    },
    {
      title: "FACULTY DEVELOPMENT PROGRAM — FPGA-BASED COMMUNICATION SYSTEM DESIGN",
      project: "FCSD-2026 | Electronics & ICT Academy, NIT Patna & NIT Jamshedpur",
      date: "25 May 2026 – 5 June 2026",
      image: "/experience/fcsd-2026.jpg?v=2",
      description: "Completed the Faculty Development Program on “FPGA-Based Communication System Design (FCSD-2026)”, jointly organized by Electronics & ICT Academy, NIT Patna and NIT Jamshedpur under the Ministry of Electronics and Information Technology (MeitY), Government of India.",
      details: [
        "FPGA-based system design",
        "Digital communication systems",
        "Hardware implementation",
        "FPGA architecture and development"
      ]
    },
    {
      title: "VLSI PROJECT-BASED INTERN — EDXCELLENCE",
      project: "",
      date: "20 January 2026 – 18 March 2026",
      image: "/experience/edxcellence-vlsi.jpg?v=2",
      description: "Completed a project-based internship in Very-Large-Scale Integration (VLSI) with EdXcellence, an AICTE- and APSCHE-approved organization.",
      details: [
        "VLSI design concepts",
        "Digital hardware design",
        "RTL-based design",
        "Project-oriented hardware implementation"
      ]
    },
    {
      title: "GETTING STARTED WITH ARTIFICIAL INTELLIGENCE",
      project: "IBM SkillsBuild",
      date: "27 February 2026",
      image: "",
      description: "Completed introductory training in artificial intelligence concepts and applications through IBM SkillsBuild.",
      details: []
    },
    {
      title: "ELECTRONICS & TELECOMMUNICATION INTERN — CENTRAL COALFIELDS LIMITED",
      project: "Smart Greenhouse Monitoring System | Ranchi, Jharkhand",
      date: "01 June 2025 – 30 June 2025",
      image: "/experience/central-coalfields.jpg?v=2",
      description: "Completed an internship in the Department of Electronics & Telecommunication (E&T) at Central Coalfields Limited, Ranchi, where I worked on a Smart Greenhouse Monitoring System.",
      details: [
        "Sensor interfacing",
        "Environmental monitoring",
        "Microcontroller-based systems",
        "IoT-based monitoring",
        "Hardware implementation and debugging"
      ]
    },
    {
      title: "MATLAB & ENGINEERING APPLICATIONS TRAINING",
      project: "NIST University, Berhampur",
      date: "12 July 2024 – 1 August 2024",
      image: "/experience/matlab-training.jpg?v=2",
      description: "Completed practical training in MATLAB and its applications in engineering, developing foundational skills in numerical computation, analysis, simulation, and engineering problem-solving.",
      details: []
    }
  ],
  education: [
    {
      degree: "B.TECH IN ELECTRONICS & COMMUNICATION ENGINEERING",
      university: "NIST University, Berhampur, India",
      date: "2023 – 2027",
      cgpa: "CGPA: 7.7/10",
      description: "Currently pursuing a Bachelor of Technology in Electronics & Communication Engineering, with an academic and project focus on digital electronics, RTL design, FPGA-based systems, VLSI, computer arithmetic, and hardware architectures.",
      details: [
        "Digital Electronics",
        "VLSI Design",
        "Microprocessors & Microcontrollers",
        "Analog & Digital Communication",
        "Computer Architecture",
        "Embedded Systems",
        "Signal Processing",
        "Electronic Devices & Circuits"
      ]
    },
    {
      degree: "INTERMEDIATE — SCIENCE",
      university: "Government Autonomous College, Rourkela, India",
      date: "2020 – 2022",
      cgpa: "70%",
      description: "Completed higher secondary education in the Science stream, building a foundation in physics, chemistry, mathematics, and scientific problem-solving.",
      details: []
    },
    {
      degree: "MATRICULATION",
      university: "Indo English School, Rourkela, India",
      date: "Completed: 2020",
      cgpa: "82.5%",
      description: "Completed secondary education with a foundation in mathematics, science, and analytical learning.",
      details: []
    }
  ],
  courses: [
    {
      title: "FPGA-BASED COMMUNICATION SYSTEM DESIGN (FCSD-2026)",
      organization: "Electronics & ICT Academy, NIT Patna & NIT Jamshedpur",
      date: "25 May 2026 – 5 June 2026",
      description: "Faculty Development Program focused on FPGA-based communication system design and hardware implementation."
    },
    {
      title: "GETTING STARTED WITH ARTIFICIAL INTELLIGENCE",
      organization: "IBM SkillsBuild",
      date: "Issued: 27 February 2026",
      description: "Completed foundational training covering fundamental concepts and applications of Artificial Intelligence."
    },
    {
      title: "MATLAB AND ITS APPLICATIONS IN ENGINEERING",
      organization: "NIST University, Berhampur",
      date: "12 July 2024 – 1 August 2024",
      description: "Completed practical training in MATLAB and its applications in engineering, including numerical analysis, simulation, and computational problem-solving."
    }
  ],
  skills: [
    {
      group: "HDL & PROGRAMMING",
      items: ["Verilog HDL", "C", "Python", "MATLAB", "8086 Assembly Language", "HTML"]
    },
    {
      group: "VLSI, EDA & SIMULATION",
      items: ["Cadence Virtuoso", "Xilinx Vivado", "EDA Playground", "TCAD"]
    },
    {
      group: "DIGITAL HARDWARE DESIGN",
      items: ["Digital VLSI Design", "RTL Design", "RTL Verification", "Computer Arithmetic", "Digital Logic Design", "Hardware Architecture"]
    },
    {
      group: "EMBEDDED SYSTEMS & IoT",
      items: ["Embedded Systems", "Arduino", "ESP32", "Microcontrollers", "Sensor Interfacing", "IoT", "Hardware Debugging"]
    },
    {
      group: "DEVELOPMENT TOOLS",
      items: ["VS Code", "Arduino IDE", "Code Composer Studio", "ThingSpeak"]
    },
    {
      group: "MACHINE LEARNING",
      items: ["Basic Machine Learning", "Python-based ML"]
    }
  ],
  careerPath: [
    "VLSI & DIGITAL HARDWARE",
    "Digital IC Design",
    "Computer Arithmetic",
    "Hardware Architectures",
    "Approximate Computing",
    "FPGA Computing",
    "EDA & Optimization"
  ],
  careerPathDesc: "My undergraduate projects have progressively moved from digital logic and embedded systems toward RTL architectures, arithmetic hardware, FPGA implementation, and VLSI-oriented design.\n\nThrough projects such as the configurable floating-point FMA, approximate multiplier, and 12-bit DAC, I have developed an interest in understanding how hardware architectures can be designed for improved performance, reduced resource utilization, and efficient computation.\n\nMy research internship in terahertz metamaterial-based sensing further introduced me to simulation-driven research, technical analysis, and structured problem-solving.\n\nI now aim to deepen this foundation through a Master's degree, with particular interest in VLSI, digital IC design, computer arithmetic, approximate computing, FPGA-based hardware, and EDA methodologies.",
  workshops: [
    {
      title: "Tech Spark– IoT Workshop",
      date: "18–19 September 2026",
      description: "Served on the organizing team for a two-day hands-on IoT workshop through the Renewable Energy Club, focusing on practical applications of IoT, sensors, and embedded technologies.",
    },
    {
      title: "SensoTech– Hands-on Electronics Workshop",
      date: "11–12 April 2025",
      description: "Served on the organizing team for a two-day hands-on workshop through the Renewable Energy Club covering sensors, microcontrollers, project building, and practical applications of electronics.",
    },
    {
      title: "Tinker to Tech– Project Building Workshop",
      date: "26–27 August 2024",
      description: "Participated in a two-day hands-on workshop organized by the Renewable Energy Club in collaboration with the IEEE Student Branch, NIST University, covering sensors, microcontrollers, and basic electronics project development.",
    }
  ],
  extracurricular: [
    {
      title: "NBC — NIST BASKETBALL CLUB",
      role: "Player",
      institution: "NIST University, Berhampur",
      date: "11 October 2023 – Present",
      description: "Active basketball player representing the university club.",
      details: [
        "Participating in team practices, matches, and university-level sporting activities.",
        "Developing teamwork, discipline, communication, coordination, and time-management skills through competitive sports."
      ]
    },
    {
      title: "RENEWABLE ENERGY CLUB",
      role: "Event Head · Social Media Head",
      institution: "NIST University, Berhampur",
      date: "September 2024 – Present",
      description: "",
      details: [
        "Coordinating and supporting the planning and execution of club events and activities.",
        "Managing social media communication and promoting club initiatives.",
        "Collaborating with students and team members on technical and awareness activities."
      ]
    },
    {
      title: "INNOVATION & INCUBATION CLUB",
      role: "Core Member",
      institution: "NIST University, Berhampur",
      date: "November 2025 – Present",
      description: "",
      details: [
        "Participating in innovation-focused activities, technical events, and student initiatives.",
        "Collaborating with peers on technology and innovation-oriented activities.",
        "Contributing to activities that encourage problem-solving and an innovation-oriented mindset."
      ]
    }
  ]
};
