"use strict";

//IIFE - Immediately Invoked Functional Expression
(function(){

    function DisplayHomePage(){
        console.log("Called DisplayHomePage()");

        let AboutUsButton = document.getElementById("AboutUsBtn");

        AboutUsButton.addEventListener("click", function() {
            location.href = "about.html";
        });

        let MainContent = document.getElementsByTagName("main")[0];
        let MainParagraph = document.createElement("p");

        MainParagraph.setAttribute("id", "MainParagraph");
        MainParagraph.setAttribute("class", "mt-3");
        MainParagraph.textContent = "This is the first Paragraph";
        MainContent.appendChild(MainParagraph);

        let FirstString = "This is";
        let SecondString = `${FirstString} the Main Paragraph`;
        MainParagraph.textContent = SecondString;
        MainContent.appendChild(MainParagraph);

        let DocumentBody = document.body;

        let Article = document.createElement("article");
        let ArticleParagraph
            = `<p id="ArticleParagraph" class="mt-3">This is my article paragraph</p>`;
        Article.setAttribute("class", "container");
        Article.innerHTML = ArticleParagraph;
        DocumentBody.appendChild(Article);


    }

    function DisplayProductsPage(){
        console.log("Called DisplayProductsPage()");
    }

    function DisplayAboutPage(){
        console.log("Called DisplayAboutPage()");
    }

    function DisplayServicesPage(){
        console.log("Called DisplayServicesPage()");
    }

    function DisplayContactPage(){
        console.log("Called DisplayContactPage()");
    }

    function Start(){
        console.log("App Started");

        switch(document.title){
            case "Home":
                DisplayHomePage();
                break;
            case "Products":
                DisplayProductsPage();
                break;
            case "About Us":
                DisplayAboutPage();
                break;
            case "Services":
                DisplayServicesPage();
                break;
            case "Contact Us":
                DisplayContactPage();
                break;
        }


    }
    window.addEventListener("load", Start);
})();
