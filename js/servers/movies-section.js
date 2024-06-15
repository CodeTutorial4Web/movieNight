let pageIndex = 1;
const searchInput = document.getElementById('searchMovies');
const pagesNavigations = document.querySelectorAll('#movies .pages .page')
let url3 = `https://api.themoviedb.org/3/movie/now_playing?api_key=6fbba37de12293b59ae87eb2f3c33d2c&page=${pageIndex}`;
const searchUrlMovies = `https://api.themoviedb.org/3/search/movie?api_key=6fbba37de12293b59ae87eb2f3c33d2c&query=`
let data;

pagesNavigations.forEach( el => {
    el.addEventListener('click', (e) => {
        pageIndex = el.getAttribute('data-index');
        url3 = `https://api.themoviedb.org/3/movie/now_playing?api_key=6fbba37de12293b59ae87eb2f3c33d2c&page=${pageIndex}`;
        console.log(pageIndex);
        $.getJSON(url3, response => {
            data = response.results; 
            console.log(url3)
            displayMovies(data)  
        });
    })
}); 

$.getJSON(url3, response => {
    data = response.results; 
    displayMovies(data)  
});

// let videoLink = ``;

// let trailer = `https://api.themoviedb.org/3/movie/${item.id}/videos?api_key=6fbba37de12293b59ae87eb2f3c33d2c`;


function displayMovies(fetchedResults) {
    let finalResultHTML = ``;
    
    fetchedResults.forEach(item => {
        if(item.original_title.length > 25) {
            item.original_title = item.original_title.slice(0, 25 ) + "..."
        }

        // $.getJSON(trailer, response => {
        //     videoLink = `https://www.youtube.com/watch?v=${response.results[0].key}`;
        //     console.log(videoLink)
        // })


        finalResultHTML +=`  
                <div class="card">
                    <span class="type">Movie</span>
                    <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/${item.poster_path}" alt="">
                    <div class="desc">
                        <h4>${item.original_title.length > 30 ? item.original_title.slice(0, 29) + "..." : item.original_title}</h4>
                        <div class="info">
                            <span class="date">${item.release_date}</span>
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


    $("#movies .movies-container").html(finalResultHTML)
}




    function searchMovies(searchTerm){
        let err = `
        <div class="error">
            <i class="fas fa-search"></i>
            <span>OOPS!, Couldn't find "${searchTerm}"</span>
        </div> `;

        if(searchTerm && searchTerm !== "") {
            $.getJSON(searchUrlMovies + searchTerm, response => {
                data = response.results; 
                if(data.length > 0) {
                    displayMovies(data)  
                }else {
                    $("#movies.movies-container").html(err)
                }
            });
        }
        
    }
    
    searchInput.addEventListener("keyup" , ()=>{
        searchMovies(searchInput.value)
    })    

