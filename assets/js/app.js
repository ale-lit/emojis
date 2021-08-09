$(document).ready(function() {
    randomLogoEmoji();
    buildEmojiList();
});

/* Pick random emoji for logo */
function randomLogoEmoji() {
    let emojis = ['😊', '🥸', '🙂', '💩', '👽', '🎃', '🐼', '🍪', '⚽️', '🛸', '🧻', '❤️', '🏳️‍🌈', '🪨', '🍄', '🍂', '❄️', '🐤', '🎲', '🎱', '🎯', '🚀', '🌌']
    var random = emojis[Math.floor(Math.random() * emojis.length)];
    $('#logo-emoji').html(random);
}

function buildEmojiList() {

    let emojiJson = "../emojis.json";
    let listBlock = '';

    $.getJSON(emojiJson, (data) => {

        /* Smileys */
        let smileys = '';
        $.each(data.smileys, (i, item) => {
            smileys += `<div class="emoji">${item}</div>`;
        });
        listBlock += `
            <div class="block" id="smileys">
                <div class="title">Smileys<span>${data.smileys.length} emojis</span></div>
                <div class="list">${smileys}</div>
            </div>
        `; 

        /* Gestures and body parts */
        let gestures_body = '';
        $.each(data.gestures_body, (i, item) => {
            gestures_body += `<div class="emoji">${item}</div>`;
        });
        listBlock += `
            <div class="block" id="gestures-body">
                <div class="title">Gestures and body parts<span>${data.gestures_body.length} emojis</span></div>
                <div class="list">${gestures_body}</div>
            </div>
        `;

        /* People and fantasy */
        let people_fantasy = '';
        $.each(data.people_fantasy, (i, item) => {
            people_fantasy += `<div class="emoji">${item}</div>`;
        });
        listBlock += `
            <div class="block" id="people-fantasy">
                <div class="title">People and fantasy<span>${data.people_fantasy.length} emojis</span></div>
                <div class="list">${people_fantasy}</div>
            </div>
        `;

        /* Clothing and accessories */
        let clothing_accessories = '';
        $.each(data.clothing_accessories, (i, item) => {
            clothing_accessories += `<div class="emoji">${item}</div>`;
        });
        listBlock += `
            <div class="block" id="clothing-accessories">
                <div class="title">Clothing and accessories<span>${data.clothing_accessories.length} emojis</span></div>
                <div class="list">${clothing_accessories}</div>
            </div>
        `;

        /* Pale emojis */
        let pale = '';
        $.each(data.pale, (i, item) => {
            pale += `<div class="emoji">${item}</div>`;
        });
        listBlock += `
            <div class="block" id="pale">
                <div class="title">Pale emojis<span>${data.pale.length} emojis</span></div>
                <div class="list">${pale}</div>
            </div>
        `;

        /* Cream white emojis */
        let cream_white = '';
        $.each(data.cream_white, (i, item) => {
            cream_white += `<div class="emoji">${item}</div>`;
        });
        listBlock += `
            <div class="block" id="cream-white">
                <div class="title">Cream white emojis<span>${data.cream_white.length} emojis</span></div>
                <div class="list">${cream_white}</div>
            </div>
        `;

       /* Cream white emojis */
       let brown = '';
       $.each(data.brown, (i, item) => {
            brown += `<div class="emoji">${item}</div>`;
       });
       listBlock += `
           <div class="block" id="brown">
               <div class="title">Brown emojis<span>${data.brown.length} emojis</span></div>
               <div class="list">${brown}</div>
           </div>
       `;

       /* Dark brown emojis */
       let dark_brown = '';
       $.each(data.dark_brown, (i, item) => {
            dark_brown += `<div class="emoji">${item}</div>`;
       });
       listBlock += `
           <div class="block" id="dark-brown">
               <div class="title">Dark brown emojis<span>${data.dark_brown.length} emojis</span></div>
               <div class="list">${dark_brown}</div>
           </div>
       `;

       /* Black emojis */
       let black = '';
       $.each(data.black, (i, item) => {
            black += `<div class="emoji">${item}</div>`;
       });
       listBlock += `
           <div class="block" id="black">
               <div class="title">Black emojis<span>${data.black.length} emojis</span></div>
               <div class="list">${black}</div>
           </div>
       `;

       /* Animals and nature */
       let animals_nature = '';
       $.each(data.animals_nature, (i, item) => {
            animals_nature += `<div class="emoji">${item}</div>`;
       });
       listBlock += `
           <div class="block" id="animals-nature">
               <div class="title">Animals and nature<span>${data.animals_nature.length} emojis</span></div>
               <div class="list">${animals_nature}</div>
           </div>
       `;

       /* Food and drink */
       let food_drink = '';
       $.each(data.food_drink, (i, item) => {
            food_drink += `<div class="emoji">${item}</div>`;
       });
       listBlock += `
           <div class="block" id="food-drink">
               <div class="title">Food and drink<span>${data.food_drink.length} emojis</span></div>
               <div class="list">${food_drink}</div>
           </div>
       `;

        /* Activity and sports */
        let activity_sports = '';
        $.each(data.activity_sports, (i, item) => {
            activity_sports += `<div class="emoji">${item}</div>`;
        });
        listBlock += `
            <div class="block" id="activity-sports">
                <div class="title">Activity and sports<span>${data.activity_sports.length} emojis</span></div>
                <div class="list">${activity_sports}</div>
            </div>
        `;

        /* Travel and places */
        let travel_places = '';
        $.each(data.travel_places, (i, item) => {
            travel_places += `<div class="emoji">${item}</div>`;
        });
        listBlock += `
            <div class="block" id="travel-places">
                <div class="title">Travel and places<span>${data.travel_places.length} emojis</span></div>
                <div class="list">${travel_places}</div>
            </div>
        `;

        /* Objects */
        let objects = '';
        $.each(data.objects, (i, item) => {
            objects += `<div class="emoji">${item}</div>`;
        });
        listBlock += `
            <div class="block" id="objects">
                <div class="title">Objects<span>${data.objects.length} emojis</span></div>
                <div class="list">${objects}</div>
            </div>
        `;

        /* Symbols */
        let symbols = '';
        $.each(data.symbols, (i, item) => {
            symbols += `<div class="emoji">${item}</div>`;
        });
        listBlock += `
            <div class="block" id="symbols">
                <div class="title">Symbols<span>${data.symbols.length} emojis</span></div>
                <div class="list">${symbols}</div>
            </div>
        `;

        /* Flags */
        let flags = '';
        $.each(data.flags, (i, item) => {
            flags += `<div class="emoji">${item}</div>`;
        });
        listBlock += `
            <div class="block" id="flags">
                <div class="title">Flags<span>${data.flags.length} emojis</span></div>
                <div class="list">${flags}</div>
            </div>
        `;

        /* Country Flags */
        let country_flags = '';
        $.each(data.country_flags, (i, item) => {
            country_flags += `<div class="emoji">${item}</div>`;
        });
        listBlock += `
            <div class="block" id="country_flags">
                <div class="title">Country flags<span>${data.country_flags.length} emojis</span></div>
                <div class="list">${country_flags}</div>
            </div>
        `;

        /* Latest emojis added */
        let latest = '';
        $.each(data.latest, (i, item) => {
            latest += `<div class="emoji">${item}</div>`;
        });
        listBlock += `
            <div class="block" id="latest">
                <div class="title">Latest emojis added<span>${data.latest.length} emojis</span></div>
                <div class="latest">Latest emojis added in version 13.x officially.</div>
                <div class="list">${latest}</div>
            </div>
        `;

    }).done(() => {
        $('#emojis').html(listBlock);
    });
    
}