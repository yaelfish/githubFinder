// Init github
const github = new Github;
// Init ui
const ui = new UI;

// Search input
const searchInput = document.getElementById('searchUser');

// Search input event listener
searchInput.addEventListener('keyup', (e)=> {
    // Get input Text
    const userText = e.target.value;

    if(userText != '') {
        //Make HTTP call
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found'){
                    // Show alert
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    // Show profile
                    ui.showProfile(data.profile);
                    // Show repos
                    ui.showRepos(data.repos);
                }
            })
    } else {
        // Clear profile
        ui.clearProfile();
    }
});