const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });
}

const tabs = document.querySelectorAll(".tab");
const universityForm = document.querySelector("#university-form");
const alumniForm = document.querySelector("#alumni-form");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    const target = tab.dataset.target;
    if (universityForm && alumniForm) {
      universityForm.hidden = target !== "university";
      alumniForm.hidden = target !== "alumni";
    }
  });
});

function fillMailto(form, subject) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const lines = [];
    data.forEach((value, key) => {
      lines.push(`${key}: ${value}`);
    });
    const body = encodeURIComponent(lines.join("\n"));
    const mail = `mailto:timqaldy@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.location.href = mail;
  });
}

if (universityForm) fillMailto(universityForm, "Founding University Pilot — alumnation.net");
if (alumniForm) fillMailto(alumniForm, "Alumni interview — alumnation.net");

document.querySelectorAll("[data-event]").forEach((el) => {
  el.addEventListener("click", () => {
    const name = el.getAttribute("data-event");
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: name, source: el.getAttribute("data-source") || "landing" });
  });
});
