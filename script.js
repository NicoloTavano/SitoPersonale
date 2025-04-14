const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  });
  document.querySelectorAll('.section').forEach(el => observer.observe(el));

  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // solo per test
    alert("Grazie per il messaggio! Ti contatterò al più presto.");
    this.reset();
  });

  