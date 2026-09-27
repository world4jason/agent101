(() => {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const currentEl = document.getElementById('current');
  const totalEl = document.getElementById('total');
  const progressEl = document.getElementById('progress');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const rails = Array.from(document.querySelectorAll('.section-rail [data-section]'));
  let index = 0;
  let jumpOrigin = null;

  totalEl.textContent = slides.length;

  function fragments(slide) {
    return Array.from(slide.querySelectorAll('.fragment'));
  }

  function sectionOf(slide) {
    return slide.dataset.section || 'define';
  }

  function update() {
    slides.forEach((s, i) => s.classList.toggle('active', i === index));
    const slide = slides[index];
    currentEl.textContent = index + 1;
    progressEl.style.width = ((index + 1) / slides.length * 100) + '%';
    prevBtn.disabled = index === 0;
    nextBtn.disabled = false;
    rails.forEach(r => r.classList.toggle('active', r.dataset.section === sectionOf(slide)));
    if (location.hash !== '#'+(index+1)) history.replaceState(null, '', '#'+(index+1));
  }

  function next() {
    const f = fragments(slides[index]);
    const hidden = f.find(x => !x.classList.contains('visible'));
    if (hidden) {
      hidden.classList.add('visible');
      return;
    }
    if (index < slides.length - 1) {
      index += 1;
      update();
    }
  }

  function prev() {
    const f = fragments(slides[index]);
    const visible = f.filter(x => x.classList.contains('visible'));
    if (visible.length) {
      visible[visible.length - 1].classList.remove('visible');
      return;
    }
    if (jumpOrigin !== null) {
      index = jumpOrigin;
      jumpOrigin = null;
      fragments(slides[index]).forEach(x => x.classList.add('visible'));
      update();
      return;
    }
    if (index > 0) {
      index -= 1;
      fragments(slides[index]).forEach(x => x.classList.add('visible'));
      update();
    }
  }

  nextBtn.addEventListener('click', next);
  prevBtn.addEventListener('click', prev);

  document.querySelectorAll('[data-jump]').forEach((button) => {
    button.addEventListener('click', () => {
      const target = Number(button.dataset.jump);
      if (!Number.isFinite(target) || target < 1 || target > slides.length) return;
      jumpOrigin = index;
      index = target - 1;
      fragments(slides[index]).forEach(x => x.classList.remove('visible'));
      button.blur();
      update();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (['INPUT','TEXTAREA','SELECT','BUTTON'].includes(document.activeElement?.tagName)) return;
    if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') { e.preventDefault(); next(); }
    else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); prev(); }
    else if (e.key === 'Home') { e.preventDefault(); jumpOrigin = null; index = 0; update(); }
    else if (e.key === 'End') { e.preventDefault(); jumpOrigin = null; index = slides.length - 1; fragments(slides[index]).forEach(x => x.classList.add('visible')); update(); }
  });

  const hash = Number(location.hash.replace('#',''));
  if (Number.isFinite(hash) && hash >= 1 && hash <= slides.length) index = hash - 1;
  update();
})();