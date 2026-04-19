// Centralized project data keeps the Projects component focused on rendering.
const projects = [
  {
    title: "Marome Investments Website",
    description:
      "A sleek, responsive website for a startup backend solutions business, showcasing AI, API integrations and scalable technology solutions.\n\nBuilt to present the brand clearly while keeping the experience smooth across devices.\n\nIn this project I learned how important RESTful API routes are to build the communication between the frontend and backend.",
    tech: "JavaScript, CSS, Node.js, MongoDB",
    frontendRepo: "https://github.com/Sphola619/marome-investments",
    backendRepo: "https://github.com/Sphola619/marome-backend",
    live: "https://info.marome-investments.co.za/",
  },
  {
    title: "ActiveNation Store",
    description:
      "A dynamic online store frontend using React, enabling seamless product browsing and efficient cart management\n\nThis was built as part of my bootcamp curriculum in order to get comfortable with React and its core concepts such as components, state management, and props.\n\nI also learned of the benefit of reusable components, importing and exporting, and how to use React Router for navigation.",
    tech: "React, Node.js",
    frontendRepo: "https://github.com/Sphola619/active-nation",
    live: "https://active-nation.onrender.com/",
  },
  {
    title: "Forex Trading AI Assistant",
    description:
      "This app is designed to help a user monitor selected forex pairs and precious metals, open a dedicated detail page for each market, view a TradingView chart, and read AI-generated market commentary based on technical and macro context.\n\nIn this project I learned how to integrate the Gemini API for AI-generated content, and the TradingView API widget for charting. I also gained experience in handling asynchronous data fetching and state management in React.",
    tech: "React, Python, Gemini API, TradingView API",
    frontendRepo: "https://github.com/Sphola619/forex-assistant",
    backendRepo: "https://github.com/Sphola619/forex-assistant-backend",
    live: "https://forex-assistant-one.vercel.app/",
  },
  {
    title: "Game Day Recap Blog",
    description:
      "A JavaScript-based blog app inspired by SB Nation that allows users to create accounts, share game day recaps, featuring a dynamic home page, post creation, and comment functionality.\n\nTrying to store image files for articles was one of the main pain points of this project, however, this was solved by uploading images to an /uploads folder and storing the file path in the database. Cloudinary may be a more scalable solution for this in the future.",
    tech: "JavaScript, Node.js, MongoDB",
    frontendRepo: "https://github.com/Sphola619/blog-post",
    backendRepo: "https://github.com/Sphola619/blog-post-backend",
    live: "https://blog-post-seven-puce.vercel.app/",
  },
  {
    title: "Premier League Search App",
    description:
      "A basic React-based app that allows users to search for one of the top 10 Premier League top scorers of the current season, fetching data from a REST API from football-data.org and displaying it in a user-friendly format.\n\nThis was one of my first projects using React, and it helped me understand how to manage state, handle user input, and fetch data from an API to display dynamic content.",
    tech: "React, API, JavaScript",
    frontendRepo: "https://github.com/Sphola619/Premier-League-Top-Scorers",
    live: "https://premier-league-top-scorers.vercel.app/",
  },
  {
    title: "West London Giants",
    description:
      "A React-based Chelsea fan app featuring a dynamic home page, player pages, and club history/trophies navigation.",
    tech: "React, JavaScript, Node.js",
    frontendRepo: "https://github.com/Sphola619/west-london-giants",
    live: "https://west-london-giants.onrender.com/",
  },
  {
    title: "Weather App",
    description:
      "A weather app built in the early stages of my development journey, allowing users to search for current weather conditions in any city worldwide. Basic styling and dynamism using JavaScript, API integration, conditionals and DOM manipulation.",
    tech: "JavaScript, API",
    frontendRepo: "https://github.com/Sphola619/my-weather-app",
    live: "https://my-weather-app-three-delta.vercel.app/",
  },
];

export default projects;
