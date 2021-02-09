class Html {
    constructor(){
        this.htmlProfile = document.querySelector("#profile")
    }

    showProfile(profile){
        this.htmlProfile.innerHTML = `
        <div class="card card-body">
            <div class="row">
                <div class="col">
                    <h4>Contact</h4>
                    <ul class="list-group">
                    <li class="list-group-item">Name: ${profile.name}</li>
                    <li class="list-group-item">Username: ${profile.username}</li>
                    <li class="list-group-item">Email: ${profile.email}</li>
                    <li class="list-group-item">Address: ${profile.address.street} ${profile.address.suite}</li>
                    <li class="list-group-item">Phone: ${profile.phone}</li>
                    <li class="list-group-item">Website: ${profile.website}</li>
                    <li class="list-group-item">Company: ${profile.company.name}</li>
                    </ul>
                </div>
            </div>
        </div>`
    }
}