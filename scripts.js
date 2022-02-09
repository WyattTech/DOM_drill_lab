window.addEventListener("DOMContentLoaded", function () {
  //The DOMContentLoad-listens for the DOMS full load

  //DOM Manipulation Drill

  //createElement()
  let div = document.createElement("div"); //Creates the div elements

  //classList()
  div.classList.add("header-container"); //Attaches the class to the dive

  //createElement() Write Text into the Browser
  let h1 = document.createElement("h1"); //Creates the h1 elements (declarations)
  let h2 = document.createElement("h2");
  let h3 = document.createElement("h3");
  let h4 = document.createElement("h4");
  let h5 = document.createElement("h5");
  let h6 = document.createElement("h6");

  //classList()
  h1.classList.add("h1");
  h2.classList.add("h2");
  h3.classList.add("h3");
  h4.classList.add("h4");
  h5.classList.add("h5");
  h6.classList.add("h6");

  //createTextNode()
  let text1 = document.createTextNode("This is an h1"); //Creates the text for the h1 like <p>
  let text2 = document.createTextNode("This is an h2");
  let text3 = document.createTextNode("This is an h3");
  let text4 = document.createTextNode("This is an h4");
  let text5 = document.createTextNode("This is an h5");
  let text6 = document.createTextNode("This is an h6");

  //appendChild() to Text
  h1.appendChild(text1); //Attaches elements?
  h2.appendChild(text2);
  h3.appendChild(text3);
  h4.appendChild(text4);
  h5.appendChild(text5);
  h6.appendChild(text6);

  //AppendChild() to div(elements)
  div.appendChild(h1); //Connects the h1 elements to the div
  div.appendChild(h2);
  div.appendChild(h3);
  div.appendChild(h4);
  div.appendChild(h5);
  div.appendChild(h6);
  

  //Send to Body of HTML
  document.body.appendChild(div); //Connects the div with the body element
  
  //I understand ever line of code above not below????

  let colorArr = [
    "red",
    "green",
    "blue",
    "gray",
    "purple",
    "pink",
    "orange",
    "yellow",
  ]; 
//Create the array
  function myColors() {
    let newColors = colorArr[Math.floor(Math.random() * colorArr.length)]; //Create a function to randomize the array
    return newColors;
  }

  h1.addEventListener("dblclick", function () {
    //Then add the event listenter
    let newColors = myColors();
    h1.style.color = newColors;
  });

  //Target the Button
  let btnItems = document.querySelector(".btnItems");
  btnItems.onclick = listItems;
  
 
  
  //Create a function that counts the items and outputs the list
  let listCounter = 0;//This is a tracker keep it in the global scope

  //Call the function?
  function listItems() {
    listCounter++; //call on the counter
    //create the li for the ol 
    let ol = document.createElement('ol');
    let li = document.createElement('li')
    ol.classList.add('ol');
    li.classList.add('li');
    let liText = document.createTextNode("This is item " + listCounter);
    li.appendChild(liText);

    ol.addEventListener('ondblclick', function() {
        let newColor = myColors();
        ol.style.color = newColor;

    });

    //Set the li to the HTML and such
    document.body.appendChild(li);//Launch the items into the HTMLDOM
  }

  ol.addEventListener("click",  listItems);
    let li = listItems;
   btnItems.addEventListener("dblclick", function(){
    this.remove('li');
    });
    
});









