// Fix Navbar
const nav = document.querySelector('#main');
  const topOfNav = nav.offsetTop;
  function fixNav() {
    if(window.scrollY >= topOfNav) {
      document.body.style.paddingTop = nav.offsetHeight + 'px';
      document.body.classList.add('fixed-nav');
    } else {
      document.body.style.paddingTop = 0;
      document.body.classList.remove('fixed-nav')
    }
  }
  
  // Navbar Show
  const blog = document.querySelector('.blog');
  const dropdown = document.querySelector('.dropdown');
  const body = document.querySelector('body');
  function handleEnter() {
    dropdown.classList.add('trigger-enter');
    setTimeout(() => dropdown.classList.contains('trigger-enter') && dropdown.classList.add('trigger-enter-active'), 150);
  }
  function handleLeave() {
    dropdown.classList.remove('trigger-enter', 'trigger-enter-active');
  }
  blog.addEventListener('mouseenter', handleEnter);
  blog.addEventListener('mouseleave', handleLeave)

  // Inner Navbar
  const mexicoClick = document.querySelector('.location-mexico');
  const europeClick = document.querySelector('.location-europe');
  const asiaClick = document.querySelector('.location-asia');
  // The divs - add trigger-enter and trigger-enter-active
  const mexico = document.querySelector('.mexico')
  const europe = document.querySelector('.europe')
  const asia = document.querySelector('.asia')
  const innerNav = document.querySelectorAll('.inner-nav');


  function handleShow() {
    if (this.innerHTML === "Europe") {
      mexico.classList.remove('trigger-enter', 'trigger-enter-active');
      asia.classList.remove('trigger-enter', 'trigger-enter-active');
      europe.classList.add('trigger-enter');
      setTimeout(() => europe.classList.contains('trigger-enter') && europe.classList.add('trigger-enter-active'), 150);
    } else if (this.innerHTML === "Mexico") {
      europe.classList.remove('trigger-enter', 'trigger-enter-active');
      asia.classList.remove('trigger-enter', 'trigger-enter-active');
      mexico.classList.add('trigger-enter');
      setTimeout(() => mexico.classList.contains('trigger-enter') && mexico.classList.add('trigger-enter-active'), 150);
    } else if (this.innerHTML === "Asia") {
      europe.classList.remove('trigger-enter', 'trigger-enter-active');
      mexico.classList.remove('trigger-enter', 'trigger-enter-active');
      asia.classList.add('trigger-enter');
      setTimeout(() => asia.classList.contains('trigger-enter') && asia.classList.add('trigger-enter-active'), 150);
    }
  }

  function handleGoAway(country) {
    country.classList.remove('trigger-enter', 'trigger-enter-active');
  }
  // mexicoClick.addEventListener('mouseover', handleShow);
  innerNav.forEach(link => link.addEventListener('mouseover', handleShow))

  window.addEventListener('scroll', fixNav);

