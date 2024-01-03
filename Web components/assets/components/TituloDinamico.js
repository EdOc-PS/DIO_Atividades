class TituloDinamico extends HTMLElement {
    constructor() {
        super();
        
        const shadow =this.attachShadow({mode: "open"});
        //base: 
        const compRoot = document.createElement("h1");
        compRoot.textContent = this.getAttribute("title");
        //estilização: 
        const style = document.createElement("style");
        style.textContent = `
        h1{
            color: #62D2A2;
        }`
        //enviar:
        shadow.appendChild(compRoot);
        shadow.appendChild(style);
    }
}
customElements.define('titulo-dinamico', TituloDinamico);

/*class TituloDinamico extends HTMLElement {
    constructor() {
        super();
        
        const shadow =this.attachShadow({mode: "open"})
        shadow.innerHTML = "<h1>Card News</h1>";
    }
}
customElements.define('card-news', TituloDinamico);
*/