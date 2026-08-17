const ticket = new Promise( function(resovle,reject){
    const isboarded = true;

    if(isboarded ){
        resovle(" your are eligible to onboarded")
    }else{
         reject(" your are  not eligible to onboarded")
    }

})

ticket.then((data)=>{
    console.log("whooooo",data)
})
.catch((data)=>{
    console.log("nooooo no nono",data)
})
.finally(( )=>{
 console.log("This will be executed all time");
})