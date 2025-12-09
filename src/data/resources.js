// src/data/resources.js

import { FiBarChart2, FiCode } from "react-icons/fi";

const resources = {
  dataScience: {
    courses: [
      {
        title: "CS250: Python for Data Science",
        description:
          "This course balances data science methods with Python programming for real-world problem solving, using libraries like pandas and scikit-learn for analysis, visualization, and data mining.",
        link: "https://learn.saylor.org/course/view.php?id=504",
        time: "67 hours",
        icon: <FiBarChart2 />,
      },
    ],
  },

  practiceProgramming: {
    platforms: [
      {
        title: "LeetCode",
        link: "https://leetcode.com",
        icon: <FiCode />,
      },
      {
        title: "HackerRank",
        link: "https://www.hackerrank.com",
        icon: <FiCode />,
      },
    ],
  },

  algorithmsAndDataStructures: {
    websites: [
      {
        title: "Data Structure & Algorithm Visualizations",
        description:
          "Interactive visual explanations of algorithms and data structures to help understand how they work step by step.",
        link: "https://www.cs.usfca.edu/~galles/visualization/Algorithms.html",
      },
      {
        title: "Programiz DSA",
        description:
          "Beginner-friendly tutorials and explanations for data structures and algorithms with clear examples.",
        link: "https://www.programiz.com/dsa",
      },
    ],

    tutorials: [
      {
        title: "GeeksforGeeks DSA Tutorial",
        description:
          "A complete structured tutorial covering data structures and algorithms from basics to advanced topics.",
        link: "https://www.geeksforgeeks.org/dsa/dsa-tutorial-learn-data-structures-and-algorithms/",
      },
      {
        title: "TutorialsPoint DSA",
        description:
          "Step-by-step tutorials on data structures and algorithms with simple explanations and examples.",
        link: "https://www.tutorialspoint.com/data_structures_algorithms/index.htm",
      },
      {
        title: "W3Schools DSA",
        description:
          "Beginner-friendly introduction to data structures and algorithms with interactive learning style.",
        link: "https://www.w3schools.com/dsa/dsa_intro.php",
      },
    ],

    books: [
      {
        title: "Open Data Structures",
        description:
          "A free textbook that teaches data structures and algorithms with clear explanations and examples.",
        link: "https://opendsa.cs.vt.edu/ODSA/Books/eu_book/html/",
      },
    ],
  },

  cyberSecurity: {
    websites: [
      {
        title: "Hacker News",
        description:
          "A community-driven news site covering cybersecurity, hacking, startups, and technology trends.",
        link: "https://news.ycombinator.com/news?p=6",
      },
      {
        title: "Exploit Database",
        description:
          "A public archive of known security exploits and vulnerabilities for penetration testing and research.",
        link: "https://www.exploit-db.com/",
      },
    ],
  },
};

export default resources;
