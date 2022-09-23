import {useState} from 'react';

export default function(props){
    //console.log(props.keys)
   //버튼을 클릭하면 특정 클래스명을 추가해서 안보이게 할것이다.
   const[isClicked,setisClicked]=useState(false);//isClicked이라는 변수의 초기값을 false로 한다.
   console.log(isClicked)
   let className ='button';

   //isClicked이 true이면 guessed를 추가하겠다
   if(isClicked){
    //className =className + ' guessed';
    className += ' guessed';
   }

   function clickHandler(){
    setisClicked(true)//isClicked를 true로바꾼것이다.
    props.onClicked(props.value)//button-grid의 onclicked이다//onClicked은 이벤트가 아니라 값을 전달하기위한것임
   }
  return(
    //<button className="button">{props.value}</button>
    <button 
       className={className}
       onClick={clickHandler}//실제클릭이벤트
       >{props.value}</button>
  )
  }
  
  
