
// Utility functions for particle background effects

// Particle class for managing individual particles
export class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  originalX: number;
  originalY: number;
  color: string;
  pulseDirection: number;
  pulseSpeed: number;
  hue: number;

  constructor(canvasWidth: number, canvasHeight: number, speed: number, opacity: number) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.originalX = this.x;
    this.originalY = this.y;
    this.size = Math.random() * 3 + 0.5;
    this.speedX = (Math.random() - 0.5) * speed;
    this.speedY = (Math.random() - 0.5) * speed;
    this.opacity = Math.random() * opacity;
    // Generate a hue value for dynamic color shifts
    this.hue = Math.random() > 0.7 ? 240 : 200; // Blue or light blue hue
    // Use blue or purple tints randomly
    this.color = Math.random() > 0.7 ? '#9b87f5' : '#00a8ff';
    // Add subtle pulse effect
    this.pulseDirection = Math.random() > 0.5 ? 1 : -1;
    this.pulseSpeed = Math.random() * 0.01 + 0.005;
  }

  update(mouseX: number, mouseY: number, isMouseActive: boolean, mouseSpeed = 0) {
    // Regular movement
    this.x += this.speedX;
    this.y += this.speedY;

    // Pulse effect for size
    this.size += this.pulseDirection * this.pulseSpeed;
    if (this.size < 0.5 || this.size > 3.5) {
      this.pulseDirection *= -1;
    }

    // Interactive movement if mouse is active
    if (isMouseActive) {
      const dx = mouseX - this.x;
      const dy = mouseY - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = 200; // Range of influence
      
      if (distance < maxDistance) {
        // Stronger force for faster mouse movement
        const force = (maxDistance - distance) / maxDistance * (1 + mouseSpeed/20);
        const directionX = dx / distance || 0;
        const directionY = dy / distance || 0;
        
        // Stronger repulsion with faster mouse movement
        const repulsionStrength = 1 + (mouseSpeed / 10);
        
        // Push particles away from mouse
        this.x -= directionX * force * repulsionStrength;
        this.y -= directionY * force * repulsionStrength;
        
        // Increase opacity when influenced by mouse
        this.opacity = Math.min(1, this.opacity + force * 0.3);
        
        // Dynamic color shift based on mouse influence - only subtle changes
        if (mouseSpeed > 5) {
          // Only change color when mouse is moving relatively fast
          const colorIntensity = Math.min(30, mouseSpeed);
          if (this.color.startsWith('#9b87f5')) {
            // For purple, shift towards more vibrant purple
            this.color = `rgba(155, 135, ${245 + colorIntensity/2}, ${this.opacity})`;
          } else {
            // For blue, shift towards more vibrant blue
            this.color = `rgba(0, ${168 + colorIntensity/2}, 255, ${this.opacity})`;
          }
        }
      } else {
        // Gradually return to natural path
        this.x += (this.originalX - this.x) * 0.02;
        this.y += (this.originalY - this.y) * 0.02;
        this.opacity = Math.max(this.opacity - 0.01, Math.random() * this.opacity);
        // Reset color
        this.color = Math.random() > 0.7 ? '#9b87f5' : '#00a8ff';
      }
    }

    // Wrap around screen
    const canvas = document.querySelector('canvas');
    const canvasWidth = canvas?.width || window.innerWidth;
    const canvasHeight = canvas?.height || window.innerHeight;
    
    if (this.x > canvasWidth) this.x = 0;
    else if (this.x < 0) this.x = canvasWidth;
    if (this.y > canvasHeight) this.y = 0;
    else if (this.y < 0) this.y = canvasHeight;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.opacity;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Draw grid lines on the canvas
export const drawGrid = (
  ctx: CanvasRenderingContext2D, 
  canvasWidth: number, 
  canvasHeight: number, 
  color: string, 
  gridSize = 50
) => {
  ctx.strokeStyle = color;
  ctx.globalAlpha = 0.1;
  ctx.lineWidth = 0.3;
  
  // Draw vertical lines
  for (let x = 0; x < canvasWidth; x += gridSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvasHeight);
    ctx.stroke();
  }
  
  // Draw horizontal lines
  for (let y = 0; y < canvasHeight; y += gridSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvasWidth, y);
    ctx.stroke();
  }
};

// Draw connections between particles that are close
export const drawLines = (
  ctx: CanvasRenderingContext2D, 
  particles: Particle[], 
  opacity: number, 
  connectionDistance = 120
) => {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < connectionDistance) {
        ctx.beginPath();
        ctx.strokeStyle = particles[i].color;
        ctx.globalAlpha = (connectionDistance - distance) / 1200 * opacity;
        ctx.lineWidth = 0.5;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
};

// Draw a mouse glow effect
export const drawMouseEffect = (
  ctx: CanvasRenderingContext2D, 
  x: number, 
  y: number, 
  isMouseInCanvas: boolean,
  mouseSpeed = 0
) => {
  if (!isMouseInCanvas) return;
  
  // Adjust glow size based on mouse speed
  const glowSize = 150 + mouseSpeed * 2;
  
  // Draw a glow around the cursor with dynamic intensity
  const gradient = ctx.createRadialGradient(x, y, 0, x, y, glowSize);
  const intensity = 0.2 + (mouseSpeed / 100);
  
  gradient.addColorStop(0, `rgba(0, 168, 255, ${Math.min(0.3, intensity)})`);
  gradient.addColorStop(0.5, `rgba(155, 135, 245, ${Math.min(0.2, intensity/2)})`);
  gradient.addColorStop(1, 'transparent');
  
  ctx.globalAlpha = 0.25;
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(x, y, glowSize, 0, Math.PI * 2);
  ctx.fill();
};
