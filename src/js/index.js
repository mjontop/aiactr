$(document).ready(() => {
    if (window.innerWidth < 768) {
        $(".list").hide()
    }
})

function menuToggler() {
    if (window.innerWidth < 768) {
        $(".list").toggle()
    }
}
