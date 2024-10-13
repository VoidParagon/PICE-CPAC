async function fetchData() {

    const data = await fetch("https://voidparagon.github.io/PICE-CPAC/news.json");
    parsedData = await data.json();
    console.log(parsedData)

    parsedData.forEach(news => {
        const markup = `<li>${news.headline}: ${news.summary}</li>`

        const markup1 = `
        
            <div class="card" style="width: 18rem;">
                <img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1927f873c9c%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1927f873c9c%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.71875%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" class="card-img-top" alt="...">
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
