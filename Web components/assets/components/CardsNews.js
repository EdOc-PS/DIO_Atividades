class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }
    build() {
        const compRoot = document.createElement("div");
        compRoot.setAttribute("class", "card");

        const cardTxt = document.createElement("div");
        cardTxt.setAttribute("class", "card-text");

        const autor = document.createElement("span");
        autor.textContent = this.getAttribute("autor") || "Anonymous";

        const tituloNews = document.createElement("h3");
        tituloNews.textContent = this.getAttribute("titulo");

        const paragrafo = document.createElement("p");
        paragrafo.textContent = this.getAttribute("paragrafo")

        cardTxt.appendChild(autor);
        cardTxt.appendChild(tituloNews);
        cardTxt.appendChild(paragrafo);

        const cardImg = document.createElement("div");
        cardImg.setAttribute("class", "card-img");

        const newsImg = document.createElement("img");
        newsImg.src = this.getAttribute("foto") || "assets/img/download.png"
        newsImg.alt = "ZELDA";
        cardImg.appendChild(newsImg);

        compRoot.appendChild(cardTxt);
        compRoot.appendChild(cardImg);

        return compRoot;
    }

    style() {
        const style = document.createElement("style");
        style.textContent = `
        .card{
            display: flex;
            flex-direction: row-reverse;
            width: 50vw;
            border-radius: 15px;
            box-shadow: 0px 5px 15px rgb(0,0,0,.5);
        }
        
        .card-img{
          display: grid;
          place-items: center;
          padding: .7rem;
        }
        
        .card-img img{
            width: 230px;
            height: auto;
            border-radius: 10px;
        }
        
        .card-text{
            padding: 1.2rem;
            display: flex;
            justify-content: center;
            flex-direction: column;
        }
        
        .card-text p{
            margin: 0;
            color: #4e6173;
        }
        
        .card-text span{
            color: #3a4956;
        
        }
        
        .card-text h3{
            margin-top: 0;
        }
        `
        return style;
    }
}
customElements.define('card-news', CardNews);