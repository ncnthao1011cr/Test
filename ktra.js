var data = new Array();
var count = 0;

let hoten = document.getElementsByName("hoten")[0];
let gioitinh = document.getElementsByName("gioitinh")[0];
let sothich = document.getElementsByName("sothich")[0];
let btadd = document.getElementById("add");
let btcancel = document.getElementById("cancel");
let result = document.getElementById("result");

btadd.addEventListener("click", function(){
    let tobj = new Array(count, hoten.value, gioitinh.value, sothich.value);
    data.push(tobj);
    let tnode = document.createElement("button");
    tnode.setAttribute("id", count);
    tnode.setAttribute("class", "btn m-1");
    tnode.textContent = hoten.value;
    tnode.radio = gioitinh.value;
    tnode.checkbox = sothich.value;
    tnode.checkbox = option1.value;
    tnode.checkbox = option2.value;
    tnode.checkbox = option3.value;
    tnode.addEventListener("click", function(){
        let id = this.id;
        let index = 0;
        for(let i=0; i<data.length; i++)
            if(data[i][0]==id){
                index = i;
                break;
            }
        hoten.value = data[index][1];
        gioitinh.value = data[index][2];
        sothich.value = data[index][3];
        option1.value = data[index][4];
        option2.value = data[index][5];
        option3.value = data[index][6];

    });
    result.appendChild(tnode);
    count++;
});
//Chưa xuất được thông tin ra màn hình 

btcancel.addEventListener("click", function(){
    hoten.value = "";
    gioitinh.value = "";
    sothich.value = "";
    option1.value = "";
    option2.value = "";
    option3.value = "";
});
