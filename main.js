console.log("Hi Simon DOM Loops");

const dinosaurs = [
    {type: 't-rex', name: 'Wrex'},
    {type: 'stegasaurus', name: 'Steve'},
    {type: 'velociraptor', name: 'Ted'}
];

const buildDinosaurCards = () => {
    let domString = '';
    for(i = 0; i < dinosaurs.length; i++) {
        domString += '<div class="dinosaur">';
        domString += `<h3>Type: ${dinosaurs[i].type}</h3>`;
        domString += `<p>Name: ${dinosaurs[i].name}</p>`;
        domString += '</div>';
    }
    // console.log('domString', domString);
     const selectedDiv = document.getElementById('dino-barn');
    //  console.log(selectedDiv);
    selectedDiv.innerHTML = domString;

    //if you want to build a similar funciton, you will have to repeat a bunch of code, so just write a new function that prints items - takes 2 inputs: the div ID and the text to print
    const printToDom = (divId, textToPrint) => {
        const selectedDiv = document.getElementById(divId);
        selectedDiv.innerHTML = textToPrint;
    };
    
    printToDom('dino-barn', domString);
};

buildDinosaurCards();



