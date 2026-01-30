import React, { useState } from 'react';

const LabLesson = ({ labNum, user, onNavigate, onExerciseComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showExercise, setShowExercise] = useState(false);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const labData = {
    1: {
      title: "Introduction to HTML",
      titleAr: "مقدمة في HTML",
      icon: "🌐",
      videos: [
        { id: "UB1O30fR-EE", title: "HTML Crash Course for Beginners" },
        { id: "qz0aGYrrlhU", title: "HTML Tutorial for Beginners" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 1", text: "Learn the basics of HTML - the language that structures web pages." },
        { type: "concept", title: "What is HTML?", text: "HTML (HyperText Markup Language) is the standard language for creating web pages.", points: ["HTML describes the structure of a web page", "HTML consists of elements (tags)", "Browsers read HTML and display content", "HTML files have .html extension"] },
        { type: "code", title: "Basic HTML Structure", code: "<!DOCTYPE html>\n<html>\n<head>\n    <title>My First Page</title>\n</head>\n<body>\n    <h1>Hello World!</h1>\n    <p>This is my first web page.</p>\n</body>\n</html>", text: "Every HTML page has this basic structure" },
        { type: "concept", title: "HTML Tags Explained", text: "Let's understand each part:", points: ["<!DOCTYPE html> - Declares HTML5 document", "<html> - Root element of the page", "<head> - Contains meta information", "<title> - Title shown in browser tab", "<body> - Contains visible content", "<h1> - Heading (largest)", "<p> - Paragraph"] },
        { type: "handson", title: "Try It Yourself", text: "Create your first HTML file:", steps: ["Open Notepad or VS Code", "Type the basic HTML structure", "Save as 'index.html'", "Double-click to open in browser"] }
      ],
      exercises: [
        { q: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"], correct: 0 },
        { q: "Which tag is the root of an HTML document?", options: ["<body>", "<head>", "<html>", "<root>"], correct: 2 },
        { q: "Where does the <title> tag go?", options: ["In <body>", "In <head>", "After </html>", "Before <!DOCTYPE>"], correct: 1 },
        { q: "What is the largest heading tag?", options: ["<h6>", "<h3>", "<h1>", "<heading>"], correct: 2 },
        { q: "Which tag creates a paragraph?", options: ["<paragraph>", "<text>", "<para>", "<p>"], correct: 3 }
      ]
    },
    2: {
      title: "HTML Elements & Tags",
      titleAr: "عناصر ووسوم HTML",
      icon: "📝",
      videos: [
        { id: "salY_Sm6mv4", title: "Learn HTML in 12 Minutes" },
        { id: "PlxWf493en4", title: "HTML Tags Tutorial" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 2", text: "Learn about common HTML elements for text, images, and links." },
        { type: "concept", title: "Text Elements", text: "HTML provides many tags for text formatting:", points: ["<h1> to <h6> - Headings (h1 largest, h6 smallest)", "<p> - Paragraphs", "<strong> - Bold text", "<em> - Italic text", "<br> - Line break", "<hr> - Horizontal line"] },
        { type: "code", title: "Links (Anchor Tags)", code: '<a href="https://google.com">Click Here</a>\n\n<a href="page2.html">Go to Page 2</a>\n\n<a href="#section1">Jump to Section</a>', text: "The <a> tag creates clickable links" },
        { type: "code", title: "Images", code: '<img src="photo.jpg" alt="My Photo">\n\n<img src="https://example.com/image.png" alt="Online Image" width="300">', text: "The <img> tag displays images. 'alt' describes the image." },
        { type: "code", title: "Lists", code: '<!-- Unordered List -->\n<ul>\n    <li>Item 1</li>\n    <li>Item 2</li>\n</ul>\n\n<!-- Ordered List -->\n<ol>\n    <li>First</li>\n    <li>Second</li>\n</ol>', text: "<ul> for bullets, <ol> for numbers, <li> for items" }
      ],
      exercises: [
        { q: "Which tag creates a link?", options: ["<link>", "<a>", "<href>", "<url>"], correct: 1 },
        { q: "What attribute specifies link destination?", options: ["src", "link", "href", "url"], correct: 2 },
        { q: "Which tag displays an image?", options: ["<image>", "<pic>", "<photo>", "<img>"], correct: 3 },
        { q: "What does 'alt' attribute do?", options: ["Adds link", "Describes image", "Changes size", "Adds border"], correct: 1 },
        { q: "Which creates a numbered list?", options: ["<ul>", "<nl>", "<ol>", "<list>"], correct: 2 }
      ]
    },
    3: {
      title: "HTML Forms",
      titleAr: "نماذج HTML",
      icon: "📋",
      videos: [
        { id: "fNcJuPIZ2WE", title: "HTML Forms Tutorial" },
        { id: "frAGrGN00OA", title: "HTML Form Elements" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 3", text: "Learn to create interactive forms for user input." },
        { type: "code", title: "Basic Form Structure", code: '<form action="/submit" method="POST">\n    <label for="name">Name:</label>\n    <input type="text" id="name" name="name">\n    \n    <button type="submit">Submit</button>\n</form>', text: "Forms collect user data and send it to a server" },
        { type: "concept", title: "Input Types", text: "HTML5 provides many input types:", points: ["text - Regular text", "password - Hidden characters", "email - Email validation", "number - Numbers only", "date - Date picker", "checkbox - Multiple choices", "radio - Single choice", "submit - Submit button"] },
        { type: "code", title: "Form Example", code: '<form>\n    <input type="text" placeholder="Enter name">\n    <input type="email" placeholder="Enter email">\n    <input type="password" placeholder="Password">\n    \n    <select>\n        <option>Option 1</option>\n        <option>Option 2</option>\n    </select>\n    \n    <textarea rows="4">Enter message</textarea>\n    \n    <button type="submit">Send</button>\n</form>', text: "Complete form with various input types" },
        { type: "concept", title: "Form Attributes", text: "Important form attributes:", points: ["action - Where to send data", "method - GET or POST", "name - Identifies input field", "placeholder - Hint text", "required - Must fill", "disabled - Cannot edit"] }
      ],
      exercises: [
        { q: "Which tag creates a form?", options: ["<input>", "<form>", "<submit>", "<field>"], correct: 1 },
        { q: "Input type for hidden password?", options: ["hidden", "secret", "password", "private"], correct: 2 },
        { q: "Which creates a dropdown?", options: ["<dropdown>", "<list>", "<option>", "<select>"], correct: 3 },
        { q: "Multi-line text input uses:", options: ["<input>", "<text>", "<textarea>", "<multiline>"], correct: 2 },
        { q: "What does 'required' do?", options: ["Makes optional", "Must fill before submit", "Adds border", "Changes color"], correct: 1 }
      ]
    },
    4: {
      title: "Introduction to CSS",
      titleAr: "مقدمة في CSS",
      icon: "🎨",
      videos: [
        { id: "yfoY53QXEnI", title: "CSS Crash Course for Beginners" },
        { id: "1PnVor36_40", title: "Learn CSS in 20 Minutes" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 4", text: "Learn CSS to style and design your web pages." },
        { type: "concept", title: "What is CSS?", text: "CSS (Cascading Style Sheets) controls how HTML elements look.", points: ["Colors and backgrounds", "Fonts and text styling", "Spacing and layout", "Animations and effects"] },
        { type: "code", title: "CSS Syntax", code: "selector {\n    property: value;\n    property: value;\n}\n\n/* Example */\nh1 {\n    color: blue;\n    font-size: 24px;\n}", text: "CSS rules have a selector and declarations" },
        { type: "code", title: "3 Ways to Add CSS", code: '/* 1. Inline CSS */\n<p style="color: red;">Red text</p>\n\n/* 2. Internal CSS */\n<style>\n    p { color: red; }\n</style>\n\n/* 3. External CSS (best) */\n<link rel="stylesheet" href="style.css">', text: "External CSS is the recommended method" },
        { type: "concept", title: "Common CSS Properties", text: "Properties you'll use often:", points: ["color - Text color", "background-color - Background", "font-size - Text size", "font-family - Font type", "margin - Outside spacing", "padding - Inside spacing", "border - Element border"] }
      ],
      exercises: [
        { q: "What does CSS stand for?", options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style System", "Colorful Style Sheets"], correct: 1 },
        { q: "Which is the best way to add CSS?", options: ["Inline", "Internal", "External file", "JavaScript"], correct: 2 },
        { q: "CSS property for text color?", options: ["text-color", "font-color", "color", "foreground"], correct: 2 },
        { q: "What does 'margin' control?", options: ["Inside spacing", "Outside spacing", "Border width", "Text size"], correct: 1 },
        { q: "CSS selector for all <p> tags?", options: [".p", "#p", "p", "*p"], correct: 2 }
      ]
    },
    5: {
      title: "CSS Box Model & Layout",
      titleAr: "نموذج الصندوق والتخطيط",
      icon: "📦",
      videos: [
        { id: "rIO5326FgPE", title: "CSS Box Model Explained" },
        { id: "M6coJNLFBWI", title: "Learn CSS Box Model" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 5", text: "Understand the CSS Box Model - foundation of web layout." },
        { type: "concept", title: "The Box Model", text: "Every HTML element is a box with 4 parts:", points: ["Content - The actual content (text, image)", "Padding - Space inside the border", "Border - Line around the element", "Margin - Space outside the border"] },
        { type: "code", title: "Box Model CSS", code: ".box {\n    width: 200px;\n    height: 100px;\n    padding: 20px;\n    border: 2px solid black;\n    margin: 10px;\n    background-color: lightblue;\n}", text: "Total width = width + padding + border + margin" },
        { type: "code", title: "Margin & Padding Shortcuts", code: "/* All sides */\npadding: 10px;\n\n/* Top/Bottom, Left/Right */\npadding: 10px 20px;\n\n/* Top, Right, Bottom, Left */\npadding: 10px 20px 15px 25px;\n\n/* Individual sides */\nmargin-top: 10px;\nmargin-left: 20px;", text: "Multiple ways to set spacing" },
        { type: "code", title: "Display Property", code: "/* Block - full width, new line */\ndisplay: block;\n\n/* Inline - same line, no width/height */\ndisplay: inline;\n\n/* Inline-block - same line with width/height */\ndisplay: inline-block;\n\n/* None - hides element */\ndisplay: none;", text: "Display controls how elements flow" }
      ],
      exercises: [
        { q: "Box Model order from inside out?", options: ["Margin, Border, Padding, Content", "Content, Padding, Border, Margin", "Content, Margin, Padding, Border", "Border, Padding, Content, Margin"], correct: 1 },
        { q: "Padding is space:", options: ["Outside border", "Inside border", "Between elements", "In the content"], correct: 1 },
        { q: "padding: 10px 20px; means:", options: ["All sides 10px 20px", "Top/Bottom 10px, Left/Right 20px", "Top 10px, Bottom 20px", "Left 10px, Right 20px"], correct: 1 },
        { q: "display: none; does what?", options: ["Makes transparent", "Hides element completely", "Removes border", "Centers element"], correct: 1 },
        { q: "Which display takes full width?", options: ["inline", "inline-block", "block", "flex"], correct: 2 }
      ]
    },
    6: {
      title: "CSS Flexbox",
      titleAr: "CSS Flexbox",
      icon: "📐",
      videos: [
        { id: "fYq5PXgSsbE", title: "Flexbox CSS in 20 Minutes" },
        { id: "JJSoEo8JSnc", title: "Flexbox Tutorial" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 6", text: "Master Flexbox for easy and powerful layouts." },
        { type: "concept", title: "What is Flexbox?", text: "Flexbox is a CSS layout method for arranging items.", points: ["Easy alignment (center, space-between)", "Flexible sizing", "Row or column direction", "Responsive design"] },
        { type: "code", title: "Enable Flexbox", code: ".container {\n    display: flex;\n}\n\n/* This makes all direct children flex items */", text: "Add display: flex to the parent container" },
        { type: "code", title: "Flexbox Properties", code: ".container {\n    display: flex;\n    \n    /* Direction */\n    flex-direction: row; /* or column */\n    \n    /* Horizontal alignment */\n    justify-content: center;\n    /* flex-start, flex-end, space-between, space-around */\n    \n    /* Vertical alignment */\n    align-items: center;\n    /* flex-start, flex-end, stretch */\n    \n    /* Wrap items */\n    flex-wrap: wrap;\n}", text: "Common flexbox container properties" },
        { type: "code", title: "Center Everything", code: ".center-box {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n}\n\n/* This centers content both horizontally and vertically */", text: "The easiest way to center content!" }
      ],
      exercises: [
        { q: "How to enable flexbox?", options: ["display: flexbox", "display: flex", "flex: on", "flexbox: true"], correct: 1 },
        { q: "flex-direction: column arranges items:", options: ["Left to right", "Right to left", "Top to bottom", "Randomly"], correct: 2 },
        { q: "justify-content aligns items:", options: ["Vertically", "Horizontally (main axis)", "Diagonally", "In a circle"], correct: 1 },
        { q: "space-between does what?", options: ["Adds space at start", "Equal space between items", "Removes all space", "Centers items"], correct: 1 },
        { q: "align-items: center does what?", options: ["Centers horizontally", "Centers vertically (cross axis)", "Centers both", "Aligns to top"], correct: 1 }
      ]
    },
    7: {
      title: "Introduction to JavaScript",
      titleAr: "مقدمة في JavaScript",
      icon: "⚡",
      videos: [
        { id: "W6NZfCO5SIk", title: "JavaScript Tutorial for Beginners" },
        { id: "hdI2bqOjy3c", title: "JavaScript Crash Course" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 7", text: "Learn JavaScript to make your web pages interactive." },
        { type: "concept", title: "What is JavaScript?", text: "JavaScript is a programming language for web pages.", points: ["Makes pages interactive", "Responds to user actions", "Can change HTML and CSS", "Runs in the browser"] },
        { type: "code", title: "Adding JavaScript", code: '<!-- Method 1: Internal -->\n<script>\n    alert("Hello World!");\n</script>\n\n<!-- Method 2: External (recommended) -->\n<script src="script.js"></script>', text: "Add JavaScript before </body>" },
        { type: "code", title: "Variables", code: '// let - can change\nlet name = "John";\nlet age = 25;\n\n// const - cannot change\nconst PI = 3.14;\n\n// Display in console\nconsole.log(name);\nconsole.log("Age is " + age);', text: "Use let for variables, const for constants" },
        { type: "code", title: "Functions", code: '// Define function\nfunction greet(name) {\n    return "Hello, " + name + "!";\n}\n\n// Call function\nlet message = greet("Ahmed");\nconsole.log(message); // Hello, Ahmed!\n\n// Arrow function\nconst add = (a, b) => a + b;', text: "Functions are reusable blocks of code" }
      ],
      exercises: [
        { q: "JavaScript makes pages:", options: ["Slower", "Interactive", "Colorful", "Bigger"], correct: 1 },
        { q: "Which declares a variable that can change?", options: ["const", "let", "var", "fixed"], correct: 1 },
        { q: "How to show something in console?", options: ["print()", "console.log()", "display()", "show()"], correct: 1 },
        { q: "What is a function?", options: ["A color", "Reusable code block", "A variable type", "An HTML tag"], correct: 1 },
        { q: "Where to add <script> tag?", options: ["In <head> only", "Before </body>", "After </html>", "In <title>"], correct: 1 }
      ]
    },
    8: {
      title: "JavaScript DOM Manipulation",
      titleAr: "التعامل مع DOM",
      icon: "🔧",
      videos: [
        { id: "0ik6X4DJKCc", title: "JavaScript DOM Tutorial" },
        { id: "y17RuWkWdn8", title: "DOM Manipulation" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 8", text: "Learn to change HTML content with JavaScript." },
        { type: "concept", title: "What is the DOM?", text: "DOM (Document Object Model) represents the page structure.", points: ["HTML as a tree of objects", "JavaScript can access/modify it", "Change content, styles, structure", "React to user actions"] },
        { type: "code", title: "Selecting Elements", code: '// By ID\nlet title = document.getElementById("title");\n\n// By class (returns collection)\nlet items = document.getElementsByClassName("item");\n\n// By CSS selector (modern way)\nlet btn = document.querySelector(".btn");\nlet allBtns = document.querySelectorAll(".btn");', text: "First, select the element you want to change" },
        { type: "code", title: "Changing Content", code: '// Change text\nelement.textContent = "New text";\n\n// Change HTML\nelement.innerHTML = "<strong>Bold text</strong>";\n\n// Change style\nelement.style.color = "red";\nelement.style.fontSize = "20px";\n\n// Add/remove class\nelement.classList.add("active");\nelement.classList.remove("hidden");', text: "Methods to modify elements" },
        { type: "code", title: "Example", code: '<h1 id="title">Hello</h1>\n<button onclick="changeTitle()">Click Me</button>\n\n<script>\nfunction changeTitle() {\n    let title = document.getElementById("title");\n    title.textContent = "Changed!";\n    title.style.color = "blue";\n}\n</script>', text: "Complete example of DOM manipulation" }
      ],
      exercises: [
        { q: "DOM stands for:", options: ["Document Object Model", "Data Object Method", "Digital Output Mode", "Document Order Method"], correct: 0 },
        { q: "Select element by ID:", options: ["querySelector()", "getElementById()", "getElement()", "selectById()"], correct: 1 },
        { q: "Change element text:", options: ["element.text", "element.textContent", "element.content", "element.value"], correct: 1 },
        { q: "Change element style:", options: ["element.css.color", "element.style.color", "element.color", "element.setStyle()"], correct: 1 },
        { q: "Add a CSS class:", options: ["element.addClass()", "element.class.add()", "element.classList.add()", "element.addClassName()"], correct: 2 }
      ]
    },
    9: {
      title: "JavaScript Events",
      titleAr: "أحداث JavaScript",
      icon: "🎯",
      videos: [
        { id: "YiOlaiscqDY", title: "JavaScript Events Explained" },
        { id: "e57ReoUn6kM", title: "Event Listeners Tutorial" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 9", text: "Learn to respond to user actions with events." },
        { type: "concept", title: "What are Events?", text: "Events are actions that happen on a web page.", points: ["click - User clicks element", "mouseover - Mouse hovers", "keydown - Key pressed", "submit - Form submitted", "load - Page finished loading"] },
        { type: "code", title: "Event Listeners", code: '// Method 1: addEventListener (recommended)\nlet btn = document.querySelector("#myBtn");\n\nbtn.addEventListener("click", function() {\n    alert("Button clicked!");\n});\n\n// Method 2: onclick attribute\n<button onclick="doSomething()">Click</button>', text: "addEventListener is the modern approach" },
        { type: "code", title: "Event Object", code: 'btn.addEventListener("click", function(event) {\n    // event contains info about what happened\n    console.log(event.target); // element clicked\n    console.log(event.type); // "click"\n    \n    event.preventDefault(); // stop default action\n});', text: "The event object gives you details" },
        { type: "code", title: "Form Events Example", code: '<form id="myForm">\n    <input type="text" id="name">\n    <button type="submit">Submit</button>\n</form>\n\n<script>\ndocument.getElementById("myForm")\n    .addEventListener("submit", function(e) {\n        e.preventDefault(); // stop page refresh\n        let name = document.getElementById("name").value;\n        alert("Hello, " + name);\n    });\n</script>', text: "Handle form submission with JavaScript" }
      ],
      exercises: [
        { q: "Which event fires on button click?", options: ["press", "click", "push", "tap"], correct: 1 },
        { q: "Modern way to add event:", options: ["onclick", "addEventListener", "attachEvent", "onEvent"], correct: 1 },
        { q: "event.preventDefault() does:", options: ["Prevents all events", "Stops default action", "Removes element", "Reloads page"], correct: 1 },
        { q: "event.target is:", options: ["Event name", "Element that triggered event", "Event time", "Parent element"], correct: 1 },
        { q: "Form submit event name:", options: ["send", "post", "submit", "form"], correct: 2 }
      ]
    },
    10: {
      title: "Building a Complete Web Page",
      titleAr: "بناء صفحة ويب كاملة",
      icon: "🚀",
      videos: [
        { id: "G3e-cpL7ofc", title: "Build a Website from Scratch" },
        { id: "p0bGHP-PXD4", title: "Complete Web Project Tutorial" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 10", text: "Put it all together and build a complete web page!" },
        { type: "concept", title: "Project Structure", text: "Organize your files properly:", points: ["index.html - Main HTML file", "style.css - All CSS styles", "script.js - JavaScript code", "images/ - Image folder"] },
        { type: "code", title: "HTML Structure", code: '<!DOCTYPE html>\n<html>\n<head>\n    <title>My Website</title>\n    <link rel="stylesheet" href="style.css">\n</head>\n<body>\n    <header>\n        <nav>Navigation here</nav>\n    </header>\n    \n    <main>\n        <section>Content here</section>\n    </main>\n    \n    <footer>Footer here</footer>\n    \n    <script src="script.js"></script>\n</body>\n</html>', text: "Semantic HTML structure" },
        { type: "code", title: "CSS Layout", code: '* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: Arial, sans-serif;\n}\n\nheader {\n    background: #333;\n    color: white;\n    padding: 1rem;\n}\n\nmain {\n    max-width: 1200px;\n    margin: 0 auto;\n    padding: 2rem;\n}\n\nfooter {\n    background: #333;\n    color: white;\n    text-align: center;\n    padding: 1rem;\n}', text: "Basic page styling" },
        { type: "concept", title: "Best Practices", text: "Follow these tips:", points: ["Use semantic HTML (header, nav, main, footer)", "Keep CSS organized", "Comment your code", "Test on different browsers", "Make it responsive (mobile-friendly)"] }
      ],
      exercises: [
        { q: "Which file contains styles?", options: ["index.html", "script.js", "style.css", "images/"], correct: 2 },
        { q: "Semantic tag for navigation:", options: ["<div>", "<nav>", "<menu>", "<links>"], correct: 1 },
        { q: "box-sizing: border-box does:", options: ["Adds border", "Includes padding in width", "Removes margins", "Centers element"], correct: 1 },
        { q: "Best place for <script> tag:", options: ["In <head>", "Start of <body>", "Before </body>", "After </html>"], correct: 2 },
        { q: "max-width: 1200px does:", options: ["Minimum width", "Exact width", "Maximum width limit", "No effect"], correct: 2 }
      ]
    }
  };

  const lab = labData[labNum];
  if (!lab) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center text-white">
          <p>Lab {labNum} coming soon!</p>
          <button onClick={() => onNavigate('home')} className="mt-4 px-6 py-2 bg-blue-600 rounded-lg">Back</button>
        </div>
      </div>
    );
  }

  const totalSteps = lab.content.length + 2;

  const handleAnswer = (qi, ai) => { if (!submitted) setAnswers({...answers, [qi]: ai}); };

  const handleSubmit = () => {
    let c = 0;
    lab.exercises.forEach((e, i) => { if (answers[i] === e.correct) c++; });
    const s = Math.round((c / lab.exercises.length) * 100);
    setScore(s);
    setSubmitted(true);
    onExerciseComplete(labNum, s);
  };

  if (showExercise) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900 text-white p-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold">Lab {labNum} Exercise</h2>
          </div>
          {!submitted ? (
            <div className="space-y-6">
              {lab.exercises.map((ex, i) => (
                <div key={i} className="bg-slate-700/30 rounded-xl p-4">
                  <p className="text-white font-semibold mb-3">{i+1}. {ex.q}</p>
                  <div className="space-y-2">
                    {ex.options.map((opt, j) => (
                      <button key={j} onClick={() => handleAnswer(i, j)} className={`w-full text-left px-4 py-2 rounded-lg ${answers[i] === j ? 'bg-blue-600' : 'bg-slate-800 hover:bg-slate-700'}`}>
                        {String.fromCharCode(65+j)}. {opt}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              <button onClick={handleSubmit} disabled={Object.keys(answers).length < 5} className="w-full py-3 bg-emerald-600 rounded-xl font-bold disabled:opacity-50">Submit</button>
            </div>
          ) : (
            <div className="text-center">
              <div className={`p-8 rounded-2xl mb-6 ${score >= 60 ? 'bg-emerald-900/30' : 'bg-red-900/30'}`}>
                <p className="text-5xl mb-2">{score >= 60 ? '🎉' : '😔'}</p>
                <p className="text-4xl font-bold">{score}%</p>
              </div>
              <div className="space-y-3 mb-6">
                {lab.exercises.map((ex, i) => (
                  <div key={i} className={`p-3 rounded-lg text-left ${answers[i] === ex.correct ? 'bg-emerald-900/30' : 'bg-red-900/30'}`}>
                    <p>{i+1}. {ex.q}</p>
                    <p className="text-sm">{answers[i] === ex.correct ? '✓ Correct' : `✗ Answer: ${ex.options[ex.correct]}`}</p>
                  </div>
                ))}
              </div>
              <button onClick={() => onNavigate('home')} className="px-6 py-3 bg-blue-600 rounded-xl">Back to Course</button>
            </div>
          )}
        </div>
      </div>
    );
  }

  const renderContent = () => {
    if (currentStep === lab.content.length) {
      return (
        <div className="p-6">
          <h2 className="text-2xl font-bold text-center mb-6">Video Tutorials</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {lab.videos.map((v, i) => (
              <div key={i} className="bg-slate-700/30 rounded-xl overflow-hidden">
                <div className="aspect-video">
                  <iframe src={`https://www.youtube.com/embed/${v.id}`} title={v.title} className="w-full h-full" allowFullScreen></iframe>
                </div>
                <p className="p-3 font-semibold">{v.title}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }
    if (currentStep === lab.content.length + 1) {
      return (
        <div className="p-6 text-center">
          <p className="text-5xl mb-4">✅</p>
          <h2 className="text-2xl font-bold mb-6">Lab Complete!</h2>
          <button onClick={() => setShowExercise(true)} className="px-8 py-4 bg-emerald-600 rounded-xl font-bold text-lg">Start Exercise</button>
        </div>
      );
    }
    const c = lab.content[currentStep];
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <span className="px-3 py-1 bg-blue-600/30 rounded-full text-blue-300 text-sm">{c.type === 'handson' ? '🛠️ Hands-On' : c.type === 'code' ? '💻 Code' : '📖 Concept'}</span>
          <h2 className="text-2xl font-bold mt-4">{c.title}</h2>
        </div>
        {c.text && <div className="bg-slate-700/30 rounded-xl p-6 mb-6"><p>{c.text}</p></div>}
        {c.points && <div className="bg-slate-700/30 rounded-xl p-6 mb-6">{c.points.map((p,i) => <p key={i} className="mb-2">✓ {p}</p>)}</div>}
        {c.code && <div className="bg-slate-900 rounded-xl p-6 mb-6 overflow-x-auto"><pre className="text-cyan-300 font-mono text-sm whitespace-pre-wrap">{c.code}</pre></div>}
        {c.steps && <div className="space-y-3">{c.steps.map((s,i) => <div key={i} className="flex gap-3 bg-slate-700/30 rounded-lg p-4"><span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">{i+1}</span><span>{s}</span></div>)}</div>}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900 text-white flex flex-col">
      <header className="bg-slate-800/80 border-b border-slate-700 p-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => onNavigate('home')} className="px-3 py-2 bg-slate-700 rounded-lg">← Back</button>
            <div>
              <h1 className="font-bold">Lab {labNum}: {lab.title}</h1>
              <p className="text-xs text-blue-300/70">{lab.titleAr}</p>
            </div>
          </div>
          <span className="text-3xl">{lab.icon}</span>
        </div>
      </header>
      <div className="bg-slate-800/50 border-b border-slate-700 px-4 py-2">
        <div className="max-w-6xl mx-auto">
          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 transition-all" style={{width: `${((currentStep+1)/totalSteps)*100}%`}}></div>
          </div>
        </div>
      </div>
      <div className="flex-1">{renderContent()}</div>
      <div className="bg-slate-800/80 border-t border-slate-700 p-4 sticky bottom-0">
        <div className="max-w-6xl mx-auto flex justify-between">
          <button onClick={() => setCurrentStep(Math.max(0, currentStep-1))} disabled={currentStep === 0} className={`px-6 py-2 rounded-lg ${currentStep === 0 ? 'bg-slate-700 text-slate-500' : 'bg-slate-700'}`}>← Previous</button>
          {currentStep < totalSteps - 1 ? (
            <button onClick={() => setCurrentStep(currentStep+1)} className="px-6 py-2 bg-blue-600 rounded-lg">Next →</button>
          ) : (
            <button onClick={() => setShowExercise(true)} className="px-6 py-2 bg-emerald-600 rounded-lg">Take Exercise</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LabLesson;
