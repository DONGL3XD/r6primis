import "./match.css"

function Match(index) {
  // addPlayers = (props, key) => {
  //   return (
  //     <div className="player" key={key}>
  //       <div className="player-name">{props.id}</div>
  //       <img className="player-photo" src={props.photo} />
  //     </div>
  //   );
  // }

  var matchInfo = [
    {
      date: "2023-04-01",
      time: "18:00UTC",
      team1: "Dplus",
      team2: "SANDBOX"
    }
  ]

  return (
    <div id="teams">
      <div id="section-name">
        <div className="dividing-line"></div>
        <p>Match</p>
        <div className="dividing-line"></div>
      </div>
      <div id="wrap">
        <div id="teams-body">
          <div id="title">
            <p>DATE</p>
            <p>TIME</p>
            <p>MATCH</p>
          </div>
          <div id="matches">
            {matchInfo.map((props, key) => {
              return (
                <div className="match" key={key}>
                  <div className="in-block">
                    <div className="when">
                      <p>{props.date}</p>
                      <p>{props.time}</p>
                    </div>
                    <div className="teams">
                      <div className="team">
                        <img src="https://cdn.discordapp.com/attachments/1083004295173132328/1092757194581221376/Black_Dplus.png" />
                        <p>{props.team1}</p>
                      </div>
                      <p>VS</p>
                      <div className="team">
                        <img src="https://cdn.discordapp.com/attachments/1083004295173132328/1092757195302641664/Black_Sandbox.png" />
                        <p>{props.team2}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Match;