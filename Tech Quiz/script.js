const questionBank = {
  "data structures": [
    {
      question: "Which data structure follows the LIFO principle?",
      options: ["Queue", "Stack", "Graph", "Heap"],
      answer: 1,
      explanation: "A stack removes the most recently inserted item first, so it works on Last In, First Out."
    },
    {
      question: "Which traversal of a Binary Search Tree gives sorted order?",
      options: ["Preorder", "Postorder", "Inorder", "Level order"],
      answer: 2,
      explanation: "Inorder traversal visits left subtree, root, then right subtree, producing sorted values in a BST."
    },
    {
      question: "What is the average time complexity of searching in a hash table?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
      answer: 0,
      explanation: "With a good hash function and low collisions, hash table lookup is constant time on average."
    },
    {
      question: "Which structure is best for implementing BFS?",
      options: ["Stack", "Queue", "Priority queue", "Set"],
      answer: 1,
      explanation: "Breadth-first search processes nodes in the order they are discovered, which is exactly queue behavior."
    },
    {
      question: "A min-heap always keeps which value at the root?",
      options: ["Largest", "Smallest", "Median", "Most recent"],
      answer: 1,
      explanation: "In a min-heap, every parent is smaller than or equal to its children, so the root is the minimum."
    },
    {
      question: "Which data structure is commonly used to detect balanced parentheses?",
      options: ["Stack", "Queue", "Tree", "Hash map"],
      answer: 0,
      explanation: "A stack keeps track of opening brackets and matches them with closing brackets in reverse order."
    },
    {
      question: "What is the worst-case time complexity of binary search on a sorted array?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      answer: 1,
      explanation: "Binary search halves the search space each step, so it takes logarithmic time."
    },
    {
      question: "Which graph traversal uses recursion or a stack naturally?",
      options: ["BFS", "DFS", "Dijkstra", "Kruskal"],
      answer: 1,
      explanation: "Depth-first search explores deeply before backtracking, which maps naturally to recursion or a stack."
    },
    {
      question: "Which data structure is best for fast key-value lookup?",
      options: ["Array", "Linked list", "Hash table", "Binary tree only"],
      answer: 2,
      explanation: "Hash tables are designed for fast average-case lookup using keys."
    },
    {
      question: "In a singly linked list, what does each node usually store?",
      options: ["Data and next pointer", "Only index", "Two arrays", "A SQL row"],
      answer: 0,
      explanation: "A singly linked list node stores data and a reference to the next node."
    }
  ],

  "dbms": [
    {
      question: "Which SQL command is used to remove all rows from a table but keep its structure?",
      options: ["DROP", "DELETE DATABASE", "TRUNCATE", "ALTER"],
      answer: 2,
      explanation: "TRUNCATE removes table data quickly while preserving the table definition."
    },
    {
      question: "What does normalization mainly reduce in a relational database?",
      options: ["Network traffic", "Data redundancy", "Query syntax", "Index count"],
      answer: 1,
      explanation: "Normalization organizes data into related tables to reduce duplication and update anomalies."
    },
    {
      question: "Which property of ACID ensures a transaction is all-or-nothing?",
      options: ["Atomicity", "Consistency", "Isolation", "Durability"],
      answer: 0,
      explanation: "Atomicity means either every operation in a transaction succeeds, or none of it is applied."
    },
    {
      question: "A foreign key is used to establish what?",
      options: ["Encryption", "Relationship between tables", "Automatic backup", "User authentication"],
      answer: 1,
      explanation: "Foreign keys connect records in one table to primary key records in another table."
    },
    {
      question: "Which clause filters grouped records?",
      options: ["WHERE", "GROUP BY", "HAVING", "ORDER BY"],
      answer: 2,
      explanation: "HAVING filters after grouping, while WHERE filters rows before grouping."
    },
    {
      question: "Which key uniquely identifies each row in a table?",
      options: ["Foreign key", "Primary key", "Alternate key", "Sort key"],
      answer: 1,
      explanation: "A primary key uniquely identifies every record in a table."
    },
    {
      question: "Which SQL clause is used to sort query results?",
      options: ["WHERE", "ORDER BY", "HAVING", "JOIN"],
      answer: 1,
      explanation: "ORDER BY sorts results in ascending or descending order."
    },
    {
      question: "Which join returns only matching rows from both tables?",
      options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"],
      answer: 0,
      explanation: "INNER JOIN returns rows only when the join condition matches in both tables."
    },
    {
      question: "What is a candidate key?",
      options: ["A key that can uniquely identify rows", "A duplicate column", "A backup table", "A password field"],
      answer: 0,
      explanation: "A candidate key is any attribute or set of attributes that can uniquely identify a row."
    },
    {
      question: "Which database object speeds up searching but may slow down writes?",
      options: ["View", "Index", "Trigger", "Cursor"],
      answer: 1,
      explanation: "Indexes improve read performance, but inserts and updates may take extra work to maintain them."
    }
  ],

  "operating systems": [
    {
      question: "Which scheduling algorithm may cause starvation?",
      options: ["Round Robin", "FCFS", "Priority scheduling", "FIFO queue"],
      answer: 2,
      explanation: "Low-priority processes may wait indefinitely if higher-priority processes keep arriving."
    },
    {
      question: "What is a deadlock?",
      options: ["A faster context switch", "Processes waiting forever for resources", "A memory cache hit", "A file permission error"],
      answer: 1,
      explanation: "Deadlock happens when processes hold resources and wait for each other in a cycle."
    },
    {
      question: "Virtual memory uses which storage to extend RAM logically?",
      options: ["CPU registers", "Hard disk or SSD", "ROM", "GPU memory only"],
      answer: 1,
      explanation: "Virtual memory maps parts of disk storage as an extension of main memory."
    },
    {
      question: "Which mode has direct access to hardware instructions?",
      options: ["User mode", "Kernel mode", "Safe mode", "Guest mode"],
      answer: 1,
      explanation: "Kernel mode runs privileged OS code with direct hardware and memory access."
    },
    {
      question: "A semaphore is primarily used for what?",
      options: ["Compression", "Synchronization", "Compilation", "Rendering"],
      answer: 1,
      explanation: "Semaphores coordinate access to shared resources among concurrent processes or threads."
    },
    {
      question: "What is context switching?",
      options: ["Changing one process state to another on the CPU", "Formatting a disk", "Encrypting a file", "Compiling code"],
      answer: 0,
      explanation: "Context switching saves the current process state and loads another process state for CPU execution."
    },
    {
      question: "Which memory allocation issue occurs when free memory is split into small unusable blocks?",
      options: ["Paging", "External fragmentation", "Thrashing", "Spooling"],
      answer: 1,
      explanation: "External fragmentation happens when free memory exists but is divided into scattered small blocks."
    },
    {
      question: "What does paging divide memory into?",
      options: ["Frames and pages", "Rows and columns", "Packets and ports", "Classes and objects"],
      answer: 0,
      explanation: "Paging divides logical memory into pages and physical memory into frames."
    },
    {
      question: "Which condition is required for deadlock?",
      options: ["Mutual exclusion", "Fast CPU", "Large cache", "High bandwidth"],
      answer: 0,
      explanation: "Mutual exclusion is one of the necessary conditions for deadlock."
    },
    {
      question: "Which OS component manages process scheduling and memory at the core level?",
      options: ["Shell", "Kernel", "Browser", "Text editor"],
      answer: 1,
      explanation: "The kernel is the core of the operating system and manages hardware resources."
    }
  ],

  "computer networks": [
    {
      question: "Which protocol is connection-oriented?",
      options: ["UDP", "IP", "TCP", "ARP"],
      answer: 2,
      explanation: "TCP establishes a connection and provides reliable ordered delivery."
    },
    {
      question: "DNS is mainly used to translate domain names into what?",
      options: ["MAC addresses", "IP addresses", "Port numbers", "Encryption keys"],
      answer: 1,
      explanation: "DNS resolves human-readable domain names like example.com into IP addresses."
    },
    {
      question: "Which device forwards packets based on IP address?",
      options: ["Switch", "Router", "Hub", "Repeater"],
      answer: 1,
      explanation: "Routers operate at the network layer and forward packets between networks."
    },
    {
      question: "HTTPS commonly uses which port?",
      options: ["21", "25", "80", "443"],
      answer: 3,
      explanation: "HTTPS traffic usually runs over TCP port 443."
    },
    {
      question: "Which layer of the OSI model handles routing?",
      options: ["Physical", "Data Link", "Network", "Presentation"],
      answer: 2,
      explanation: "The network layer handles logical addressing and routing across networks."
    },
    {
      question: "Which protocol is commonly used to send email?",
      options: ["SMTP", "FTP", "HTTP", "DHCP"],
      answer: 0,
      explanation: "SMTP is the standard protocol for sending email messages."
    },
    {
      question: "What does DHCP provide to a device?",
      options: ["IP configuration", "Web page styling", "Database indexes", "CPU scheduling"],
      answer: 0,
      explanation: "DHCP automatically assigns IP addresses and related network configuration."
    },
    {
      question: "Which address is used at the data link layer?",
      options: ["MAC address", "Domain name", "Port number", "URL"],
      answer: 0,
      explanation: "MAC addresses identify network interfaces at the data link layer."
    },
    {
      question: "What does a subnet mask help determine?",
      options: ["Network and host portions of an IP address", "HTML layout", "File size", "CPU speed"],
      answer: 0,
      explanation: "A subnet mask separates the network part and host part of an IP address."
    },
    {
      question: "Which protocol is faster but does not guarantee delivery?",
      options: ["TCP", "UDP", "HTTPS", "SSH"],
      answer: 1,
      explanation: "UDP has lower overhead than TCP but does not guarantee reliable delivery."
    }
  ],

  "javascript": [
    {
      question: "Which keyword declares a block-scoped variable in JavaScript?",
      options: ["var", "let", "define", "global"],
      answer: 1,
      explanation: "let and const are block-scoped; var is function-scoped."
    },
    {
      question: "What does === check?",
      options: ["Value only", "Type only", "Value and type", "Object keys only"],
      answer: 2,
      explanation: "Strict equality compares both value and type without coercion."
    },
    {
      question: "Which method converts JSON text into a JavaScript object?",
      options: ["JSON.parse", "JSON.stringify", "Object.json", "parse.JSON"],
      answer: 0,
      explanation: "JSON.parse reads a JSON string and returns the matching JavaScript value."
    },
    {
      question: "Promises are used to handle what kind of operations?",
      options: ["Only CSS animations", "Asynchronous work", "HTML tags", "Memory allocation"],
      answer: 1,
      explanation: "Promises represent work that may finish later, such as API calls or timers."
    },
    {
      question: "Which array method creates a new array by transforming every item?",
      options: ["filter", "map", "reduce", "push"],
      answer: 1,
      explanation: "map returns a new array containing the transformed result of each original item."
    },
    {
      question: "Which keyword creates a constant binding?",
      options: ["var", "let", "const", "static"],
      answer: 2,
      explanation: "const creates a block-scoped binding that cannot be reassigned."
    },
    {
      question: "Which function schedules code to run after a delay?",
      options: ["setTimeout", "setDelay", "waitFor", "pause"],
      answer: 0,
      explanation: "setTimeout runs a function after the specified delay in milliseconds."
    },
    {
      question: "What is the DOM?",
      options: ["A programming interface for HTML documents", "A database engine", "A CSS compiler", "A network protocol"],
      answer: 0,
      explanation: "The DOM represents the page as objects that JavaScript can read and modify."
    },
    {
      question: "Which operator is used for logical AND?",
      options: ["&&", "||", "!", "??"],
      answer: 0,
      explanation: "&& returns true only when both sides are truthy."
    },
    {
      question: "Which method adds an item to the end of an array?",
      options: ["pop", "shift", "push", "slice"],
      answer: 2,
      explanation: "push appends one or more items to the end of an array."
    }
  ],

  "machine learning": [
    {
      question: "Which type of learning uses labeled data?",
      options: ["Supervised learning", "Unsupervised learning", "Reinforcement learning", "Random learning"],
      answer: 0,
      explanation: "Supervised learning trains on inputs paired with known correct outputs."
    },
    {
      question: "What is overfitting?",
      options: ["Model learns training data too specifically", "Model has no parameters", "Model trains too slowly", "Model ignores labels"],
      answer: 0,
      explanation: "Overfitting means the model performs well on training data but poorly on new data."
    },
    {
      question: "Which metric is commonly used for regression problems?",
      options: ["Accuracy", "F1 score", "Mean Squared Error", "Confusion matrix"],
      answer: 2,
      explanation: "Mean Squared Error measures average squared prediction error for continuous values."
    },
    {
      question: "A neural network learns by adjusting what?",
      options: ["Screen pixels", "Weights", "File names", "HTML tags"],
      answer: 1,
      explanation: "Training changes weights to reduce prediction error."
    },
    {
      question: "Which algorithm is often used for clustering?",
      options: ["K-Means", "Linear Regression", "Naive Bayes", "Decision Tree classification only"],
      answer: 0,
      explanation: "K-Means groups similar data points into clusters without labels."
    },
    {
      question: "Which dataset is used to evaluate a trained model's final performance?",
      options: ["Test set", "Training set only", "Variable set", "Style set"],
      answer: 0,
      explanation: "A test set checks how well the model performs on data it did not train on."
    },
    {
      question: "Which technique helps reduce overfitting in neural networks?",
      options: ["Dropout", "Increasing noise blindly", "Removing all data", "Disabling validation"],
      answer: 0,
      explanation: "Dropout randomly disables some neurons during training to improve generalization."
    },
    {
      question: "Which task predicts categories such as spam or not spam?",
      options: ["Classification", "Regression", "Clustering", "Compression"],
      answer: 0,
      explanation: "Classification predicts discrete class labels."
    },
    {
      question: "Which task predicts continuous values such as price or temperature?",
      options: ["Regression", "Classification", "Tokenization", "Sorting"],
      answer: 0,
      explanation: "Regression predicts numerical continuous outputs."
    },
    {
      question: "What does a loss function measure?",
      options: ["Prediction error", "Screen brightness", "File size", "Network speed"],
      answer: 0,
      explanation: "A loss function measures how far predictions are from the expected answers."
    }
  ]
};

