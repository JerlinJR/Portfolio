
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})

var link = "https://jerlin.netlify.com";
var blank = "_blank";
var kolor = "'color: 	#7FFF00;'"
var id = "confused-btn"

async function open_terminal(){
  createText("Welcome...");
  createTextColor(`<a href= ${link} id=${id}  target=${blank} style=${kolor}> Confused ? -> Click Here </a>`)
  await delay(500);
  createText("Writing Codes - Nice But Breaking into Codes - Thats something Cool ");
  await delay(1000);
  createText("You can run several commands:");
  createCode("about", "Who am i and what do i do.");
  createCode("help", "See all commands.");
  createCode("social -a", "All my social networks.");

  await delay(500);
  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "# user";
  span1.textContent = " in";
  span2.textContent = " ~/Ben";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "help"){
    trueValue(value);
    
    createCode("projects", "My github page with my projects. Follow me there :)");
    createCode("about", "Who am i and what do i do.");
    createCode("social -a", "All my social networks.");
    createCode("clear", "Clean the terminal.");
    createCode("status", "What I am doing now ?");
    createCode("exit", "Exit");
    
  }
  else if(value === "projects"){
    trueValue(value);
    createText("<a href='https://github.com/JerlinJR' target='_blank'><i class='fab fa-github white'></i> github.com/JerlinJR</a>")
  }
  else if(value === "about"){
    trueValue(value);
    createText("I am Jerlin JR.")
    createText("My Facination towards Cyber Security was sparked when I was 16, I began programming and soon developed a Captivation with Cyber Security, leading me to explore its multiple dimensions.")
    // createText("I like writing scripts using Python & PHP.<br> Writing Codes - Nice, Breaking into Codes - Thats something Cool ")
  }
  else if(value === "status"){
    trueValue(value);
    createText("I am outside the cyclical nature of the earth earth Day and night doesn’t work on me. when I am awake is my day when I am sleeping is my night.")
  }
  else if(value === "exit"){
    trueValue(value);
    window.close();
  }
  else if(value === "ls"){
    trueValue(value);
    createText("Haha, You Can Be Awsome Programmer.")
    createTextColor("You Need Root Acess to do this :(","red")
  }
  else if(value === "social -a"){
    trueValue(value);
    createText("<a href='https://github.com/JerlinJR' target='_blank'><i class='fab fa-github white'></i> github.com/JerlinJR</a>")
    createText("<a href='https://www.linkedin.com/in/jerlin-j-r-aa969b238/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/JerlinJR</a>")
    createText("<a href='#' target='_blank'><i class='fab fa-instagram white'></i> Updated Soon</a>")
  }
  else if(value === "social"){
    trueValue(value);
    createText("Didn't you mean: social -a?")
  }
  
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createTextColor(text, colour){
  const p = document.createElement("p");

  p.style.color = 
  colour
  ;
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();




// let link = "https://jerlin.netlify.com";
// let blank = "_blank";

// async function open_terminal(){z
//   createText("Welcome...");
//   createText("<a href= {link}  target={blank} > Confused ? -> Click Here </a>");
