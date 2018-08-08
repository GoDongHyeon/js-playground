class Desktop{
    /* TODO: Desktop 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
 constructor(folder_num, icon_num){
   var body = document.getElementById('body');
   for(var i = 0; i < folder_num; i++){
       var item = document.createElement('img');
       item.id = "folder" + (i+1);
       item.src = "Very-Basic-Folder-icon.png";
       item.draggable = "true";
       item.addEventListener('dragstart', dragstart_handler);
       item.addEventListener('dblclick', function(){
         window.open("folder.html");
       });
       body.appendChild(item);
   }
   for(let i = 0; i < icon_num; i++){
       let item = document.createElement('img');
       item.id = "file" + (i+1);
       item.src = "application-x-executable_36271.png";
       item.draggable = "true";
       item.addEventListener('dragstart', dragstart_handler);
       item.addEventListener('dblclick', function(){
         let iconClass = new Icon(item.id);
       });
       body.appendChild(item);
   }
   function dragstart_handler(e) {
     console.log("DragStart", e);
     e.dataTransfer.setData("text/plain", e.target.id);
   }
   function dragOver_handler(e){
     e.preventDefault();
     e.dataTransfer.dropEffect = "move";
   }
   function drop_handler(e){
     e.preventDefault();
     var data = e.dataTransfer.getData("text");
     e.target.appendChild(document.getElementById(data));
   }
 }
};

class Icon{
    /* TODO: Icon 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
 constructor(name){
   console.log(name + " double-clicked");
   alert(name);
 }
};

class Folder extends Desktop{
    /* TODO: Folder 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
 constructor(fon, icn){
   super(fon, icn);
 }
};

class Window {
    /* TODO: Window 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
};
