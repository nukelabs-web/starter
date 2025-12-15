// FULL Project Data (Restores the list on Homepage)
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
  { id: 12, title: "Distance Indicator", difficulty: "Medium", concept: "Sensor interfacing" },
  { id: 13, title: "Parking Sensor", difficulty: "Medium", concept: "Proximity alert, sound" },
  { id: 14, title: "Water Level Detector", difficulty: "Medium", concept: "Real-world sensor app" },
  { id: 15, title: "Melody Player", difficulty: "Medium", concept: "Sound output, timing" },
  { id: 16, title: "Button Buzzer", difficulty: "Easy", concept: "Input to output mapping" },
  { id: 17, title: "Digital Dice", difficulty: "Medium", concept: "Display control, counting" },
  { id: 18, title: "Tug of War", difficulty: "Medium", concept: "Game timing logic" },
  { id: 19, title: "Traffic Light Simulation", difficulty: "Medium", concept: "Sequencing, logic" },
  { id: 20, title: "Parking Assistant", difficulty: "Medium", concept: "Combined sensor system" },
];

function generateProjectCards() {
  const grid = document.querySelector('.grid');
  // Safety check: If grid doesn't exist (e.g. on project page), stop to prevent errors
  if (!grid) return;

  projectsData.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    const formattedId = project.id.toString().padStart(2, '0');
    // Note: On homepage, images/ works.
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

// Enhances code blocks with a Copy Button
function enhanceCodeBlocks() {
    const codeBlocks = document.querySelectorAll('.code-block');
    codeBlocks.forEach(block => {
        // Wrapper
        const container = document.createElement('div');
        container.className = 'code-container';
        
        // Header
        const header = document.createElement('div');
        header.className = 'code-header';
        header.innerHTML = `<span>Arduino / C++</span>`;
        
        // Button
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn';
        copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy';
        // Inline styles for button simplicity
        copyBtn.style.background = 'transparent';
        copyBtn.style.border = '1px solid rgba(255,255,255,0.3)';
        copyBtn.style.color = '#fff';
        copyBtn.style.padding = '5px 12px';
        copyBtn.style.borderRadius = '4px';
        copyBtn.style.cursor = 'pointer';
        copyBtn.style.fontSize = '0.75rem';
        copyBtn.style.fontFamily = "'Orbitron', sans-serif";
        
        copyBtn.addEventListener('click', () => {
            const codeText = block.innerText;
            navigator.clipboard.writeText(codeText).then(() => {
                copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                copyBtn.style.borderColor = '#00ff9d';
                copyBtn.style.color = '#00ff9d';
                setTimeout(() => { 
                    copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy';
                    copyBtn.style.borderColor = 'rgba(255,255,255,0.3)';
                    copyBtn.style.color = '#fff';
                }, 2000);
            });
        });

        header.appendChild(copyBtn);
        
        // Insert
        block.parentNode.insertBefore(container, block);
        container.appendChild(header);
        container.appendChild(block);
    });
}

// Run everything when page loads
document.addEventListener('DOMContentLoaded', () => {
  generateProjectCards();
  setupMobileMenu();
  enhanceCodeBlocks();
});








