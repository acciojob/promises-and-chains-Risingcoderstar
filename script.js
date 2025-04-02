//your JS code here. If required.
const first=document.getElementById("age");

const second=document.getElementById("name");

const butto=document.getElementById("btn");
butto.addEventListener('click',(event)=>{
event.preventDefault();
const fv=first.value;
const sv=second.value;
const age=Number(fv);
if(!fv)
{
alert("First add age");
return;
}
if(!sv)
{
alert("First add name");
return;
}

 const pr = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age > 18) {
                resolve(`Welcome, ${sv}. You can vote.`);
            } else {
                reject(`Oh sorry ${sv}. You are not eligible to vote.`);
            }
        }, 4000);
    });
pr.then((data)=>{
alert(data);
})
}
);

