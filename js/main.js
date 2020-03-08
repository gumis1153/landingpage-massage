const toggleMobileNavBtn = document.querySelector('.mobileNavBtn');
const mobileNav = document.querySelector('.mobileNav');
let mobileNavSide = 'right';
let mobileNavIsOpen = false;

toggleMobileNavBtn.addEventListener('click', () => {
  if (!mobileNavIsOpen) {
    mobileNav.style.transform = 'translateX(0)';
    mobileNavIsOpen = true;
    toggleMobileNavBtn.classList.add('active');
  } else {
    if (mobileNavSide === 'right') {
      mobileNav.style.transform = 'translateX(-100%)';
      mobileNavSide = 'left';
    } else if (mobileNavSide === 'left') {
      mobileNav.style.transform = 'translateX(100%)';
      mobileNavSide = 'right';
    }
    mobileNavIsOpen = false;
    toggleMobileNavBtn.classList.remove('active');
  }
});

const scrollBtns = [...document.querySelectorAll('.scroll')];
const scrollOnlyBtns = [...document.querySelectorAll('.scrollOnly')];
const scrollDesktop = [...document.querySelectorAll('.scrollDesktop')];

scrollBtns.forEach(i => {
  i.addEventListener('click', e => {
    if (mobileNavSide === 'right') {
      mobileNav.style.transform = 'translateX(-100%)';
      mobileNavSide = 'left';
    } else if (mobileNavSide === 'left') {
      mobileNav.style.transform = 'translateX(100%)';
      mobileNavSide = 'right';
    }
    mobileNavIsOpen = false;
    toggleMobileNavBtn.classList.remove('active');
    window.scroll({
      top: document.getElementById(e.target.value).offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  });
});

scrollDesktop.forEach(i => {
  i.addEventListener('click', e => {
    window.scroll({
      top: document.getElementById(e.target.value).offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  })
})

scrollOnlyBtns.forEach(i => {
  i.addEventListener('click', e => {
    window.scroll({
      top: document.getElementById(e.target.value).offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  });
});