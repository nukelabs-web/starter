// Project data 
const projectsData = [
  { id: 1, title: "Blinking LED", difficulty: "Easy", concept: "Digital output, basic programming" },
  { id: 2, title: "Multiple LED Sequencer", difficulty: "Easy", concept: "Loops, sequencing" },
  { id: 3, title: "LED Toggle with Button", difficulty: "Easy", concept: "Digital input/output, debounce" },
  { id: 4, title: "Light-sensitive LED", difficulty: "Easy", concept: "Analog input, light sensing" },
  { id: 5, title: "PWM LED Fading", difficulty: "Medium", concept: "PWM, brightness control" },
  { id: 6, title: "Button Counter", difficulty: "Medium", concept: "Counting, digital input" },
  { id: 7, title: "Password Code Lock", difficulty: "Medium", concept: "Logic, sequence detection" },
  { id: 8, title: "Automatic Night Lamp", difficulty: "Easy", concept: "Light detection, automation" },
  { id: 9, title: "Light Alarm", difficulty: "Medium", concept: "Threshold detection, alarm" },
  { id: 10, title: "Simple Light Meter", difficulty: "Medium", concept: "Analog reading, calibration" },
  { id: 11, title: "Obstacle Detector", difficulty: "Medium", concept: "Distance measurement" },
  { id: 12, title: "Distance Measurement", difficulty: "Medium", concept: "Sensor interfacing" },
  { id: 13, title: "Parking Sensor", difficulty: "Medium", concept: "Proximity alert, sound" },
  { id: 14, title: "Water Level Detector", difficulty: "Medium", concept: "Real-world sensor app" },
  { id: 15, title: "Melody Player", difficulty: "Medium", concept: "Sound output, timing" },
  { id: 16, title: "Button Buzzer", difficulty: "Easy", concept: "Input to output mapping" },
  { id: 17, title: "7-Segment Counter", difficulty: "Medium", concept: "Display control, counting" },
  { id: 18, title: "Stopwatch", difficulty: "Medium", concept: "Timing, counting, display" },
  { id: 19, title: "Traffic Light Sim", difficulty: "Medium", concept: "Sequencing, logic" },
  { id: 20, title: "Obstacle Avoidance", difficulty: "Medium", concept: "Sensor control, alerts" },
  { id: 21, title: "Night Light Alarm", difficulty: "Medium", concept: "Multi-sensor integration" },
  { id: 22, title: "Reaction Timer", difficulty: "Medium", concept: "Timing, user interaction" },
  { id: 23, title: "Distance Brightness", difficulty: "Medium", concept: "PWM, distance sensing" },
  { id: 24, title: "Parking Assistant", difficulty: "Medium", concept: "Combined sensor system" },
  { id: 25, title: "LED Chase", difficulty: "Easy", concept: "Looping, sequencing" }
];

function generateProjectCards() {
  const grid = document.querySelector('.grid');
  if (!grid) return;

  projectsData.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    const formattedId = project.id.toString().padStart(2, '0');
    const imgPath = `images/project${project.id}-circuit.png`;

    card.innerHTML = `
      <div class="project-thumb-container">
          <img src="${imgPath}" alt="${project.title}" class="project-thumb">
      </div>
      <div class="project-card-content">
        <div class="project-meta">
            <span class="project-id">MISSION / ${formattedId}</span>
            <span class="difficulty ${project.difficulty.toLowerCase()}">${project.difficulty}</span>
        </div>
        <h3>${project.title}</h3>
        <p>${project.concept}</p>
        <a href="projects/project${project.id}.html" class="card-link">
            INITIATE PROJECT <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Fixed Mobile Menu
function setupMobileMenu() {
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navbar = document.querySelector('.navbar');
  if (!mobileToggle || !navbar) return;

  mobileToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    const icon = mobileToggle.querySelector('i');
    if (navbar.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
  });
}

// --- FIXED ACCORDION FUNCTION ---
function setupAccordions() {
  // Find all headers
  const headers = document.querySelectorAll('.accordion-header');
  
  headers.forEach(header => {
    header.addEventListener('click', function() {
      // 1. Toggle active state on the header itself
      this.classList.toggle('active');
      
      // 2. Find the content panel (it's usually the next element)
      const content = this.nextElementSibling;
      
      // 3. Find the parent wrapper (optional, for styling)
      const parent = this.parentElement;
      parent.classList.toggle('active');

      // 4. Toggle the content display
      if (content.style.maxHeight) {
        // If open, close it
        content.style.maxHeight = null;
      } else {
        // If closed, open it to its full scroll height
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
}

// Code Copy Function
function enhanceCodeBlocks() {
    const codeBlocks = document.querySelectorAll('.code-block');
    codeBlocks.forEach(block => {
        const container = document.createElement('div');
        container.className = 'code-container';
        const header = document.createElement('div');
        header.className = 'code-header';
        header.innerHTML = `<span>Arduino / C++</span>`;
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn';
        copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy';
        copyBtn.style.background = 'transparent';
        copyBtn.style.border = '1px solid #fff';
        copyBtn.style.color = '#fff';
        copyBtn.style.padding = '5px 10px';
        copyBtn.style.cursor = 'pointer';
        
        copyBtn.addEventListener('click', () => {
            const codeText = block.innerText;
            navigator.clipboard.writeText(codeText).then(() => {
                copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                setTimeout(() => { copyBtn.innerHTML = '<i class="fas fa-
