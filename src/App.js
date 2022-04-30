import {useState, useEffect} from "react";
import "./App.css";

function App() {
  const [mbtiList, setMbtiList] = useState({"0": [0, 0], "1": [0, 0], "2": [0, 0], "3": [0, 0]});
  const [clickedFlag, setClickedFlag] = useState({"1": null,"2": null,"3": null, "4": null, "5": null,"6": null,"7": null, "8": null, "9": null,"10": null,"11": null, "12": null})
  const [curState, setCurState] = useState(0);
  const makeButton = (index, text, flag, num) => {
    return <div id={[num, flag]} style={{display: "flex", width: "45%", minHeight: "20vh", border: "1px dashed lightgray", justifyContent: "center", alignItems: "center", margin: "1rem", fontSize: "2vw", backgroundColor: "rgba(255, 255, 255, 0.3", cursor: "pointer"}} 
      onClick={() => {
        console.log("c")
        if (num === curState) {
          if (clickedFlag[num] === flag) return null;
          setClickedFlag({...clickedFlag, [num]: flag});
          if (flag) setMbtiList({...mbtiList, [index]: [mbtiList[index][0] + 2, num]});
          else setMbtiList({...mbtiList, [index]: [mbtiList[index][0] - 2, num]});
          let tag = document.getElementById([num, flag]);
          tag.classList.add("clicked");
          let tagD = document.getElementById([num, !flag]);
          tagD.classList.remove("clicked");
        }

        if (num !== curState + 1) {
          return null;
        }
        let tag = document.getElementById([num, flag]);
        tag.classList.add("clicked");
        setClickedFlag({...clickedFlag, [num]: flag});
        setCurState(curState + 1);
        if (flag) setMbtiList({...mbtiList, [index]: [mbtiList[index][0] + 1, num]});
        else setMbtiList({...mbtiList, [index]: [mbtiList[index][0] - 1, num]});
      }}
      className="tButton">
      <a href={`#${num !== 12 && String.fromCharCode(num + 97)+String.fromCharCode(num + 97)}`} style={{textDecoration: "none", color: "black", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>{text}</a>
    </div>
  }
  const decideMbti = () => {
    let data = ""
    data = mbtiList[0][0] > 0 ? "E" : "I";
    data = mbtiList[1][0] > 0 ? data + "S" : data + "N";
    data = mbtiList[2][0] > 0 ? data + "T" : data + "F";
    data = mbtiList[3][0] > 0 ? data + "J" : data + "P";
    alert(data);
  }
  const resetMbti = (e) => {
    setMbtiList({"0": [0, 0], "1": [0, 0], "2": [0, 0], "3": [0, 0]});
    setClickedFlag({"1": null,"2": null,"3": null, "4": null, "5": null,"6": null,"7": null, "8": null, "9": null,"10": null,"11": null, "12": null});
    setCurState(0);
    console.log("e", e);
    e.view.location.href= "#zz";
    let allDiv = document.getElementById("zz");
    console.log("aa", allDiv);
    console.log("ccc", allDiv.childNodes);
    for (let i = 1; i < 13; i++) {
      let tagTrue = document.getElementById(`${i},true`);
      let tagFalse = document.getElementById(`${i},false`);
      tagTrue.classList.remove("clicked");
      tagFalse.classList.remove("clicked");
    }
  }
  return (
    <div id="zz" className="gowon" style={{display: "flex", flexDirection: "column", width: "100%", height: "100%", alignItems: "center", justifyContent: "center"}}>
      <div style={{display: "flex", margin: "2rem", alignItems: "center", width: "100%", flexDirection: "column", height: "100vh"}}>
        <div style={{fontSize: "11vw", height: "25vh", display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "15vh"}}>비전 선교단</div>
        <div style={{fontSize: "5vw", height: "20vh", display: "flex", justifyContent: "center", alignItems: "center"}}>나의 민족 MBTI 는?</div>
        <div style={{fontSize: "7vw", height: "20vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
          <div className="sButton"><a href="#aa" style={{textDecoration: "none", color: "white", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>Start</a></div>
        </div>
        
      </div>
      <div id="aa" style={{display: "flex", alignItems: "center", width: "100%", flexDirection: "column", height: "100vh"}}>
        <div style={{fontSize: "5vw", height: "20vh", marginTop: "15vh", fontWeight: "600"}}>나는 기분이 안 좋을 때</div>
        <div style={{display: "flex", flexDirection: "column", margin: "1rem", justifyContent: "center", width: "100%", textAlign: "center", alignItems: "center"}}>
          {makeButton(0, <span>사람들과 만나서 놀아야 한다. <br></br>집에 혼자 있으면 괜히 울적해지기만 한다."</span>, true, 1)}
          {makeButton(0, <span>집에서 조용히 쉬고 싶다. <br></br>이럴 때 나가봤자 기만 빨린다.</span>, false, 1)}
        </div>
      </div>
      <div id="bb" style={{display: "flex", alignItems: "center", width: "100%", flexDirection: "column", height: "100vh"}}>
        <div style={{fontSize: "5vw", height: "20vh", marginTop: "15vh", fontWeight: "600"}}>나는 기분이 안 좋을 때</div>
        <div style={{display: "flex", flexDirection: "column", margin: "1rem", justifyContent: "center", width: "100%", textAlign: "center", alignItems: "center"}}>
          {makeButton(0, <span>이 일을 해냈을 때<br></br> 얻게 될 보상이 기대되기 때문이다.</span>, true, 2)}
          {makeButton(0, <span>이 일을 하지 않았을 때<br></br> 잃게 될 것들이 있기 때문이다</span>, false, 2)}
        </div>
      </div>
      <div id="cc" style={{display: "flex", alignItems: "center", width: "100%", flexDirection: "column", height: "100vh"}}>
        <div style={{fontSize: "5vw", height: "20vh", marginTop: "15vh", fontWeight: "600"}}>나는 기분이 안 좋을 때</div>
        <div style={{display: "flex", flexDirection: "column", margin: "1rem", justifyContent: "center", width: "100%", textAlign: "center", alignItems: "center"}}>
          {makeButton(0, <span>어색한 침묵은 못 견디겠다 <br></br>무슨 말이라도 걸어 본다</span>, true, 3)}
          {makeButton(0, <span>어색하더라도 누군가 말을 걸지 않으면<br></br> 왠만해선 먼저 말을 걸지 않는다.</span>, false, 3)}
        </div>
      </div>

      <div id="dd" style={{display: "flex", alignItems: "center", width: "100%", flexDirection: "column", height: "100vh"}}>
        <div style={{fontSize: "5vw", height: "20vh", marginTop: "15vh", fontWeight: "600"}}>나는 기분이 안 좋을 때</div>
        <div style={{display: "flex", flexDirection: "column", margin: "1rem", justifyContent: "center", width: "100%", textAlign: "center", alignItems: "center"}}>
          {makeButton(1, <span>재밌는 영화였다.<br></br> 배고프니깐 밥이나 먹으러 가야겠다.</span>, true, 4)}
          {makeButton(1, <span>여운이 가시질 않는다. <br></br>포털 사이트에 영화 해석을 검색해본다</span>, false, 4)}
        </div>
      </div>
      <div id="ee" style={{display: "flex", alignItems: "center", width: "100%", flexDirection: "column", height: "100vh"}}>
        <div style={{fontSize: "5vw", height: "20vh", marginTop: "15vh", fontWeight: "600"}}>나는 기분이 안 좋을 때</div>
        <div style={{display: "flex", flexDirection: "column", margin: "1rem", justifyContent: "center", width: "100%", textAlign: "center", alignItems: "center"}}>
          {makeButton(1, <span>멜로디가 좋으면 장땡이다.<br></br> 가사는 크게 신경쓰지 않는다.</span>, true, 5)}
          {makeButton(1, <span>중요한 건 가사다.<br></br> 가사를 음미하며 노래 속 주인공으로 빙의한다.</span>, false, 5)}
        </div>
      </div>
      <div id="ff" style={{display: "flex", alignItems: "center", width: "100%", flexDirection: "column", height: "100vh"}}>
        <div style={{fontSize: "5vw", height: "20vh", marginTop: "15vh", fontWeight: "600"}}>나는 기분이 안 좋을 때</div>
        <div style={{display: "flex", flexDirection: "column", margin: "1rem", justifyContent: "center", width: "100%", textAlign: "center", alignItems: "center"}}>
          {makeButton(1, <span>목적지가 우선이다.<br></br> 일단 가기로 한 곳부터 간다.</span>, true, 6)}
          {makeButton(1, <span>궁금한 건 못참는다. <br></br>일단 들어가서 구경부터 하고 본다</span>, false, 6)}
        </div>
      </div>

      <div id="gg" style={{display: "flex", alignItems: "center", width: "100%", flexDirection: "column", height: "100vh"}}>
        <div style={{fontSize: "5vw", height: "20vh", marginTop: "15vh", fontWeight: "600"}}>나는 기분이 안 좋을 때</div>
        <div style={{display: "flex", flexDirection: "column", margin: "1rem", justifyContent: "center", width: "100%", textAlign: "center", alignItems: "center"}}>
          {makeButton(2, <span>무슨 차 샀어? <br></br>얼마 줬어?</span>, true, 7)}
          {makeButton(2, <span>오 대박 축하해! <br></br>그 동안 고생한 보람이 있네!</span>, false, 7)}
        </div>
      </div>
      <div id="hh" style={{display: "flex", alignItems: "center", width: "100%", flexDirection: "column", height: "100vh"}}>
        <div style={{fontSize: "5vw", height: "20vh", marginTop: "15vh", fontWeight: "600"}}>나는 기분이 안 좋을 때</div>
        <div style={{display: "flex", flexDirection: "column", margin: "1rem", justifyContent: "center", width: "100%", textAlign: "center", alignItems: "center"}}>
          {makeButton(2, <span>싫어하든지 말든지 내가 알 바 아니다. <br></br>어차피 모든 사람이 나를 좋아할 순 없다.</span>, true, 8)}
          {makeButton(2, <span>왜 나를 싫어하지? 내가 뭘 잘못했나? <br></br>집에 가서도 계속 생각나고 신경쓰인다</span>, false, 8)}
        </div>
      </div>
      <div id="ii" style={{display: "flex", alignItems: "center", width: "100%", flexDirection: "column", height: "100vh"}}>
        <div style={{fontSize: "5vw", height: "20vh", marginTop: "15vh", fontWeight: "600"}}>나는 기분이 안 좋을 때</div>
        <div style={{display: "flex", flexDirection: "column", margin: "1rem", justifyContent: "center", width: "100%", textAlign: "center", alignItems: "center"}}>
          {makeButton(2, <span>내가 해내지 못했다는 것에 대한 좌절감이다</span>, true, 9)}
          {makeButton(2, <span>나의 실패에 대한 다른 사람들의 평판이다</span>, false, 9)}
        </div>
      </div>
      <div id="jj" style={{display: "flex", alignItems: "center", width: "100%", flexDirection: "column", height: "100vh"}}>
        <div style={{fontSize: "5vw", height: "20vh", marginTop: "15vh", fontWeight: "600"}}>나는 기분이 안 좋을 때</div>
        <div style={{display: "flex", flexDirection: "column", margin: "1rem", justifyContent: "center", width: "100%", textAlign: "center", alignItems: "center"}}>
          {makeButton(3, <span>자료조사부터 발표까지 세세하게 계획부터 세운다.</span>, true, 10)}
          {makeButton(3, <span>일단 자료조사부터 하면서 틀을 잡아간다.</span>, false, 10)}
        </div>
      </div>
      <div id="kk" style={{display: "flex", alignItems: "center", width: "100%", flexDirection: "column", height: "100vh"}}>
        <div style={{fontSize: "5vw", height: "20vh", marginTop: "15vh", fontWeight: "600"}}>나는 기분이 안 좋을 때</div>
        <div style={{display: "flex", flexDirection: "column", margin: "1rem", justifyContent: "center", width: "100%", textAlign: "center", alignItems: "center"}}>
          {makeButton(3, <span>점심은 여기서 먹고, 커미는 여기서 먹어야지...<br></br>이미 머릿속에 루트를 그려 놓았다</span>, true, 11)}
          {makeButton(3, <span>일단 만나서 뭘 할지 생각해 본다.</span>, false, 11)}
        </div>
      </div>
      <div id="ll" style={{display: "flex", alignItems: "center", width: "100%", flexDirection: "column", height: "100vh"}}>
        <div style={{fontSize: "5vw", height: "20vh", marginTop: "15vh", fontWeight: "600"}}>나는 기분이 안 좋을 때</div>
        <div style={{display: "flex", flexDirection: "column", margin: "1rem", justifyContent: "center", width: "100%", textAlign: "center", alignItems: "center"}}>
          {makeButton(3, <span>이건 내 계획과 어긋나는 일이다.<br></br> 갑자기 스트레스가 확 밀려온다</span>, true, 12)}
          {makeButton(3, <span>모든게 계획대로 흘러갈 수는 없다.<br></br> 그럴 수도 있다고 생각하고 넘긴다.</span>, false, 12)}
          <div onClick={() => decideMbti()} style={{borderRadius: "13vh", height: "13vh", width: "13vh", border: "1px dashed gray", display: "flex", justifyContent: "center", alignItems: "center", background: "rgba(255,255,255,.6)", cursor: "pointer", marginTop: "2vh", fontSize: "2vw", wordBreak: "keep-all"}}>결과 <br></br>확인</div>
        </div>
      </div>
      <div id="mm" style={{display: "flex", alignItems: "center", width: "100%", flexDirection: "column", height: "100vh"}}>
        {/* <button onClick={() => decideMbti()} style={{width: "40%", height: "4rem", marginBottom: "5rem", cursor: "pointer"}}>결과 확인하기</button> */}
        <button onClick={(e) => resetMbti(e)} style={{width: "40%", height: "4rem", marginBottom: "5rem", cursor: "pointer"}}>다시 확인하기</button>

      </div>
      
      

    </div>
  );
}

export default App;
