// document.getElementById("aver").onclick =
function avg() {
  let Math = Number(document.getElementById("input1").value);
  let Science = Number(document.getElementById("input2").value);
  let Trade = Number(document.getElementById("input3").value);
  let Industrial = Number(document.getElementById("input4").value);
  let Fundementals = Number(document.getElementById("input5").value);
  let Practicles = Number(document.getElementById("input6").value);
  let averageM = (Math + Science + Trade + Industrial + Fundementals + Practicles) / 6;
    const show = document.getElementById("display");

  if (averageM >= 65) {
    show.innerHTML= `Your Average is   ${averageM}  You have Passed !`;
  }else if(averageM == 0){
    show.innerHTML = `Enter your Marks!!!`;
  }
  else {
    show.innerHTML = `Your Average is   ${averageM}  You have Failed !`;
  }
}

function clearfn() {

    const mey =0;

    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    document.getElementById('input3').value = '';
    document.getElementById('input4').value = '';
    document.getElementById('input5').value = '';
    document.getElementById('input6').value = '';

}