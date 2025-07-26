if (localStorage.getItem("isLoggedIn") !== "true") { 
  window.location.href = "index.html";
}
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark");
}

function logout() {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "index.html";
}

const contentMap = {
  
  profile: `
    <header>
      <h1>Company Profile</h1>
    </header>
    <div class="card journey-section">
      <div class="journey-content">
        <div class="journey-text">
          <h2>The Journey so far</h2>
          <p>
            SKYWORTH was established in 1988, with the head office located within Shenzhen High Tech Industrial Park which is honored as "China’s silicon valley", and has more than 40,000 employees. SKYWORTH is a large-scale high-tech corporation mainly engaged in the development and manufacturing of consumer electronics, display devices, digital set top boxes, security monitors, network communication, semiconductors, refrigerators, washing machines, cell phones and LED lighting etc. In 2000 SKYWORTH was listed on the main board of HK Stock Exchange (HK0751). In 2018, Skyworth began its global expansion and opened operations in the Philippines. Today, Skyworth continues to grow worldwide with innovation at its core.
          </p>
        </div>
        <div class="journey-video">
          <div class="video-wrapper">
            <div class="responsive-iframe">
              <iframe 
                src="https://www.youtube.com/embed/QqkdELFDelY" 
                frameborder="0" 
                allowfullscreen>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card" style="margin-top: 30px; animation: fadeInUp 0.6s ease;">
      <h2>Skyworth Timeline</h2>
      <br>
      <div class="timeline-container">
        <div class="timeline-item">
          <div class="timeline-icon">📍</div>
          <div class="timeline-content">
            <h4>1988</h4>
            <p>Skygroup was founded in April</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-icon">📍</div>
          <div class="timeline-content">
            <h4>1999</h4>
            <p>Established Skyworth R&D in Silicon Valley, USA</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-icon">📍</div>
          <div class="timeline-content">
            <h4>2000</h4>
            <p>Listed on the HK Stock Exchange</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-icon">📍</div>
          <div class="timeline-content">
            <h4>2008</h4>
            <p>Ranked No.1 in Chinese market for both volume and revenue. Skyworth won the title of "the most Valuable Brand of Chinese Electronic Industry"</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-icon">📍</div>
          <div class="timeline-content">
            <h4>2011</h4>
            <p>Established Skyworth Philippines in March. Established Skyworth Thailand in April. Established Skyworth India in May. Established Skyworth Indonesia in November.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-icon">📍</div>
          <div class="timeline-content">
            <h4>2013</h4>
            <p>Launched the world's first full color gamut TV and the first OLED TV in China.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-icon">📍</div>
          <div class="timeline-content">
            <h4>2014</h4>
            <p>Established Skyworth Vietnam in January. Established Skyworth South Africa in June.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-icon">📍</div>
          <div class="timeline-content">
            <h4>2015</h4>
            <p>Acquired Metz and Strong Media to enter the EU market. Established Skyworth Germany (Metz) in June.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-icon">📍</div>
          <div class="timeline-content">
            <h4>2016</h4>
            <p>Merged Toshiba Indonesia factory to improve supply chain in Southeast Asia. Established Skyworth Malaysia in November.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-icon">📍</div>
          <div class="timeline-content">
            <h4>2018</h4>
            <p>Merged the Domestic Sales Department with the Overseas Department into the Global Marketing Centre, taking firm steps in global expansion.</p>
          </div>
        </div>
        <img src="sky logo.png" style="margin-top: -4%; width: 20%; border-radius: 12px;" />
      </div> 
    </div> 
    <div class="card" style="margin-top: 30px; animation: fadeInUp 0.6s ease;">
      <h2>Skyworth Overseas Presence</h2>
      <div style="flex: 1 1 40%; min-width: 300px;">
        <h3 style="margin-bottom: 10px;">🎬 Watch: Skyworth Company Profile</h3>
        <p>
          The Philippines is one of the key countries where Skyworth has expanded its presence as part of its global strategy. 
          Since 2018, the company has continuously grown its footprint across Southeast Asia, recognizing the region’s potential 
          and the increasing demand for innovative consumer electronics and smart technology.
        </p>
        <div class="video-rounded-shadow hover-zoom">
          <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 12px;">
            <iframe 
              src="https://www.youtube.com/embed/sT51QLP0-4c" 
              frameborder="0" 
              allowfullscreen 
              style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  `,
  manual: `
    <header><h1>Employee Management</h1></header>
    <div class="employee-container">
      <div class="card">
        <h2>Add New Employee</h2>
        <form id="employeeForm">
          <input type="text" id="empName" placeholder="Enter employee name" required />
          <input type="text" id="empPosition" placeholder="Enter position" required />
          <select id="empDept" required>
            <option value="">Choose Department</option>
            <option value="IT">IT</option>
            <option value="HR">HR</option>
            <option value="Admin">Admin</option>
          </select>
          <button type="submit">➕ Add Employee</button>
        </form>
      </div>
      <div class="card">
        <h2>Employees</h2>
        <select id="filterDept">
          <option value="">Choose Department</option>
          <option value="IT">IT</option>
          <option value="HR">HR</option>
          <option value="Admin">Admin</option>
        </select>
        <div id="employeeList">
          <p>Select a department to view employees</p>
        </div>
      </div>
    </div>
  `,
  admin: `
    <div class="admin-modal-header">
      <span class="admin-label">Admin</span>
      <img src="sky logo.png" alt="Skyworth Logo" class="modal-skyworth-logo" />
    </div>
    <div class="tabbed-header">
      <button class="tab-btn active" id="profileTab">Profile</button>
      <button class="tab-btn" id="userDataTab">User Data</button>
    </div>
    <div id="profileContent">
      <div class="profile-table">
        <div class="profile-row">
          <div class="profile-label">Name</div>
          <div class="profile-value" id="profileName"></div>
        </div>
        <div class="profile-row">
          <div class="profile-label">Username</div>
          <div class="profile-value" id="profileUsername"></div>
        </div>
        <div class="profile-row">
          <div class="profile-label">Log out other sessions</div>
          <div class="profile-value"><button onclick="logout()" class="logout-btn">Log out</button></div>
        </div>
        <div class="profile-row">
          <div class="profile-label">Password</div>
          <div class="profile-value"><span class="edit-icon" title="Change password">&#9998;</span></div>
        </div>
      </div>
    </div>
    <div id="userDataContent" style="display:none;">
      <form id="addUserForm" class="user-data-form">
        <div class="form-row">
          <input type="text" id="newName" placeholder="Name" required />
          <input type="text" id="newUsername" placeholder="Username" required />
        </div>
        <div class="form-row">
          <input type="password" id="newPassword" placeholder="Password" required />
          <input type="password" id="newConfirm" placeholder="Confirm" required />
        </div>
        <button type="submit" class="add-user-btn">
          <span style="margin-right:8px;">&#9993;</span> Add User
        </button>
      </form>
    </div>
  `
};

