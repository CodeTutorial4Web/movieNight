let pageIndexSecond = 1;
const searchTVInput = document.getElementById('searchTv');
const pagesNavigationsTV = document.querySelectorAll('#tvShows .pages .page')
const searchUrlTV = `https://api.themoviedb.org/3/search/tv?api_key=6fbba37de12293b59ae87eb2f3c33d2c&query=`;
let url4 = `https://api.themoviedb.org/3/tv/popular?api_key=6fbba37de12293b59ae87eb2f3c33d2c&page=${pageIndexSecond}`;
let dataTV;

pagesNavigationsTV.forEach( el => {
    el.addEventListener('click', (e) => {
        pageIndexSecond = el.getAttribute('data-index');
        url4 = `https://api.themoviedb.org/3/tv/popular?api_key=6fbba37de12293b59ae87eb2f3c33d2c&page=${pageIndexSecond}`;
        console.log(pageIndexSecond);
        $.getJSON(url4, response => {
            dataTV = response.results; 
            console.log(url4)
            displayTvShows(dataTV)  
        });
    })
}); 

$.getJSON(url4, response => {
    dataTV = response.results; 
    displayTvShows(dataTV)  
});


function displayTvShows(fetchedResults) {
    let finalResultHTML = ``;
    fetchedResults.forEach(item => {
        finalResultHTML +=`  
                <div class="card">
                    <span class="type">TV SHOW</span>
                    <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/${item.poster_path}" alt="">
                    <div class="desc">
                        <h4>${item.original_name.length > 30 ? item.original_name.slice(0, 29) + "..." : item.original_name}</h4>
                        <div class="info">
                            <span class="date">${item.first_air_date}</span>
                            <span class="rating">${item.vote_average.toFixed(1)} <i class="fas fa-star"></i></span>
                         </div>
                        <div class="card-buttons-container">
                            <a href="#"><span>Whatch Now</span></a>
                            <a href="#"><span>Add to List</span></a>
                        </div>
                    </div>
                </div>
            `
    });

    $("#tvShows .tv-shows-container").html(finalResultHTML)
}




function searchTV(searchTerm){
    let err = `
            <div class="error">
                <i class="fas fa-search"></i>
                <span>OOPS!, Couldn't find "${searchTerm}"</span>
            </div> 
    
    
    `;
    if(searchTerm && searchTerm !== "") {

        $.getJSON(searchUrlTV + searchTerm, response => {
            
            data = response.results; 
            if(data.length > 0) {
                displayTvShows(data)  
            }else {
                $("#tvShows .tv-shows-container").html(err)

            }
        });
    }
    
}
    
    searchTVInput.addEventListener("keyup" , ()=>{
        searchTV(searchTVInput.value)
    })    

