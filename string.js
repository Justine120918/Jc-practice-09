const favActorFirstName = 'miguel';
const favActorLastName = 'tanfelix';
const fullName = favActorFirstName + ' ' + favActorLastName;
const lowercase = favActorFirstName.toLowerCase() + ' ' + favActorLastName.toLowerCase();
const petName = 'doglas';
const capitalizedPetName = petName.charAt(0).toUpperCase() + petName.slice(1);

const message = `My favorite actor is ${MIGUEL.toUpperCase()}`

const completeMessage = `${message}. His best show is RUNNINGMAN.`;


console.log('Favorite Actor First Name:', favActorFirstName);
console.log('Favorite Actor Last Name:', favActorLastName);
console.log('Full Name:', fullName);
console.log('Lowercase Name:', lowercase);
console.log('Capitalized Pet Name:', capitalizedPetName);
console.log('Message:', message);
console.log('Complete Message:', completeMessage);
