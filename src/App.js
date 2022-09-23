import {useState} from 'react';
import GameBoard from "./game-board";
import WordSelect from "./word-select";
import './App.css';


//나를 부른다면 언제나 실행될수 있게
export default function App(){//여기서 App은 이 폴더 내부적으로 필요하면 사용하면 되는것이지 외부에 영향이 주지 않는다 바뀌도 상관없다.
 const [secretWord, setSecretWord]=useState('');

return(
  //jsx문법에서는 반드시 하나의 부모가 싸고 있어야한다.
  <div className="container">
    <h1>게임을 시작합니다.</h1>
    <p>내용입니다.</p>
    <div>
      <WordSelect isShown={!secretWord}
      wordSelected={val=>setSecretWord(val)}//사용자가 입력한 값을 val로 받아서 setSecretWord에 넣어준다(secretWord의 값을 바꾸어주는 역할)
      /> {/* 값을 반대로 넣겠다//secretWord가 설정이 안되어있다  false전달 */}
      <GameBoard 
      secretWord= {secretWord}
      maxError={6}
      isShown={secretWord}
      />{/* 맞추어야할 단어를 넘어준다 */}
    </div>
  </div>
  
)
}