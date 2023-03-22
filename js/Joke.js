"use strict";

export default class Joke {
    constructor(setup, delivery){
        this.setup = setup;
        this.delivery = delivery;
    }

    htmlString(){
        `<div id="list">
        <div class="item">
          <div>
            <div class="item-field">${this.setup}</div>
            <div class="item-field">${this.delivery}</div>
          </div>
          
          <div>
            <img src="https://opendata.brussels.be/explore/dataset/street-art/files/9876c9a3f300f29c8ee619765c1ad768/300/" />
          </div>

        </div>`;
    }
}