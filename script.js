const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation')});nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));

const heroVideo = document.querySelector('.hero-video');
const soundToggle = document.querySelector('.video-sound');
if (heroVideo && soundToggle) {
  soundToggle.addEventListener('click', () => {
    heroVideo.muted = !heroVideo.muted;
    soundToggle.textContent = heroVideo.muted ? '♪ SOUND OFF' : '♪ SOUND ON';
    soundToggle.setAttribute('aria-pressed', String(!heroVideo.muted));
    soundToggle.setAttribute('aria-label', heroVideo.muted ? 'Turn video sound on' : 'Turn video sound off');
    if (!heroVideo.muted) heroVideo.play().catch(() => {});
  });
  heroVideo.play().catch(() => { /* Poster remains visible if autoplay is blocked. */ });
}
