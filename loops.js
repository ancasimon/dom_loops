console.log("hi loops");

const colors = ['red', 'orange', 'green', 'blue', 'pink'];

// const colorLoop = () => {
//     for(let i = 0; i < colors.length; i++) {
//         console.log(colors[i]);
//     }
// };



const colorLoop = () => {
    let domString = '';
    for(let i = 0; i < colors.length; i++) {
        domString += `<h1>${colors[i]}</h1>`;
    }
    console.log(domString); 
};

colorLoop();

//domString +=  is the same as: domString = domString + whatever follows ---- it means "take the existing value in domString variable and add whatevber follows to it"

const instructors = [
    {first: 'zoe', last: 'ames'},
    {first: 'mary', last: 'west'},
    {first: 'luke', last: 'lancaster'}
];

const nameLoop = () => {
    let domString = '';
    for(let i=0; i < instructors.length; i++) {
        domString += `<h2>${instructors[i].first} ${instructors[i].last}</h2>`;
    }
    console.log(domString);
};
//console log instructor names as h2 tags -with a space between names

nameLoop();