const fallbackTemplates = [
  {
    question: "In {topic}, what should you understand first before solving advanced problems?",
    options: ["Core definitions and use cases", "Only shortcuts", "Only UI design", "Random memorization"],
    answer: 0,
    explanation: "Strong basics make advanced tech topics easier because every method builds on the core ideas."
  },
  {
    question: "Which habit is most useful while studying {topic}?",
    options: ["Practice with small examples", "Skip fundamentals", "Avoid debugging", "Memorize without testing"],
    answer: 0,
    explanation: "Small examples reveal how concepts behave and make exam or interview questions easier to reason through."
  },
  {
    question: "For a B.Tech student, why is {topic} important?",
    options: ["It builds practical engineering thinking", "It only improves typing speed", "It replaces all math", "It is unrelated to projects"],
    answer: 0,
    explanation: "Most tech topics become useful when they improve your ability to design, debug, and explain real systems."
  },
  {
    question: "What is the best way to revise {topic} before a quiz?",
    options: ["Review concepts, then solve MCQs", "Read only headings", "Change the topic", "Ignore mistakes"],
    answer: 0,
    explanation: "Concept review plus MCQ practice helps you catch gaps quickly."
  },
  {
    question: "When you get a wrong answer in {topic}, what should you do next?",
    options: ["Read the explanation and retry similar questions", "Close the quiz", "Guess faster", "Avoid the topic forever"],
    answer: 0,
    explanation: "Mistakes are useful when you connect them to the exact concept you missed."
  }
];

