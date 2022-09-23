//처음에는 글자가 안보이다가 해당하는글자가 선택되면 그것을 보이게 한다
export default function(props){//이름이 없어도 된다.
  let output=" ";
  console.log(props.value)
  console.log(props.isShown)
  console.log(props.keys)
  if(props.isShown){
    output=props.value;
  }
return(
  <span className="letter">{output}</span>
)
}


// export default function({value,isShown}){//이름이 없어도 된다.
//   return(
//     <span>{value}</span>
//   )
//   }