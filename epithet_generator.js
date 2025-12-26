import readline from 'node:readline';

const adjectives = [
    'Ashen',
    'Gilded',
    'Veiled',
    'Hollow',
    'Unwaking',
    'Severed',
    'Verdant',
    'Ironbound',
    'Luminous',
    'Saltworn',
    'Star-forsaken',
    'Black-tongued',
    'Ember-eyed',
    'Pale-handed',
    'Night-blooming',
    'Thorn-crowned',
    'Blood-quiet',
    'Wind-scoured',
    'Time-scarred',
    'Oath-bound',
    'Sun-drunk'
];

const metaphoresAndAllusions = [
    'of the Broken Crown',
    'of the Last Ember',
    'of Silent Bells',
    'of the Drowned Road',
    'of Ash and Ivory',
    'of the Closed Gate',
    'of the North Wind',
    'of the Shattered Lyre',
    'of Wolves at Dusk',
    'of the Long Eclipse',
    'of Salt and Bone',
    'of the Withered Star',
    'of the Falling Hour',
    'of the Glass Sea',
    'of Old Thunder',
    'of the Red Orchard',
    'of Dustbound Kings',
    'of the Nameless Shore',
    'of the Watching Moon'
];

const phrases = [
    'Bearer of No Return',
    'Keeper of the Quiet Law',
    'Heir to Ruin',
    'Walker Between Wounds',
    'Speaker for the Unburied',
    'Hand That Does Not Tremble',
    'Crowned in Absence',
    'Forged Where Time Ends',
    'Last Witness Standing',
    'Debt Written in Fire',
    'The One Who Waited',
    'Bound to What Was Lost',
    'Carved from Aftermath',
    'Remembered by Storms',
    'Answer to No One',
    'Marked by the Long Dark'
];

const epithetGenerator = (name) => {

    const type = Math.floor(Math.random() * 4) + 1; // generate number from 1 to 4 to identify the type of epithet to generate

    if(type == 1){ // type 1: classic epic epithet (adjective + methaphor)

        const adjective = Math.floor(Math.random() * adjectives.length); // pick the index of the adjective (from 0 to the max index, due to the generated number being floored)
        const metaphor = Math.floor(Math.random() * metaphoresAndAllusions.length); // pick the index of the metaphor (from 0 to the max index, due to the generated number being floored)

        return `${name}, ${adjectives[adjective]} ${metaphoresAndAllusions[metaphor]}`;

    } else if(type == 2){ // type 2: mythic title epithet (adjective + phrase)

        const adjective = Math.floor(Math.random() * adjectives.length); // pick the index of the adjective (from 0 to the max index, due to the generated number being floored)
        const phrase = Math.floor(Math.random() * phrases.length); // pick the index of the phrase (from 0 to the max index, due to the generated number being floored)

        return `${name} '${adjectives[adjective]}', ${phrases[phrase]}`;

    } else if(type == 3){ // type 3: grand epithet (adjective + metaphor, phrase)

        const adjective = Math.floor(Math.random() * adjectives.length); // pick the index of the adjective (from 0 to the max index, due to the generated number being floored)
        const metaphor = Math.floor(Math.random() * metaphoresAndAllusions.length); // pick the index of the metaphor (from 0 to the max index, due to the generated number being floored)
        const phrase = Math.floor(Math.random() * phrases.length); // pick the index of the phrase (from 0 to the max index, due to the generated number being floored)

        return `${name} ${adjectives[adjective]} ${metaphoresAndAllusions[metaphor]}, ${phrases[phrase]}`;

    } else if(type == 4){ // type 4: short and ominous epithet (adjective)

        const adjective = Math.floor(Math.random() * adjectives.length); // pick the index of the adjective (from 0 to the max index, due to the generated number being floored)

        return `${name}, ${adjectives[adjective]}`;

    }

}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('\nEnter the name for which to generate an epithet: ', name => {
  console.log(`${epithetGenerator(name)}\n`);
  rl.close();
});