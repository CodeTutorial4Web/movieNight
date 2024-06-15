const url = 'https://api.themoviedb.org/3/trending/movie/day?api_key=6fbba37de12293b59ae87eb2f3c33d2c';


     $.getJSON(url, data => {
        const homeData = data.results.splice(1, 7);
        let finalResultHTML = ``;
        homeData.forEach(movie => {
            finalResultHTML +=`
            <div class="swiper-slide">
            <img src="https://image.tmdb.org/t/p/original${movie.backdrop_path}" alt="">
            <div class="content">
                <div class="info">
                    <span class="duration">120 Min</span> 
                    <span class="dot"></span>
                    <span class="rating">${movie.vote_average.toFixed(1)} <i class="fas fa-star"></i></span> 
                    <span class="dot"></span>
                    <span class="date">${movie.release_date}</span>
                    <span class="dot"></span>
                    <span class="resolution"> FULL HD</span>
                </div>
    
                <div class="desc">
                    <h2>${movie.original_title}</h2>
                    <p>${movie.overview}</p>
                </div>
                <div class="buttons">
                    <a href="https://www.themoviedb.org/movie/573435-bad-boys-ride-or-die#play=uWLNl_KQCAU" class="watch-trailer"><i class="fas fa-play"></i> <span>Wahtch Trailer</span></a>
                    <a href="#" class=""> <i class="fas fa-plus"></i><span>Add To List</span></a>
                </div>
            </div>
          </div> 
            `
        });
    
        $("#home .swiper .swiper-wrapper").html(finalResultHTML)
    })
    

 
    
