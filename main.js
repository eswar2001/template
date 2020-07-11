$('Document').ready(() => {
  $.getJSON('data.json', (data) => {
    //hero section
    var hero = '';
    hero += '<div class="hero-container"><h1>' + data["Hero_section"].Name + '</h1><h2>' + data["Hero_section"].Tagline + '</h2><a href="#about" class="btn-scroll scrollto" title="Scroll Down"><i class="bx bx-chevron-down"></i></a></div>';
    $('#hero').append(hero);
    delete(hero);
    //about section
    var about = '';
    about += '<div class="container"><div class="section-title"><span>About Me</span><h2>About Me</h2><p>' + data["About_Me_Section"].quote + '</p></div><div class="row"> <img class="col-lg-3 d-flex align-items-stretch justify-content-center justify-content-lg-start"src="' + data["About_Me_Section"].myimg + '"><div class="col-lg-8 d-flex flex-column align-items-stretch"><div class="content pl-lg-4 d-flex flex-column justify-content-center"><div class="row"><div class="col-lg-auto"><ul><li><i class="icofont-rounded-right"></i> <strong>Name:</strong>' + data["About_Me_Section"].Name + '</li> <li><i class="icofont-rounded-right"></i> <strong>Website:</strong>' + data["About_Me_Section"].Website + '</li><li><i class="icofont-rounded-right"></i> <strong>Phone:</strong>' + data["About_Me_Section"].Website + '</li> <li><i class="icofont-rounded-right"></i> <strong>City:</strong>' + data["About_Me_Section"].City + '</li></ul></div><div class="col-lg-auto"> <ul><li><i class="icofont-rounded-right"></i> <strong>Age:</strong>' + data["About_Me_Section"].Age + '</li><li><i class="icofont-rounded-right"></i> <strong>Degree:</strong>' + data["About_Me_Section"].Degree + '</li><li><i class="icofont-rounded-right"></i> <strong>Email:</strong>' + data["About_Me_Section"].Email + '</li><li><i class="icofont-rounded-right"></i> <strong>Freelance:</strong>' + data["About_Me_Section"].Freelance + '</li></ul> </div></div><div class="row justify-content-center" style="width: 70%;padding-left:10%"><p>' + data["About_Me_Section"].aboutme + '</p></div></div></div></div></div>';
    $('#about').append(about);
    delete(about);
    // My Resume Section 
    var resume = '';
    resume += '<div class="container"><div class="section-title"><span>My Resume</span><h2>My Resume</h2><p>' + data["My_Resume_Section"].quote + '</p></div><div class="row"><div class="col-lg-6"><h3 class="resume-title">Sumary</h3><div class="resume-item pb-0"><h4>' + data["My_Resume_Section"]["Sumary"].Name + '</h4><p><em>' + data["My_Resume_Section"]["Sumary"].intro + '</em></p><p><ul><li>' + data["My_Resume_Section"]["Sumary"].location + '</li><li>' + data["My_Resume_Section"]["Sumary"].phoneno + '</li><li>' + data["My_Resume_Section"]["Sumary"].email + '</li></ul></p></div><h3 class="resume-title">Education</h3>';
    for (var i in data["My_Resume_Section"]["Education"]) {
      resume += ' <div class="resume-item"><h4>' + data["My_Resume_Section"]["Education"][i].course + '</h4><h5>' + data["My_Resume_Section"]["Education"][i].timeline + '</h5><p><em>' + data["My_Resume_Section"]["Education"][i].institute + '</em></p><p>' + data["My_Resume_Section"]["Education"][i].experience + '</p></div>';
    }
    resume += '</div><div class="col-lg-6"> <h3 class="resume-title">Professional Experience</h3>';
    for (var i in data["My_Resume_Section"]["Professional_Experience"]) {
      resume += '<div class="resume-item"><h4>' + data["My_Resume_Section"]["Professional_Experience"][i].role + '</h4><h5>' + data["My_Resume_Section"]["Professional_Experience"][i].duration + '</h5><p><em>' + data["My_Resume_Section"]["Professional_Experience"][i].location + '</em></p><p><ul>';
      for (var j in data["My_Resume_Section"]["Professional_Experience"][i]["Task"]) {
        resume += ' <li>' + data["My_Resume_Section"]["Professional_Experience"][i]["Task"][j] + '</li>';
      }
      resume += '</ul></p></div>';
    }
    resume += '</div></div></div>';
    $('#resume').append(resume);
    delete(resume);
    //My Services
    var services = '';
    services += '<div class="container"><div class="section-title"><span>My Services</span><h2>My Services</h2><p>' + data["My_Services_Section"].quote + '</p></div><div class="row">';
    for (var i in data["My_Services_Section"]["services"]) {
      services += '<div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"><div class="icon-box"><div class="icon"><i class="bx ' + data["My_Services_Section"]["services"][i].icon + '"></i></div><h4 class="title"><a href="' + data["My_Services_Section"]["services"][i].url + '">' + data["My_Services_Section"]["services"][i].nameofservice + '</a></h4><p class="description">' + data["My_Services_Section"]["services"][i].detail + '</p></div></div>';
    }
    services += '</div></div>';
    $('#services').append(services);
    delete(services);
    //testimonials
    var testimonials = '';
    for (var i in data["Testimonials_Section"]) {
      testimonials += '<div class="testimonial-item"><img src="' + data["Testimonials_Section"][i].img + '" class="testimonial-img" alt="' + data["Testimonials_Section"][i].name + '"><h3>' + data["Testimonials_Section"][i].name + '</h3><h4>' + data["Testimonials_Section"][i].designation + '</h4><p><i class="bx bxs-quote-alt-left quote-icon-left"></i>' + data["Testimonials_Section"][i].comment + '<i class="bx bxs-quote-alt-right quote-icon-right"></i></p></div>';
    }
    $('#testimonials').append(testimonials);
    $(".testimonials-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      items: 1
    });
    delete(testimonials);
    // My Portfolio Section
    var section = '<div  class="section-title"> <span>My Portfolio</span><h2>My Portfolio</h2><p>' + data["My_Portfolio_Section"].quote + '</p></div><ul id="portfolio-flters" class="d-flex justify-content-center"><li data-filter="*" class="filter-active">All</li></ul><div class="row portfolio-container" id="portfolio">';
    $('#section-title').append(section);
    delete(section);
    var datafilter = '';
    for (var i in data["My_Portfolio_Section"]["portfolio_filters"]) {
      datafilter += '<li data-filter="' + data["My_Portfolio_Section"]["portfolio_filters"][i].class + '">' + data["My_Portfolio_Section"]["portfolio_filters"][i].title + '</li>';
    }
    $('#portfolio-flters').append(datafilter);
    delete(datafilter);
    var portfolio_item = '';
    for (var i in data["My_Portfolio_Section"]["portfolio_item"]) {
      portfolio_item += ' <div class="col-lg-4 col-md-6 portfolio-item filter-' + data["My_Portfolio_Section"]["portfolio_item"][i].type + '"> <div class="portfolio-img"><img src="' + data["My_Portfolio_Section"]["portfolio_item"][i].img + '" class="img-fluid" alt=""></div><div class="portfolio-info"><h4>' + data["My_Portfolio_Section"]["portfolio_item"][i].type + '</h4><p>' + data["My_Portfolio_Section"]["portfolio_item"][i].type + '</p><a href="' + data["My_Portfolio_Section"]["portfolio_item"][i].img + '" data-gall="portfolioGallery" class="venobox preview-link"title="' + data["My_Portfolio_Section"]["portfolio_item"][i].type + ' 1"><i class="bx bx-plus"></i></a><a href="' + data["My_Portfolio_Section"]["portfolio_item"][i].link + '" class="details-link" title="More Details"><i class="bx bx-link"></i></a></div></div>';
    }
    portfolio_item += '</div>';
    $('#portfolio').append(portfolio_item);
    delete(portfolio_item);
    //Contact me section
    var Social_Profiles = '';
    Social_Profiles += '<div class="container"><div class="section-title"><span>Contact Me</span><h2>Contact Me</h2><p>' + data["About_Me_Section"].quote + '</p></div><div class="row"> <div class="col"><div class="row"> <div class="col-md-12"> <div class="info-box"><i class="bx bx-share-alt"></i><h3>Social Profiles</h3><div class="social-links">';
    for (var i in data["Social_Profiles"]) {
      Social_Profiles += '<a href="' + data["Social_Profiles"][i].link + '" class="' + data["Social_Profiles"][i].icon.replace('icofont-', '') + '"><i class="' + data["Social_Profiles"][i].icon + '"></i></a>';
    }
    Social_Profiles += '</div></div></div><div class="col-md-6"><div class="info-box mt-4"><i class="bx bx-envelope"></i><h3>Email Me</h3><p>' + data["email"] + '</p></div> </div><div class="col-md-6"> <div class="info-box mt-4"><i class="bx bx-phone-call"></i><h3>Call Me</h3><p>' + data["phone"] + '</p></div></div></div></div></div></div>';
    $('#contact').append(Social_Profiles);
    delete(Social_Profiles);
  });
});
!(function ($) {
  "use strict";

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function () {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });


  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Testimonials carousel (uses the Owl Carousel library)


  // Porfolio isotope and filter
  $(window).on('load', function () {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });

    $('#portfolio-flters li').on('click', function () {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function () {
      $('.venobox').venobox();
    });
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

})(jQuery);