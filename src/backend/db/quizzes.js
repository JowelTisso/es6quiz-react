import { v4 as uuid } from "uuid";

/**
 * Quiz Database can be added here.
 * You can add quizzes of your wish with different attributes
 * */

export const quizzes = [
  {
    _id: uuid(),
    title: "Set 1",
    totalScore: 5,
    mcqs: [
      {
        _id: uuid(),
        question: "What does the following code output?",
        code_snippet:
          "https://carbon.now.sh/embed?bg=rgba%28187%2C187%2C187%2C1%29&t=one-dark&wt=sharp&l=auto&width=680&ds=false&dsyoff=3px&dsblur=13px&wc=false&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%257B%250A%2509var%2520x%2520%253D%25202%253B%250A%2509var%2520y%2520%253D%2520%25222%2522%253B%250A%2509console.log%28x%2520%253D%253D%2520y%29%250A%257D",
        options: [
          "Returns false since x is a number and y is a string",
          "Returns true since the value of both x and y is the same",
          "Returns true since both variables are declared using var",
          "None of the above",
        ],
        answer: "Returns true since the value of both x and y is the same",
      },
      {
        _id: uuid(),
        question: "What does the following code output?",
        code_snippet:
          "https://carbon.now.sh/embed?bg=rgba%28187%2C187%2C187%2C1%29&t=one-dark&wt=sharp&l=auto&width=680&ds=false&dsyoff=3px&dsblur=13px&wc=false&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%257B%250A%2509var%2520x%2520%253D%25203%253B%250A%2509var%2520y%2520%253D%2520%25223%2522%253B%250A%2509console.log%28x%2520%252B%2520y%29%250A%257D",
        options: [
          "33",
          "6",
          "Syntax Error: Cannot add different variable types",
          "None of the above",
        ],
        answer: "33",
      },
      {
        _id: uuid(),
        question: "What does NaN represent?",
        code_snippet: "",
        options: [
          "Not-a-Number",
          "Negative-and-Number",
          "Null-a-Number",
          "None of the above",
        ],
        answer: "Not-a-Number",
      },
      {
        _id: uuid(),
        question: "What does the following code output?",
        code_snippet:
          "https://carbon.now.sh/embed?bg=rgba%28187%2C187%2C187%2C1%29&t=one-dark&wt=sharp&l=auto&width=680&ds=false&dsyoff=3px&dsblur=13px&wc=false&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%257B%250A%2509var%2520obj%2520%253D%2520%257B%2520name%253A%2520%2522Akanksha%2522%252C%2520surname%253A%2520%2522Choudhary%2522%2520%257D%253B%250A%2509var%2520obj%2520%253D%2520%257B%2520name%253A%2520%2522Tanvi%2522%252C%2520surname%253A%2520%2522Priya%2522%2520%257D%253B%250A%2509console.log%28obj%29%253B%250A%257D",
        options: [
          "{ name: Akanksha, surname: Choudhary }",
          "Type Error: Assignment to var variable",
          "{ name: Tanvi, surname: Priya }",
          "None of the above",
        ],
        answer: "{ name: Tanvi, surname: Priya }",
      },
      {
        _id: uuid(),
        question: "What does the following code output?",
        code_snippet:
          "https://carbon.now.sh/embed?bg=rgba%28187%2C187%2C187%2C1%29&t=one-dark&wt=sharp&l=auto&width=680&ds=false&dsyoff=3px&dsblur=13px&wc=false&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%257B%250A%2509const%2520obj%2520%253D%2520%257B%2520color%253A%2520%2522blue%2522%252C%2520item%253A%2520%2522top%2522%2520%257D%253B%250A%2509var%2520obj%2520%253D%2520%257B%2520color%253A%2520%2522yellow%2522%252C%2520item%253A%2520%2522shirt%2522%2520%257D%253B%250A%2509console.log%28obj%29%253B%250A%257D",
        options: [
          "undefined",
          "{ color: yellow, item: shirt }",
          "SyntaxError: Identifier 'obj' has already been declared",
          "None of the above",
        ],
        answer: "SyntaxError: Identifier 'obj' has already been declared",
      },
    ],
    catergoryName: "NeoQuiz cycle 1 (Set 1)",
  },
  {
    _id: uuid(),
    title: "Set 2",
    totalScore: 5,
    mcqs: [
      {
        _id: uuid(),
        question: "Which statement is true about promises in javaScript?",
        code_snippet: "",
        options: [
          "Promises are used to handle synchronous operations in javascript.",
          "Settled is the initial state of a promise.",
          "Promise object has four states. Pending, Fulfilled, Rejected, Settled.",
          "None of the above",
        ],
        answer:
          "Promise object has four states. Pending, Fulfilled, Rejected, Settled.",
      },
      {
        _id: uuid(),
        question: "Which concept does the following code depict?",
        code_snippet:
          "https://carbon.now.sh/embed?bg=rgba%28187%2C187%2C187%2C1%29&t=one-dark&wt=sharp&l=auto&width=680&ds=false&dsyoff=3px&dsblur=13px&wc=false&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%2520cycleDetails%2520%253D%2520%257B%250A%2520%2520wheels%253A%25202%252C%250A%2520%2520seat%253A%25201%252C%250A%2520%2520carrier%253A%25202%250A%257D%253B%250A%250Aconst%2520%257B%2520wheels%253A%2520cycleWheels%252C%2520seat%253A%2520cycleSeat%2520%257D%2520%253D%2520cycleDetails%253B%250A%250Aconsole.log%28cycleWheels%29%253B%2520%250Aconsole.log%28cycleSeat%29%253B",
        options: [
          "Object Destructuring",
          "Hoisting",
          "Spread Operator usage",
          "None of the above",
        ],
        answer: "Object Destructuring",
      },
      {
        _id: uuid(),
        question: "What is the purpose of array slice method?",
        code_snippet: "",
        options: [
          "The slice() method returns the selected elements in an object as a new array object.",
          "The slice() method returns the selected elements in an array as a new array object.",
          "The slice() method mutates the original array and returns the same modified array.",
          "None of the above",
        ],
        answer:
          "The slice() method returns the selected elements in an array as a new array object.",
      },
      {
        _id: uuid(),
        question:
          "Which of the following statements and their output is correct?",
        code_snippet: "",
        options: [
          'isNaN("neoG")  // Returns false',
          "isNaN(false) // Returns true",
          "isNaN(undefined) // Returns true",
          "None of the above",
        ],
        answer: "isNaN(undefined) // Returns true",
      },
      {
        _id: uuid(),
        question: "What does the following code output?",
        code_snippet:
          "https://carbon.now.sh/embed?bg=rgba%28187%2C187%2C187%2C1%29&t=one-dark&wt=sharp&l=auto&width=680&ds=false&dsyoff=3px&dsblur=13px&wc=false&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%2520curryUnaryFunction%2520%253D%2520%28a%29%2520%253D%253E%2520%28b%29%2520%253D%253E%2520%28c%29%2520%253D%253E%2520a%2520%252B%2520b%2520-%2520c%253B%250Aconsole.log%28curryUnaryFunction%281%29%283%29%283%29%29%253B",
        options: [
          "7",
          "(a) => (b) => (c) => a + b + c",
          "1",
          "None of the above",
        ],
        answer: "1",
      },
    ],
    catergoryName: "NeoQuiz cycle 1 (Set 2)",
  },
  {
    _id: uuid(),
    title: "Set 3",
    totalScore: 5,
    mcqs: [
      {
        _id: uuid(),
        question: "Which of the following is not a CSS position?",
        code_snippet: "",
        options: ["Absolute", "Relative", "Overflow", "None of the above"],
        answer: "Overflow",
      },
      {
        _id: uuid(),
        question: "Which of the following is true?",
        code_snippet: "",
        options: [
          "@media (max-width: 500px){...} means you want to apply rules to those media whose min-width is 500 px.",
          "@media (max-width: 500px){...} means you want to apply rules to those media whose max-width is 500 px.",
          "@media (max-width: 500px){...} means you want to apply rules only to Desktop view.",
          "None of the above",
        ],
        answer:
          "@media (max-width: 500px){...} means you want to apply rules to those media whose max-width is 500 px.",
      },
      {
        _id: uuid(),
        question: "Which of the following is true?",
        code_snippet: "",
        options: [
          "<p> is an inline element by default.",
          "inline-block elements have the same behaviour as block elements.",
          "<div> and <h1> are block elements by default.",
          "None of the above",
        ],
        answer: "<div> and <h1> are block elements by default.",
      },
      {
        _id: uuid(),
        question:
          "What will be the colour of the text ‘JavaScript’ in the following code?",
        code_snippet:
          "https://carbon.now.sh/embed?bg=rgba%28187%2C187%2C187%2C1%29&t=one-dark&wt=sharp&l=auto&width=680&ds=false&dsyoff=3px&dsblur=13px&wc=false&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cul%2520class%253D%2522language-list%2522%2520id%253D%2522awesome%2522%253E%250A%2520%2520%2520%2520%253Cli%253E%253Cspan%253EPython%253C%252Fspan%253E%253C%252Fli%253E%250A%2520%2520%2520%2520%253Cli%2520class%253D%2522favorite%2522%2520id%253D%2522must-code%2522%253E%250A%2509%2509%2509%253Cspan%2520class%253D%2522highlight%2522%253EJavaScript%253C%252Fspan%253E%250A%2509%2509%253C%252Fli%253E%250A%253C%252Ful%253E%250A%250A%253Cstyle%253E%250A%2520%2520ul%2523awesome%2520%257B%250A%2520%2520%2520%2520color%253A%2520red%253B%250A%2520%2520%257D%250A%2520%2520ul.language-list%2520li.favorite%2520span%2520%257B%250A%2520%2520%2520%2520color%253A%2520blue%253B%250A%2520%2520%257D%250A%253C%252Fstyle%253E",
        options: ["red", "blue", "black", "None of the above"],
        answer: "blue",
      },
      {
        _id: uuid(),
        question:
          "What will be the colour of the text ‘JavaScript’ in the following code?",
        code_snippet:
          "https://carbon.now.sh/embed?bg=rgba%28187%2C187%2C187%2C1%29&t=one-dark&wt=sharp&l=auto&width=680&ds=false&dsyoff=3px&dsblur=13px&wc=false&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cul%2520class%253D%2522language-list%2522%2520id%253D%2522awesome%2522%253E%250A%2520%2520%2520%2520%253Cli%253E%253Cspan%253EPython%253C%252Fspan%253E%253C%252Fli%253E%250A%2520%2520%2520%2520%253Cli%2520class%253D%2522favorite%2522%2520id%253D%2522must-code%2522%253E%250A%2509%2509%2509%253Cspan%2520class%253D%2522highlight%2522%253EJavaScript%253C%252Fspan%253E%250A%2509%2509%253C%252Fli%253E%250A%253C%252Ful%253E%250A%250A%253Cstyle%253E%250A%2520%2520ul%2523awesome%2520%2523must-code%2520%257B%250A%2520%2520color%253A%2520red%2520%21important%253B%250A%257D%250A.favorite%2520span%2520%257B%250A%2520%2520color%253A%2520blue%253B%250A%257D%250A%253C%252Fstyle%253E",
        options: ["red", "blue", "black", "None of the above"],
        answer: "blue",
      },
    ],
    catergoryName: "NeoQuiz cycle 2 (Set 3)",
  },
  {
    _id: uuid(),
    title: "Set 4",
    totalScore: 5,
    mcqs: [
      {
        _id: uuid(),
        question: "Which event occurs when a user clicks on an HTML element?",
        code_snippet: "",
        options: ["onHover", "onmouseover", "onClick", "None of the above"],
        answer: "onClick",
      },
      {
        _id: uuid(),
        question: "Which of the following is true?",
        code_snippet: "",
        options: [
          "position: relative; is the default position for all HTML elements.",
          "An element with position: fixed; is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled.",
          "The top, right, bottom, and left properties cannot be used with  position: fixed;",
          "None of the above",
        ],
        answer:
          "An element with position: fixed; is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled.",
      },
      {
        _id: uuid(),
        question:
          "How can you combine the following arrays using the spread operator?",
        code_snippet:
          "https://carbon.now.sh/embed?bg=rgba%28187%2C187%2C187%2C1%29&t=one-dark&wt=sharp&l=auto&width=680&ds=false&dsyoff=3px&dsblur=13px&wc=false&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%25C2%25A0array1%2520%253D%2520%255B1%252C%25C2%25A02%252C%25C2%25A03%255D%253B%250Aconst%25C2%25A0array2%2520%253D%2520%255B4%252C%25C2%25A05%252C%25C2%25A06%255D%253B%250A%250A%252F%252F%2520Output%253A%2520%255B1%252C%25C2%25A02%252C%25C2%25A03%252C%25204%252C%25C2%25A05%252C%25C2%25A06%255D",
        options: [
          "const combinedArray = [...array1, ...array2];",
          "const combinedArray = array1 + array2;",
          "const combinedArray = [array1, array2];",
          "None of the above",
        ],
        answer: "const combinedArray = [...array1, ...array2];",
      },
      {
        _id: uuid(),
        question: "What will the following code output?",
        code_snippet:
          "https://carbon.now.sh/embed?bg=rgba%28187%2C187%2C187%2C1%29&t=one-dark&wt=sharp&l=auto&width=680&ds=false&dsyoff=3px&dsblur=13px&wc=false&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%2520name%2520%253D%2520%2522Dave%2522%253B%250Aconst%2520age%2520%253D%252040%253B%250Aconst%2520myData%2520%253D%2520%257B%2520name%252C%2520age%2520%257D%253B%250Aconsole.log%28myData%29%253B",
        options: [
          '{"Dave", 40}',
          '{name: "Dave", age: 40}',
          '{myData: {name: "Dave", age: 40}}',
          "None of the above",
        ],
        answer: '{name: "Dave", age: 40}',
      },
      {
        _id: uuid(),
        question: "What will the following code output?",
        code_snippet:
          "https://carbon.now.sh/embed?bg=rgba%28187%2C187%2C187%2C1%29&t=one-dark&wt=sharp&l=auto&width=680&ds=false&dsyoff=3px&dsblur=13px&wc=false&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%2520person%2520%253D%2520%257B%250A%2520%2520fullName%253A%2520function%2520%28city%252C%2520country%29%2520%257B%250A%2520%2520%2520%2520console.log%28firstName%2520%252B%2520%2522%2520%2522%2520%252B%2520lastName%2520%252B%2520%2522%252C%2522%2520%252B%2520city%2520%252B%2520%2522%252C%2522%2520%252B%2520country%29%253B%250A%2520%2520%257D%250A%257D%253B%250A%250Aconst%2520person1%2520%253D%2520%257B%250A%2520%2520firstName%253A%2520%2522John%2522%252C%250A%2520%2520lastName%253A%2520%2522Doe%2522%250A%257D%253B%250A%250Aperson.fullName.call%28person1%252C%2520%2522Oslo%2522%252C%2520%2522Norway%2522%29%253B",
        options: [
          "John Doe,Oslo,Norway",
          "Throw an error",
          "undefined undefined,Oslo,Norway",
          "None of the above",
        ],
        answer: "Throw an error",
      },
    ],
    catergoryName: "NeoQuiz cycle 2 (Set 4)",
  },
  {
    _id: uuid(),
    title: "Set 5",
    totalScore: 5,
    mcqs: [
      {
        _id: uuid(),
        question:
          "What is the correct way to add a class name to an element using JavaScript?",
        code_snippet: "",
        options: [
          'element.class.add("myclassname")',
          'element.classList.add("myclassname")',
          'element.add("myclassname")',
          "None of the above",
        ],
        answer: 'element.classList.add("myclassname")',
      },
      {
        _id: uuid(),
        question: "Which of the following it true about ‘let’ keyword.",
        code_snippet: "",
        options: [
          "Variables defined with let cannot be redeclared.",
          "Variables defined with let are globally scoped.",
          "Variables defined with let cannot be redefined.",
          "None of the above",
        ],
        answer: "Variables defined with let cannot be redeclared.",
      },
      {
        _id: uuid(),
        question: "What will be the output of the following code?",
        code_snippet:
          "https://carbon.now.sh/embed?bg=rgba%28187%2C187%2C187%2C1%29&t=one-dark&wt=sharp&l=auto&width=680&ds=false&dsyoff=3px&dsblur=13px&wc=false&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=var%2520obj1%2520%253D%2520%257B%250A%2520%2520%2520%2520address%2520%253A%2520%2522Mumbai%252C%2520India%2522%252C%250A%2520%2520%2520%2520getAddress%253Afunction%28%29%257B%250A%2520%2520%2520%2520console.log%28this.address%29%253B%250A%2520%2520%257D%250A%257D%250A%250Avar%2520getAddress%2520%253D%2520obj1.getAddress%253B%250Avar%2520obj2%2520%253D%2520%257Bname%253A%2522akshay%2522%257D%253B%250Aobj2.getAddress%28%29%253B",
        options: [
          "Throws an error",
          "akshay",
          "Mumbai, India",
          "None of the above",
        ],
        answer: "Throws an error",
      },
      {
        _id: uuid(),
        question:
          "Which of the following is true about the following string methods?",
        code_snippet: "",
        options: [
          "slice() joins two or more strings.",
          "slice() method replaces a specified value with another value in a string.",
          "slice() extracts a part of a string and returns the extracted part in a new string.",
          "None of the above",
        ],
        answer:
          "slice() extracts a part of a string and returns the extracted part in a new string.",
      },
      {
        _id: uuid(),
        question: "Which of the following is true?",
        code_snippet: "",
        options: [
          "The indexOf() method returns an array with the index of (the position of) all the occurrences of a specified text in a string.",
          "The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string.",
          "There is no indexOf() method in javaScript.",
          "None of the above",
        ],
        answer:
          "The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string.",
      },
    ],
    catergoryName: "NeoQuiz cycle 3 (Set 5)",
  },
  {
    _id: uuid(),
    title: "Set 6",
    totalScore: 5,
    mcqs: [
      {
        _id: uuid(),
        question: "What will be the output of the following code?",
        code_snippet:
          "https://carbon.now.sh/embed?bg=rgba%28187%2C187%2C187%2C1%29&t=one-dark&wt=sharp&l=auto&width=680&ds=false&dsyoff=3px&dsblur=13px&wc=false&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=function%2520func%28num%29%2520%257B%250A%2520%2520return%2520num*num%253B%250A%257D%250A%250Aconsole.log%28func%287%29%29",
        options: ["36", "14", "49", "None of the above"],
        answer: "49",
      },
      {
        _id: uuid(),
        question:
          'Consider the following code. What is the correct way to add this text "This is a new paragraph." to the paragraph element?',
        code_snippet:
          "https://carbon.now.sh/embed?bg=rgba%28187%2C187%2C187%2C1%29&t=one-dark&wt=sharp&l=auto&width=680&ds=false&dsyoff=3px&dsblur=13px&wc=false&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%2520para%2520%253D%2520document.createElement%28%2522p%2522%29%253B%250Aconst%2520node%2520%253D%2520document.createTextNode%28%2522This%2520is%2520a%2520new%2520paragraph.%2522%29%253B",
        options: [
          "para.addNode(node);",
          "para.appendChild(node);",
          "para.child(node);",
          "None of the above",
        ],
        answer: "para.appendChild(node);",
      },
      {
        _id: uuid(),
        question: "Select the option which is false about React Hooks.",
        code_snippet:
          "https://carbon.now.sh/embed?bg=rgba%28187%2C187%2C187%2C1%29&t=one-dark&wt=sharp&l=auto&width=680&ds=false&dsyoff=3px&dsblur=13px&wc=false&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=var%2520obj1%2520%253D%2520%257B%250A%2520%2520%2520%2520address%2520%253A%2520%2522Mumbai%252C%2520India%2522%252C%250A%2520%2520%2520%2520getAddress%253Afunction%28%29%257B%250A%2520%2520%2520%2520console.log%28this.address%29%253B%250A%2520%2520%257D%250A%257D%250A%250Avar%2520getAddress%2520%253D%2520obj1.getAddress%253B%250Avar%2520obj2%2520%253D%2520%257Bname%253A%2522akshay%2522%257D%253B%250Aobj2.getAddress%28%29%253B",
        options: [
          "Hooks don’t work inside classes.",
          "useStatus and useProps are built-in react Hooks.",
          "Hooks are a new release in React 16.8",
          "None of the above",
        ],
        answer: "useStatus and useProps are built-in react Hooks.",
      },
      {
        _id: uuid(),
        question: "Select the option that is false about React.",
        code_snippet: "",
        options: [
          "It can be rendered on the server.",
          "It uses the real DOM instead of the Virtual DOM.",
          "React is a library.",
          "None of the above",
        ],
        answer: "It uses the real DOM instead of the Virtual DOM.",
      },
      {
        _id: uuid(),
        question: "What does <Link> component do in React Router?",
        code_snippet: "",
        options: [
          "It is used to navigate to a particular URL and the view is re-rendered without a browser refresh.",
          "It is used to navigate to a particular URL and the view is re-rendered with a browser refresh.",
          "When Link is clicked the components are rendered even though the prop path does not match the current URL.",
          "None of the above",
        ],
        answer:
          "It is used to navigate to a particular URL and the view is re-rendered without a browser refresh.",
      },
    ],
    catergoryName: "NeoQuiz cycle 3 (Set 6)",
  },
  {
    _id: uuid(),
    title: "Set 7",
    totalScore: 5,
    mcqs: [
      {
        _id: uuid(),
        question: "What will be the output of the following code?",
        code_snippet:
          "https://carbon.now.sh/embed?bg=rgba%28187%2C187%2C187%2C1%29&t=one-dark&wt=sharp&l=auto&width=680&ds=false&dsyoff=3px&dsblur=13px&wc=false&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%28function%28%29%2520%257B%250A%2509var%2520objA%2520%253D%2520new%2520Object%28%257Bfoo%253A%2520%2522foo%2522%257D%29%253B%250A%2509var%2520objB%2520%253D%2520new%2520Object%28%257Bfoo%253A%2520%2522foo%2522%257D%29%253B%250A%2509console.log%28objA%2520%253D%253D%2520objB%29%253B%250A%2509console.log%28objA%2520%253D%253D%253D%2520objB%29%253B%250A%257D%28%29%29%253B",
        options: [
          "false true",
          "false false",
          "true false",
          "None of the above",
        ],
        answer: "false false",
      },
      {
        _id: uuid(),
        question: "What will be the output of the following code?",
        code_snippet:
          "https://carbon.now.sh/embed?bg=rgba%28187%2C187%2C187%2C1%29&t=one-dark&wt=sharp&l=auto&width=680&ds=false&dsyoff=3px&dsblur=13px&wc=false&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=console.log%2810%2520%253D%253D%2520%255B10%255D%29%253B%250Aconsole.log%2810%2520%253D%253D%2520%255B%255B%255B%255B%255B%255B%255B10%255D%255D%255D%255D%255D%255D%255D%29%253B",
        options: [
          "True, True",
          "True, False",
          "False, False",
          "None of the above",
        ],
        answer: "True, True",
      },
      {
        _id: uuid(),
        question: "What will be the output of the following code?",
        code_snippet:
          "https://carbon.now.sh/embed?bg=rgba%28187%2C187%2C187%2C1%29&t=one-dark&wt=sharp&l=auto&width=680&ds=false&dsyoff=3px&dsblur=13px&wc=false&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=console.log%2810%2520%252B%2520%252210%2522%29%253B%250Aconsole.log%2810%2520-%2520%252210%2522%29%253B",
        options: ["20, 0", "1010, 0", "1010, 10-10", "None of the above"],
        answer: "1010, 0",
      },
      {
        _id: uuid(),
        question: "What will be the output of the following code?",
        code_snippet:
          "https://carbon.now.sh/embed?bg=rgba%28187%2C187%2C187%2C1%29&t=one-dark&wt=sharp&l=auto&width=680&ds=false&dsyoff=3px&dsblur=13px&wc=false&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=console.log%28%255B1%252C%25202%255D%2520%252B%2520%255B3%252C%25204%255D%29%253B",
        options: ["[1,2,3,4]", "[1,2][3,4]", "1,23,4", "None of the above"],
        answer: "1,23,4",
      },
      {
        _id: uuid(),
        question: "What will be the output of the following code?",
        code_snippet:
          "https://carbon.now.sh/embed?bg=rgba%28187%2C187%2C187%2C1%29&t=one-dark&wt=sharp&l=auto&width=680&ds=false&dsyoff=3px&dsblur=13px&wc=false&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=console.log%28NaN%2520%253D%253D%253D%2520NaN%29%253B",
        options: ["true", "false", "throws error", "None of the above"],
        answer: "false",
      },
    ],
    catergoryName: "NeoQuiz cycle 4 (Set 7)",
  },
  {
    _id: uuid(),
    title: "Set 8",
    totalScore: 5,
    mcqs: [
      {
        _id: uuid(),
        question: "What will be the output of the following code?",
        code_snippet:
          "https://carbon.now.sh/embed?bg=rgba%28187%2C187%2C187%2C1%29&t=one-dark&wt=sharp&l=auto&width=680&ds=false&dsyoff=3px&dsblur=13px&wc=false&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%28function%2520greetNewCustomer%28%29%2520%257B%250A%2509console.log%28%27Hello%2520%27%2520%252B%2520this.name%29%253B%250A%257D.bind%28%257B%250A%2509name%253A%2520%27John%27%250A%257D%29%28%29%29%253B",
        options: [
          "Throws Error",
          "Hello John",
          "undefined",
          "None of the above",
        ],
        answer: "Hello John",
      },
      {
        _id: uuid(),
        question: "What will be the output of the following code?",
        code_snippet:
          "https://carbon.now.sh/embed?bg=rgba%28187%2C187%2C187%2C1%29&t=one-dark&wt=sharp&l=auto&width=680&ds=false&dsyoff=3px&dsblur=13px&wc=false&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=function%2520getNumber%28%29%2520%257B%250A%2520%2520return%25202%252C%25204%252C%25205%253B%250A%257D%250A%250Avar%2520numb%2520%253D%2520getNumber%28%29%253B%250Aconsole.log%28numb%29%253B",
        options: ["5", "2, 4, 5", "2", "None of the above"],
        answer: "5",
      },
      {
        _id: uuid(),
        question: "What will be the output of the following code?",
        code_snippet:
          "https://carbon.now.sh/embed?bg=rgba%28187%2C187%2C187%2C1%29&t=one-dark&wt=sharp&l=auto&width=680&ds=false&dsyoff=3px&dsblur=13px&wc=false&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=function%2520mul%28x%29%2520%257B%250A%2520%2520return%2520function%2520%28y%29%2520%257B%250A%2520%2520%2520%2520return%2520%255B%250A%2520%2520%2520%2520%2520%2520x%2520*%2520y%252C%250A%2520%2520%2520%2520%2520%2520function%2520%28z%29%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520return%2520x%2520*%2520y%2520%252B%2520z%253B%250A%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%255D%253B%250A%2520%2520%257D%253B%250A%257D%250A%250Aconsole.log%28mul%282%29%283%29%255B0%255D%29%253B",
        options: ["5", "6", "0", "None of the above"],
        answer: "6",
      },
      {
        _id: uuid(),
        question: "What will be the output of the following code?",
        code_snippet:
          "https://carbon.now.sh/embed?bg=rgba%28187%2C187%2C187%2C1%29&t=one-dark&wt=sharp&l=auto&width=680&ds=false&dsyoff=3px&dsblur=13px&wc=false&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=console.log%28%255B1%252C%25202%255D%2520%252B%2520%255B3%252C%25204%255D%29%253B",
        options: ["[1,2,3,4]", "[1,2][3,4]", "1,23,4", "None of the above"],
        answer: "1,23,4",
      },
      {
        _id: uuid(),
        question: "What will be the output of the following code?",
        code_snippet:
          "https://carbon.now.sh/embed?bg=rgba%28187%2C187%2C187%2C1%29&t=one-dark&wt=sharp&l=auto&width=680&ds=false&dsyoff=3px&dsblur=13px&wc=false&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=function%2520getName1%28%29%2520%257B%250A%2520%2520console.log%28this.name%29%253B%250A%257D%250A%250Alet%2520personObj%2520%253D%2520%257B%250A%2520%2520name%253A%2520%2522Joy%2522%252C%250A%2520%2520print%253A%2520getName1%250A%257D%253B%250A%250ApersonObj.print%28%29%253B",
        options: ["Throws Error", "undefined", "Joy", "None of the above"],
        answer: "Joy",
      },
    ],
    catergoryName: "NeoQuiz cycle 4 (Set 8)",
  },
];
