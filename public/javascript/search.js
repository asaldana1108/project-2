async function searchFormHandler(event) {
    event.preventDefault();
    
    console.log("Clicked!");

    let searchterm = document.getElementById('searchtext').value.trim(); 

    console.log(searchterm);

    // run fetch request passing in searchterm


    

}

document.getElementById('search').addEventListener('click', searchFormHandler);