# Kanban Board: Task Input and Status Validation System

## Overview

This project is continuation from Kanban Board UI Implementation. It involves implementing a JavaScript-based task entry system where users can input two tasks with complete details, ensuring data consistency and validation. The system will guide users through entering valid task titles, descriptions, and statuses, enforcing correct formatting while maintaining code clarity and maintainability.

## Tools

![Git](https://img.shields.io/badge/-Git-F05032?style=flat&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat-circle&logo=github)
![HTML5](https://img.shields.io/badge/-HTML5-black?style=flat-circle&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS3-black?style=flat-circle&logo=css3)
![MARKDOWN](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&amp;logo=markdown&amp;logoColor=white)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000)](#)

## Key Objectives

### Logic & User Interaction

- Ensure the JavaScript file is correctly linked to the HTML document.
- Prompt the user to enter details (title, description, status) for two separate tasks and store them in variables.
- Convert all status inputs to lowercase automatically for consistency.
- Validate the status input to allow only "todo", "doing", or "done" and repeatedly prompt the user until a valid status is entered.
- Display the title and status of completed tasks (status: "done") in the console.
- If no tasks are marked as "done", show a motivational message in the console: "No tasks completed, let's get to work!".

## Code Quality & Maintainability

- Use descriptive variable names to enhance readability and maintainability.
- Include clear comments explaining complex logic and functionality for easier understanding.

## Expected Outcome

A functional task entry system that ensures accurate data collection, validation, and structured storage while maintaining clean and well-documented code for easy future modifications.

**Prompt Input Example**

- The program must prompt users for task 1 title, descrition and status inputs, it must do the same for task 2 information

  ![title prompt](./explainer-images/title%20prompt.png)

**Invalid status**

- If the user enters a status other than `todo`, `doing` or `done`, the program must alert the user of this and return to prompting them to enter a status.

  ![invalid status](./explainer-images/invalid%20status.png)

**Console log**

- When there is a completed task:

  ![status](./explainer-images/completed%20task%20log.png)

- When there are no completed tasks:

  ![status](./explainer-images/no%20completed%20tasks%20log.png)

## Project Setup Instructions

  1. Clone your starter project folder (or create a new repo)
  2. Build your site using HTML, CSS and JavaScript
  3. Test it on different screen sizes
  4. Validate the title inputs
  4. Use Git to track your progress with frequent commits

## 🌐 Socials

[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/RainDrops88)  
[![LinkedIn](https://img.shields.io/badge/-LinkedIn-blue?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/emmanuel-mathonsi-300b33308/)  
📧 Email: [07942jerry@gmail.com]

## GitHub Stats

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=RainDrops88&theme=default&show_icons=true&hide_border=true&count_private=true)