const origRenderSection = renderSection;
renderSection = async function(id) {
  let content = "";
  if (typeof contentMap[id] === "function") {
    content = await contentMap[id]();
  } else {
    content = contentMap[id] || `<header><h1>${id}</h1></header><div class="card"><p>Content coming soon...</p></div>`;
  }
  document.getElementById("main-content").innerHTML = content;
  if (id === "dashboard") {
    updateDateTime();
    startClock();
  }
  if (id === "manual") {
    setupEmployeeForm();
    renderEmployeeList();
    document.getElementById("filterDepartment").onchange = renderEmployeeList;
  }
  if (id === "admin") {
    // setupAdminTabs(); // This is now handled by openAdminModal
    // fillProfileInfo(); // This is now handled by openAdminModal
    // setupAddUserForm(); // This is now handled by openAdminModal
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".sidebar ul li a, .admin-title a");
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      links.forEach(l => l.classList.remove("active"));
      this.classList.add("active");

      const target = this.getAttribute("href").substring(1);
      if (target === "admin") {
        openAdminModal();
      } else {
        renderSection(target);
      }
    });
  });

  // Set sidebar admin name dynamically (show full name if available)
  const sidebarAdminName = document.getElementById("sidebarAdminName");
  if (sidebarAdminName) {
    const loggedInUser = localStorage.getItem("loggedInUser") || "Admin";
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    // Find user by name or username
    let user = users.find(u => u.name === loggedInUser || u.username === loggedInUser);
    if (user && user.name) {
      sidebarAdminName.textContent = user.name;
    } else {
      sidebarAdminName.textContent = loggedInUser;
    }
  }

  renderSection("dashboard");
  setupModalClose();

  // Dark mode toggle logic
  const darkBtn = document.getElementById("darkModeToggle");
  if (darkBtn) {
    function setDarkMode(on) {
      if (on) {
        document.body.classList.add("dark");
        localStorage.setItem("darkMode", "true");
        darkBtn.textContent = "☀️";
      } else {
        document.body.classList.remove("dark");
        localStorage.setItem("darkMode", "false");
        darkBtn.textContent = "🌙";
      }
    }
    darkBtn.onclick = function() {
      setDarkMode(!document.body.classList.contains("dark"));
    };
    // On load
    setDarkMode(localStorage.getItem("darkMode") === "true");
  }
});

