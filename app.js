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
  
  const blog = document.querySelector('.blog');
  const dropdown = document.querySelector('.dropdown');
  const body = document.querySelector('body');
  function handleEnter() {
    console.log('hello');
    dropdown.classList.add('trigger-enter');
    setTimeout(() => dropdown.classList.contains('trigger-enter') && dropdown.classList.add('trigger-enter-active'), 150)

  }
  function handleLeave(e) {
    console.log(e.target);
    dropdown.classList.remove('trigger-enter', 'trigger-enter-active');
    // if(!e.target.classList.contains('dropdown')) {
    // }
  }

  blog.addEventListener('mouseenter', handleEnter);
  blog.addEventListener('mouseleave', handleLeave)
  
  
  window.addEventListener('scroll', fixNav);

