DOCUMENTATION FILE:

PROJECT TITLE: Student Academic Portal
PROJECT DESCRIPTION: A responsive and interactive web-based dashboard designed for university students to track their academic progress, calculate GPA, and manage course assessments. 
                     The project features a modern user interface with a distinctive brown aesthetic, utilizing dynamic charts and real-time calculations.
WEBSITE NAME: MyGrade

FEATURES INCLUDED: 
1. Interactive Dashboard
   Visual Analytics: Integrated **Chart.js** to display GPA progress (Line Chart) and Grade Distribution (Doughnut Chart).
   Responsive Sidebar: Collapsible navigation menu for better screen real estate on mobile devices.
   
2. Dynamic GPA Calculator
   Custom Calculation: Users can add unlimited subject rows dynamically.
   Real-time Logic: Automatically calculates GPA based on input Credit Hours and Grades.

3. Assessment & History Tracking
   Status Badges: Visual indicators for "Ongoing" and "Completed" assignments.
   Semester History: Organized view of previous semester results with GPA highlighting.

4. User Authentication (Simulation)
   Login Page: Features a blurred background effect and validation logic.
   Secure Routing: Simple redirection logic to preventing access without "logging in" (Frontend simulation).

INSTRUCTION TO TEST LOGIN:
(Since this is a frontend-based project, the authentication is handled via JavaScript in `main.js`. To access the dashboard, please use the following demo credentials:)

1.  Open `index.html` in your browser.
2.  Enter the following details:
    |  Student ID = `2025180221`  |
    |  Password = `123456`        |

3.  Click Login to be redirected to the Dashboard.

FRAMEWORK & LIBRARIES USED: 
(This project was built using the following technologies:)
Core:
    * ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) **HTML5** - Page structure.
    * ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) **CSS3** - Custom styling (Brown/UiTM Theme).
    * ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) **Vanilla JavaScript (ES6)** - Logic for calculator, login, and DOM manipulation.

Libraries:
    * [Chart.js](https://www.chartjs.org/) - For rendering the academic graphs.
    * [Bootstrap 5](https://getbootstrap.com/) - For the grid system, responsive layout, and base components.
    * [Google Fonts](https://fonts.google.com/) - Typography (Poppins font family).
