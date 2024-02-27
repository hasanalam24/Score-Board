
document.getElementById('player-name').addEventListener('keyup', function (event) {
    const text = event.target.value
    const deleteButton = document.getElementById('btn-player')
    // const addRunsBtn = document.getElementById('addRuns-btn')
    if (text === text) {
        deleteButton.removeAttribute('disabled')
        // addRunsBtn.removeAttribute('disabled')
    }
    else {
        deleteButton.setAttribute('disabled', true)
    }



}
)

// _______


function playerAddBtn() {
    hideElementById('btn-player');
    hideElementById('player-name');
    showElementById('btn-out')

    const playerName = document.getElementById('player-name');
    const valueOfPlayer = playerName.value;

    const addRunsBtn = document.getElementById('addRuns-btn')
    addRunsBtn.removeAttribute('disabled')

    const playerContainer = document.getElementById('player-container');
    const playerTitle = document.getElementById('player-title');


    const p = document.createElement('p')
    p.innerText = valueOfPlayer + ' ' + ":";

    playerContainer.appendChild(p)

}


// type of number check
// document.getElementById('input-run').addEventListener('keyup', function (event) {
//     const text = event.target.value;
//     const addRunsBtn = document.getElementById('addRuns-btn');

//     if (typeof text === 'number') {
//         addRunsBtn.removeAttribute('disabled')
//     }
//     else {
//         deleteButton.setAttribute('disabled', true)
//     }
// })

const audio = new Audio()
const audio2 = new Audio()

function addRunsBtn() {

    const runAdd = getValueByInput('input-run')

    // score add

    const totalRuns = document.getElementById('total-runs');
    const totalInner = totalRuns.innerText;
    const converTotalRuns = parseInt(totalInner)
    // console.log(typeof converTotalRuns)

    const totalAdd = runAdd + converTotalRuns;
    totalRuns.innerText = totalAdd;

    const playerContainer = document.getElementById('player-container');
    // const playerTitle = document.getElementById('player-title');
    const inputRuns = document.getElementById('input-run');
    const valueOfRuns = inputRuns.value;

    // if (inputRuns.value === 6) {
    audio.src = "audio/6.mp3"
    audio.play()
    // }



    const p = document.createElement('p')
    p.innerText = valueOfRuns + ' ' + "+";

    playerContainer.appendChild(p)

    const clearValue = document.getElementById('input-run');
    clearValue.value = ''

}


function playerOut() {
    // console.log('out btn done')
    const playerContainer = document.getElementById('player-container');
    console.log(playerContainer);
    audio2.src = "audio/out.mp3"
    audio2.play()
}


// Primary function start

function getValueByInput(elementId) {
    const element = document.getElementById(elementId);
    const inputValue = element.value;
    const convert = parseInt(inputValue)
    return convert;
}



function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}

// Primary function end