import "./teams.css"
import ReactDOM from 'react-dom/client';

function Teams(index) {
  var teams = [
    {
      name: "BlossoM",
      players: [
        {id: "Accident", photo: "https://cdn.discordapp.com/attachments/1113041271196491888/1113041548993626112/2023_Stage_1_BlossoM_Accident.png"},
        {id: "GodGimbap", photo: "https://cdn.discordapp.com/attachments/1113041271196491888/1113041549509537872/2023_Stage_1_BlossoM_GodGimbap.png"},
        {id: "Napz", photo: "https://cdn.discordapp.com/attachments/1113041271196491888/1113041549853466726/2023_Stage_1_Blossom_Naps.png"},
        {id: "Notion", photo: "https://cdn.discordapp.com/attachments/1113041271196491888/1113041550172225566/2023_Stage_1_BlossoM_Notion.png"},
        {id: "Seolleyo", photo: "https://cdn.discordapp.com/attachments/1113041271196491888/1113041550587469864/2023_Stage_1_BlossoM_Seolleyo.png"}
      ],
      coloredLogo: "https://cdn.discordapp.com/attachments/1083004295173132328/1092768328075989013/Shadow_BlossoM.png",
      blackLogo: "https://cdn.discordapp.com/attachments/1083004295173132328/1092757194040168548/Black_BlossoM.png",
      winCount: 0
    }
  ]

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
        <p>Teams</p>
        <div className="dividing-line"></div>
      </div>
      <div id="wrap">
        <div id="teams-body">
          <div id="team-name">
            <p>{teams[index.index].name}</p>
          </div>
          <div id="team-detail">
            <img id="team-logo" src={teams[index.index].coloredLogo} />
            <div id="player-info">
              {teams[index.index].players.map((props, key) => {
                return (
                  <div className="player" key={key}>
                    <img className="player-photo" src={props.photo} />
                    <div className="player-name">{props.id}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div id="wins">
            <p>South Korea League</p>
            <div id="thropies"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Teams;