var data = new Array();
var count = 0;




let btadd = document.getElementById("add");
let btcancel = document.getElementById("cancel");
let result = document.getElementById("result");

btadd.addEventListener("click", function(){
    let name = document.getElementsByName("name")[0];

    let gioitinh = document.querySelector('input[type="radio"]:checked');

    let sothich = document.querySelectorAll('input[name="sothich"]:checked');

    let check = [];
    for(let i = 0, l = sothich.length; i < l;  i++)
    {
        check.push(sothich[i].value);
    }

    let checked = check.join(',');

    const tnode = document.createElement("button");

        tnode.setAttribute("id", count);
        tnode.setAttribute("class", "btn m-1");

        tnode.textContent = [name.value , gioitinh.value, checked ];

        tnode.addEventListener("click", function(){
            let id = this.id;
            name.value =  data[id][1];
            gioitinh.value =  data[id][2];
            sothich.value = data[id][3]

        });
    
    result.appendChild(tnode);
    count++;
});
//Chưa xuất được thông tin ra màn hình 
//xuất thông tin ra màn hình

btcancel.addEventListener("click", function(){
    name.value = "";
    gioitinh.value = "";
    sothich.value = "";
    option1.value = "";
    option2.value = "";
    option3.value = "";
});
