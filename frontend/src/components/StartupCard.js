export default function StartupCard(props) {
  const headingColor = [
    "#00008B", //DarkBlue
    "#008080", //teal
    "#8A2BE2", //BlueViolet
    "#DC143C", //crimsonRed
    "#228B22", //ForestGreen
    "#8B008B", //DarkMagenta
    "#FF8C00", //DarkOrange
    "#FF1493", //DeepPink
    "#4B0082", //Indigo
    "#FF4500", //OrangeRed
    "#006400", //DarkGreen
    "#800080", //Purple
  ];
  let length = headingColor.length;
  let index = props.index % length;
  return (
    <div className="startup-card" style={{ backgroundColor: "#F5FFFA" }}>
      <div
        className="card-header"
        style={{ backgroundColor: headingColor[index], color: "white" }}
      >
        <h5 className="card-h5">{props.data.Name}</h5>
      </div>
      <div className="card-body">
        <h5 className="card-h5" style={{ textAlign: "left" }}>
          {props.data.Industry}
        </h5>
        <h5 className="card-h5">
          {" "}
          FounderInfo:
          {props.data.FounderInfo.map((key) => {
            return (
              <p className="card-msg">
                {key.info1},{key.info2}
              </p>
            );
          })}
        </h5>
        <h5 className="card-h5">
          {" "}
          ProductDetails:
          {props.data.ProductDetails.map((key) => {
            return (
              <p className="card-msg">
                {key.product1},{key.product2}
              </p>
            );
          })}
        </h5>

        <h5 className="card-h5">
          {" "}
          FundingHistory:
          {props.data.FoundingHistory.map((key) => {
            return (
              <p className="card-msg">
                {key.history1},{key.history2}
              </p>
            );
          })}
        </h5>
      </div>
    </div>
  );
}
