// typewritter effect
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    
};


/*===== NAV BAR =====*/
// const nav = document.querySelector('.nav__list'),
//     navList = nav.querySelectorAll('li'),
//     totalNavList = navList.length,
//     allSection = document.querySelectorAll('.section'),
//     totalSection = allSection.length;

//     for(let i = 0; i<totalNavList; i++){
//         const a = navList[i].querySelector('a');
//          a.addEventListener('click', function(){
            
//             removeBackSection();
//             if(screen.width > 860) {
//                 for(let j=0; j<totalNavList; j++){
//                     if(navList[j].querySelector('a').classList.contains('active')){
//                         addBackSection(j);
//                         //allSection[j].classList.add('back-section');
//                     }
//                     navList[j].querySelector('a').classList.remove('active');
//                 }
//             }
//              this.classList.add('active')
//              showSection(this);
//          })
//     }

//     function removeBackSection(){
//         for(let i=0; i<totalSection; i++){
//             allSection[i].classList.remove('back-section');
//         }
//     }

//     function addBackSection(num){
//         allSection[num].classList.add('back-section')
//     }

//      function showSection(element){
//         for(let i=0; i<totalSection; i++){
//             allSection[i].classList.remove('active');
//         }
//          const target = element.getAttribute('href').split('#')[1];
//          document.querySelector('#' + target).classList.add('active')
//      } 

//      function updateNAV(element){
//         for(let i=0; i<totalNavList; i++){
//             navList[i].querySelector('a').classList.remove('active');
//             const target = element.getAttribute('href').split('#')[1];
//             if(target === navList[i].querySelector('a').getAttribute('href').split('#')[1]){
//                 navList[i].querySelector('a').classList.add('active');
//             }
//         }
//      }

     //button # linking
   
    //  document.querySelector('.about-me').addEventListener('click', function(){
    //     const sectionIndex = this.getAttribute('data-section-index');
    //     showSection(this);
    //     updateNAV(this);
    //     removeBackSection();
    //     addBackSection(sectionIndex);
    //  })
     
    //  document.querySelector('.hire-me').addEventListener('click', function(){
    //     const sectionIndex = this.getAttribute('data-section-index');
    //     showSection(this);
    //     updateNAV(this);
    //     removeBackSection();
    //     addBackSection(sectionIndex);
    //  })
     
    //  document.querySelector('.see-projects').addEventListener('click', function(){
    //     const sectionIndex = this.getAttribute('data-section-index');
    //     showSection(this);
    //     updateNAV(this);
    //     removeBackSection();
    //     addBackSection(sectionIndex);
    //  })
     


/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
            for(let i=0; i<totalSection; i++){
                allSection[i].classList.add('show');
            }
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link'),
     close = document.querySelector('.close-button') 

function linkAction(){
        const navMenu = document.getElementById('nav-menu')
        // When we click on each nav__link, we remove the show-menu class
        navMenu.classList.remove('show')
        for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove('show');
        }
}
navLink.forEach(n => n.addEventListener('click', linkAction))
close.addEventListener('click', linkAction)


/*===== DARK AND LIGHT MODE =====*/
const dayNight = document.querySelector('.day-night');
const body = document.body;
dayNight.addEventListener('click', () =>{
    dayNight.querySelector('i').classList.toggle('fa-sun');
    dayNight.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('dark');
})
window.addEventListener('load', () => {
    if(document.body.classList.contains('dark'))
    {
        dayNight.querySelector('i').classList.add('fa-sun')
    }
    else
    {
        dayNight.querySelector('i').classList.add('fa-moon')
    }
})

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset;
    // if(screen.width <= 860) {
        //code goes 
        sections.forEach(current =>{
            const sectionHeight = current.offsetHeight
            const sectionTop = current.offsetTop - 50;
            sectionId = current.getAttribute('id')
    
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
            }else{
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
            }
        })
    // }
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const tr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: true
});

    tr.reveal('.section-title, .home__data, .success',{delay: 100}); 
    tr.reveal('.skill-item, .contact-info-item,.logos img, .service-item',{ interval: 100}); 
    tr.reveal('.project-button, .contact__input',{interval: 300});
    tr.reveal('.home__img, .contact__form',{delay: 500});


    setTimeout(function(){

        document.getElementById('success').className += ' hidden';
    
    }, 5000);

const lr = ScrollReveal({
        origin: 'left',
        distance: '60px',
        duration: 2000,
        delay: 200,
        reset: true
    });

   
    lr.reveal('.project-desc, .contact-title',{delay: 100}); 
    lr.reveal('.home__social-icon',{ delay: 200}); 
    lr.reveal('.project-left, .service-sub-title',{interval: 300});
    lr.reveal('.personal-info',{delay: 500});



const rr = ScrollReveal({
        origin: 'right',
        distance: '60px',
        duration: 2000,
        delay: 200,
        reset: true
    });

   
    rr.reveal('.contact-sub-title',{delay: 100}); 
    rr.reveal('.about-text',{ delay: 200}); 
    rr.reveal('.project-right, .service-title',{interval: 300});
    rr.reveal('.home__img',{delay: 500});

    