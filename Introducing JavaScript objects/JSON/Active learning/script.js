const superHeroes = {
    "squadName": "Super Hero Squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
        {
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": [
                "Radiation resistance",
                "Turning tiny",
                "Radiation blast"
            ]
        },
        {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": [
                "Million tonne punch",
                "Damage resistance",
                "Superhuman reflexes"
            ]
        },
        {
            "name": "Eternal Flame",
            "age": 1000000,
            "secretIdentity": "Unknown",
            "powers": [
                "Immortality",
                "Heat Immunity",
                "Inferno",
                "Teleportation",
                "Interdimensional travel"
            ]
        }
    ]
};
// Function capitalize
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

console.log(Object.keys(superHeroes)[0]);
const header = document.querySelector('header');
const section = document.querySelector('section');

// add h1 to header
const h1_header = document.createElement("h1");
h1_header.innerHTML = superHeroes["squadName"];
header.appendChild(h1_header);

// add p to header
const p_header = document.createElement("p");
p_header.innerHTML = Object.keys(superHeroes)[1].capitalize() +" : " +superHeroes["homeTown"] + " // ";
p_header.innerHTML +=  Object.keys(superHeroes)[2].capitalize() + " : " +superHeroes["formed"];
header.appendChild(p_header);

// add article to section
//const article_section = document.createElement("article");
//section.appendChild(article_section);


// add h1 to article
// const h1 = document.createElement("h1");
// h1.innerHTML = "hello";
// article_section.appendChild(h1);

// iterate of superHeroes["members"]
for (let ele of superHeroes["members"]){
    // add h2 to article
    const article_section = document.createElement("article");
    const h2 = document.createElement("h2");
    h2.innerHTML = ele["name"];
    // p to article
    const p = document.createElement("p");
    p.innerHTML = Object.keys(ele)[2].capitalize() + ": ";
    p.innerHTML += ele["secretIdentity"];
    p.innerHTML += '<br>';
    p.innerHTML += Object.keys(ele)[1].capitalize() + ": ";
    p.innerHTML += ele["age"];
    p.innerHTML += '<br>';
    p.innerHTML += "superpowers".capitalize() + ": ";
    // ul to article
    const ul = document.createElement("ul");
    section.appendChild(article_section);
    article_section.appendChild(h2);
    article_section.appendChild(p);
    article_section.appendChild(ul);

    for (let e of ele["powers"]){
        const li = document.createElement("li");
        li.innerHTML = e;
        ul.appendChild(li);
    }

}