class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        this.profile.innerHTML = `
            <div class='card card-body mb-5'> 
                <div class='row'>
                    <div class='col-md-3'>
                        <img class='img-fluid mb-1' src='${user.avatar_url}'>
                        <a href='${user.html_url}' target='_blank' class='btn btn-primary btn-block'>View Profile</a>
                    </div>
                    <div class='col-md-9'>
                        <span class='badge badge-primary'>Public Repos: ${user.public_repos}</span>
                        <span class='badge badge-secondary'>Public Gists: ${user.public_gists}</span>
                        <span class='badge badge-success'>Following: ${user.following}</span>
                        <span class='badge badge-info'>Followers: ${user.followers}</span>
                        <br>
                        <br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                            <li class="list-group-item">Email: ${user.email}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 className="page-heading mb-3" style="color: black;">Latest Repositories</h3>
            <div id='repos'></div>
        `;
    }

    showRepos(repos) {
        console.log(repos);
        let output = ``;
        repos.forEach(repo => {
            output += `
            <div class='card card-body mb-2'>
                <div class="row">
                    <div class="col-md-6">
                        <a href= '${repo.html_url}' target='_blank'>${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary">Forks: ${repo.forks_count}</span>
                        <span class="badge badge-secondary">Watchers: ${repo.watchers}</span>
                        <span class="badge badge-success">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-warning">Language: ${repo.language}</span>
        
                    </div>    
                </div>      
            </div>
            `
        });
        document.querySelector('#repos').innerHTML = output;

    }

    clearProfile() {
        this.profile.innerHTML = '';
    }

    showAlert(msg, styleClasses) {
        // clear before creating new alert
        this.clearAlert();
        console.log('called');
        const div = document.createElement('div');
        div.className = styleClasses;
        div.appendChild(document.createTextNode(msg));
        const container = document.querySelector('.search');
        const searchInputText = document.querySelector('#searchUser');
        console.log(div);
        console.log(container);
        console.log(searchInputText);
        container.insertBefore(div, searchInputText);
        setTimeout(() => this.clearAlert(styleClasses), 3000);
    }
    clearAlert() {
        const currentAlert = document.querySelector('.alert-danger');
        if (currentAlert) {
            document.querySelector('.alert-danger').remove();
        }
    }
}