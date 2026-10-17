import { SceneManager } from "./scenes.js";

const sceneManager=new SceneManager();
await sceneManager.init("./assets/menus.html", document.getElementById("cont"));
let onkey;
document.addEventListener("keydown", (e)=>onkey(e.code));
let i=1
while(i<5){
    sceneManager.set(i+"");
    await new Promise((res)=>onkey=(e)=>{
        if(e=="Space")res();
    });
    i++;
}