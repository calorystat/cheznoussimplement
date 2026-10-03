(() => {
  const storageKey = 'chez-nous-simple-demo-submissions';
  const countEl = document.getElementById('submission-count');
  const pluralEls = [document.getElementById('plural'), document.getElementById('plural2')];
  const successModal = document.getElementById('success-modal');
  const pdfModal = document.getElementById('pdf-modal');
  const demoPanel = document.querySelector('.demo-panel');
  let count = Number(localStorage.getItem(storageKey) || 0);

  function updateCount() {
    countEl.textContent = count;
    pluralEls.forEach(el => el.textContent = count === 1 ? '' : 's');
  }
  updateCount();

  document.querySelectorAll('.lead-form').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const email = form.querySelector('[name="email"]');
      const consent = form.querySelector('[name="consent"]');
      const error = form.querySelector('.form-error');
      error.textContent = '';
      if (!email.value || !email.validity.valid) {
        error.textContent = 'Veuillez entrer une adresse courriel valide.';
        email.focus();
        return;
      }
      if (!consent.checked) {
        error.textContent = 'Veuillez confirmer votre consentement pour recevoir la checklist.';
        consent.focus();
        return;
      }
      const submissions = JSON.parse(localStorage.getItem('chez-nous-simple-demo-data') || '[]');
      submissions.push({ email: email.value, source: form.dataset.form, date: new Date().toISOString() });
      localStorage.setItem('chez-nous-simple-demo-data', JSON.stringify(submissions));
      count += 1;
      localStorage.setItem(storageKey, String(count));
      updateCount();
      form.reset();
      successModal.classList.add('open');
      successModal.setAttribute('aria-hidden', 'false');
    });
  });

  document.querySelectorAll('.js-scroll-form').forEach(link => link.addEventListener('click', event => {
    event.preventDefault();
    document.getElementById('formulaire-principal').scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => document.querySelector('#formulaire-principal input[type="email"]').focus(), 550);
  }));

  document.querySelectorAll('[data-open-modal]').forEach(button => button.addEventListener('click', () => {
    pdfModal.classList.add('open');
    pdfModal.setAttribute('aria-hidden', 'false');
  }));
  document.querySelectorAll('[data-close-modal]').forEach(button => button.addEventListener('click', () => {
    pdfModal.classList.remove('open');
    pdfModal.setAttribute('aria-hidden', 'true');
  }));
  document.querySelector('[data-close-success]').addEventListener('click', () => {
    successModal.classList.remove('open');
    successModal.setAttribute('aria-hidden', 'true');
    document.getElementById('methode').scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('reset-demo').addEventListener('click', () => {
    count = 0;
    localStorage.removeItem(storageKey);
    localStorage.removeItem('chez-nous-simple-demo-data');
    updateCount();
  });
  document.querySelector('.demo-toggle').addEventListener('click', () => {
    demoPanel.classList.toggle('expanded');
  });

  const menuButton = document.querySelector('.menu-button');
  const nav = document.querySelector('.main-nav');
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });

  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: .08 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      [pdfModal, successModal].forEach(modal => { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); });
    }
  });
})();