import "./style.css"
import type {ClubData, ClubEvent} from "./types"
// Segment 2: greeting button
const greetBtn = document.getElementById("greetBtn");
const greetOutput = document.getElementById("greetOutput");
const wait= (ms:number)=> new Promise<void>((resolve)=>
  setTimeout(resolve,ms));

  
if(greetBtn && greetOutput){
  greetBtn.addEventListener("click", async () => {
    greetOutput.textContent="..."
    await wait(1000);
    greetOutput.textContent="Hello, welcome to my portfolio"
  });
}
// Segment 3: contact form handling
const form = document.querySelector<HTMLFormElement>(".contact-form");
const formStatus = document.getElementById("formStatus");
if(form &&formStatus){
  form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop the page from reloading

  const name = (document.getElementById("name") as HTMLInputElement).value.trim();
  const message = (document.getElementById("message") as HTMLTextAreaElement).value.trim();

  if (message.length < 10) {
    formStatus.textContent = "Your message should be at least 10 characters.";
    formStatus.className = "error";
    return;
  }

  formStatus.textContent = `Thanks, ${name}! Your message was received.`;
  formStatus.className = "success";
  form.reset();
  });
}
// Segment 4: dark-mode toggle
const themeToggle = document.getElementById("themeToggle");
if(themeToggle){
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    themeToggle.textContent = isDark ? "Light mode" : "Dark mode";
  });
}

async function loadClubData():Promise<ClubData>{
  const response=await fetch("/events.json");
  if(!response.ok){
    throw new Error('Request failed: ${response.status}');
  }
  return response.json();
}
function createEventCard(event: ClubEvent): HTMLElement{
  const card=document.createElement("div");
  card.className="service-item";

  const title=document.createElement("h3");
  title.textContent=event.title;

  const info =document.createElement("p");
  info.textContent=`${event.date} @ ${event.location}`;

  const description=document.createElement("p");
  description.textContent=event.description;

  card.append(title, info, description);

  if(event.rsvpLink){
    const link=document.createElement("a");
    link.href = event.rsvpLink;
    link.textContent="RSVP";
    card.append(link);
  }
return card;
}async function showEvents(): Promise<void>{
    const status = document.getElementById("eventStatus");
    const list = document.getElementById("eventsList");

    if(!status|| !list)return;
    status.textContent="Loading Events.."

    try{
        const data=await loadClubData();
        status.textContent="";
        for(const event of data.events){
            list.append(createEventCard(event));
        }
    }
    catch(error){
        console.error(error);
        status.textContent="Sorry, couldn't load right now.";
    }
}
showEvents();

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
