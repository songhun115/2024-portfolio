
$(function(){
  /*  const leftMotion = gsap.timeline({})
    leftMotion.addLabel('label')
    .fromTo('.loading_page .txt01',{opacity:0,delay:1},{opacity:1,delay:1.2},'label')
    .fromTo('.loading_page .txt02',{opacity:0,delay:2},{opacity:1,delay:2.2},'label')
    .fromTo('.loading_page .txt03',{opacity:0,delay:3},{opacity:1,delay:3.2},'label')
    .fromTo('.loading_page .txt04',{opacity:0,delay:4},{opacity:1,delay:4.2},'label')
    .fromTo('.loading_page',{yPercent:0,},{yPercent:-100,delay:5,ease: Power4.easeIn},'label')
  
*/


    const textElements = gsap.utils.toArray('#inc01 .b_txt');
textElements.forEach(text => {
	gsap.to(text, {
		backgroundSize: '100%',
		ease: 'none',
		scrollTrigger: {
			trigger: text,
			start: 'top 100%',
			end: 'center 70%',
			scrub: true,
		},
	});
});


/*
	gsap.fromTo(".sec04 .box", {
		scale:0.5,},{
			scale:1,
			scrollTrigger: {
				markers:true,
				trigger: ".sec04", 
				start: "0 bottom", 
				end:"center 70%", 
				scrub: 2,
				},
		}
		
		);
		 */

		gsap.to('.scroll-marquee .title1',{
            scrollTrigger:{
                trigger:'.scroll-marquee',
                start:"top bottom",
                end:"bottom top",
                scrub:0.7,
                // markers:true,
            },
            xPercent:-30,
        })
		gsap.fromTo('.scroll-marquee .title2',{
            xPercent:-100,
            
        },{
			xPercent:20,
			scrollTrigger:{
                trigger:'.scroll-marquee',
                start:"top bottom",
                end:"bottom top",
                scrub:0.7,
                // markers:true,
            },
		})
		gsap.to('.scroll-marquee .title3',{
            scrollTrigger:{
                trigger:'.scroll-marquee',
                start:"top bottom",
                end:"bottom top",
                scrub:0.7,
                // markers:true,
            },
            xPercent:-90,
        })

		
	
})