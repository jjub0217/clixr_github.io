$(function () {
  
  
  /**
   * @swiper기능
   * 
   */
  const sloganLoop = new Swiper('.section-slogan .swiper',{
    direction: 'vertical',
    loop: true,
    autoplay: true,
  })


  /** 
   *  @slogan섹션내의panel이라는classname요소가좌우로움직이능기능
   * 
  */
  gsap.to($(".panel"), {
    xPercent: -50 * ($(".panel").length -1),
    scrollTrigger: {
      trigger: $(".top-panel"),
      start:"0% 100%",
      end:"100% 0%",
      markers:false,
      scrub: 1,  
      end: () => "+=" + $(".top-panel").innerWidth()
    }
  })


  /** 
   *  @slogan섹션내의reversepanel이라는classname요소가좌우로움직이능기능
   * 
  */
  gsap.from($(".reverse-panel"), {
    xPercent: -20 * ($(".reverse-panel").length -1),
    scrollTrigger: {
      trigger: $(".bottom-panel"),
      start:"0% 100%",
      end:"100% 0%",
      markers:false,
      scrub: 1,  
      end: () => "+=" + $(".bottom-panel").innerWidth()
    }
  })


  /** 
   *  @shaping섹션내의이미지들이pc디바이스에서움직이는기능
   * 
  */
  gsap.timeline({
    scrollTrigger:{
      trigger:$(".section-shaping .pc-inner"), 
      start:"10% 100%",
      end:"25% 0%",
      markers:false,
      scrub:1,
      },
    })
  .addLabel('a')
  .fromTo($('.section-shaping .pc-inner .left .image1'), {rotation:-15, xPercent: -120},  {rotation:0, xPercent: 10, },'a')
  .fromTo($('.section-shaping .pc-inner .left .image2'), {rotation:-40, xPercent: -140},{rotation:-15, xPercent: -30, },'a')
  .fromTo($('.section-shaping .pc-inner .right .image1'), {rotation:40, xPercent: 140},{rotation:0, xPercent: 5, },'a')
  .fromTo($('.section-shaping .pc-inner .right .image2'), {rotation:15, xPercent: 120},  {rotation:15, xPercent: 45, },'a')


  /** 
   *  @shaping섹션내에서top이라는classname을가진요소내의이미지들이모바일디바이스에서움직이는기능
   * 
  */
  gsap.timeline({
    scrollTrigger:{
      trigger:$(".section-shaping .mo-inner .top"), 
      start:"0% 100%",
      end:"100% 20%",
      markers:false,
      scrub:1,
      },
    })
  .addLabel('a')
  .fromTo($('.section-shaping .mo-inner .top .image1'), {rotation:-40, xPercent: -170},  {rotation:20, xPercent: 15},'a')
  .fromTo($('.section-shaping .mo-inner .top .image2'), {rotation:-40, xPercent: -140,  yPercent:-2},{rotation:-15, xPercent: -21, },'a')


  /** 
   *  @shaping섹션내에서bottom이라는classname을가진요소내의이미지들이모바일디바이스에서움직이는기능
   * 
  */
  gsap.timeline({
    scrollTrigger:{
      trigger:$(".section-shaping .mo-inner .bottom"), 
      start:"0% 100%",
      end:"100% 20%",
      markers:false,
      scrub:1,
      },
    })
  .addLabel('a')
  .fromTo($('.section-shaping .mo-inner .bottom .image1'), {rotation:25, xPercent: 80, yPercent:-4},
  {rotation:10, xPercent: -17, },'a')
  .fromTo($('.section-shaping .mo-inner .bottom .image2'), {rotation:10, xPercent: 130, yPercent:-1},  {rotation:-20, xPercent: -60, },'a')


  /** 
   *  @product섹션내에서이미지들이부채펼쳐지듯이움직이는기능
   * 
  */
  gsap.timeline({
    scrollTrigger:{
      trigger:$(".section-product"), 
      start:"0% 0",
      end:"30% top",
      markers:false,
      pin: $(window).width() > 767 ? true : false,
      scrub:1,
    },
  })
  .addLabel('a')
  .fromTo($('.section-product .image5'), 
  {rotation:0, xPercent: -7, yPercent:-50, zPercent: 0},  
  {rotation:7.7, xPercent: 26, yPercent:-44, zPercent:0},'a')
  .fromTo($('.section-product .image4'),
  {rotation:-15, xPercent: -5, yPercent:-47, zPercent: 0},
  { xPercent: 17, yPercent:-36, zPercent:0},'a')
  .fromTo($('.section-product .image3'),
  {rotation:-30,  xPercent: -4, yPercent:-46, zPercent: 0},
  {rotation:-25, xPercent: -8, yPercent:-35, zPercent: 0},'a')
  .fromTo($('.section-product .image2'),
  {rotation:-45, xPercent: -6, yPercent:-47, zPercent: 0}, 
  {rotation:-33, xPercent: -43, yPercent:-36, zPercent: 0},'a')
  .fromTo($('.section-product .image1'), 
  {rotation:-60,  xPercent: -7, yPercent:-48, zPercent: 0}, 
  {rotation:-50, xPercent: -60, yPercent:-33, zPercent: 0},'a')


  /** 
   *  @potential섹션내에서이미지들이스크롤과미디어쿼리에의해상하로움직이는기능
   * 
  */
  ScrollTrigger.matchMedia({
    "(min-width: 480px)": function() {
      gsap.timeline({
        scrollTrigger:{
        trigger:$(".section-potential"), 
        start:"0% center",
        end:"100% 0",
        markers:false,
        scrub:1,
        duration: 5
        },
      })
      .addLabel('a')
      .fromTo($('.section-potential .left'), 
      {rotationZ:-30, xPercent: 40, yPercent:15, z: 0},  
      {rotationZ:-8, yPercent:50, z:0},'a')
      .fromTo($('.section-potential .right'),
      {rotationZ:20, xPercent: -40, yPercent:10, z: 0},
      {rotationZ:26,yPercent:80, z:0},'a')
      .fromTo($('.section-potential .bottom .image-box'),
      {rotationZ:-15, xPercent: 0, yPercent:0, z: 0},
      {rotationZ:-1,yPercent:-40, z:0},'a')
    },
    "(max-width: 479px)": function() {
      gsap.timeline({
        scrollTrigger:{
        trigger:$(".section-potential"), 
        start:"0% center",
        end:"100% 0",
        markers:false,
        scrub:1,
        duration: 5
        },
      })
      .addLabel('a')
      .fromTo($('.section-potential .left'), 
      {rotationZ:-30, xPercent: -20, yPercent:15, z: 0},  
      {rotationZ:-8, yPercent:50, z:0},'a')
      .fromTo($('.section-potential .right'),
      {rotationZ:20, xPercent: 20, yPercent:10, z: 0},
      {rotationZ:26,yPercent:80, z:0},'a')
      .fromTo($('.section-potential .bottom .image-box'),
      {rotationZ:-15, xPercent: 0, yPercent:0, z: 0},
      {rotationZ:-1,yPercent:-30, z:0},'a')
    },
  })


  /** 
   *  @all섹션내에서이미지들이스크롤과미디어쿼리에의해좌우로움직이는기능
   * 
  */
  ScrollTrigger.matchMedia({
    "(min-width: 480px)": function() {
      gsap.timeline({
        scrollTrigger:{
          trigger:$(".section-all .images-box"), 
          start:"top 30%",
          // "트리거 영역의 끝점, 트리거 끝나는 기준"
          end: "bottom 30%",
          markers:false,
          pin: $(window).width() > 767 ? true : false,
          scrub:1,
        },
      })
      .addLabel('a')
      .fromTo($('.section-all .images-box .left'), 
      { xPercent: 0, yPercent:11, z: 0},  
      { xPercent: -40, z:0},
      'a')
      .fromTo($('.section-all .images-box .right'),
      {xPercent:0, yPercent:11, z: 0},
      {xPercent:40, z:0},
      'a')
    },
    "(max-width: 479px)": function() {
      gsap.timeline({
        scrollTrigger:{
          trigger:$(".section-all .images-box"), 
          start:"top 30%",
          end: "bottom 30%",
          markers:false,
          pin: $(window).width() > 767 ? true : false,
          scrub:1,
        },
      })
      .addLabel('a')
      .fromTo($('.section-all .images-box .left'), 
      { xPercent: 0, yPercent:11, z: 0},  
      { xPercent: -20, z:0},
      'a')
      .fromTo($('.section-all .images-box .right'),
      {xPercent:0, yPercent:11, z: 0},
      {xPercent:20, z:0},
      'a')
    },
  })


  /** 
   *  @power섹션내에서이미지들이스크롤의해좌우로움직이는기능
   * 
  */
  gsap.timeline({
  scrollTrigger:{
    trigger:$(".section-power .panels-list"), 
    start:"15% 100%",
    end:"100% 0%",
    markers:false,
    scrub:1,
    },
  })
  .addLabel('a')
  .fromTo($('.section-power .panels-list .panel-item'), 
  { xPercent: 0, yPercent:0, z: 0},  
  { xPercent: -220, z:0},
  'a')
  .fromTo($('.section-power .inner .desc'),
  {yPercent:50},
  {yPercent:-30},
  'a')


  /** 
   *  @audience섹션내에서이미지들이스크롤의해크기가커지고작아지는기능
   * 
  */
  gsap.timeline({
    scrollTrigger:{
      trigger:$(".section-audience"), 
      start:"0% 100%",
      end:"100% 100%",
      markers:false,
      scrub:1,
    },
  })
  .addLabel('a')
  .fromTo($('.section-audience .image'), 
  { scaleX: -0.5, scaleY:-0.5, scaleZ: -0.5},  
  { scaleX: 1, scaleY:1, scaleZ: 1},
  'a')
  .fromTo($('.section-audience .headline'),
  { scaleX: 0.2, scaleY:0.2, scaleZ: 1},  
  { scaleX: 1, scaleY:1, scaleZ: 1},
  'a')


  /** 
   *  @happy섹션내에서이미지들이스크롤의해상하로움직이는기능
   * 
  */
  gsap.timeline({
    scrollTrigger:{
      trigger:$(".section-happy"), 
      start:"0% 100%",
      end:"100% 0%",
      markers:false,
      scrub:1,
    },
  })
  .fromTo($('.section-happy .inner'), 
  { height: "44vw",},  
  { height: "27vw",})
  .addLabel('a')
  .fromTo($('.section-happy .inner-mo .top'), 
  { height: "40vw"},  
  { height: "19vw"},  
  'a')
  .fromTo($('.section-happy .inner-mo .bottom'), 
  { height: "40vw"},  
  { height: "23vw"},  
  'a')


  /** 
   *  @works섹션내에서이미지들이스크롤과미디어쿼리의해상하로움직이는기능
   * 
  */
  ScrollTrigger.matchMedia({
    "(min-width: 768px)": function() {
      gsap.timeline({
        scrollTrigger:{
          trigger:$(".section-works"), 
          start:"-30% 100%",
          end:"0% 0%",
          markers:false,
          scrub:1,
        },
      })
      .addLabel('a')
      .to($('.section-works .video-box .video1'), 
      { y: "4%"},'a')
      .to($('.section-works .video-box .video2'), 
      { y: "-4%"},'a')
      .to($('.section-works .video-box .video3'), 
      { y: "-12%"},  
      'a')
      .to($('.section-works .video-box .video4'), 
      { y: "-20%"},'a')
    },
    "(max-width: 767px)": function() {
      gsap.timeline({
        scrollTrigger:{
          trigger:$(".section-works .video-box"), 
          start:"0% 100%",
          end:"0% 0%",
          markers:false,
          scrub:1,
        },
      })
      .addLabel('a')
      .to($('.section-works .video-box .video1'), 
      { y: "10%"},'a')
      .to($('.section-works .video-box .video2'), 
      { y: "5%"},'a')
      .to($('.section-works .video-box .video3'), 
      { y: "0%"},  
      'a')
      .to($('.section-works .video-box .video4'), 
      { y: "-6%"},'a')
    },
    "(max-width: 479px)": function() {
      gsap.timeline({
        scrollTrigger:{
          trigger:$(".section-works .video-box"), 
          start:"0% 100%",
          end:"0% 0%",
          markers:false,
          scrub:1,
        },
      })
      .addLabel('a')
      .to($('.section-works .video-box .video1'), 
      { y: "3%"},'a')
      .to($('.section-works .video-box .video2'), 
      { y: "-2%"},'a')
      .to($('.section-works .video-box .video3'), 
      { y: "-7%"},
      'a')
      .to($('.section-works .video-box .video4'), 
      { y: "-56%"},'a')
    },
    })


  /** 
   * //?????일시정지가안되네...
   *  @works섹션내에서이미지들이스크롤과미디어쿼리의해상하로움직이는기능
   * 
  */
  $(".section-works .video1 .video-pause").click(function(e){
    e.preventDefault()
    $(this).toggleClass("active")
    $(this).siblings("video").attr("loop") 
    ? $(this).siblings("video").removeAttr('loop') 
    : $(this).siblings("video").attr('loop', true)

  })


  /** 
   *  @get섹션내에서right이라는classname을가진요소가스크롤에의해움직이는기능
   * 
  */
  gsap.to($(".section-get .right"), {
    opacity: 1,
    x: 0,
    duration: 1,
    scrollTrigger:{ 
      trigger: $(".section-get .right"),
      markers:false,
    }
  })


  /** 
   *  @price섹션내에서left이라는classname을가진요소가스크롤에의해움직이는기능
   * 
  */
  gsap.to($(".section-price .left"), {
    opacity: 1,
    x: 0,
    duration: 1,
    scrollTrigger:{ 
      trigger: $(".section-price .left"),
      markers:false,
    }
  })


  /** 
   *  @price섹션내에서center이라는classname을가진요소가스크롤에의해움직이는기능
   * 
  */
  gsap.to($(".section-price .center"), {
    opacity: 1,
    y: 0,
    duration: 1,
    scrollTrigger:{ 
      trigger: $(".section-price .center"),
      markers:false,
    }
  })


  /** 
   *  @price섹션내에서right이라는classname을가진요소가스크롤에의해움직이는기능
   * 
  */
  gsap.to($(".section-price .right"), {
    opacity: 1,
    x: 0,
    duration: 1,
    scrollTrigger:{ 
      trigger: $(".section-price .right"),
      markers:false,
    }
  })


  /** 
   *  @free섹션내에서top이라는classname을가진요소가스크롤에의해움직이는기능
   * 
  */
  gsap.to($(".section-free .inner .top"), {
    opacity: 1,
    y: 0,
    duration: 1,
    scrollTrigger:{ 
      trigger: $(".section-free .inner .top"),
      markers:false,
    }
  })


  /** 
   *  @free섹션내에서bottom영역의자식으로left라는classname을가진요소가스크롤에의해움직이는기능
   * 
  */
  gsap.to($(".section-free .inner .bottom .left"), {
    opacity: 1,
    x: 0,
    duration: 1,
    scrollTrigger:{ 
      trigger: $(".section-free .inner .bottom .left"),
      markers:false,
    }
  })


  /** 
   *  @free섹션내에서bottom영역의자식으로right라는classname을가진요소가스크롤에의해움직이는기능
   * 
  */
  gsap.to($(".section-free .inner .bottom .right"), {
    opacity: 1,
    x: 0,
    duration: 1,
    scrollTrigger:{ 
      trigger: $(".section-free .inner .bottom .right"),
      markers:false,
    }
  })


  /** 
   *  @faq섹션내에서faqitem의sublist가나타나는기능
   * 
  */
  $(".faq-item").click(function(e){
    e.preventDefault();
    if($(this).find('.sub-list').length){
      $(this).toggleClass('active')
    }
  })
  

  /** 
   *  @need섹션내에서스크롤에의해텍스트가가나타나는기능
   * 
  */
  gsap.timeline({
    scrollTrigger:{
      trigger:$(".section-need"), 
      start:"0% 100%",
      end:"100% 100%",
      markers:false,
      scrub:1,
    },
  })
  .addLabel('a')
  .fromTo($('.section-need .headline'), 
  { xPercent: -100},  
  { xPercent: 0},  
  'a')
  .fromTo($('.section-need .right'), 
  { rotate: 28,xPercent: 150},  
  {rotate: 0, xPercent: 0},  
  'a')


})
