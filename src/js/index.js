$(document).ready(() => {
	if (window.innerWidth < 768) {
		$("li.list-group-item")
			.not("#mainMenu")
			.hide()
	}
})

function menuToggler() {
	if (window.innerWidth < 768) {
		$("li.list-group-item")
			.not("#mainMenu")
			.toggle("slow")
	}
}
