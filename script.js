// Personalize these values before publishing.
const CONTACT_EMAIL = "bahiaismail9@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/ismail-bahia-ab6193284/";
const GITHUB_URL = "https://github.com/bahiaismail9-ai";
const translations = {
  en: {
    navAbout:"About",navSkills:"Skills",navProjects:"Projects",navExperience:"Experience",navContact:"Contact",
    availability:"Open to junior opportunities & internships",hello:"HELLO, I'M",role:"IT Systems & Network Technician",
    intro:"Specialized Technician in Digital Infrastructure, focused on systems, networks and IT support. I enjoy building practical labs and turning technical knowledge into reliable solutions.",
    viewProjects:"Explore my projects",contactMe:"Contact me",diplomaShort:"DTS · Digital Infrastructure",addPhoto:"Add your photo",
    aboutLabel:"01 / ABOUT ME",aboutTitle:'A practical mindset.<br><span class="muted">A passion for IT.</span>',
    aboutText:"I am a Moroccan IT technician holding a Specialized Technician Diploma in Digital Infrastructure, option Systems and Networks, from OFPPT. My training and hands-on internship helped me develop a foundation in IT support, system administration and network troubleshooting.",
    aboutText2:"I am continuously learning through personal lab projects, especially around IT service management, virtualization and infrastructure monitoring.",
    location:"Location",education:"Education",specialization:"Specialization",specializationValue:"Systems & Networks",languages:"Languages",languagesValue:"Arabic · French · English · German (beginner)",
    skillsLabel:"02 / TOOLKIT",skillsTitle:'Technical <span class="muted">skills.</span>',skillsSub:"Technologies and areas I have studied or practiced.",
    skillsNote:"Skill list reflects learning and practical exposure; it does not imply professional-level mastery of every tool.",
    projectsLabel:"03 / SELECTED WORK",projectsTitle:'Projects & <span class="muted">labs.</span>',projectsSub:"Hands-on practice that helps me understand real IT environments.",
    glpiDesc:"Set up GLPI on Ubuntu Server in a virtualized home lab, configured HTTPS with a local certificate, and connected a Windows client using GLPI Agent to practice inventory and IT asset management.",
    proxmoxDesc:"Explored virtualization and server environments, including Proxmox exposure during my internship and virtual machines in a personal VMware lab.",
    networkDesc:"Practiced network fundamentals and troubleshooting concepts through labs and exercises, including IP addressing, connectivity tests and Cisco Packet Tracer.",
    experienceLabel:"04 / EXPERIENCE & EDUCATION",experienceTitle:'My <span class="muted">journey.</span>',internshipDate:"Internship · 1 month",
    internshipTitle:"IT Intern — Tribunal de Première Instance",internshipDesc:"Gained practical exposure to IT support, equipment installation and maintenance, printer support, scanning and organizing digital files, and a server environment using Proxmox and GLPI on Ubuntu Server.",
    diplomaTitle:"Specialized Technician Diploma (DTS)",diplomaDesc:"Digital Infrastructure — Systems and Networks. Diploma success certificate obtained in 2026.",bacTitle:"Baccalaureate — Physical Sciences",morocco:"Morocco",
    contactLabel:"05 / GET IN TOUCH",contactTitle:'Let’s build something<br><span class="gradient-text">reliable together.</span>',contactText:"I am open to junior IT opportunities, internships and professional connections.",emailMe:"Email me ↗",
    contactHint:"Add your email and LinkedIn URL in script.js to activate these links.",footer:"Built with curiosity and a passion for IT."
  },
  fr: {
    navAbout:"À propos",navSkills:"Compétences",navProjects:"Projets",navExperience:"Expérience",navContact:"Contact",
    availability:"Ouvert aux opportunités junior et aux stages",hello:"BONJOUR, JE SUIS",role:"Technicien systèmes et réseaux",
    intro:"Technicien spécialisé en Infrastructure Digitale, orienté systèmes, réseaux et support informatique. J'aime créer des laboratoires pratiques et transformer mes connaissances techniques en solutions fiables.",
    viewProjects:"Voir mes projets",contactMe:"Me contacter",diplomaShort:"DTS · Infrastructure Digitale",addPhoto:"Ajoutez votre photo",
    aboutLabel:"01 / À PROPOS",aboutTitle:'Un esprit pratique.<br><span class="muted">Une passion pour l’IT.</span>',
    aboutText:"Je suis un technicien informatique marocain titulaire d’un Diplôme de Technicien Spécialisé en Infrastructure Digitale, option Systèmes et Réseaux, obtenu auprès de l’OFPPT. Ma formation et mon stage pratique m’ont permis d’acquérir des bases en support informatique, administration systèmes et dépannage réseau.",
    aboutText2:"Je continue à développer mes compétences à travers des projets de laboratoire personnel, notamment en gestion des services IT, virtualisation et supervision d’infrastructure.",
    location:"Localisation",education:"Formation",specialization:"Spécialité",specializationValue:"Systèmes et Réseaux",languages:"Langues",languagesValue:"Arabe · Français · Anglais · Allemand (débutant)",
    skillsLabel:"02 / COMPÉTENCES",skillsTitle:'Compétences <span class="muted">techniques.</span>',skillsSub:"Technologies et domaines étudiés ou pratiqués.",
    skillsNote:"Cette liste reflète mes apprentissages et mon expérience pratique ; elle ne signifie pas une maîtrise professionnelle de chaque outil.",
    projectsLabel:"03 / RÉALISATIONS",projectsTitle:'Projets & <span class="muted">laboratoires.</span>',projectsSub:"Des mises en pratique pour mieux comprendre les environnements informatiques réels.",
    glpiDesc:"Installation de GLPI sur Ubuntu Server dans un laboratoire virtualisé, configuration HTTPS avec un certificat local et connexion d’un client Windows via GLPI Agent pour pratiquer l’inventaire et la gestion du parc informatique.",
    proxmoxDesc:"Découverte de la virtualisation et des environnements serveurs, notamment Proxmox durant mon stage et les machines virtuelles dans un laboratoire personnel VMware.",
    networkDesc:"Mise en pratique des fondamentaux réseau et du dépannage à travers des laboratoires : adressage IP, tests de connectivité et Cisco Packet Tracer.",
    experienceLabel:"04 / EXPÉRIENCE & FORMATION",experienceTitle:'Mon <span class="muted">parcours.</span>',internshipDate:"Stage · 1 mois",
    internshipTitle:"Stagiaire IT — Tribunal de Première Instance",internshipDesc:"Découverte pratique du support informatique, de l’installation et de la maintenance des équipements, du support imprimantes, de la numérisation et de l’organisation de dossiers numériques, ainsi que d’un environnement serveur utilisant Proxmox et GLPI sur Ubuntu Server.",
    diplomaTitle:"Diplôme de Technicien Spécialisé (DTS)",diplomaDesc:"Infrastructure Digitale — option Systèmes et Réseaux. Attestation de réussite obtenue en 2026.",bacTitle:"Baccalauréat — Sciences Physiques",morocco:"Maroc",
    contactLabel:"05 / CONTACT",contactTitle:'Construisons des solutions<br><span class="gradient-text">fiables ensemble.</span>',contactText:"Je suis ouvert aux opportunités junior en informatique, aux stages et aux échanges professionnels.",emailMe:"M’écrire ↗",
    contactHint:"Ajoutez votre adresse e-mail et votre URL LinkedIn dans script.js pour activer ces liens.",footer:"Créé avec curiosité et passion pour l’informatique."
  }
};
let currentLang = "en";
const langSwitch = document.getElementById("langSwitch");
langSwitch.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "fr" : "en";
  document.documentElement.lang = currentLang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[currentLang][key]) el.innerHTML = translations[currentLang][key];
  });
  langSwitch.textContent = currentLang === "en" ? "FR" : "EN";
});

document.getElementById("year").textContent = new Date().getFullYear();
const emailLink = document.getElementById("emailLink");
if (CONTACT_EMAIL.trim()) emailLink.href = `mailto:${CONTACT_EMAIL.trim()}`;
else emailLink.addEventListener("click", e => { e.preventDefault(); alert("Please add your email address in script.js first."); });
const linkedinLink = document.getElementById("linkedinLink");
if (LINKEDIN_URL.trim()) { linkedinLink.href = LINKEDIN_URL.trim(); linkedinLink.hidden = false; }

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => navLinks.classList.remove("open")));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
