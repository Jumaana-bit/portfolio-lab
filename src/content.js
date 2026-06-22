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
  }, 
  {
    id: 2,
    title: '5-Day AI Agents',
    slug: '5-day-ai-agents', // <-- Internal route key
    date: 'June 21, 2026',
    hash: 'e4b8d21',
    readTime: '4 min',
    excerpt: 'Intense Vibe Coding Course with Google',
    snippet: 'Google · Antigravity',
    // You can write your long-form text directly here using templates or standard strings
    content: `I recently completed a course on AI agents offered by Google. The podcasts, whitepapers, and tutorials provided a good set of resources to get started.
    Here are the key points that stayed with me:
    The analogy drawn between modern software developers and factory managers helped me shift my perspective. 
    - Financial concerns as vide coding is increasing Operational Expenditure (OpEx). Meanwhile, agentic engineering is more of a captial expenditure (CapEx).
    - The simplest explanation for MCP: USB-C for AI tools. The use of MCP also brings down complexity from O(N . M) to O(N + M) where N is the number of agents and M is the number of tools.
    - Skills are agent-triggered (yes, not event-triggered). SKILLS.md tells the agent what the skill is, when to use it, how to execute it. This helps us avoid context staturation.
    - The comparison between the tranformation from writing source code to using no-code/low-code tools and the transformation from using assembly language to using high-level programming languages was particularly insightful.
    
    However, security is major concern as well. Prompt injection attacks can be caused by hardcoding constraints in prompt. Vibe diff is an interesting term. It means the model gives safe vibes, but actual behavior is unsafe.
    
    Agent = Model + Harness
    Harness is the scaffolding around the model that provides structure, tools, constraints, and memory.
    
    Context fragmentation is an issue as model loses plot while trying to parse unstructured text. It is recommended for prompts to follow the Gherkin template: Given [context], When [action], Then [outcome]. This way, the model can better understand the structure and relationships between different pieces of information.
    
    Evidence prompting: provide raw diagnostic logs.
    Forensic mode: write a failing unit test that reproduces the bug, then ask the model to fix the code until the test passes.
    
    The current bottleneck that we are facing is getting bombarded by requests for approval by the agents. Developers tend to approve as a reflex rather than taking the time to evaluate the request. There is a shocking but not so surprising solution to this.
    Use AI! "Graph-Native Code Understanding" means using a map of how code connects (a graph) to help AI truly comprehend large software systems at scale.`
}
];