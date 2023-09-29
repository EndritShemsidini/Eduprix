$(document).ready(function() {
  const eightcards = [
    {
    image1:"images/art-masterclass.png",
    image2:"images/moma.png",
    text1:"The Professional Art Masterclass",
    text2:"The Museum of Modern Art"
    },
    {
        image1:"images/premiere.png",
        image2:"images/moma.png",
        text1:"Premiere Pro CC for Beginners",
        text2:"The Museum of Modern Art"
        },
        {
            image1:"images/electricity.png",
            image2:"images/y.png",
            text1:"Electricity & Magnetism",
            text2:"Duke University"
            },
            {
                image1:"images/chemistry.png",
                image2:"images/school.png",
                text1:"School chemistry beta",
                text2:"Duke University"
                },
                {
                    image1:"images/oriental-art.png",
                    image2:"images/moma.png",
                    text1:"Modernism in Oriental Art",
                    text2:"The Museum of Modern Art"
                    },
                    {
                        image1:"images/visual-art.png",
                        image2:"images/cal-arts.png",
                        text1:"Compositions in Visual Art",
                        text2:"The Museum of Modern Art"
                        },
                        {
                            image1:"images/physics.png",
                            image2:"images/school-physics.png",
                            text1:"High School Physics",
                            text2:"The Museum of Modern Art"
                            },
                            {
                                image1:"images/davinci.png",
                                image2:"images/moma.png",
                                text1:"Color Grading with Da Vinci",
                                text2:"Duke University"
                                }
    
  ];

  for (let i = 0; i < eightcards.length; i++) {
    const card = `
    <div class="col-lg-3 col-md-6 col-xs-12">
    <div class="card custom-card border-0" >
      <div class="img-container">
      <img src="${eightcards[i].image1}" class="card-img-top artimg" alt="...">
      <img src="${eightcards[i].image2}" class="momopng" alt="">
      <a href="" class="py-2 px-3">Free</a>
      </div>
      <div class="card-body mt-5">
        <h5 class="card-title">${eightcards[i].text1}</h5>
        <p class="card-text">${eightcards[i].text2}.</p>
      </div>
    </div>
  </div>
    `;

    $('#eightcards').append(card);
    
  }});

  const exploreCards = [
    {
      image : "images/data-science.svg",
      text1 : "Data Science",
      text2 : "78 Courses"
    },
    {
      image : "images/business.svg",
      text1 : "Business & Managment",
      text2 : "67 Courses"
    },
    {
      image : "images/language.svg",
      text1 : "Language",
      text2 : "85 Courses"
    },
    {
      image : "images/information.svg",
      text1 : "Information Technology",
      text2 : "98 Courses"
    },
    {
      image : "images/film.svg",
      text1 : "Modernism in Oriental Art",
      text2 : "68 Courses"
    },
    {
      image : "images/math.svg",
      text1 : "Compositions in Visual Art",
      text2 : "878 Courses"
    },
    {
      image : "images/health.svg",
      text1 : "Health & Medical",
      text2 : "79 Courses"
    },
    {
      image : "images/design.svg",
      text1 : "Design & Creative",
      text2 : "37 Courses"
    }

  ];

  for (let i = 0; i < exploreCards.length; i++) {
    const card = `
    <div class="col-lg-3">
    <div class=" d-flex datadiv align-items-center my-2">
      <img src="${exploreCards[i].image}" class="py-4 px-3 datasvg" alt="">
      <div class="">
      <h5 class=" text-white">${exploreCards[i].text1}</h5>
      <p>${exploreCards[i].text2}</p>
      </div>
    </div>
  </div>
    `;

    $('#exploreCards').append(card);
  }


  const blogCards = [
    {
      image : "images/art-craft.png",
      span : "Art",
      text1 : "23 Nov 2021",
      h5 : "The limits between art and craft",
      text2 : "Full Article"

    },
    {
      image : "images/art-lovers.png",
      span : "Art",
      text1 : "23 Nov 2021",
      h5 : "The limits between art and craft",
      text2 : "Full Article"

    },
    {
      image : "images/statistics.png",
      span : "Art",
      text1 : "23 Nov 2021",
      h5 : "The limits between art and craft",
      text2 : "Full Article"

    },
    {
      image : "images/color-theory.png",
      span : "Art",
      text1 : "23 Nov 2021",
      h5 : "The limits between art and craft",
      text2 : "Full Article"

    },
    {
      image : "images/writing-tips.png",
      span : "Art",
      text1 : "23 Nov 2021",
      h5 : "The limits between art and craft",
      text2 : "Full Article"

    },
    {
      image : "images/classroom.png",
      span : "Art",
      text1 : "23 Nov 2021",
      h5 : "The limits between art and craft",
      text2 : "Full Article"

    },
    {
      image : "images/collectives.png",
      span : "Art",
      text1 : "23 Nov 2021",
      h5 : "The limits between art and craft",
      text2 : "Full Article"

    },
    {
      image : "images/artistic.png",
      span : "Art",
      text1 : "23 Nov 2021",
      h5 : "The limits between art and craft",
      text2 : "Full Article"

    },

  ]
  for (let i = 0; i < blogCards.length; i++) {
    const card = `
    <div class="col-lg-3 my-2">
    <div class="card card-test">
      <img src="${blogCards[i].image}" class="card-img-top px-4 pt-4" alt="...">
      <div class="card-body">
        <div class="d-flex">
          <span class="ms-2 artspan">${blogCards[i].span}</span>
          <p class="ms-auto me-3">${blogCards[i].text1}</p>
        </div>
        <hr class="hr-blogpost">
        <h5 class="card-title ps-2">${blogCards[i].h5}</h5>
        <p class="card-text ps-2">${blogCards[i].text2}</p>
      </div>
    </div>
  </div>
    `;

    $('#blogCards').append(card);
    
  };

  var carouselElement = document.querySelector('#carouselExampleIndicators');
  var counterElement = document.querySelector('.counter h1');

  carouselElement.addEventListener('slid.bs.carousel', function(event) {
    // Get the active slide index and increment it by 1
    var activeIndex = event.to + 1;
    // Pad the index with a leading zero if necessary
    var formattedIndex = activeIndex.toString().padStart(2, '0');
    // Update the counter element with the formatted index
    counterElement.textContent = formattedIndex;
  });


    $(".subscribe-btn").click(function() {
      const emailValue = $("#exampleInputEmail1").val();
      localStorage.setItem("email", emailValue);
      alert("Thank you for subscribing!");
    });
