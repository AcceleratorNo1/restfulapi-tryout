const search = document.querySelector("#search")
const profile = new Profile()
const html = new Html()

search.addEventListener("keyup",(event) => {
    let text = event.target.value

    if (!text=="") {
        profile.getProfile(text).then(item => html.showProfile(item[0]))
    }
})