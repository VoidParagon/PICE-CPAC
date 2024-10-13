async function fetchData() {

    const data = await fetch("https://voidparagon.github.io/PICE-CPAC/news.json");
    parsedData = await data.json();
    console.log(parsedData)

    parsedData.forEach(news => {
        const markup = `<li>${news.headline}: ${news.summary}</li>`

        const markup1 = `
        
            <div class="card" style="width: 18rem;">
                <img src="${news.image}" class="card-img-top" alt="ACTIVITY THUMBNAIL">
                <div class="card-body">
                <h5 class="card-title">${news.headline}</h5>
                <p class="card-text">${news.summary}</p>
                <a href="${news.link}" class="btn btn-primary">See full report</a>
                </div>
            </div>                
        
        `
        console.log(`${news.headline}: ${news.summary}`)
        document.querySelector('#news-section').insertAdjacentHTML('beforeend',markup1)
    });

    // console.log(parsedData[0].headline)

}

fetchData();
