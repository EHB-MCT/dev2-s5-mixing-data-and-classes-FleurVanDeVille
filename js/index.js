"use strict";

import Joke from "./Joke.js";

const app = {
    items: [],
    init() {
        this.getData();
    },
    getData() {
        fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit&amount=10&type=twopart')
        .then(function (response){
            return response.json();
        })
        .then(function(json){
            json.jokes.forEach(function(jokeData){
                const joke = new Joke(jokeData.setup, jokeData.delivery);
                console.log(Joke);
            });

            app.render();
        });
    },
    onSearch() {
    },
    render(message) {
        //document.querySelector('#list').insertAdjacentHTML;
    }

};
app.init();