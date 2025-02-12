let countEl = document.getElementById("counter-el")
let saveEl = document.getElementById("entries-el")

let count = 0

console.log(saveEl)

function countIncrement(){
    count += 1
    countEl.textContent = count
}

function countDecrement(){
    if (count >0 ){
        count -= 1
        countEl.textContent = count
    }
}

function save(){
    saveEl.textContent += " "+ count +" "+ "-"
    countEl.textContent = count = 0
}

