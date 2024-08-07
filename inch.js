function convert(){
    const length = Number(document.getElementById('section').Value)
    let values = length /2.54
    let result = document.getElementById("result")
    result.innerHTML = values.toFixed(2) + 'inches'
}