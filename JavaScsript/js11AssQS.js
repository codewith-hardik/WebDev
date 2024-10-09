function one(){
    return 1;
}
function two(){
    return one()+one();
}
function three(){
    let ans = two()+one();
    console.log(ans);
}
three();
let h1 = document.getElementById("cwh");

function colorChange(color,delay,nextcolorChange){
    setTimeout(() => {
        h1.style.color = color;
        if(nextcolorChange)  nextcolorChange();
    }, delay)
}

let colorrepet = colorChange("red",1000,()=>{
    colorChange("green",1000,()=>{
        colorChange("yellow",1000,()=>{
            colorChange("aqua",1000,()=>{
                colorChange("blue",1000,()=>{
                    colorChange("pink",1000,()=>{
                        colorChange("black",1000);

                    })
                })
            })
        })
    })
})

