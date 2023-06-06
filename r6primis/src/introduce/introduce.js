import "./introduce.css"

function Introduce(index) {
  // addPlayers = (props, key) => {
  //   return (
  //     <div className="player" key={key}>
  //       <div className="player-name">{props.id}</div>
  //       <img className="player-photo" src={props.photo} />
  //     </div>
  //   );
  // }

  return (
    <div id="teams">
      <div id="section-name">
        <div className="dividing-line"></div>
        <p>Introduce</p>
        <div className="dividing-line"></div>
      </div>
      <div id="wrap">
        <div id="teams-body">
          <img id="logo" src={index.index} />
          <p id="text">BLAST R6 South Korea League</p>
          <iframe id="vid" src="https://www.youtube.com/embed/j6XDjlpVSIs" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Introduce;