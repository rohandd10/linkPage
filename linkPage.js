function calTotalMarks() {
    let g="";
    let sci=parseInt(document.getElementById("s1").value);
    let mat=parseInt(document.getElementById("s2").value);
    let csi=parseInt(document.getElementById("s3").value);
    let tot=sci+mat+csi;
    let avg=tot/3;
        if(avg>=90) {
            g="A";
        }
        else if (avg>=80 && avg<90) {
            g="B";
        }
        else {
            g="c";
        }
    document.getElementById("tm").innerHTML=tot;
    document.getElementById("avg").innerHTML=avg;
    document.getElementById("gr").innerHTML=g;
}
function submit() {
    let name=document.getElementById("nm1").value;
    localStorage.setItem("user",name);
    location.href = "linkPageResult.html";
}
function show() {
    let name=localStorage.getItem("user");
    document.getElementById("nm2").innerHTML=name;
}