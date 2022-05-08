import ReactModal from 'react-modal';

const ResultModal = ({ isOpen, onSubmit, onCancel, result }) => {
  const handleClickSubmit = () => {
    onSubmit();
  };

  const handleClickCancel = () => {
    onCancel();
  };
  if (!result) return null;
  console.log("resu", result);

  return (
    <ReactModal isOpen={isOpen}>
      <div id={`${result}`} style={{width: "100%", height: "90%"}}></div>
      <div style={{fontSize: "1vw", opacity: 0.05, position: "absolute"}}>{result}</div>
     
      <div className="gyeonggi" style={{height: "10%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <a onClick={handleClickSubmit} style={{fontSize: "1.75vw", color: "#73788F", textDecoration: "underline", textUnderlinePosition: "under", cursor: "pointer"}}>처음으로</a>
      </div>
    </ReactModal>
  );
};

export default ResultModal;
