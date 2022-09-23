
import Letter from "./letter";
//나를 부른다면 언제나 실행될수 있게

export default function(props){//이름이 없어도 된다.
  //함수를 만든다 함수는 <span>각각의 글자</span>
  //<span>r</span><span>e</span>....  를 letters변수명에 넣는다
  //props로 받아온 문자가 react인데 이것을 배열로 바꾸어주어야 한다.
  //배열로 바꿀려면 글자하나하나를 분리하는 함수가 필요하다. --> 대상.split('') -->['r','e'....]
  //map(각각의요소를 받아오는 변수,각각의 순번=>{})
  //arrow함수는 매개변수가 두개이상일때는 ()로 묶어주어야한다
  //(x,y)=>{}
console.log(props.secretWord)
 
  let letters = props.secretWord.split('').map((letter,index)=>{//letter는 배열안의 요소하나하나를 받아오는 변수
    //<span>{letter}</span>
    let isShown =  props.guessedLetters.indexOf(letter.toLowerCase()) > -1;
     //console.log(isShown)
     //console.log(letter)
     //console.log(index)
    //배열의 특정조건에 맞는 값만 정리해서 새로운 배열로 만들기
    
    return(
      //index값은 필요없지만 개발자모드에서 에러메세지를 없애주기위해 만듬
     <Letter  value={letter}  isShown={isShown} keys={index}/>

)
})

return(
      <div className="flex">
       {letters}
      </div>
      
    )

};