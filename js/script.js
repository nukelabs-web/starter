// Project data from the provided document

const projectsData = [

  { id: 1, title: "Blinking LED", difficulty: "Easy", concept: "Digital output, basic programming" },

  { id: 2, title: "Multiple LED Sequencer (Running Lights)", difficulty: "Easy", concept: "Loops, sequencing" },

  { id: 3, title: "LED Toggle with Button", difficulty: "Easy", concept: "Digital input/output, debounce" },

  { id: 4, title: "Light-sensitive LED", difficulty: "Easy", concept: "Analog input, light sensing" },

  { id: 5, title: "PWM LED Fading", difficulty: "Medium", concept: "PWM, brightness control" },

  { id: 6, title: "Button Counter", difficulty: "Medium", concept: "Counting, digital input, display control" },

  { id: 7, title: "Password / Code Lock", difficulty: "Medium", concept: "Logic, sequence detection" },

  { id: 8, title: "Automatic Night Lamp", difficulty: "Easy", concept: "Light detection, automatic control" },

  { id: 9, title: "Light Alarm", difficulty: "Medium", concept: "Threshold detection, alarm system" },

  { id: 10, title: "Simple Light Meter", difficulty: "Medium", concept: "Analog reading, sensor calibration" },

  { id: 11, title: "Obstacle Detector", difficulty: "Medium", concept: "Distance measurement, alert systems" },

  { id: 12, title: "Distance Measurement Display", difficulty: "Medium", concept: "Sensor interfacing, numeric display" },

  { id: 13, title: "Parking Sensor", difficulty: "Medium", concept: "Proximity alert, PWM sound" },

  { id: 14, title: "Water Level Detector", difficulty: "Medium", concept: "Real-world sensor application" },

  { id: 15, title: "Melody Player", difficulty: "Medium", concept: "Sound output, timing" },

  { id: 16, title: "Button-Activated Buzzer", difficulty: "Easy", concept: "Input to output mapping" },

  { id: 17, title: "Counter on 7-Segment", difficulty: "Medium", concept: "Display control, counting" },

  { id: 18, title: "Timer / Stopwatch", difficulty: "Medium", concept: "Timing, counting, display" },

  { id: 19, title: "Traffic Light Simulation", difficulty: "Medium", concept: "Sequencing, logic, real-world simulation" },

  { id: 20, title: "Obstacle Avoidance Demo", difficulty: "Medium", concept: "Sensor control, alert systems" },

  { id: 21, title: "Night Light with Alarm", difficulty: "Medium", concept: "Multi-sensor integration" },

  { id: 22, title: "Reaction Timer Game", difficulty: "Medium", concept: "Timing, user interaction" },

  { id: 23, title: "Distance-Based LED Brightness", difficulty: "Medium", concept: "PWM, distance sensing" },

  { id: 24, title: "Mini Parking Assistant", difficulty: "Medium", concept: "Combined sensor-display-alert system" },

  { id: 25, title: "LED Chase / Running Light", difficulty: "Easy", concept: "Looping, sequencing, timing" }

];



// Generate project cards (only runs on homepage)

function generateProjectCards() {

  const grid = document.querySelector('.grid');

  if (!grid) return;



  projectsData.forEach(project => {

    const card = document.createElement('div');

    card.className = 'project-card';



    // Circuit image path

    const imgPath = `images/project${project.id}-circuit.png`;



    card.innerHTML = `

      <div class="project-card-content">

        <img src="${imgPath}" alt="Circuit diagram for ${project.title}" class="project-thumb">

        <h3>${project.title}</h3>

        <span class="difficulty ${project.difficulty.toLowerCase()}">${project.difficulty}</span>

        <p>${project.concept}</p>

        <a href="projects/project${project.id}.html" class="btn">View Project</a>

      </div>

    `;



    grid.appendChild(card);

  });

}





// Mobile menu toggle

function setupMobileMenu() {

  const mobileToggle = document.querySelector('.mobile-toggle');

  const navbar = document.querySelector('.navbar');

  if (!mobileToggle || !navbar) return;



  mobileToggle.addEventListener('click', () => {

    navbar.classList.toggle('active');

    const icon = mobileToggle.querySelector('i');

    icon.classList.toggle('fa-bars');

    icon.classList.toggle('fa-times');

  });

}



// Accordion for project pages

function setupAccordions() {

  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {

    header.addEventListener('click', () => {

      const accordion = header.parentElement;

      const content = accordion.querySelector('.accordion-content');



      // Close all others

      document.querySelectorAll('.accordion').forEach(acc => {

        if (acc !== accordion) {

          acc.classList.remove('active');

          acc.querySelector('.accordion-content').classList.remove('active');

        }

      });



      // Toggle current

      accordion.classList.toggle('active');

      content.classList.toggle('active');

    });

  });

}



// Initialize the page

document.addEventListener('DOMContentLoaded', () => {

  generateProjectCards();

  setupMobileMenu();

  setupAccordions();



  // Smooth scrolling for anchors

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));

      if (target) {

        window.scrollTo({

          top: target.offsetTop - 80,

          behavior: 'smooth'

        });

      }

    });
    document.addEventListener('DOMContentLoaded', () => {
  generateProjectCards();
  setupMobileMenu();
  setupAccordions();
  highlightActiveNav(); // <-- add this
});

  });

});

function highlightActiveNav() {
  const navLinks = document.querySelectorAll('.navbar a');
  const currentPath = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    // remove existing active class
    link.classList.remove('active');

    // get link target
    const linkPath = link.getAttribute('href');

    // check match (supports index.html and root / )
    if (
      (currentPath === "" && linkPath.includes("index.html")) ||
      currentPath === linkPath
    ) {
      link.classList.add('active');
    }
  });
}
