// import image1 from "./images/garage_image.png";
const apps = [
    {
        name:"Garage manager",
        link:"https://jasonrlh95.github.io/garage_app/",
        folder:"sites"
    },{
        name:"Sudoku game",
        link:"https://jasonrlh95.github.io/sudoku/",
        folder:"games"
    },
    {
        name:"Bank expenses app",
        link:"https://jasonrlh95.github.io/bankApp/",
        folder:"sites"
    },
    {
        name:"Cards war game",
        link:"https://jasonrlh95.github.io/cards_game_app/",
        folder:"games"
    }
]
var folders = [];
var headers = [];
var apps_folder1 = [];
var apps_folder2 = [];
var app_divs1 = [];
var app_divs2 = [];
var app_names1 = [];
var app_names2 = [];
const screen = document.getElementById('screen');
let div,folder,header,appDiv,app,appName;
const deployApps=()=>{
    let undo = document.getElementById('undo');
    let circle = document.getElementById('circle');
    for(let i=0;i<2;i++){
        undo.addEventListener('click',()=>{closeFolder(folders,header)})
        circle.addEventListener('click',()=>{closeFolder(folders,header)})
        // circle.addEventListener('dblclick',()=>{closeFolder(folders,header)})
        div = document.createElement('div');
        folder = document.createElement('div');
        header = document.createElement('h6');
        div.classList.add('apps_folder');
        folder.classList.add('folders');
        header.classList.add('headers');
        folder.setAttribute('id',`folder_${i}`);
        folder.addEventListener('click',()=>{openFolder(folders[i],header,i)})
        folders.push(folder);
        headers.push(header);
        if(apps[i].folder==='games'){
            header.innerHTML = "games";
        }
        else if(apps[i].folder==="sites"){
            header.innerHTML = "sites";
        }
        div.appendChild(folder);
        div.appendChild(header);
        screen.appendChild(div);
        // console.log(folders)
    }
    for(let j =0;j<apps.length;j++){
        if(apps[j].folder==='sites'){
            appDiv = document.createElement('div');
            appDiv.classList.add('appDivs');
            appName = document.createElement('p');
            appName.innerHTML = apps[j].name;
            appName.classList.add('appNames');
            app = document.createElement('a');
            app.setAttribute('href',apps[j].link)
            app.setAttribute('target','_blank')
            app.classList.add('apps');
            app.setAttribute('id',`app_${j+1}`)
            apps_folder1.push(app);
            app_divs1.push(appDiv);
            app_names1.push(appName);
            appDiv.appendChild(app);
            appDiv.appendChild(appName);
            folders[0].appendChild(appDiv);
        }
        else if(apps[j].folder==='games'){
            appDiv = document.createElement('div');
            appDiv.classList.add('appDivs');
            appName = document.createElement('p');
            appName.innerHTML = apps[j].name;
            appName.classList.add('appNames');
            app = document.createElement('a');
            app.setAttribute('href',apps[j].link)
            app.setAttribute('target','_blank')
            app.classList.add('apps');
            app.setAttribute('id',`app_${j+1}`)
            apps_folder2.push(app);
            app_divs2.push(appDiv);
            app_names2.push(appName);
            appDiv.appendChild(app);
            appDiv.appendChild(appName);
            folders[1].appendChild(appDiv);
        }
    }
    // console.log(app_names1)
}
const openFolder=(x,y,inx)=>{
    x.style.width = '300px';
    x.style.height = '350px';
    x.style.filter = "opacity(80%)";
    if(inx===0){
        folders[1].style.display = 'none';
        headers[1].style.display = 'none';
        x.style.transform = 'translate(15px,100px)';
        apps_folder1[0].style.width = '75px';
        apps_folder1[0].style.height = '75px';
        apps_folder1[0].style.borderRadius = '20px';
        apps_folder1[0].style.marginTop = '20px';
        apps_folder1[0].style.cursor = 'pointer';
        apps_folder1[1].style.width = '75px';
        apps_folder1[1].style.height = '75px';
        apps_folder1[1].style.borderRadius = '20px';
        apps_folder1[1].style.marginTop = '20px';
        apps_folder1[1].style.cursor = 'pointer';
        //
        app_divs1[0].style.width = '100px';
        app_divs1[0].style.height = '150px';
        app_divs1[1].style.width = '100px';
        app_divs1[1].style.height = '150px';
        //
        app_names1[0].style.display = 'flex';
        app_names1[0].style.fontSize = '16px';
        app_names1[1].style.display = 'flex';
        app_names1[1].style.fontSize = '16px';
    }
    else if(inx===1){
        folders[0].style.display = 'none';
        headers[0].style.display = 'none';
        x.style.transform = 'translate(-65px,100px)';
        apps_folder2[0].style.width = '75px';
        apps_folder2[0].style.height = '75px';
        apps_folder2[0].style.borderRadius = '20px';
        apps_folder2[0].style.marginTop = '20px';
        apps_folder2[0].style.cursor = 'pointer';
        apps_folder2[1].style.width = '75px';
        apps_folder2[1].style.height = '75px';
        apps_folder2[1].style.borderRadius = '20px';
        apps_folder2[1].style.marginTop = '20px';
        apps_folder2[1].style.cursor = 'pointer';
        //
        app_divs2[0].style.width = '100px';
        app_divs2[0].style.height = '150px';
        app_divs2[1].style.width = '100px';
        app_divs2[1].style.height = '150px';
        //
        app_names2[0].style.display = 'flex';
        app_names2[0].style.fontSize = '16px';
        app_names2[1].style.display = 'flex';
        app_names2[1].style.fontSize = '16px';
    }
    y.style.filter = "opacity(0)";
    // screen.style.filter = "opacity(50%)";

}
const closeFolder=(x,y)=>{
    for(let i=0;i<folders.length;i++){
        if(folders[i].id==='folder_0'){
            let selectedFolder = document.getElementById('folder_0');
            selectedFolder.style.width = '70px';
            selectedFolder.style.height = '70px';
            selectedFolder.style.filter = 'opacity(40%)';
            selectedFolder.style.transform = 'translate(0,0)';
            //
            folders[1].style.display = 'flex';
            headers[1].style.display = 'block';
            //
            apps_folder1[0].style.width = '10px';
            apps_folder1[0].style.height = '10px';
            apps_folder1[0].style.borderRadius = '2.5px';
            apps_folder1[0].style.marginTop = '5px';
            apps_folder1[0].style.cursor = 'default';
            apps_folder1[1].style.width = '10px';
            apps_folder1[1].style.height = '10px';
            apps_folder1[1].style.borderRadius = '2.5px';
            apps_folder1[1].style.marginTop = '5px';
            apps_folder1[1].style.cursor = 'default';
            //
            app_divs1[0].style.width = '20px';
            app_divs1[0].style.height = '20px';
            app_divs1[1].style.width = '20px';
            app_divs1[1].style.height = '20px';
            //
            app_names1[0].style.display = 'none';
            app_names1[0].style.fontSize = '0';
            app_names1[1].style.display = 'none';
            app_names1[1].style.fontSize = '0';
        }
        else if(folders[i].id==='folder_1'){
            let selectedFolder = document.getElementById('folder_1');
            selectedFolder.style.width = '70px';
            selectedFolder.style.height = '70px';
            selectedFolder.style.filter = 'opacity(40%)';
            selectedFolder.style.transform = 'translate(0,0)';
            //
            folders[0].style.display = 'flex';
            headers[0].style.display = 'block';
            //
            apps_folder2[0].style.width = '10px';
            apps_folder2[0].style.height = '10px';
            apps_folder2[0].style.borderRadius = '2.5px';
            apps_folder2[0].style.marginTop = '5px';
            apps_folder2[0].style.cursor = 'default';
            apps_folder2[1].style.width = '10px';
            apps_folder2[1].style.height = '10px';
            apps_folder2[1].style.borderRadius = '2.5px';
            apps_folder2[1].style.marginTop = '5px';
            apps_folder2[1].style.cursor = 'default';
            //
            app_divs2[0].style.width = '20px';
            app_divs2[0].style.height = '20px';
            app_divs2[1].style.width = '20px';
            app_divs2[1].style.height = '20px';
            //
            app_names2[0].style.display = 'none';
            app_names2[0].style.fontSize = '0';
            app_names2[1].style.display = 'none';
            app_names2[1].style.fontSize = '0';
        }
    }
    y.style.filter = 'opacity(100%)';
    // screen.style.filter = 'opacity(100%)';
}
window.onload = deployApps();