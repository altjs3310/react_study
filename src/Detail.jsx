// function Detail(props) {
//   return (
//     <div className="detail">
//       <button onClick={ () => {
//         let _boardTitle = [...props.boardTitle];
//         _boardTitle[0] = "ddd";
//         props.setBoardTitle(_boardTitle);
//       }}>제목바꿔주는 버튼</button>
//       <h4>{props.boardTitle[props.titleIndex]}</h4>
//       <p>날짜</p>
//       <p>내용</p>  
//     </div> 
//   )
// }
function Detail({boardTitle, setBoardTitle, titleIndex}) {
  return (
    <div className="detail">
      <button onClick={ () => {
        let _boardTitle = [...boardTitle];
        _boardTitle[0] = "ddd";
        setBoardTitle(_boardTitle);
      }}>제목바꿔주는 버튼</button>
      <h4>{boardTitle[titleIndex]}</h4>
      <p>날짜</p>
      <p>내용</p>  
    </div> 
  )
}

export default Detail;