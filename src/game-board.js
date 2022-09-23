import {useState} from 'react';
import LetterGrid from "./letter-grid";
import ButtonGrid from "./button-grid";

//나를 부른다면 언제나 실행될수 있게

export default function(props){//이름이 없어도 된다.
  const [guessedLetters,setGuessedLetters]=useState([]);

  const [errorCount, setErrorCount]=useState(0);//시도횟수만들기

  const letterGuessedHandler=function(letter){
    //소문자로 변환
    let val=letter.toLowerCase();
    setGuessedLetters(prev=>[...prev,val])//prev는 초기값이 자동으로들어간다(변수명은 임의로 만들어도된다)//최초의 prev는 빈배열이다.  guessedLetters의 초기값이 배열이므로 ...prev(배열)로 받았다// 이결과값는 guessedLetters의 값을 바꾸는것이다

    //답을 맞추지 못하면 errorCount를 1씩 더한다
    if(props.secretWord.toLowerCase().indexOf(val)  === -1 ){
      setErrorCount(errorCount + 1)
    }
  }
  //{}안에는 표현식만 쓸수있다.문장은 쓸수 없다.
return(
  <div className={props.isShown ?'':'hidden'}>
    <div>남은횟수 : {props.maxError - errorCount}</div>
    <LetterGrid secretWord= {props.secretWord}
    guessedLetters={guessedLetters}//{['A','r']}사용자가 클릭한 글씨를 전달받는다
    />
   <ButtonGrid 
   letterGuessed={letterGuessedHandler}
   isShown={errorCount<props.maxError}
   />
  </div>
  
)

// export default function({secretWord}){//이름이 없어도 된다.
//   return(
//     <div>
//       <LetterGrid secretWord= {secretWord}/>
  
//     </div>
    
//   )
}