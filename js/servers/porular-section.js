const url2 = 'https://api.themoviedb.org/3/trending/all/day?api_key=6fbba37de12293b59ae87eb2f3c33d2c';


$.getJSON(url2, response => {

    const data = response.results;
    let finalResultHTML = ``;
    data.forEach(item => {
        let mediaType = ""
        if(item.media_type == "movie") {
            if(item.original_title.length > 30) {
                item.original_title = item.original_title.slice(0, 25) + "..."
            }
            mediaType = "Movie";
        }else {
            if(item.name.length > 30) {
                item.original_name = item.original_name.slice(0, 25) + "..."
            }
            mediaType = "TV Show";
        }
    finalResultHTML +=`
        
                <div class="card">
                    <span class="type">${mediaType}</span>
                    <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/${item.poster_path}" alt="">
                    <div class="desc">
                        <h4>${item.media_type == 'movie' ? item.original_title: item.original_name}</h4>
                        <div class="info">
                            <span class="date">${item.media_type == 'movie' ? item.release_date : item.first_air_date}</span>
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
    
        $("#popular .porular-movies-container").html(finalResultHTML)
    })
    

 
    