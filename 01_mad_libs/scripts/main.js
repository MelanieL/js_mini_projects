// The plan:

// 1 - Prompt the user for a noun
// 2 - Prompt the user for an adjective
// 3 - Prompt the user for an adverb
// 4 - Take the answers and store them
// 5 - Display mad lib with those words inserting into the blank spaces.

const submit = document.querySelector('.submit');
const madLib = document.querySelector('.madLibBox');

submit.addEventListener('click', displayMadLib);

function displayMadLib() {
    const noun = document.getElementById('noun').value;
    const adjective = document.getElementById('adjective').value;
    const adverb = document.getElementById('adverb').value;
    const finalMadLib = `<p class="madLibText">After they did that, the king played chess on his brother's <span class="userAnswer">${noun}</span> (your noun) and then combed his <span class="userAnswer">${adjective}</span> (your adjective) hair with a comb made out of old fish bones. Later, that same day, I saw the Monkey King dance <span class="userAnswer">${adverb}</span> (your adverb) in front of an audience of kangaroos and wombats.</p>`
    madLib.innerHTML = finalMadLib;
};
