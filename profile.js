class Profile{
    constructor(){
        this.clientId = "",
        this.clientSecret = ""
    }

    async getProfile(username) {
        const gotProfile = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`)

        const profile = await gotProfile.json()

        return profile
    }
}