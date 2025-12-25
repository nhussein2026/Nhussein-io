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
      {
        title: "Google Cloud Training",
        description:
          "Official training programs by Google Cloud covering data science, machine learning, and cloud computing skills.",
        link: "https://cloud.google.com/learn/training",
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

  frontend: {
    uiUx: [
      {
        title: "Behance",
        description:
          "A creative platform to showcase and discover UI, UX, and graphic design projects.",
        link: "https://www.behance.net/",
      },
      {
        title: "Pinterest",
        description:
          "A visual discovery platform for UI, UX, branding, and design inspiration.",
        link: "https://pinterest.com/",
      },
      {
        title: "Designspiration",
        description:
          "A curated gallery for web, UI, and graphic design inspiration.",
        link: "https://www.designspiration.com/",
      },
      {
        title: "Site Inspire",
        description: "A showcase of high-quality web design inspiration.",
        link: "https://www.siteinspire.com/",
      },
      {
        title: "LogoPond",
        description:
          "A logo design inspiration gallery for branding and identity projects.",
        link: "https://logopond.com/search/",
      },
      {
        title: "Coolors Palettes",
        description:
          "Trending color palettes for UI, branding, and design projects.",
        link: "https://coolors.co/palettes/trending",
      },
      {
        title: "unDraw",
        description:
          "Open-source illustrations for websites, apps, and UI projects.",
        link: "https://undraw.co/",
      },
      {
        title: "Freepik",
        description:
          "A large library of free vectors, illustrations, photos, and UI assets.",
        link: "https://www.freepik.com/",
      },
      {
        title: "Font Awesome",
        description: "A popular icon library for web and UI design.",
        link: "https://fontawesome.com/",
      },
      {
        title: "SheCodes Color Palettes",
        description:
          "A collection of modern color palettes for UI and web design.",
        link: "https://www.shecodes.io/palettes/",
      },
    ],

    courses: [
      {
        title: "Webflow Full Site Build Course",
        description:
          "A step-by-step hands-on course by Webflow University that teaches how to design and build a complete professional website from scratch.",
        link: "https://university.webflow.com/courses/full-site-build?video=gdhU2yw674k",
      },
    ],
  },

  seo: {
    tools: [
      {
        title: "Google Search Console",
        description:
          "A free tool by Google to monitor, maintain, and improve your website’s presence in search results.",
        link: "https://search.google.com/u/1/search-console/about",
      },
      {
        title: "Ahrefs",
        description:
          "A powerful SEO toolset for backlink analysis, keyword research, and competitor tracking.",
        link: "https://ahrefs.com/",
      },
    ],
  },
};

export default resources;
