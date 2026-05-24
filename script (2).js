document.addEventListener('DOMContentLoaded', function () {

  
  var sidebar   = document.getElementById('sidebar');
  var hamburger = document.getElementById('hamburger');
  var overlay   = document.getElementById('overlay');

  function openSidebar() {
    sidebar.classList.add('open');
    hamburger.classList.add('open');
    overlay.classList.add('show');
  }
  function closeSidebar() {
    sidebar.classList.remove('open');
    hamburger.classList.remove('open');
    overlay.classList.remove('show');
  }

  hamburger.addEventListener('click', function () {
    sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
  });
  overlay.addEventListener('click', closeSidebar);

  
  document.querySelectorAll('.sidebar-link').forEach(function (link) {
    link.addEventListener('click', function () {
      document.querySelectorAll('.sidebar-link').forEach(function (l) { l.classList.remove('active'); });
      this.classList.add('active');
      if (window.innerWidth <= 768) closeSidebar();
    });
  });

  
  document.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      document.querySelectorAll('.nav-link').forEach(function (l) { l.classList.remove('active'); });
      this.classList.add('active');
    });
  });

  
  document.querySelectorAll('.bnav-item').forEach(function (item) {
    item.addEventListener('click', function () {
      document.querySelectorAll('.bnav-item').forEach(function (i) { i.classList.remove('active'); });
      this.classList.add('active');
    });
  });

  
  var cIdx    = 0;
  var CTOTAL  = 3;
  var cTrack  = document.getElementById('carouselTrack');
  var dotsEl  = document.getElementById('carouselDots');
  var cTimer;

  
  for (var di = 0; di < CTOTAL; di++) {
    (function (idx) {
      var d = document.createElement('button');
      d.className = 'dot' + (idx === 0 ? ' active' : '');
      d.setAttribute('aria-label', 'Slide ' + (idx + 1));
      d.addEventListener('click', function () { goCarousel(idx); restartTimer(); });
      dotsEl.appendChild(d);
    })(di);
  }

  function goCarousel(n) {
    cIdx = ((n % CTOTAL) + CTOTAL) % CTOTAL;
    cTrack.style.transform = 'translateX(-' + (cIdx * 33.333) + '%)';
    document.querySelectorAll('.dot').forEach(function (d, i) {
      d.classList.toggle('active', i === cIdx);
    });
  }

  function startTimer() {
    cTimer = setInterval(function () { goCarousel(cIdx + 1); }, 4500);
  }
  function restartTimer() { clearInterval(cTimer); startTimer(); }

  document.getElementById('carouselPrev').addEventListener('click', function () {
    goCarousel(cIdx - 1); restartTimer();
  });
  document.getElementById('carouselNext').addEventListener('click', function () {
    goCarousel(cIdx + 1); restartTimer();
  });

  /* Swipe on carousel */
  addSwipe(document.getElementById('carousel'), function (dir) {
    goCarousel(cIdx + dir); restartTimer();
  });

  startTimer();

  
  var imgIdx  = 0;
  var ITOTAL  = 3;
  var imgTrack = document.getElementById('imgTrack');

  function goSlide(dir) {
    imgIdx = ((imgIdx + dir) % ITOTAL + ITOTAL) % ITOTAL;
    imgTrack.style.transform = 'translateX(-' + (imgIdx * 33.333) + '%)';
  }

  document.getElementById('imgPrev').addEventListener('click', function () { goSlide(-1); });
  document.getElementById('imgNext').addEventListener('click', function () { goSlide(1); });

  
  addSwipe(document.getElementById('imgSlider'), function (dir) { goSlide(dir); });

  
  document.querySelectorAll('.tab-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var targetId = this.getAttribute('data-tab');
      document.querySelectorAll('.tab-btn').forEach(function (b) { b.classList.remove('active'); });
      document.querySelectorAll('.tab-panel').forEach(function (p) { p.classList.remove('active'); });
      this.classList.add('active');

      var panel = document.getElementById(targetId);
      panel.classList.add('active');

      
      panel.querySelectorAll('.anim-bar').forEach(function (bar) {
        bar.classList.remove('play');
        void bar.offsetWidth; 
        bar.classList.add('play');
      });
    });
  });

  
  document.querySelectorAll('#t1 .anim-bar').forEach(function (b) { b.classList.add('play'); });

  
  document.querySelectorAll('.stat-num[data-target]').forEach(function (el) {
    var target = parseInt(el.getAttribute('data-target'), 10);
    var suffix = target === 5 ? '' : '+';
    var duration = 1200;
    var start = null;
    function step(ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target) + (progress >= 1 ? suffix : '');
      if (progress < 1) requestAnimationFrame(step);
    }
    
    var obs = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        requestAnimationFrame(step);
        obs.disconnect();
      }
    }, { threshold: 0.5 });
    obs.observe(el);
  });

  
  document.querySelectorAll('.pb-fill[data-width]').forEach(function (bar) {
    var w = bar.getAttribute('data-width');
    var obs = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        bar.style.width = w + '%';
        obs.disconnect();
      }
    }, { threshold: 0.4 });
    obs.observe(bar);
  });

  
  function addSwipe(el, callback) {
    if (!el) return;
    var startX = 0;
    var startY = 0;
    var threshold = 40;

    el.addEventListener('touchstart', function (e) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });

    el.addEventListener('touchend', function (e) {
      var dx = e.changedTouches[0].clientX - startX;
      var dy = e.changedTouches[0].clientY - startY;
      
      if (Math.abs(dx) > threshold && Math.abs(dx) > Math.abs(dy)) {
        callback(dx < 0 ? 1 : -1);
      }
    }, { passive: true });
  }

}); 
