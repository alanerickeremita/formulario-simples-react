const buttonStyles = {
  borderRadius: "10px",
  backgroundColor: "#dcdcdc",
  width: "20%",
  fontSize: "24px",
  marignTop: "10px",
  marginLeft: "48px",
};

export function Button({ Nome, Sobrenome }) {
  function handleClick() {
    alert(Nome + " " + Sobrenome);
  }

  return (
    <div>
      <button className="button" style={buttonStyles} onClick={handleClick}>
        Submeter
      </button>
    </div>
  );
}
