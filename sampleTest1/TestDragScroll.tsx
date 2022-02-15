import logo from './logo.svg';
import './css/TestDragScroll.css';
import {useState} from "react";

function TestDragScroll() {

  const [moveValue, changeMoveValue] = useState(0);
  const [startValue, changeStartValue] = useState(0);
  // const [endValue, changeEndValue] = useState(0);
  const [baseMoveValue, changeBaseMoveValue] = useState(0);
  const [startFlug, changeStartFlug] = useState(false);

  return (
      <>
        <div className="container">
          <div className="contents">
            <div>Hello</div>

            <div className="imageListWrap">
            <ul
              style={startFlug ?
                ({left: (`${baseMoveValue}`*100+`${moveValue}`*0.1)+'%'})
                    :
                ({left: (`${baseMoveValue}`*100)+'%'})
            }


                className="imageList"
                onMouseMove={(e)=>{
                if(startFlug === true) {
                  if(startValue < e.screenX){
                    //left to right move
                    changeMoveValue(e.screenX - startValue);
                    // console.log("right",(moveValue))
                  }else{
                    //right to left move
                    changeMoveValue(-(startValue - e.screenX));
                    // console.log("left",(moveValue))
                  }
                }else{
                  // changeMoveValue(0);
                }

            }}
            onMouseDown={(e)=>{
              changeStartValue(e.screenX);
              changeMoveValue(0);
              changeStartFlug(true);
            }}
            onMouseUp={(e)=>{
              if(startValue < e.screenX){
                //left to right move
                if(e.screenX - startValue > 100){
                  if(baseMoveValue < 0 ){
                    changeBaseMoveValue(baseMoveValue+1);
                  }else{
                    changeBaseMoveValue(baseMoveValue);
                  }
                }else{
                  changeBaseMoveValue(baseMoveValue);
                }

              }else if(startValue > e.screenX){
                //right to left move
                if(startValue - e.screenX > 100) {
                  console.log('r');
                  if(baseMoveValue > -7 ){
                    changeBaseMoveValue(baseMoveValue-1);
                  }else{
                    changeBaseMoveValue(baseMoveValue);
                  }
                }else{
                  changeBaseMoveValue(baseMoveValue);
                }
              }
              changeStartFlug(false);
            }}

            onMouseOut={(e)=>{
              changeStartFlug(false);
            }}
            onClick={(e)=>{
              changeStartFlug(false);
            }}
            >
              <li className="imageWrap">
                <img className="sliderImage" src="logo512.png" alt=""/>
              </li>
              <li className="imageWrap">
                <img className="sliderImage" src="logo512.png" alt=""/>
              </li>
              <li className="imageWrap">
                <img className="sliderImage" src="logo512.png" alt=""/>
              </li>
              <li className="imageWrap">
                <img className="sliderImage" src="logo512.png" alt=""/>
              </li>
              <li className="imageWrap">
                <img className="sliderImage" src="logo512.png" alt=""/>
              </li>
              <li className="imageWrap">
                <img className="sliderImage" src="logo512.png" alt=""/>
              </li>
              <li className="imageWrap">
                <img className="sliderImage" src="logo512.png" alt=""/>
              </li>
            </ul>
            </div>
          </div>

        </div>

      </>
  );
}

export default TestDragScroll;
