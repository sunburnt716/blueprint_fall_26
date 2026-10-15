// Segment 2: greeting button
const greetBtn = document.getElementById("greetBtn");
const greetOutput = document.getElementById("greetOutput");

greetBtn.addEventListener("click", () => {
  greetOutput.textContent = "Hello, welcome to my portfolio!";
});

// Segment 3: contact form handling
const form = document.querySelector(".contact-form");
const formStatus = document.getElementById("formStatus");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop the page from reloading

  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();

  if (message.length < 10) {
    formStatus.textContent = "Your message should be at least 10 characters.";
    formStatus.className = "error";
    return;
  }

  formStatus.textContent = `Thanks, ${name}! Your message was received.`;
  formStatus.className = "success";
  form.reset();
});

// Segment 4: dark-mode toggle
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeToggle.textContent = isDark ? "Light mode" : "Dark mode";
});

// Segment 5 (stretch): build the skill cards from an array
// To demo: delete the four .skill-card divs in index.html, then uncomment below.
// const skills = [
//   { name: "HTML", description: "Structure and meaning" },
//   { name: "CSS", description: "Style and layout" },
//   { name: "JavaScript", description: "Interaction and behavior" },
//   { name: "React", description: "Reusable UI components" },
// ];
//
// const skillsContainer = document.querySelector(".skills-container");
//
// for (const skill of skills) {
//   const card = document.createElement("div");
//   card.className = "skill-card";
//
//   const title = document.createElement("h3");
//   title.textContent = skill.name;
//
//   const description = document.createElement("p");
//   description.textContent = skill.description;
//
//   card.appendChild(title);
//   card.appendChild(description);
//   skillsContainer.appendChild(card);
// }
