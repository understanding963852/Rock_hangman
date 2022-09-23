import Button from "./button";

export default function(props){
    //a~z 배열생성, 배열의 값마다 할이
    //변수명 letters
    //<button>A</button><button>B</button>...
  
    let letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

//   let buttons=letters.map((letter,index)=>(
//     <Button  value={letter}  keys={index}/>
//   ));
let buttons=letters.map((letter,index)=>{
    return(
        <Button  
          value={letter}  
           keys={index} 
           onClicked={props.letterGuessed}
           />
    )
});

let className ="flex flex-wrap"; 

if(!props.isShown){
    className += " hidden";
}
return(
    <div className={className}>
        {buttons}
    </div>
    )

};