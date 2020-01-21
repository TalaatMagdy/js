let cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

for (let i = 0; i < cities.length; i++) {
    let input = cities[i];
    let lower = input.toLowerCase();
    let firstLetter = lower.slice(0,1);
    let result = lower.replace(firstLetter, firstLetter.toUpperCase());
    // can use in one line
    let result2 = input[0].toUpperCase() + input.slice(1).toLowerCase();
    console.log(result);
    console.log("=========");
    console.log(result2);
}