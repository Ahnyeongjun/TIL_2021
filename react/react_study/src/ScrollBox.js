// import React, { Component } from 'react';
// import { noExtendRight } from 'sequelize/types/lib/operators';

// class ScrollBox extends Component {
//     scrollToBottom = () => {
//         const { scrollHeight, clientHeight } = this.box;
//         this.box.scrollTop = scrollHeight - clientHeight;
//     }
//     onClick=()=>{
//         const nextNames =names.concat({
//             id:noExtendRight,
//             text:inputText
//         });
//         setNextId(nextId+1);
//         setNames(nextNames);
//         setInputText('');
//     }
    

//     render() {
//         const style = {
//             borde: '1px solid black',
//             height: '300px',
//             width: '300px',
//             overflow: 'auto',
//             position: 'relative'
//         };
//         const innerStyle = {
//             width: '100%',
//             height: '650px',
//             background: 'linear-gradient(white,black)'
//         }
//         return (
//             <div
//                 style={style}
//                 ref={(ref) => { this.box = ref }}>
//                 <div style={innerStyle} />
//                    <input value={inputText} onChange={onChange}/>
//                    <button onClick= {onClick}>추가</button>
//                    <ul>{nameList}</ul>
//             </div>
//         )
//     }
// }
// export default ScrollBox;