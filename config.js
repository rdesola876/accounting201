// ============================================================
//  ACCOUNTING 201 AI TUTOR — SHARED CONFIGURATION
//  Edit this file to customize the entire application.
//  Both instructor and student views read from this config.
// ============================================================

const APP_CONFIG = {

  // ----------------------------------------------------------
  //  APP IDENTITY
  // ----------------------------------------------------------
  app: {
    name: "Accounting 201 AI Tutor",
    institution: "Your University Name",
    courseCode: "ACCT 201",
    semester: "Spring 2025",
    instructorName: "Prof. Martinez",
    instructorEmail: "martinez@university.edu",
  },

  // ----------------------------------------------------------
  //  AI SETTINGS
  //  Replace YOUR_API_KEY_HERE with your Anthropic API key.
  //  Get one at: https://console.anthropic.com
  // ----------------------------------------------------------
  ai: {
    apiKey: "YOUR_API_KEY_HERE",
    model: "claude-sonnet-4-20250514",
    maxTokens: 800,

    // The personality and teaching style of the AI tutor.
    // Edit this to change how the tutor behaves.
    systemPromptTemplate: `You are a friendly, expert tutor for {courseCode} — {courseName} at {institution}.
The student's name is {studentName} and their current level is {studentLevel}.
The active topic is: {currentTopic}.

Teaching guidelines:
- Be encouraging and patient. Adapt explanations to the student's level.
- Use concrete, numerical examples for every concept.
- If a student is confused, try a different analogy or approach.
- When quizzing, wait for the student's answer before giving the solution.
- Keep responses under 180 words unless working through a detailed example.
- Use plain text only — no markdown asterisks or pound signs.
- Always relate concepts back to real-world business scenarios.
- If a student makes an error, guide them to the answer rather than giving it directly.`,
  },

  // ----------------------------------------------------------
  //  CURRICULUM
  //  Add, remove, or reorder topics. Each topic has:
  //    id: unique string key
  //    title: display name
  //    icon: emoji icon
  //    description: short description shown to students
  //    learningObjectives: list of things students will learn
  //    requiredFor: ids of topics this one unlocks (optional)
  // ----------------------------------------------------------
  curriculum: [
    {
      id: "intro",
      title: "Course Introduction",
      icon: "📘",
      description: "Overview of Accounting 201 and what you will learn.",
      learningObjectives: [
        "Understand the scope of intermediate accounting",
        "Review prerequisite knowledge from Accounting 101",
        "Learn how financial statements connect to each other",
      ],
      unlocked: true,
    },
    {
      id: "financial-statements",
      title: "Financial Statements",
      icon: "📊",
      description: "Master the three core financial statements every accountant must know.",
      learningObjectives: [
        "Prepare a complete income statement",
        "Build a balance sheet from scratch",
        "Understand the statement of cash flows",
        "Analyze how the three statements interrelate",
      ],
      unlocked: true,
    },
    {
      id: "debits-credits",
      title: "Debits & Credits",
      icon: "⚖️",
      description: "The foundation of double-entry bookkeeping — master the rules.",
      learningObjectives: [
        "Apply the debit/credit rules to all account types",
        "Record journal entries accurately",
        "Understand T-accounts and ledgers",
        "Trace transactions from journal to trial balance",
      ],
      unlocked: true,
    },
    {
      id: "accrual",
      title: "Accrual Accounting",
      icon: "📅",
      description: "Understand when revenue and expenses are recognized.",
      learningObjectives: [
        "Distinguish accrual vs. cash basis accounting",
        "Record accruals and deferrals",
        "Prepare adjusting journal entries",
        "Understand the matching principle",
      ],
      unlocked: false,
    },
    {
      id: "depreciation",
      title: "Depreciation & Amortization",
      icon: "📉",
      description: "Learn how long-lived assets are expensed over time.",
      learningObjectives: [
        "Calculate straight-line depreciation",
        "Apply the declining balance method",
        "Record depreciation journal entries",
        "Understand amortization of intangibles",
      ],
      unlocked: false,
    },
    {
      id: "inventory",
      title: "Inventory Valuation",
      icon: "📦",
      description: "FIFO, LIFO, and weighted average — know the difference.",
      learningObjectives: [
        "Apply FIFO, LIFO, and weighted-average methods",
        "Calculate cost of goods sold under each method",
        "Understand the lower of cost or net realizable value rule",
        "Analyze how inventory method affects net income",
      ],
      unlocked: false,
    },
    {
      id: "receivables",
      title: "Receivables & Payables",
      icon: "🧾",
      description: "How businesses manage money they are owed and money they owe.",
      learningObjectives: [
        "Record accounts receivable transactions",
        "Estimate bad debt expense",
        "Apply the allowance method",
        "Account for notes receivable and payable",
      ],
      unlocked: false,
    },
    {
      id: "long-term-assets",
      title: "Long-Term Assets",
      icon: "🏗️",
      description: "PP&E, intangibles, and how to account for them.",
      learningObjectives: [
        "Determine the cost of property, plant, and equipment",
        "Account for asset disposal",
        "Understand intangible assets and goodwill",
        "Apply impairment testing concepts",
      ],
      unlocked: false,
    },
    {
      id: "liabilities",
      title: "Liabilities",
      icon: "📋",
      description: "Current and long-term obligations — recording and reporting.",
      learningObjectives: [
        "Classify current vs. long-term liabilities",
        "Record bond issuance and interest expense",
        "Account for contingent liabilities",
        "Understand lease accounting basics",
      ],
      unlocked: false,
    },
    {
      id: "equity",
      title: "Stockholders' Equity",
      icon: "💼",
      description: "Understand what equity means and how it changes.",
      learningObjectives: [
        "Record common and preferred stock issuance",
        "Account for dividends and treasury stock",
        "Prepare the statement of stockholders' equity",
        "Understand retained earnings",
      ],
      unlocked: false,
    },
    {
      id: "cash-flows",
      title: "Statement of Cash Flows",
      icon: "💸",
      description: "Prepare and analyze the full cash flow statement.",
      learningObjectives: [
        "Classify operating, investing, and financing activities",
        "Prepare the indirect method cash flow statement",
        "Analyze free cash flow",
        "Reconcile net income to operating cash flows",
      ],
      unlocked: false,
    },
    {
      id: "analysis",
      title: "Financial Analysis",
      icon: "🔬",
      description: "Use ratios and tools to analyze any company's financial health.",
      learningObjectives: [
        "Calculate and interpret liquidity ratios",
        "Apply profitability and efficiency ratios",
        "Perform trend analysis on financial statements",
        "Compare companies using benchmarking",
      ],
      unlocked: false,
    },
  ],

  // ----------------------------------------------------------
  //  QUIZ SETTINGS
  // ----------------------------------------------------------
  quiz: {
    questionsPerSession: 5,
    passingScore: 70,           // percentage
    showExplanationsAfter: true,
    allowRetakes: true,
    maxRetakes: 3,
  },

  // ----------------------------------------------------------
  //  STUDENT LEVELS
  //  Used by the AI to calibrate its explanations.
  // ----------------------------------------------------------
  studentLevels: [
    { id: "beginner",     label: "Beginner",     description: "New to accounting concepts" },
    { id: "intermediate", label: "Intermediate",  description: "Familiar with Accounting 101 basics" },
    { id: "advanced",     label: "Advanced",      description: "Strong foundation, ready for complex topics" },
  ],

  // ----------------------------------------------------------
  //  UI SETTINGS
  // ----------------------------------------------------------
  ui: {
    primaryColor: "#1a56db",
    accentColor:  "#0e9f6e",
    dangerColor:  "#e02424",
    fontFamily:   "'DM Sans', sans-serif",
    darkMode:     false,          // set true to default to dark mode
    logoEmoji:    "📚",
  },

  // ----------------------------------------------------------
  //  INSTRUCTOR DASHBOARD PASSWORD
  //  Change this to protect the instructor view.
  // ----------------------------------------------------------
  instructorPassword: "acct201admin",

};

// Export for use in both files (works in both browser and Node.js)
if (typeof module !== "undefined") module.exports = APP_CONFIG;
