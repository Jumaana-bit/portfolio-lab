// ─────────────────────────────────────────────────────────────
//  CONTENT.JS  —  edit this file to update your portfolio
// ─────────────────────────────────────────────────────────────

// ── Projects ─────────────────────────────────────────────────
// cat: 'ai' | 'web'   (controls the filter tabs)
// link: null           (set to a URL string to make the card clickable)

export const projectsData = [
  {
    id: 1,
    cat: 'ai',
    tag: 'AI / ML',
    title: 'Age & Gender Recognition System',
    desc: 'ML models for age regression and gender classification from image and audio, with a privacy-compliant FastAPI web interface.',
    stack: 'Python · PyTorch · OpenCV · FastAPI',
    metric1: '90%+', label1: 'accuracy',
    metric2: '<1s',  label2: 'inference',
    link: null,
  },
  {
    id: 2,
    cat: 'ai',
    tag: 'AI / ML',
    title: 'BackTapBench Dataset',
    desc: 'Curated IMU dataset of back-of-phone tap gestures. Published on Harvard Dataverse with DTW-KNN, Random Forest, and CNN baselines.',
    stack: 'Python · Android · IMU Sensors',
    metric1: '1,200+', label1: 'samples',
    metric2: '3',      label2: 'baselines',
    link: 'https://github.com/Jumaana-bit/BackTapBench',
  },
  {
    id: 3,
    cat: 'web',
    tag: 'Systems',
    title: 'Microservices Migration',
    desc: 'Rebuilt a government RESTful app and migrated to microservices with Docker + Kubernetes, enabling zero-downtime deploys.',
    stack: 'Java · Spring Boot · Docker · Kubernetes',
    metric1: '30%', label1: 'cost reduction',
    metric2: '25%', label2: 'faster API',
    link: null,
  },
];

// ── Blog Posts ────────────────────────────────────────────────
// To add a new post, copy one entry and paste it at the top of the array.
// snippet: a short code sample or formula to display in the post card.
//          Set to null if you don't want one.

export const blogsData = [
  {
    id: 1,
    title: 'Fit Check Agent',
    slug: 'fit-check-agent', // <-- Internal route key
    date: 'June 11, 2026',
    hash: '9c2a1b7',
    readTime: '6 min',
    excerpt: 'An architectural exploration of how an agent can be created using Microsoft tools.',
    snippet: 'Azure · Foundry',
    image: '/chart.png',
    // You can write your long-form text directly here using templates or standard strings
    content: `I participated in the Microsoft AI Skills Fest that ran from June 8-11, 2026. The event featured workshops, talks, and labs focused on building AI agents. I thought it is the perfect opportunity to turn my Fit Check Agent idea into a reality. 

It all started with the constant struggle of finding XS sizes out of stock. My requirements were simple:
- A single interface to match my measurements against size charts of different brands.
- A way to bring product from multiple stores together in one place.
- Prediction on when a certain product will be back in stock.

Approach 1:
I first tried to build a web scraper to pull size charts and stock information from various retailer websites using Playwright. I succeeded in scraping data from Zara. However, I realized this is a tedious process as each website has a different structure, different anti-bot systems, and anti-scraping measures. It also requires constant maintenance as websites change their layouts frequently.

Approach 2:
I then moved on to using Azure and no code tools (taking the correct spirit from AI Skills Fest). 

I created an Azure Storage account that holds product URL. FitCheck pipeline starts with a Runbook which scrapes category pages and extracts productURLs, followed by Runbook 3 which scrapes each product page and saves HTML into Azure storage. Two Foundary Prompt Flows then take over:

The Product Parser Flow reads the stored HTML and extracts size charts, sizes, prices, and images. Fit Engine Flow computes personalized fit scores using my measurements and writes the final FitResults back to Azure Storage. 

A lightweight static Web UI then reads those FitResults and displays items - like XS sweater - ranked by how well they fit me.`
  }
];