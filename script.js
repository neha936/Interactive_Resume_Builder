// Resume Generator Script

const form = document.getElementById("resume-form");
const preview = document.getElementById("resume-preview");
const darkToggle = document.getElementById("dark-toggle");

// Live Preview
form.addEventListener("input", () => {
  const name = document.getElementById("name").value || "Your Name";
  const email = document.getElementById("email").value || "you@example.com";
  const phone = document.getElementById("phone").value || "123-456-7890";
  const summary = document.getElementById("summary").value || "Professional Summary...";
  const education = document.getElementById("education").value || "Education details...";
  const experience = document.getElementById("experience").value || "Work experience...";
  const skills = document.getElementById("skills").value || "Your skills...";

  preview.innerHTML = `
    <h2>${name}</h2>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <h3>Summary</h3>
    <p>${summary}</p>
    <h3>Education</h3>
    <p>${education}</p>
    <h3>Experience</h3>
    <p>${experience}</p>
    <h3>Skills</h3>
    <p>${skills}</p>
  `;
});

// Download/Print
function downloadResume() {
  const resumeContent = preview.innerHTML;
  const originalContent = document.body.innerHTML;

  document.body.innerHTML = `<div style="padding: 40px;">${resumeContent}</div>`;
  window.print();
  document.body.innerHTML = originalContent;
  location.reload();
}

// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  darkToggle.textContent = isDark ? "🌞 Light Mode" : "🌙 Dark Mode";
}

darkToggle.addEventListener("click", toggleDarkMode);