const form = document.querySelector("#quizForm");
const topicInput = document.querySelector("#topicInput");
const quickTopics = document.querySelectorAll("[data-topic]");
const quizTitle = document.querySelector("#quizTitle");
const scoreValue = document.querySelector("#scoreValue");
const totalValue = document.querySelector("#totalValue");
const progressBar = document.querySelector("#progressBar");
const questionCard = document.querySelector("#questionCard");
const resultCard = document.querySelector("#resultCard");

let quiz = [];
let topic = "";
let current = 0;
let score = 0;
let answered = false;

function normalizeTopic(value) {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

function buildQuiz(rawTopic) {
  const key = normalizeTopic(rawTopic);
  const directMatch = questionBank[key];

  const aliasMap = {
    "dsa": "data structures",
    "data structure": "data structures",
    "database": "dbms",
    "database management system": "dbms",
    "os": "operating systems",
    "operating system": "operating systems",
    "cn": "computer networks",
    "networking": "computer networks",
    "js": "javascript",
    "ml": "machine learning",
    "ai": "machine learning"
  };

  const matchedKey = directMatch ? key : aliasMap[key];

  if (matchedKey && questionBank[matchedKey]) {
    return questionBank[matchedKey];
  }

  return fallbackTemplates.map(item => ({
    ...item,
    question: item.question.replaceAll("{topic}", rawTopic)
  }));
}

function startQuiz(rawTopic) {
  topic = rawTopic.trim() || "Technology Fundamentals";
  quiz = buildQuiz(topic);
  current = 0;
  score = 0;
  answered = false;

  quizTitle.textContent = `${topic} Quiz`;
  totalValue.textContent = quiz.length;
  scoreValue.textContent = score;
  resultCard.classList.add("hidden");

  renderQuestion();
}

function renderQuestion() {
  const item = quiz[current];
  const progress = (current / quiz.length) * 100;

  progressBar.style.width = `${progress}%`;
  questionCard.className = "question-card";

  questionCard.innerHTML = `
    <div class="question-meta">
      <span>Question ${current + 1} of ${quiz.length}</span>
      <span>${topic}</span>
    </div>

    <h3>${item.question}</h3>

    <div class="options">
      ${item.options.map((option, index) => `
        <button class="option-btn" type="button" data-index="${index}">
          <span class="option-key">${String.fromCharCode(65 + index)}</span>
          <span>${option}</span>
        </button>
      `).join("")}
    </div>

    <div id="feedback" class="feedback hidden"></div>

    <div class="actions">
      <button id="nextBtn" class="primary-action hidden" type="button">
        ${current === quiz.length - 1 ? "See Result" : "Next"}
      </button>
    </div>
  `;

  questionCard.querySelectorAll(".option-btn").forEach(button => {
    button.addEventListener("click", () => chooseAnswer(Number(button.dataset.index)));
  });

  questionCard.querySelector("#nextBtn").addEventListener("click", nextQuestion);
}

function chooseAnswer(index) {
  if (answered) return;

  answered = true;

  const item = quiz[current];
  const buttons = questionCard.querySelectorAll(".option-btn");

  buttons.forEach((button, buttonIndex) => {
    button.disabled = true;

    if (buttonIndex === item.answer) {
      button.classList.add("correct");
    }

    if (buttonIndex === index && index !== item.answer) {
      button.classList.add("wrong");
    }
  });

  if (index === item.answer) {
    score += 1;
    scoreValue.textContent = score;
  }

  const feedback = questionCard.querySelector("#feedback");
  feedback.classList.remove("hidden");
  feedback.innerHTML = `<strong>${index === item.answer ? "Correct" : "Not quite"}.</strong> ${item.explanation}`;

  questionCard.querySelector("#nextBtn").classList.remove("hidden");
}

function nextQuestion() {
  if (current < quiz.length - 1) {
    current += 1;
    answered = false;
    renderQuestion();
    return;
  }

  showResult();
}

function showResult() {
  progressBar.style.width = "100%";

  const percent = Math.round((score / quiz.length) * 100);

  let message = "Good start. Review the explanations and try again to lock the ideas in.";

  if (percent >= 80) {
    message = "Excellent work. You are ready for tougher questions on this topic.";
  } else if (percent >= 60) {
    message = "Nice progress. A little revision will make this topic much stronger.";
  }

  resultCard.classList.remove("hidden");

  resultCard.innerHTML = `
    <h3>Quiz complete</h3>
    <p>${message}</p>

    <div class="result-grid">
      <div class="result-stat">
        <strong>${score}</strong>
        <span>Correct</span>
      </div>

      <div class="result-stat">
        <strong>${quiz.length - score}</strong>
        <span>Needs revision</span>
      </div>

      <div class="result-stat">
        <strong>${percent}%</strong>
        <span>Score</span>
      </div>
    </div>

    <button class="primary-action" type="button" id="retryBtn">Try Again</button>
  `;

  resultCard.querySelector("#retryBtn").addEventListener("click", () => startQuiz(topic));
}

form.addEventListener("submit", event => {
  event.preventDefault();
  startQuiz(topicInput.value);
});

quickTopics.forEach(button => {
  button.addEventListener("click", () => {
    topicInput.value = button.dataset.topic;
    startQuiz(button.dataset.topic);
  });
});