document.getElementById('change-background-color-btn').onclick = function () {
    let r = Math.floor(Math.random() * 251);
    let g = Math.floor(Math.random() * 251);
    let b = Math.floor(Math.random() * 251);
    document.getElementById('inline-paragraph').style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
}

function change_color(id) {
    let r = Math.floor(Math.random() * 251);
    let g = Math.floor(Math.random() * 251);
    let b = Math.floor(Math.random() * 251);
    document.getElementById(id).style.color = 'rgb(' + r + ',' + g + ',' + b + ')'
}