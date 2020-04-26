// init github
const github = new Github();
const ui = new UI();
// Search input
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const searchUserText = e.target.value;
    if (searchUserText !== '') {
        console.log(searchUserText);
        // make http call
        github.getUser(searchUserText)
            .then(data => {
                console.log(data);
                if (data.profile.message === 'Not Found') {
                    // show alerts
                    ui.showAlert('User Not Found', 'alert alert-danger');

                } else {
                    // show the profile
                    ui.clearAlert();
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            });
    } else {
        // clear profile
        ui.clearProfile();
    }
});
