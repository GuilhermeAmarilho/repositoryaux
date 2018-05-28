let comeback = document.querySelector('button#icone_mais');
let ready = document.querySelector('button.ready');
let deny = document.querySelector('button.deny');
let title = document.querySelector('h2#head');
let generation = document.querySelector('div.generation');
let nav = document.querySelector('div.topnav');
let body = document.querySelector('div.body');
let description_job = document.querySelector('button.description_job');
var rotate = 0;
var auxiliar = '';
comeback.addEventListener('click',function(){visibility(0);})
deny.addEventListener('click',function(){
    visibility(1);
    document.querySelector('input.date').value  = "";
    document.querySelector('input.date').value = "";
    document.querySelector('input.matter').value = "";
    document.querySelector('input.description').value = "";
})
ready.addEventListener('click',function(){
    let name = document.querySelector('input.name').value;
    let date =  document.querySelector('input.date').value;
    let matter =  document.querySelector('input.matter').value;
    let text = document.querySelector('input.description').value;
    if  ((name != "")&&(date!="")&&(matter!="")&&(text!="")){
        visibility(1);
        create(name,date,matter,text);
    }
    if(document.getElementsByClassName('warning').length<1){
        a = document.createElement("p");
        a.setAttribute('class','warning');
        a.innerText = "preencha todos os campos"
        generation.appendChild(a);
    }
});
body.addEventListener('click',function(evento){
    if(evento.target.className=='description_job'){
        if(rotate==1){
            if((auxiliar != evento.target)&&(evento.target.type=='submit')&&(auxiliar != "")){
                auxiliar.parentElement.children[auxiliar.parentElement.children.length-1].style.display = 'none';
                auxiliar.parentElement.style.marginBottom = '0px';
                auxiliar.parentElement.children[1].children[2].style.display = 'none'                
                auxiliar.style.transform = 'rotate(0deg)';
                evento.target.parentElement.children[evento.target.parentElement.children.length-1].style.display = 'block';
                evento.target.parentElement.style.marginBottom = '110px';
                evento.target.parentElement.children[1].children[2].style.display = 'block'                
                evento.target.style.transform = 'rotate(180deg)' 
                rotate = 1; 
                auxiliar = '';
                auxiliar = evento.target;           
            }
            else{
                evento.target.parentElement.children[evento.target.parentElement.children.length-1].style.display = 'none';
                evento.target.parentElement.style.marginBottom = '0px';
                evento.target.parentElement.children[1].children[2].style.display = 'none'                
                evento.target.style.transform = 'rotate(0deg)';
                rotate = 0;
            }
        }
        else{
            evento.target.parentElement.children[evento.target.parentElement.children.length-1].style.display = 'block';
            evento.target.parentElement.style.marginBottom = '110px';
            evento.target.style.transform = 'rotate(180deg)';
            evento.target.parentElement.children[1].children[2].style.display = 'block'            
            rotate = 1;
            auxiliar=evento.target;
        }
    }
    if(evento.target.className=='delete'){
        var a = event.target.parentElement.parentElement;
        for (var i = 0;i<4;i++){
            a.removeChild(a.children[0]);
        }
        body.removeChild(a);
        auxiliar = '';
    }
});
function create(name,date,matter,description){
    var a,b,c;
    a = document.createElement('ul');
    a.setAttribute('class','job job'+(document.getElementsByClassName('job').length+1)+'');
    b = document.createElement('p');b.setAttribute('class','name_job');b.innerText=name;
    a.appendChild(b);
    c = document.createElement('div');c.setAttribute('class','second_job');
    b = document.createElement('p');b.setAttribute('class','date_job');b.innerText=date.slice(0,4)+"/"+date.slice(5,7)+"/"+date.slice(8,10);c.appendChild(b);
    b = document.createElement('p');b.setAttribute('class','matter_job');b.innerText=matter;c.appendChild(b);
    b = document.createElement('button');b.setAttribute('class','delete');c.appendChild(b);
    a.appendChild(c);
    b = document.createElement('button');b.setAttribute('class','description_job');a.appendChild(b);
    b = document.createElement('p');b.setAttribute('class','description_job');b.innerText=description;a.appendChild(b);
    body.appendChild(a);
}
function visibility (value) {
    if (value == 1){
        generation.style.left = '-100%'
        title.style.opacity = '1';
        nav.style.opacity = '1';
        document.body.style.background= 'white';
        comeback.style.opacity = '1';
        body.style.marginLeft = '5%';
        if(document.querySelector('p.warning')!=null){generation.removeChild(document.querySelector('p.warning'))}
    }
    if  (value == 0){
        generation.style.left = '10%'
        title.style.opacity = '0.2';
        nav.style.opacity = '0.2';
        document.body.style.background= 'grey';
        comeback.style.opacity = '0';
        body.style.marginLeft = '-100%';
    }
}