function startClock() {
  setInterval(() => {
    const now = new Date();
    const formatted = now.toLocaleTimeString('en-US', { hour12: false });
    const clock = document.querySelector(".time-display");
    if (clock) {
      clock.innerHTML = `<img src="stopwatch.png" alt="Clock" width="40" height="40" /> ${formatted}`;
    }
    // Update standby clock for attendance section
    const standbyClock = document.getElementById('standby-clock');
    if (standbyClock) {
      standbyClock.textContent = formatted;
    }
  }, 1000);
}

function updateDateTime() {
  const now = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  };
  const formatted = now.toLocaleDateString("en-US", options);
  const span = document.getElementById("date-time-span");
  if (span) span.textContent = formatted;
}

function setupAdminTabs() {
  const profileTab = document.getElementById("profileTab");
  const userDataTab = document.getElementById("userDataTab");
  const profileContent = document.getElementById("profileContent");
  const userDataContent = document.getElementById("userDataContent");
  profileTab.onclick = function() {
    profileTab.classList.add("active");
    userDataTab.classList.remove("active");
    profileContent.style.display = "block";
    userDataContent.style.display = "none";
  };
  userDataTab.onclick = function() {
    userDataTab.classList.add("active");
    profileTab.classList.remove("active");
    profileContent.style.display = "none";
    userDataContent.style.display = "block";
  };
}

function fillProfileInfo() {
  const loggedInUser = localStorage.getItem("loggedInUser") || "";
  document.getElementById("profileUsername").textContent = loggedInUser;
  // For demo, use a simple mapping for name
  let name = "";
  if (loggedInUser === "jayemabundo098@gmail.com") name = "Jayem Abundo";
  else if (loggedInUser === "admin") name = "Admin";
  else name = loggedInUser;
  document.getElementById("profileName").textContent = name;
}

