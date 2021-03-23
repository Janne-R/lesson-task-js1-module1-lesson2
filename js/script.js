// question 1
const headerThree = document.querySelector("h3");
headerThree.innerHTML = "hello";

// question 2
const headerFour = document.querySelectorAll("h4");

for(let i = 0; i < headerFour.length; i++) {
  headerFour[i].style.marginBottom = "-20px";
}

// question 3
const headerFourTwo = document.querySelector("h4.two");
headerFourTwo.style.backgroundColor = "red";

// or:
//headings[1].style.backgroundColor = "red";

// question 4
const firstParagraph = document.querySelector("p.one")
firstParagraph.style.fontSize = "24px";
firstParagraph.style.color = "blue";

// question 5
const thirdParagraph = document.querySelector("p.three");
thirdParagraph.innerHTML = "<span>" + thirdParagraph.innerHTML + "</span>";

// question 6
const paragraphContent = document.querySelector(".content");
paragraphContent.innerHTML += "<p>Another paragraph</p>";

// question 7
const newClass = document.querySelectorAll(".content p");

for (let i = 0; i < newClass.length; i++) {
  newClass[i].classList.add("content-item");
}

// question 8
const list = document.querySelector("#services");
list.innerHTML = "<li>New list item</li>" + list.innerHTML;

// question 9
list.classList.remove("service-list");

// question 10
const hide = document.querySelector("#hide");
hide.style.display ="none";