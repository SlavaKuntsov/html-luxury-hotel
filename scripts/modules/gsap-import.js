
export default gsapScroll = () => {

	["DOMContentLoaded", "resize"].forEach(e => {
		window.addEventListener(e, function() {
	
			let wrapper = document.querySelector(".wrapper")
			let content = document.querySelector(".content")
	
			// wrapper.classList.remove("wrapper")
			// content.classList.remove("content")
			
			
	
			// wrapper.classList.add("scroll_wrapper")
			// content.classList.add("scroll_content")
	
			let scroll_wrapper = document.querySelector(".scroll_wrapper")
			let scroll_content = document.querySelector(".scroll_content")
	
			content.style.removeAttribute = "transform"
			console.log("none")
			if (window.innerWidth <= 550) {
			}
			else{
				// scroll_wrapper.classList.add("wrapper")
				// scroll_content.classList.add("content")
	
				if(wrapper) {
					gsap.registerPlugin(ScrollSmoother)
				
					console.log("gsap ok")
					
					ScrollSmoother.create({
						wrapper: '.wrapper',
						content: '.content',
						smooth: 2,
						ignoreMobileResize: true
					})
				}
			}
		})
	})
}