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
    link: 'https://shared.ontariotechu.ca/shared/faculty/feas/current-students/capstone-25/20.jpg',
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
    tag: 'Mobile',
    title: 'Virtual Memory App',
    desc: 'Designed to assist seniors and individuals with dementia by providing a user-friendly interface to manage memories, reminders, and important information.',
    stack: 'Java · SQLite · Android',
    metric1: '30%', label1: 'interaction',
    metric2: '3', label2: 'sensors',
    link: 'https://github.com/Jumaana-bit/VirtualMemory',
  },
  {
    id: 4,
    cat: 'security',
    tag: 'Software Security',
    title: 'Secure File Sharing',
    desc: 'Ensures the safe transfer of files through advanced encryption methods, enforces strict authorization policies, and incorporates role-based access control (RBAC).',
    stack: 'PyQt · RBAC · Zeroconf',
    metric1: '256-bit', label1: 'AES-Encryption',
    metric2: 'ECDH', label2: 'key exchange',
    link: 'https://github.com/Jumaana-bit/SecureFileSharing',
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
    Software Developers are acting more like factory managers now.  
    - Financial concerns as vibe coding is increasing Operational Expenditure (OpEx). Meanwhile, agentic engineering is more of a captial expenditure (CapEx).
    - The simplest explanation for MCP: USB-C for AI tools. The use of MCP also brings down complexity from O(N . M) to O(N + M) where N is the number of agents and M is the number of tools.
    - Skills are agent-triggered (yes, not event-triggered). SKILLS.md tells the agent what the skill is, when to use it, how to execute it. This helps us avoid context staturation.
    - The comparison between the tranformation from writing source code to using no-code/low-code tools and the transformation from using assembly language to using high-level programming languages was particularly insightful.
    
    However, security is major concern as well. Prompt injection attacks can be caused by hardcoding constraints in prompt. Vibe diff is an interesting term. It means the model gives safe vibes, but actual behavior is unsafe.
    
    Agent = Model + Harness
    Harness is the scaffolding around the model that provides structure, tools, constraints, and memory.
    
    Context fragmentation is an issue as the model loses plot while trying to parse unstructured text. It is recommended for prompts to follow the Gherkin template: Given [context], When [action], Then [outcome]. This way, the model can better understand the structure and relationships between different pieces of information.
    
    Evidence prompting: provide raw diagnostic logs.
    Forensic mode: write a failing unit test that reproduces the bug, then ask the model to fix the code until the test passes.
    
    The current bottleneck that we are facing is getting bombarded by requests for approval by the agents. Developers tend to approve as a reflex rather than taking the time to evaluate the request. There is a shocking but not so surprising solution to this.
    Use AI! "Graph-Native Code Understanding" means using a map of how code connects (a graph) to help AI truly comprehend large software systems at scale.`
},
{
  id: 3,
  title: 'Azure AI Fundamentals',
  slug: 'azure-ai-fundamentals', // <-- Internal route key
  date: 'August 27, 2026',
  hash: 'a1b2c3d',
  readTime: '2.5 min',
  excerpt: 'Microsoft Azure AI Fundamentals certification journey.',
  snippet: 'Azure · AI Fundamentals',
  image: '/AI-901.png',
  content:
   ` AI-901: The Fundamentals of AI 
After completing the AI Skills Path modules, I received a voucher and chose to use it to become certified in AI fundamentals.

How did I plan to study?

Study the two learning paths thoroughly. 
Dig deeper into the concepts found in the learning paths.
Do practice tests all day.

Spend 1 - 2 weeks doing that

How did I actually study?

I was under the impression that I could reschedule my exam for free, which is true in a normal case. However, you can not do that with a voucher. I found this out about 48 hours before my exam. I also had to go to university that day. 

Basically, I spent about 12 hours doing what I had planned to do over the span of 2 weeks. 

How did it go?

I walked into the exam, reassuring myself that at least I wouldn't lose any money if I failed this exam! Fortunately, I found the exam really easy and quite close to the modules in the learning paths. I had a good feeling while doing the exam. 

I passed.

Any advice/tips?

A good background or understanding of AI concepts will help a lot. Pay extra attention to ALL the Azure tools/resources/services mentioned in the learning paths. In fact, try it out yourself using the labs.

On the other hand, I found the Google PMLE exam a lot harder than the practice exams.  `
},
{id: 4,
  title: 'Qollab x Ionq Global Hackathon',
  slug: 'quantum-hackathon', // <-- Internal route key
  date: 'November 13, 2026',
  hash: 'a6b7c8d',
  readTime: '2 min',
  excerpt: 'My experience at the Qollab x Ionq Global Hackathon.',
  snippet: 'Quantum Computing',
  image: '/quantum-hackathon.png',
  content: ` I registered for the Qollab x IonQ Global Quantum Hackathon.  

  

I had no prior experience with Quantum computing so I started with Qollab tutorials. I managed to build a Hybrid Quantum-Classical Intrusion Detection System with Explainable AI, focused on improving cybersecurity for critical infrastructure.  

  

I combined quantum computing with classical machine learning, using quantum feature maps and kernel-based SVM classification to identify potential cyberattacks. But I wanted to go beyond simply detecting threats. 

  

I integrated a Retrieval-Augmented Generation (RAG) agent that retrieves relevant cybersecurity intelligence from sources such as MITRE ATT&CK, CVE records, and CISA's Known Exploited Vulnerabilities (KEV) catalog to provide contextual explanations for detected threats. 

  

The goal was to make attack detection more transparent and help security analysts better understand why a particular activity may be suspicious. 

  

I used Qiskit's ZZFeatureMap, which applies Hadamard gates, data-dependent phase rotations, and entangling CX gates to encode features and capture relationships between them. 

The workflow is as follows: 

1. Loaded prepared training and testing data (78 features). 

2. Reduced 78 features to 6 features for 6 qubits. 

3. Selected 50 training samples and 20 testing samples per class. 

4. Encoding data into quantum circuits using 6 qubits. 

5. Measure how similar data samples are using quantum circuit fidelity.  

6. Calculate accuracy, precision, recall, and save predictions for the RAG agent. 

Quantum computing always sounded very complicated to me, but I found it surprisingly approachable. The hackathon was a great learning experience and I look forward to exploring more in this field.`
}
];