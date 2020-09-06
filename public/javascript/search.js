async function searchFormHandler(event) {
    event.preventDefault();
    //console.log("Clicked!")
    let searchterm = document.getElementById('searchtext').value.trim(); 
    console.log(searchterm);

    if (searchterm) {
        let response = await fetch('/api/posts', {
            // create fetch request for titles that match search term

        });
        if (response = searchterm) {
            console.log(response);
            document.location.replace('/search-results');
        } else {
            alert('No Titles match this search!')
        }
    };
};

document.getElementById('search').addEventListener('click', searchFormHandler);