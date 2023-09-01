// Opgave 1+2
const person = {
    navn: "John",
    efternavn: "Doe",
    alder: 50,
    job: "Unemployed",
    beskrivelse: function() {
        return "Navn: " + this.navn + ", Efternavn: " + this.efternavn + ", Alder:" + this.alder + ", Job: " + this.job;
    }
  };
console.info(person);  

// Opgave 3

//array af objekter, der repræsenterer personer
let personer = [
    { navn: "Peter", alder: 25, job: "sælger"},
    { navn: "Marie", alder: 18, job: "butiksassistent"},
    { navn: "Ole", alder: 34, job: "lærer"},
    { navn: "Bo", alder: 16, job: "elev"},
    { navn: "Julie", alder: 28, job: "ledig"},
    { navn: "Jens", alder: 45, job: "elev"},
];

// Bruge funtionen "forEach til at udskrive alle personerner navne"
personer.forEach(function(person) {
    console.info(person.navn);
});


// Opgave 4

// Opret et bilobjekt
let bil = {
    mærke: "Ford",
    model: "Focus",
    år: 2020
  };
  
  // Opret en person med navn, alder og en reference til bilobjektet
  let ejer = {
    navn: "John Doe",
    alder: 30,
    bil: bil // Her tilføjer vi bilobjektet som en egenskab til personobjektet
  };
  
  // Udskriv personens biloplysninger
  console.info(ejer.navn + " ejer en " + ejer.bil.mærke + " " + ejer.bil.model + " fra " + ejer.bil.år + ".");

  // Opgave 5: Objektkopiering
  // Opret en kopi af "person" objektet ved at bruge  Object.assign(). Opdater kopien med en ny alder og udskriv både original og kopi.

// Opret en kopi af "person" objektet ved hjælp af Object.assign()
let kopiEjer = Object.assign({}, ejer);
// Opdater kopien med en ny alder
kopiEjer.alder = 35;

// Udskriv både original og kopi
console.info("Original person:", ejer);
console.info("Kopi person:", kopiEjer);