function setupAddUserForm() {
  const form = document.getElementById("addUserForm");
  if (!form) return;
  form.onsubmit = function(e) {
    e.preventDefault();
    const name = document.getElementById("newName").value.trim();
    const username = document.getElementById("newUsername").value.trim();
    const password = document.getElementById("newPassword").value;
    const confirm = document.getElementById("newConfirm").value;
    if (!name || !username || !password || !confirm) return alert("All fields required.");
    if (password !== confirm) return alert("Passwords do not match.");
    // Save to localStorage (simple demo, no duplicate check)
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push({ name, username, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("User added!");
    form.reset();
  };
}

function openAdminModal() {
  document.getElementById("adminModal").style.display = "flex";
  document.body.style.overflow = "hidden";
  document.getElementById("adminModalContent").innerHTML = contentMap.admin;
  setupAdminTabs();
  fillProfileInfo();
  renderUserListTable();
}

function setupModalClose() {
  document.getElementById("closeAdminModal").onclick = function() {
    document.getElementById("adminModal").style.display = "none";
    document.body.style.overflow = "auto";
  };
  // Optional: close modal when clicking outside the box
  document.getElementById("adminModal").onclick = function(e) {
    if (e.target === this) {
      this.style.display = "none";
      document.body.style.overflow = "auto";
    }
  };
}

// Employee Section Logic
const departments = [
  "I.T Department",
  "HR Department",
  "Sale Department"
];

function getEmployees() {
  return JSON.parse(localStorage.getItem("employees") || "[]");
}

function saveEmployees(employees) {
  localStorage.setItem("employees", JSON.stringify(employees));
}

function renderEmployeeSection() {
  const main = document.getElementById("main-content");
  if (!main) return;
  main.innerHTML = `
    <div class="employee-container">
      <div class="employee-form">
        <h2>Employee Data</h2>
        <form id="addEmployeeForm">
          <label>Name</label>
          <input type="text" id="empName" placeholder="Enter employee's name" required />
          <label>Position</label>
          <input type="text" id="empPosition" placeholder="Enter employee's position" required />
          <label>Choose Department</label>
          <select id="empDepartment" required>
            <option value="">Select Department</option>
            ${departments.map(dep => `<option value="${dep}">${dep}</option>`).join("")}
          </select>
          <button type="submit" id="addEmpBtn" disabled>Add Employee</button>
        </form>
      </div>
      <div class="employee-list-section">
        <div class="employee-list-header">
          <label>Employee</label>
          <select id="filterDepartment">
            <option value="all">All Departments</option>
            ${departments.map(dep => `<option value="${dep}">${dep}</option>`).join("")}
          </select>
        </div>
        <ul id="employeeList"></ul>
      </div>
    </div>
  `;
  setupEmployeeForm();
  renderEmployeeList();
  document.getElementById("filterDepartment").onchange = renderEmployeeList;
}

// Update setupEmployeeForm to handle photo upload
function setupEmployeeForm() {
  const form = document.getElementById("addEmployeeForm");
  const name = document.getElementById("empName");
  const position = document.getElementById("empPosition");
  const department = document.getElementById("empDepartment");
  const photo = document.getElementById("empPhoto");
  const btn = document.getElementById("addEmpBtn");

  // Add fingerprint placeholder button
  let fingerprintBtn = document.getElementById("registerFingerprintBtn");
  let fingerprintStatus = document.getElementById("fingerprintStatus");
  if (!fingerprintBtn) {
    fingerprintBtn = document.createElement("button");
    fingerprintBtn.type = "button";
    fingerprintBtn.id = "registerFingerprintBtn";
    fingerprintBtn.textContent = "Register Fingerprint";
    fingerprintBtn.style = "margin-top:0.7rem; margin-bottom:0.3rem; background:#eee; border-radius:5px; border:none; padding:0.5rem 1.2rem; cursor:pointer;";
    form.appendChild(fingerprintBtn);
    fingerprintStatus = document.createElement("span");
    fingerprintStatus.id = "fingerprintStatus";
    fingerprintStatus.style = "margin-left:0.7rem; color:#d9363e; font-weight:500;";
    form.appendChild(fingerprintStatus);
  }
  fingerprintBtn.onclick = function() {
    fingerprintStatus.textContent = "Fingerprint scanner not connected.";
    setTimeout(() => { fingerprintStatus.textContent = ""; }, 2500);
  };

  function checkFields() {
    btn.disabled = !(name.value.trim() && position.value.trim() && department.value && photo.files.length > 0);
  }
  name.oninput = checkFields;
  position.oninput = checkFields;
  department.onchange = checkFields;
  photo.onchange = checkFields;

  form.onsubmit = function(e) {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = function(ev) {
      const employees = getEmployees();
      employees.push({
        name: name.value.trim(),
        position: position.value.trim(),
        department: department.value,
        photo: ev.target.result // base64 image
      });
      saveEmployees(employees);
      form.reset();
      btn.disabled = true;
      renderEmployeeList();
    };
    if (photo.files.length > 0) {
      reader.readAsDataURL(photo.files[0]);
    }
  };
}

// Update renderEmployeeList to show photo
function renderEmployeeList() {
  const list = document.getElementById("employeeList");
  const filter = document.getElementById("filterDepartment").value;
  const employees = getEmployees();
  list.innerHTML = "";
  employees
    .filter(emp => filter === "all" || emp.department === filter)
    .forEach((emp, idx) => {
      const li = document.createElement("li");
      // Check if this employee is being edited
      if (window.editingEmployeeIdx === idx) {
        // Edit mode
        li.innerHTML = `
          <form class="edit-emp-form">
            <div class="edit-emp-form-fields">
              <input type="text" id="editName${idx}" value="${emp.name}" required />
              <input type="text" id="editPosition${idx}" value="${emp.position}" required />
              <select id="editDept${idx}">
                <option value="I.T Department" ${emp.department === 'I.T Department' ? 'selected' : ''}>I.T Department</option>
                <option value="HR Department" ${emp.department === 'HR Department' ? 'selected' : ''}>HR Department</option>
                <option value="Sale Department" ${emp.department === 'Sale Department' ? 'selected' : ''}>Sale Department</option>
              </select>
            </div>
            <div class="edit-emp-form-actions">
              <button type="submit" class="save-emp">Save</button>
              <button type="button" class="cancel-emp">Cancel</button>
            </div>
          </form>
        `;
        // Save handler
        li.querySelector(".edit-emp-form").onsubmit = function(e) {
          e.preventDefault();
          const employees = getEmployees();
          employees[idx].name = document.getElementById(`editName${idx}`).value.trim();
          employees[idx].position = document.getElementById(`editPosition${idx}`).value.trim();
          employees[idx].department = document.getElementById(`editDept${idx}`).value;
          saveEmployees(employees);
          window.editingEmployeeIdx = null;
          renderEmployeeList();
        };
        // Cancel handler
        li.querySelector(".cancel-emp").onclick = function() {
          window.editingEmployeeIdx = null;
          renderEmployeeList();
        };
      } else {
        // Display mode
        li.innerHTML = `
          <div style="display:flex;align-items:center;gap:0.7rem;">
            <img src="${emp.photo || ''}" alt="Photo" style="width:40px;height:40px;border-radius:50%;object-fit:cover;background:#eee;" />
            <div>
              <strong>${emp.name}</strong><br/>
              <span>${emp.position}</span><br/>
              <span>${emp.department}</span>
            </div>
          </div>
          <div style="display:flex;flex-direction:column;gap:0.3rem;">
            <button class="edit-emp" data-idx="${idx}" style="background:#4a6cf7;color:#fff;border:none;border-radius:5px;padding:0.3rem 0.8rem;font-size:0.97rem;cursor:pointer;margin-bottom:0.3rem;">Edit</button>
            <button class="delete-emp" data-idx="${idx}">Delete</button>
          </div>
        `;
      }
      list.appendChild(li);
    });
  // Edit button handlers
  list.querySelectorAll(".edit-emp").forEach(btn => {
    btn.onclick = function() {
      window.editingEmployeeIdx = parseInt(this.getAttribute("data-idx"));
      renderEmployeeList();
    };
  });
  // Delete button handlers
  list.querySelectorAll(".delete-emp").forEach(btn => {
    btn.onclick = function() {
      const idx = this.getAttribute("data-idx");
      const employees = getEmployees();
      employees.splice(idx, 1);
      saveEmployees(employees);
      renderEmployeeList();
    };
  });
}

// Add to contentMap
if (typeof contentMap !== "undefined") {
  contentMap.manual = function() {
    const main = document.getElementById("main-content");
    if (!main) return "";
    // Return the HTML string for the Employee section
    return `
      <h2 class="employee-section-title">Employee Data</h2>
      <div class="employee-container">
        <div class="employee-form">
          <div class="employee-form-header">Add Employee</div>
          <form id="addEmployeeForm">
            <label>Name</label>
            <input type="text" id="empName" placeholder="Enter employee's name" required />
            <label>Position</label>
            <input type="text" id="empPosition" placeholder="Enter employee's position" required />
            <label>Photo</label>
            <input type="file" id="empPhoto" accept="image/*" style="margin-bottom:0.5rem;" required />
            <label>Choose Department</label>
            <select id="empDepartment" required>
              <option value="">Select Department</option>
              ${departments.map(dep => `<option value="${dep}">${dep}</option>`).join("")}
            </select>
            <button type="submit" id="addEmpBtn" disabled><span style="margin-right:8px;">&#9993;</span> Add Employee</button>
          </form>
        </div>
        <div class="employee-list-section">
          <div class="employee-list-header">
            <label>Employee</label>
            <select id="filterDepartment">
              <option value="all">All Departments</option>
              ${departments.map(dep => `<option value="${dep}">${dep}</option>`).join("")}
            </select>
          </div>
          <ul id="employeeList"></ul>
        </div>
      </div>
    `;
  };
}

// Attendance logic for dashboard
function getAttendance() {
  return JSON.parse(localStorage.getItem("attendance") || "{}");
}
function saveAttendance(att) {
  localStorage.setItem("attendance", JSON.stringify(att));
}

function renderAttendanceList() {
  const container = document.getElementById("attendance-employee-list");
  if (!container) return;
  const employees = getEmployees();
  const attendance = getAttendance();
  container.innerHTML = employees.map((emp, idx) => `
    <div class="attendance-emp-row" style="display:flex;align-items:center;gap:1.2rem;margin-bottom:1.2rem;">
      <img src="${emp.photo || ''}" alt="Photo" style="width:48px;height:48px;border-radius:50%;object-fit:cover;background:#eee;" />
      <div style="flex:1;">
        <strong style="font-size:1.13rem;">${emp.name}</strong><br/>
        <span style="font-size:0.98rem;">${emp.position} &mdash; ${emp.department}</span><br/>
        <span style="font-size:0.97rem;color:#4a6cf7;">Time In: ${attendance[emp.name]?.timeIn || '--:--'}</span> &nbsp;|
        <span style="font-size:0.97rem;color:#d9363e;">Time Out: ${attendance[emp.name]?.timeOut || '--:--'}</span>
      </div>
      <button class="finger-btn" data-idx="${idx}" data-type="in">&#128376; Time In</button>
      <button class="finger-btn" data-idx="${idx}" data-type="out">&#128376; Time Out</button>
    </div>
  `).join("");
  // Add event listeners
  container.querySelectorAll('.finger-btn').forEach(btn => {
    btn.onclick = function() {
      const idx = this.getAttribute('data-idx');
      const type = this.getAttribute('data-type');
      const employees = getEmployees();
      const emp = employees[idx];
      const attendance = getAttendance();
      const now = new Date();
      const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
      // Placeholder: In future, replace this with fingerprint scan result
      if (type === 'in') {
        attendance[emp.name] = attendance[emp.name] || {};
        attendance[emp.name].timeIn = time;
        alert(`(DEMO) Time In recorded for ${emp.name} at ${time}`);
      } else {
        attendance[emp.name] = attendance[emp.name] || {};
        attendance[emp.name].timeOut = time;
        alert(`(DEMO) Time Out recorded for ${emp.name} at ${time}`);
      }
      saveAttendance(attendance);
      renderAttendanceList();
    };
  });
}

contentMap.dashboard = `
  <header>
    <h1>Dashboard</h1>
    <h3 style="color: #888; margin-top: 10px;">Skyworth, Hello Everyone!</h3>
    <br>
  </header>
  <div class="card">
    <h2 style="margin-top: -8px; margin-bottom: 10px; font-size: 170%; ">Time check!</h2> 
    <div class="time-display">
      <img src="clock.jpg" alt="Clock" width="40" height="40" />
      Loading...
    </div>
  </div>
  <div class="card">
    <div id="attendance-summary"></div>
  </div>
  <div class="card">
    <h2>Attendance (Time In / Time Out)</h2>
    <div id="attendance-action-section"></div>
  </div>
  <div class="card">
    <div style="display:flex;align-items:center;gap:1.2rem;margin-bottom:1.2rem;">
      <h2 style="margin:0;">Attendance Table</h2>
      <label for="attendanceDeptFilter" style="font-weight:500;">Department:</label>
      <select id="attendanceDeptFilter">
        <option value="all">All</option>
        <option value="I.T Department">I.T Department</option>
        <option value="HR Department">HR Department</option>
        <option value="Sale Department">Sale Department</option>
      </select>
      <label for="attendanceDateFilter" style="font-weight:500;">Date:</label>
      <input type="date" id="attendanceDateFilter" />
    </div>
    <div id="attendance-today-table"></div>
  </div>
`;

// Helper to get selected date or today
function getSelectedAttendanceDate() {
  const dateInput = document.getElementById("attendanceDateFilter");
  if (dateInput && dateInput.value) {
    return dateInput.value;
  }
  return new Date().toISOString().slice(0, 10);
}

function renderAttendanceActionSection() {
  const container = document.getElementById("attendance-action-section");
  if (!container) return;
  const employees = getEmployees();
  const departments = ["I.T Department", "HR Department", "Sale Department"];
  if (employees.length === 0) {
    container.innerHTML = '<p style="color:#888;">No employees registered yet.</p>';
    return;
  }
  // Department dropdown
  let deptOptions = departments.map(dep => `<option value="${dep}">${dep}</option>`).join("");
  // Default to first department with employees
  let defaultDept = departments.find(dep => employees.some(e => e.department === dep)) || departments[0];
  container.innerHTML = `
    <label for="attendanceDeptSelect">Department</label>
    <select id="attendanceDeptSelect">${deptOptions}</select>
    <label for="attendanceName">Name</label>
    <select id="attendanceName"></select>
    <button id="btnTimeIn" class="finger-btn">&#128376; Time In</button>
    <button id="btnTimeOut" class="finger-btn">&#128376; Time Out</button>
    <div id="attendanceActionMsg" style="margin-top:0.7rem;color:#4a6cf7;font-weight:500;"></div>
  `;
  const deptSel = document.getElementById("attendanceDeptSelect");
  const nameSel = document.getElementById("attendanceName");
  // Set default department
  deptSel.value = defaultDept;
  function updateNameDropdown() {
    const filtered = employees.filter(e => e.department === deptSel.value);
    nameSel.innerHTML = filtered.map(emp => `<option value="${emp.name}">${emp.name}</option>`).join("");
    // If no employee in department, disable buttons
    document.getElementById("btnTimeIn").disabled = filtered.length === 0;
    document.getElementById("btnTimeOut").disabled = filtered.length === 0;
  }
  deptSel.onchange = updateNameDropdown;
  updateNameDropdown();
  document.getElementById("btnTimeIn").onclick = function() {
    recordAttendance(nameSel.value, 'in');
  };
  document.getElementById("btnTimeOut").onclick = function() {
    recordAttendance(nameSel.value, 'out');
  };
}

function recordAttendance(name, type) {
  const employees = getEmployees();
  const emp = employees.find(e => e.name === name);
  if (!emp) return;
  const attendance = getAttendance();
  const today = getSelectedAttendanceDate();
  const now = new Date();
  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  attendance[today] = attendance[today] || {};
  attendance[today][name] = attendance[today][name] || { department: emp.department, position: emp.position };
  if (type === 'in') attendance[today][name].timeIn = time;
  if (type === 'out') attendance[today][name].timeOut = time;
  saveAttendance(attendance);
  renderAttendanceActionSection();
  renderAttendanceTodayTable();
  renderAttendanceSummary();
  document.getElementById("attendanceActionMsg").textContent = `(${type === 'in' ? 'Time In' : 'Time Out'}) recorded for ${name} at ${time}`;
}

function renderAttendanceTodayTable() {
  const container = document.getElementById("attendance-today-table");
  if (!container) return;
  const employees = getEmployees();
  const attendance = getAttendance();
  const today = getSelectedAttendanceDate();
  const deptFilter = document.getElementById("attendanceDeptFilter")?.value || "all";
  let filtered = employees;
  if (deptFilter !== "all") filtered = employees.filter(e => e.department === deptFilter);
  let html = `<table style="width:100%;border-collapse:collapse;">
    <thead>
      <tr>
        <th style='padding:8px;border-bottom:1px solid #eee;'>Name</th>
        <th style='padding:8px;border-bottom:1px solid #eee;'>Position</th>
        <th style='padding:8px;border-bottom:1px solid #eee;'>Time In</th>
        <th style='padding:8px;border-bottom:1px solid #eee;'>Time Out</th>
      </tr>
    </thead>
    <tbody>`;
  filtered.forEach(emp => {
    const att = (attendance[today] && attendance[today][emp.name]) || {};
    html += `<tr>
      <td style='padding:6px;'>${emp.name}</td>
      <td style='padding:6px;'>${emp.position || ''}</td>
      <td style='padding:6px;'>${att.timeIn || ''}</td>
      <td style='padding:6px;'>${att.timeOut || ''}</td>
    </tr>`;
  });
  html += `</tbody></table>`;
  container.innerHTML = html;
}

function renderAttendanceSummary() {
  const container = document.getElementById("attendance-summary");
  if (!container) return;
  const employees = getEmployees();
  const attendance = getAttendance();
  const today = getSelectedAttendanceDate();
  const deptFilter = document.getElementById("attendanceDeptFilter")?.value || "all";
  let filtered = employees;
  if (deptFilter !== "all") filtered = employees.filter(e => e.department === deptFilter);
  let inCount = 0, noTimeIn = 0, outCount = 0;
  filtered.forEach(emp => {
    const att = (attendance[today] && attendance[today][emp.name]) || {};
    if (att.timeIn) inCount++;
    else noTimeIn++;
    if (att.timeOut) outCount++;
  });
  const now = new Date();
  // Format day name for the selected date
  const dayName = new Date(today).toLocaleDateString('en-US', { weekday: 'long' });
  const dateStr = today;
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  container.innerHTML = `
    <div style="position:relative;min-height:110px;">
      <div style="display:flex;align-items:center;justify-content:space-between;width:100%;margin-bottom:0.5rem;">
        <h2 style='margin:0;'>Who's In/Out</h2>
        <span style="font-size:1.05rem;color:#888;">${dayName}, ${dateStr} at ${timeStr}</span>
      </div>
      <div style="display:flex;align-items:center;justify-content:center;width:100%;margin:2.5rem 0 2.2rem 0;">
        <div style="display:flex;justify-content:center;gap:8rem;">
          <div style="text-align:center;">
            <span style="font-size:3.2rem;font-weight:700;">${inCount}</span><br/>
            <span style="font-size:1.35rem;">In</span>
          </div>
          <div style="text-align:center;">
            <span style="font-size:3.2rem;font-weight:700;">${noTimeIn}</span><br/>
            <span style="font-size:1.35rem;">No Time In</span>
          </div>
          <div style="text-align:center;">
            <span style="font-size:3.2rem;font-weight:700;">${outCount}</span><br/>
            <span style="font-size:1.35rem;">Out</span>
          </div>
        </div>
      </div>
      <div style="position:absolute;bottom:-30px;left:0;font-size:1.05rem;color:#bbb;">Total of Employee: ${filtered.length}</div>
    </div>
  `;
}

// Patch renderSection to call all attendance renders for dashboard
const origRenderSection5 = renderSection;
renderSection = async function(id) {
  let content = "";
  if (typeof contentMap[id] === "function") {
    content = await contentMap[id]();
  } else {
    content = contentMap[id] || `<header><h1>${id}</h1></header><div class=\"card\"><p>Content coming soon...</p></div>`;
  }
  document.getElementById("main-content").innerHTML = content;
  if (id === "dashboard") {
    renderAttendanceActionSection();
    renderAttendanceTodayTable();
    renderAttendanceSummary();
    const deptSel = document.getElementById("attendanceDeptFilter");
    if (deptSel) deptSel.onchange = function() {
      renderAttendanceTodayTable();
      renderAttendanceSummary();
    };
    const dateInput = document.getElementById("attendanceDateFilter");
    if (dateInput) {
      dateInput.value = new Date().toISOString().slice(0, 10); // default to today
      dateInput.onchange = function() {
        renderAttendanceTodayTable();
        renderAttendanceSummary();
      };
    }
    updateDateTime();
    startClock();
  }
  if (id === "manual") {
    setupEmployeeForm();
    renderEmployeeList();
    document.getElementById("filterDepartment").onchange = renderEmployeeList;
  }
  if (id === "admin") {
    // setupAdminTabs(); // This is now handled by openAdminModal
    // fillProfileInfo(); // This is now handled by openAdminModal
    // setupAddUserForm(); // This is now handled by openAdminModal
  }
};

function renderUserListTable() {
  const container = document.getElementById("userDataContent");
  if (!container) return;
  let users = JSON.parse(localStorage.getItem("users") || "[]");
  let html = `
    <form id="addUserForm" class="user-data-form">
      <div class="form-row">
        <input type="text" id="newName" placeholder="Name" required />
        <input type="text" id="newUsername" placeholder="Username" required />
      </div>
      <div class="form-row">
        <input type="password" id="newPassword" placeholder="Password" required />
        <input type="password" id="newConfirm" placeholder="Confirm" required />
      </div>
      <button type="submit" class="add-user-btn">
        <span style="margin-right:8px;">&#9993;</span> Add User
      </button>
    </form>
    <div class="card" style="margin-top:8px;margin-left:32px;padding-bottom:0;">
      <h2 style="margin-top:0;margin-bottom:20px;">Register List</h2>
      <ul id="userList" style="list-style:none;padding:0;margin:0;max-height:168px;overflow-y:auto;">
        ${users.length === 0 ? `<li style='text-align:center;color:#888;'>No registered users yet.</li>` :
          users.map((u, idx) => `
            <li style="display:flex;justify-content:space-between;align-items:center;background:#f7f9fc;border-radius:6px;padding:0.8rem 0.7rem;margin-bottom:0.6rem;box-shadow:0 1px 3px rgba(0,0,0,0.03);">
              <div style="display:flex;align-items:center;gap:1.1rem;">
                <strong style='font-size:1.08rem;'>${u.name}</strong>
                <span style='font-size:0.98rem;color:#555;'>${u.username}</span>
              </div>
              <button class='delete-user-btn' data-idx='${idx}' style='background:#ff4d4f;color:#fff;border:none;border-radius:5px;padding:0.4rem 0.9rem;font-size:0.97rem;cursor:pointer;transition:background 0.2s;'>Delete</button>
            </li>
          `).join("")}
      </ul>
    </div>
  `;
  container.innerHTML = html;
  setupAddUserForm();
  // Attach delete handlers
  container.querySelectorAll('.delete-user-btn').forEach(btn => {
    btn.onclick = function() {
      const idx = parseInt(this.getAttribute('data-idx'));
      let users = JSON.parse(localStorage.getItem("users") || "[]");
      if (confirm("Are you sure you want to delete this user?")) {
        users.splice(idx, 1);
        localStorage.setItem("users", JSON.stringify(users));
        renderUserListTable();
      }
    };
  });
}

// Auto-update date picker to today if the day changes
function setDatePickerToTodayIfNeeded() {
  const dateInput = document.getElementById("attendanceDateFilter");
  if (!dateInput) return;
  const today = new Date().toISOString().slice(0, 10);
  if (dateInput.value !== today) {
    dateInput.value = today;
    renderAttendanceTodayTable();
    renderAttendanceSummary();
  }
}
setInterval(setDatePickerToTodayIfNeeded, 60 * 1000); // check every minute

