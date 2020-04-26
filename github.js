/*
Client ID
28c5ebdddd0a666150f1
Client Secret
e7e084704307dc18d60991566d040a93316d524b
*/
class Github {
    constructor() {
        this.clientId = '28c5ebdddd0a666150f1',
            this.clientSecret = 'e7e084704307dc18d60991566d040a93316d524b';
        this.repos_count = 5;
        this.repos_sort = 'creadted: asc';
    }

    async getUser(user) {
        const profileResoponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`)
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`)
        const profileData = await profileResoponse.json();
        const reposData = await reposResponse.json();
        return {
            profile: profileData,
            repos: reposData
        }
    }



}