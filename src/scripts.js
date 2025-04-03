document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('#image-slider', {
      type   : 'loop',
      drag   : 'free',
      snap   : true,
      perPage: 3,
      gap    : '2rem',
      breakpoints: {
          640: {
              perPage: 2,
              gap    : '.7rem',
          },
          480: {
              perPage: 1,
              gap    : '.7rem',
          },
      },
  });

  splide.mount();
});