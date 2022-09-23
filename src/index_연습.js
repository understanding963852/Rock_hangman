import React from 'react';
import ReactDOM from 'react-dom';

// function Helloworld(props){ //props는 임의의 이름이다
//   return <p>리턴으로 값을 보내준다 {props.firstname}{props.lastname}</p>
// }

// function Helloworld({lastname}){//이렇게 적을수도 있다. 이것을 distrcturing 디스트럭처링(비구조화,파괴)  이라 한다.
//   return <p>리턴으로 값을 보내준다 {lastname}</p>
// }

function Helloworld({firstname, lastname}){
  return <p>리턴으로 값을 보내준다{firstname +' ' +lastname}</p>
}

ReactDOM.render(
//render안에 ()안에는 표현식만 써야한다.
//무엇을 component로 만든다
//component는 대문자로 시작한다.
//<Helloworld></Helloworld>
<Helloworld firstname='홍' lastname='길동'  />
,
document.getElementById('root')

)

