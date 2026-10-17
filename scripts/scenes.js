export class SceneManager{
    #doc=document;
    #cont=document.body;
    #style=document.createElement("style");

    async init(src, cont){
        const parser=new DOMParser();
        const res=await fetch(src);
        if(!res.ok)throw new Error(`Error al buscar '${src}': ${res.status}`);
        const txt=await res.text();

        document.head.appendChild(this.#style);
        
        this.#doc=parser.parseFromString(txt, "text/html");
        this.#cont=cont;
    }

    set(id){
        const elem=this.#doc.getElementById(id);
        if(!elem)throw new Error(`Error al cargar escena '${id}': No se encontro el elemento.`);

        const style=elem.querySelector("style");
        if(style)this.#style.textContent=style.textContent;

        this.#cont.innerHTML=elem.innerHTML;
    }
}