$(document).ready(() => {
  if (window.innerWidth < 768) {
    $("li.list-group-item")
      .not("#mainMenu")
      .not("#ragging")
      .hide()
  }
})

function menuToggler() {
  var cls = event.target.id
  if (window.innerWidth < 768) {
    $("." + cls)
      .not("#" + cls)
      .toggle("slow")
  }
}
