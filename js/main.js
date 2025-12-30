/**
 * Main JavaScript file for Student Portal
 * Handles Sidebar, Charts, Login, and Calculator logic
 */

document.addEventListener("DOMContentLoaded", function() {
    
    // =========================================================
    // 1. Sidebar Toggle Logic
    // =========================================================
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    const toggleBtn = document.getElementById('sidebarCollapse');

    // Check if the toggle button exists to avoid errors on pages without it
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            // Toggle the 'active' class to collapse/expand sidebar
            sidebar.classList.toggle('active');
            content.classList.toggle('active');
        });
    }

    // =========================================================
    // 2. Chart Initialization (Only runs on Dashboard)
    // =========================================================
    const ctxLine = document.getElementById('rankingChart');
    const ctxPie = document.getElementById('pieChart');

    // Only initialize charts if the canvas elements exist
    if (ctxLine && ctxPie) {
        
        // --- Line Chart: Academic Progress ---
        new Chart(ctxLine, {
            type: 'line',
            data: {
                labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5'],
                datasets: [{
                    label: 'GPA Progress',
                    data: [3.80, 3.52, 3.91, 3.83, 3.82],
                    borderColor: '#795548',
                    backgroundColor: 'rgba(67, 97, 238, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4, // Smooths the line
                    pointBackgroundColor: '#fff',
                    pointBorderColor: '#795548',
                    pointRadius: 5
                }]
            },
            options: { 
                responsive: true, 
                maintainAspectRatio: false 
            }
        });

        // --- Pie Chart: Grade Distribution ---
        new Chart(ctxPie, {
            type: 'doughnut',
            data: {
                labels: ['Grade A', 'Grade B'],
                datasets: [{
                    data: [27, 6],
                    backgroundColor: ['#06d6a0', '#ffd166', '#ef476f'],
                    borderWidth: 0
                }]
            },
            options: { 
                responsive: true, 
                maintainAspectRatio: false,
                cutout: '50%', // Makes it a donut
                plugins: { 
                    legend: { position: 'bottom' } 
                }
            }
        });
    }
});

// =========================================================
// 3. Login Logic
// =========================================================
function performLogin(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    const id = document.getElementById('studentId').value;
    const pass = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');

    // Hardcoded validation for demo purposes
    if (id === '2025180221' && pass === '123456') {
        // Successful login: Redirect to dashboard
        window.location.href = "dashboard.html";
    } else {
        // Failed login: Show error message
        errorMsg.style.display = 'block';
    }
}

// =========================================================
// 4. Logout Logic
// =========================================================
function logout() {
    // Ask for user confirmation before logging out
    if (confirm("Are you sure you want to log out?")) {
        window.location.href = "index.html";
    }
}

// =========================================================
// 5. GPA Calculator Logic
// =========================================================

/**
 * Calculates GPA based on user input rows
 */
function calculateCustomGPA() {
    let totalPoints = 0;
    let totalCredits = 0;
    
    // Select all rows containing subject data
    const rows = document.querySelectorAll('.calc-row');

    rows.forEach(row => {
        // Get values from input fields within the row
        const credit = parseFloat(row.querySelector('.credit-input').value);
        const grade = parseFloat(row.querySelector('.grade-select').value);

        // Calculate if values are valid numbers
        if (!isNaN(credit) && !isNaN(grade)) {
            totalPoints += (credit * grade);
            totalCredits += credit;
        }
    });

    // Calculate Final GPA (Avoid division by zero)
    const gpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "0.00";
    
    // Update the display element
    document.getElementById('gpaDisplay').innerText = gpa;
}

/**
 * Adds a new input row for a subject dynamically
 */
function addSubjectRow() {
    const container = document.getElementById('calcRows');
    const div = document.createElement('div');
    
    // Add classes for styling
    div.className = "row align-items-center calc-row";
    
    // Inject HTML for the new inputs
    div.innerHTML = `
        <div class="col-6 mb-2">
            <input type="text" class="form-control calc-input" placeholder="Subject Name">
        </div>
        <div class="col-3 mb-2">
            <input type="number" class="form-control calc-input credit-input" placeholder="Cr" value="3">
        </div>
        <div class="col-3 mb-2">
            <select class="form-select calc-input grade-select">
                <option value="4.00">A+</option>
                <option value="4.00">A</option>
                <option value="3.67">A-</option>
                <option value="3.33">B+</option>
                <option value="3.00">B</option>
                <option value="2.67">B-</option>
                <option value="2.33">C+</option>
                <option value="2.00">C</option>
            </select>
        </div>
    `;
    
    // Append the new row to the container
    container.appendChild(div);
}