console.log("this is my index file");
// News variables

// Grabing news container
let news_container = document.getElementById('news_container');
// ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=in&apiKey=7049333115424834a1ac41be4c925216', true);
xhr.onload = function() {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            console.log(element, index);

            let news = `
            <div class="container my-3" >
                    <p>
                        <button class="btn btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                ${element["title"]}
                </button>
                    </p>
                    <div class="collapse my-3 news-container" id="collapse${index}">
                        <div class="image-div"><img src="${element["urlToImage"]}" alt=""></div>
                        <div class="card card-body news-content">
                            ${element["content"]}. <a href="${element["url"]}" target="_blank">Read more here</a>
                        </div>
                    </div>
                </div>`
            newsHtml += news;
        });



        news_container.innerHTML = newsHtml;
    } else {
        console.log("some error occured")
    }
}
xhr.send();