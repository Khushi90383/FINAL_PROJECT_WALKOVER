const submit = document.querySelector('#submit');
const answers = document.querySelectorAll(".answer")

const getans = () =>
{
    let ans;
    answers.forEach((curAns)=> {
        if(curAns.checked){
            ans=curAns.id
        }   
    });
    return ans;
}


submit.addEventListener('click',()=>{
    const checkedAns = getans();
    console.log(checkedAns); 
});
