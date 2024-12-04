// adding all class to js
const gamecontain =document.querySelector('.gamecontain');
 user =document.querySelector('.user img');
 cpu=document.querySelector('.cpu img');
 result=document.querySelector('.result');
 option_img=document.querySelectorAll('.option_img');

//  console.log(gamecontain,user,cpu,result,option_img)

//  to add new click event on every options 
 option_img.forEach((image,index) =>{
    image.addEventListener("click", (e) => {
        image.classList.add("active")

        // again loop which reoves the perivious click event
        option_img.forEach((image2,index2) => {
            index != index2  &&  image2.classList.remove("active");
        })


        // now we are getting link of option img so we can change it with user img
        let imgsrc = e.target.querySelector('img').src;
        // console.log(user.src)   this is how we change user img to option img which we select.
        user.src = imgsrc ;
        
        
        //now we getting rendom number to get rendom img from cpu.
        let randomnum=Math.floor(Math.random()*3);
        // console.log(randomnum);
        let cpuresult=["rocks.png","paper.png","scissors.png",]
        cpu.src = cpuresult[randomnum];
        // console.log(cpuresult[randomnum])


        // Asigning the somthing so we can compair that thing and get the output of result
        let cpuvalue=["r","p","s"][randomnum];
        let uservalue=["r","p","s"][index];
        // console.log(uservalue,cpuvalue)
        let outcome={
            rr : "DRAW",
            rp : "USER Win",
            rs : "CPU Win",
            pr : "CPU Win",
            pp : "DRAW",
            ps : "USER Win",
            sr : "USER Win",
            sp : "CPU Win",
            ss : "DRAW"
        };
        let outcomevalue=outcome[cpuvalue+uservalue]
        let p=console.log(outcomevalue)
        result.innerHTML = outcomevalue;
        
    })
 })