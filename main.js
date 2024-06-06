document.getElementById("aver").onclick = function avg(){
    let Math = Number(document.getElementById("input1").value)
    let Science =Number(document.getElementById("input2").value)
    let Trade = Number(document.getElementById("input3").value)
    let Industrial = Number(document.getElementById("input4").value)
    let Fundementals = Number(document.getElementById("input5").value)
    let Practicles = Number(document.getElementById("input6").value)
    let averageM = (((Math + Science + Trade + Industrial + Fundementals + Practicles) / 100) / 6)


    if (averageM >= 65 ){
        alert(`Your Average is   ${averageM}  You have Passed !`)
    }


    else {
        alert(`Your Average is   ${averageM}  You have Failed !`)

    }


}