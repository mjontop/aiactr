$(document).ready(() => {
  if (window.innerWidth < 768) {
    $("li.list-group-item")
      .not("#mainMenu")
      .not("#ragging")
      .not("#events")
      .not("#important-links")
      .not("#Affiliations")
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

