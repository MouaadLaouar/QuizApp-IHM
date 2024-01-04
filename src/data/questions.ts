export const questions = [
  {
    id: 1,
    question:
      'What is the time complexity of the following code snippet?\n\nfor (int i = 0; i < n; i++) {\n  printf("%d ", i);\n}\n',
    options: ["O(n)", "O(n^2)", "O(log n)", "O(1)"],
  },
  {
    id: 2,
    question:
      'Consider the following code. What is the output?\n\nint x = 5;\nprintf("%d ", ++x);\nprintf("%d", x++);',
    options: ["66", "56", "65", "55"],
  },
  {
    id: 3,
    question: "What is the purpose of the `malloc` function in C?",
    options: [
      "Memory allocation",
      "Mathematical calculation",
      "File I/O",
      "String manipulation",
    ],
  },
  {
    id: 4,
    question:
      "Which sorting algorithm has an average-case time complexity of O(n log n)?",
    options: ["Bubble Sort", "Insertion Sort", "Quick Sort", "Selection Sort"],
  },
  {
    id: 5,
    question: "In C, what does the `sizeof` operator return?",
    options: [
      "Size of a variable",
      "Memory address of a variable",
      "Value stored in a variable",
      "Type of a variable",
    ],
  },
  {
    id: 6,
    question:
      "What is the output of the following JavaScript code?\n\nlet numbers = [1, 2, 3, 4, 5];\nlet squared = numbers.map(x => x * x);\nconsole.log(squared);",
    options: [
      "[1, 4, 9, 16, 25]",
      "[1, 2, 3, 4, 5]",
      "[2, 4, 6, 8, 10]",
      "[0, 1, 4, 9, 16]",
    ],
  },
  {
    id: 7,
    question: "What is the purpose of the `Promise` object in JavaScript?",
    options: [
      "Exception handling",
      "Asynchronous programming",
      "Object iteration",
      "Data validation",
    ],
  },
  {
    id: 8,
    question:
      "Consider the following JavaScript code. What will be logged to the console?\n\nlet x = 10;\n\nfunction foo() {\n  console.log(x);\n  let x = 5;\n}\n\nfoo();",
    options: ["10", "5", "ReferenceError", "undefined"],
  },
  {
    id: 9,
    question:
      "Which method is used to add a new element to the end of an array in JavaScript?",
    options: ["push()", "add()", "append()", "insert()"],
  },
  {
    id: 10,
    question: "What does the `===` operator check for in JavaScript?",
    options: [
      "Value and type equality",
      "Value equality",
      "Type equality",
      "Reference equality",
    ],
  },
];
