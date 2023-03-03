import {useState, useEffect} from "react";
import "./App.css";
import ResultModal from "./ResultModal";

function App() {
  const [mbtiList, setMbtiList] = useState({"0": [0, 0], "1": [0, 0], "2": [0, 0], "3": [0, 0]});
  const [clickedFlag, setClickedFlag] = useState({"1": null,"2": null,"3": null, "4": null, "5": null,"6": null,"7": null, "8": null, "9": null,"10": null,"11": null, "12": null})
  const [curState, setCurState] = useState(0);
  const [isOpen, setOpen] = useState(false);
  const [result, setResult] = useState("");
  const handleClick = () => {
    setOpen(true);
  };
  const handleModal1Submit = () => {
    // 모달1 비지니스 로직
    window.scrollTo(0,0)
    resetMbti()
    setOpen(false);
  };
  const makeButton = (index, text, flag, num, order) => {
    return <div id={[order, flag]} style={{display: "flex", width: "45%", minHeight: "20vh", border: "1px dashed lightgray", justifyContent: "center", alignItems: "center", margin: "1rem", fontSize: "2vw", backgroundColor: "rgba(255, 255, 255, 0.4", cursor: "pointer"}} 
      onClick={() => {
        if (order === curState) {
          if (clickedFlag[order] === flag) return null;
          setClickedFlag({...clickedFlag, [order]: flag});
          if (flag) setMbtiList({...mbtiList, [index]: [mbtiList[index][0] + 2, num]});
          else setMbtiList({...mbtiList, [index]: [mbtiList[index][0] - 2, num]});
          let tag = document.getElementById([order, flag]);
          tag.classList.add("clicked");
          let tagD = document.getElementById([order, !flag]);
          tagD.classList.remove("clicked");
        }

        if (order !== curState + 1) {
          return null;
        }
        let tag = document.getElementById([order, flag]);
        tag.classList.add("clicked");
        setClickedFlag({...clickedFlag, [order]: flag});
        setCurState(curState + 1);
        if (flag) setMbtiList({...mbtiList, [index]: [mbtiList[index][0] + 1, num]});
        else setMbtiList({...mbtiList, [index]: [mbtiList[index][0] - 1, num]});
      }}
      className="tButton mobWidthFont">
      <a href={`#${order !== 13 && String.fromCharCode(order + 97)+String.fromCharCode(order + 97)}`} style={{textDecoration: "none", color: "black", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>{text}</a>
    </div>
  }
  const decideMbti = async () => {
    let data = ""
    data = mbtiList[0][0] > 0 ? "E" : "I";
    data = mbtiList[1][0] > 0 ? data + "N" : data + "S";
    data = mbtiList[2][0] > 0 ? data + "F" : data + "T";
    data = mbtiList[3][0] > 0 ? data + "P" : data + "J";
    setResult(data);
  }
  const resetMbti = () => {
    setMbtiList({"0": [0, 0], "1": [0, 0], "2": [0, 0], "3": [0, 0]});
    setClickedFlag({"1": null,"2": null,"3": null, "4": null, "5": null,"6": null,"7": null, "8": null, "9": null,"10": null,"11": null, "12": null});
    setCurState(0);
    // e.view.location.href= "#zz";
    for (let i = 1; i < 13; i++) {
      let tagTrue = document.getElementById(`${i},true`);
      let tagFalse = document.getElementById(`${i},false`);
      tagTrue.classList.remove("clicked");
      tagFalse.classList.remove("clicked");
    }
  }
  return (
    <div id="zz" className="gowon" style={{display: "flex", flexDirection: "column", width: "100%", height: "100%", alignItems: "center", justifyContent: "center"}}>
      
      <div id="first" className="gyeonggi" style={{display: "flex", alignItems: "center", width: "100%", flexDirection: "column", height: "100vh", fontWeight: "100"}}>
        <div style={{fontSize: "12vw", height: "20vh", display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "35vh", color: "#73788F"}}>비전선교단</div>
        <div className="mobQu" style={{fontSize: "4.5vw", height: "10vh", display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "5vh"}}>나의 민족 MBTI 는?</div>
        <div style={{fontSize: "7vw", height: "40vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
          <a className="mobFont" href="#aa" style={{fontSize: "2vw", color: "#73788F", textDecoration: "underline", textUnderlinePosition: "under"}}>시작하기</a>
          {/* <div className="sButton"><a href="#aa" style={{textDecoration: "none", color: "white", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>Start</a></div> */}
        </div>
        {/* <button onClick={handleClick}>모달 열기</button> */}
          <ResultModal
              isOpen={isOpen}
              onSubmit={handleModal1Submit}
              result={result}
                  />
      </div>
      <div id="aa" style={{display: "flex", alignItems: "center", width: "100%", flexDirection: "column", height: "100vh"}}>
        <div className="mobQu" style={{fontSize: "3.5vw", height: "20vh", marginTop: "20vh", fontWeight: "600"}}>선교 일정을 계획 중이다. 어떻게 하고 싶은가?</div>
        <div style={{display: "flex", flexDirection: "column", margin: "1rem", justifyContent: "center", width: "100%", textAlign: "center", alignItems: "center"}}>
          {makeButton(1, <span>자유로운 방식의 선교를 계획한다.</span>, true, 5, 1)}
          {makeButton(1, <span>안전하게 확실한 계획과<br></br> 가이드라인을 만든다.</span>, false, 5, 1)}
        </div>
      </div>
      <div id="bb" style={{display: "flex", alignItems: "center", width: "100%", flexDirection: "column", height: "100vh"}}>
        <div className="mobQu" style={{fontSize: "3.5vw", height: "20vh", marginTop: "20vh", fontWeight: "600"}}>선교지 출발전에 나는?</div>
        <div style={{display: "flex", flexDirection: "column", margin: "1rem", justifyContent: "center", width: "100%", textAlign: "center", alignItems: "center"}}>
          {makeButton(3, <span>누구를 만날지?<br></br>어떤 일이 있을지 기대하며 설레한다.</span>, true, 10, 2)}
          {makeButton(3, <span>빠진 건 없는지 짐을 꼼꼼히 챙긴다.</span>, false, 10, 2)}
        </div>
      </div>
      <div id="cc" style={{display: "flex", alignItems: "center", width: "100%", flexDirection: "column", height: "100vh"}}>
        <div className="mobQu" style={{fontSize: "3.5vw", height: "20vh", marginTop: "20vh", fontWeight: "600"}}>선교지를 왔는데 전체 일정을 모르겠다.</div>
        <div style={{display: "flex", flexDirection: "column", margin: "1rem", justifyContent: "center", width: "100%", textAlign: "center", alignItems: "center"}}>
          {makeButton(1, <span>전체 일정이 어떻게 되는지<br></br> 파악하려고 노력한다.</span>, true, 4, 3)}
          {makeButton(1, <span>하루하루 만나는 사람에게 집중한다.</span>, false, 4, 3)}
        </div>
      </div>
      <div id="dd" style={{display: "flex", alignItems: "center", width: "100%", flexDirection: "column", height: "100vh"}}>
        <div className="mobQu" style={{fontSize: "3.5vw", height: "20vh", marginTop: "20vh", fontWeight: "600"}}>사역 중 점심시간이 되었는데 밥 먹자는 말이 없다.</div>
        <div style={{display: "flex", flexDirection: "column", margin: "1rem", justifyContent: "center", width: "100%", textAlign: "center", alignItems: "center"}}>
          {makeButton(0, <span>밥 안 드시냐고 주변에 물어본다.</span>, true, 2, 4)}
          {makeButton(0, <span>눈치 보다가 누가 물어보기 전까진<br></br> 가만히 있는다.</span>, false, 2, 4)}
        </div>
      </div>
      <div id="ee" style={{display: "flex", alignItems: "center", width: "100%", flexDirection: "column", height: "100vh"}}>
        <div className="mobQu" style={{fontSize: "3.5vw", height: "20vh", marginTop: "20vh", fontWeight: "600"}}>선교지에서 타려던 버스를 놓쳤다.</div>
        <div style={{display: "flex", flexDirection: "column", margin: "1rem", justifyContent: "center", width: "100%", textAlign: "center", alignItems: "center"}}>
          {makeButton(3, <span>당황스럽지만, 어쩔 수 없지.<br></br> 다음 버스 타자!</span>, true, 11, 5)}
          {makeButton(3, <span>다음 버스가 몇 시지? <br></br>이후 일정에 무리는 없나?</span>, false, 11, 5)}
        </div>
      </div>
      <div id="ff" style={{display: "flex", alignItems: "center", width: "100%", flexDirection: "column", height: "100vh"}}>
        <div className="mobQu" style={{fontSize: "3.5vw", height: "20vh", marginTop: "20vh", fontWeight: "600"}}>팀의 회계가 재정의 일부를 잃어버렸다. 나는?</div>
        <div style={{display: "flex", flexDirection: "column", margin: "1rem", justifyContent: "center", width: "100%", textAlign: "center", alignItems: "center"}}>
          {makeButton(2, <span>회계를 맡은 팀원의 마음이 <br></br>어렵지 않을 수 있도록 위로해 준다.</span>, true, 8, 6)}
          {makeButton(2, <span>다시 한 번 재정 계획을 수정한다.</span>, false, 8, 6)}
        </div>
      </div>
      <div id="gg" style={{display: "flex", alignItems: "center", width: "100%", flexDirection: "column", height: "100vh"}}>
        <div className="mobQu" style={{fontSize: "3.5vw", height: "20vh", marginTop: "20vh", fontWeight: "600"}}>선교지에서 파티에 초대를 받았다. 나는?</div>
        <div style={{display: "flex", flexDirection: "column", margin: "1rem", justifyContent: "center", width: "100%", textAlign: "center", alignItems: "center"}}>
          {makeButton(0, <span>"재밌겠는데? 가볼까?" <br></br>라고 생각한다.</span>, true, 1, 7)}
          {makeButton(0, <span>"파티 말고 현지인과 소수로 놀고 싶은데?" <br></br>라고 생각한다.</span>, false, 1, 7)}
        </div>
      </div>
      <div id="hh" style={{display: "flex", alignItems: "center", width: "100%", flexDirection: "column", height: "100vh"}}>
        <div className="mobQu" style={{fontSize: "3.5vw", height: "20vh", marginTop: "20vh", fontWeight: "600"}}>현지인을 만났을 때, 팀원들이 머뭇거리고 있다. 나는?</div>
        <div style={{display: "flex", flexDirection: "column", margin: "1rem", justifyContent: "center", width: "100%", textAlign: "center", alignItems: "center"}}>
          {makeButton(0, <span>내가 먼저 다가가 말을 건다.</span>, true, 3, 8)}
          {makeButton(0, <span>팀원들이 먼저 대화를 열어 가기를 기대한다.</span>, false, 3, 8)}
        </div>
      </div>
      <div id="ii" style={{display: "flex", alignItems: "center", width: "100%", flexDirection: "column", height: "100vh"}}>
        <div className="mobQu" style={{fontSize: "3.5vw", height: "20vh", marginTop: "20vh", fontWeight: "600"}}>현지 영혼이 자신의 어려움을 토로한다.</div>
        <div style={{display: "flex", flexDirection: "column", margin: "1rem", justifyContent: "center", width: "100%", textAlign: "center", alignItems: "center"}}>
          {makeButton(2, <span>너무 힘들었겠다. 영혼을 위로해 준다.</span>, true, 9, 9)}
          {makeButton(2, <span>이렇게 해보는 건 어때?<br></br>자신의 의견을 전달해준다.</span>, false, 9, 9)}
        </div>
      </div>
      <div id="jj" style={{display: "flex", alignItems: "center", width: "100%", flexDirection: "column", height: "100vh"}}>
        <div className="mobQu" style={{fontSize: "3.5vw", height: "20vh", marginTop: "20vh", fontWeight: "600"}}>영혼이 복음을 영접했다. 나는?</div>
        <div style={{display: "flex", flexDirection: "column", margin: "1rem", justifyContent: "center", width: "100%", textAlign: "center", alignItems: "center"}}>
          {makeButton(2, <span>하나님의 역사하심에<br></br>감동의 눈물을 흘린다.</span>, true, 7, 10)}
          {makeButton(2, <span>앞으로 이 영혼이 현실적으로 <br></br>신앙생활을 할 수 있을지 고민한다.</span>, false, 7, 10)}
        </div>
      </div>
      <div id="kk" style={{display: "flex", alignItems: "center", width: "100%", flexDirection: "column", height: "100vh"}}>
        <div className="mobQu" style={{fontSize: "3.5vw", height: "20vh", marginTop: "20vh", fontWeight: "600"}}>선교 마지막 날에 새로운 장소를 발견한 나는?</div>
        <div onClick={async () => await decideMbti()} style={{display: "flex", flexDirection: "column", margin: "1rem", justifyContent: "center", width: "100%", textAlign: "center", alignItems: "center"}}>
          {makeButton(3, <span>어떤 장소인지 궁금하다.<br></br> 일단 가서 구경한다.</span>, true, 12, 11)}
          {makeButton(3, <span>우선 계획된 일정에<br></br> 무리가 없는지 고려한다.</span>, false, 12, 11)}
        </div>
      </div>
      <div id="ll" style={{display: "flex", alignItems: "center", width: "100%", flexDirection: "column", height: "100vh"}}>
        <div className="mobQu" style={{fontSize: "3.5vw", height: "20vh", marginTop: "20vh", fontWeight: "600"}}>선교지를 다녀와서 간증을 한다. 나는?</div>
        <div style={{display: "flex", flexDirection: "column", margin: "1rem", justifyContent: "center", width: "100%", textAlign: "center", alignItems: "center"}}>
          {makeButton(1, <span>전체적으로 느낀 점을 나눈다.</span>, true, 6, 12)}
          {makeButton(1, <span>하루하루 꼼꼼하게 <br></br>경험을 전달한다.</span>, false, 6, 12)}
        </div>
      </div>

      <div className="gyeonggi" id="mm" style={{display: "flex", alignItems: "center", width: "100%", flexDirection: "column", height: "100vh", justifyContent: "center"}}>
        <a className="mobFont" onClick={handleClick} style={{fontSize: "3vw", color: "#73788F", textDecoration: "underline", textUnderlinePosition: "under", cursor: "pointer"}}>결과확인</a>
      </div>
    </div>
  );
}

export default App; 
