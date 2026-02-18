// ===========================
// 모바일 메뉴 토글
// ===========================
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// 모바일 메뉴 링크 클릭 시 메뉴 닫기
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

// ===========================
// 네비게이션 스크롤 효과
// ===========================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===========================
// 맨 위로 가기 버튼
// ===========================
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.remove('hidden');
    scrollTopBtn.classList.add('flex');
  } else {
    scrollTopBtn.classList.add('hidden');
    scrollTopBtn.classList.remove('flex');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===========================
// 네비게이션 활성 링크 표시
// ===========================
const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('#navbar a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active', 'text-blue-600');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active', 'text-blue-600');
    }
  });
});

// ===========================
// 스크롤 페이드인 + 스킬바 애니메이션
// ===========================
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.fade-in').forEach(el => {
  fadeObserver.observe(el);
});

// 스킬 프로그레스 바 - 화면에 보일 때 애니메이션
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bars = entry.target.querySelectorAll('.skill-bar');
      bars.forEach(bar => {
        const targetWidth = bar.getAttribute('data-width');
        // 약간의 딜레이 후 애니메이션 시작
        setTimeout(() => {
          bar.style.width = targetWidth;
        }, 200);
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

// skills 섹션 관찰
const skillsSection = document.getElementById('skills');
if (skillsSection) {
  skillObserver.observe(skillsSection);
}

// ===========================
// 연락 폼 제출 처리
// ===========================
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = contactForm.querySelector('#name').value.trim();
    const email = contactForm.querySelector('#email').value.trim();
    const message = contactForm.querySelector('#message').value.trim();

    if (!name || !email || !message) {
      alert('모든 항목을 입력해주세요.');
      return;
    }

    // 폼 제출 완료 메시지
    alert(`감사합니다, ${name}님! 메시지가 전송되었습니다.`);
    contactForm.reset();
  });
}
