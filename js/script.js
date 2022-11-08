var nav = document.querySelector('nav');
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 40){
        nav.classList.add('on')
        nav.classList.remove('transp')
      } else {
        nav.classList.remove('on')
        nav.classList.add('transp')
      }
    })