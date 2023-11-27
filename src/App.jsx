// Import data
import playerData from "./playerData.js"

// Import useState
import {useState} from 'react'




// Baseball card function
function BaseballCard(props) {



  //Decontructing the useState
  let [showPicture, setShowPicture] = useState(true);

  // Creating a 'toggle' function to toggle between the front & back of the baseball card
  const toggleCard = () => {
    setShowPicture ( !showPicture );
  }

  // A 'if' statement that will shows front of the baseball card
  if (showPicture) {                                                              

    // The front of the baseball card that shows the name & player picture
  return (
    <div className = "card" onClick = {toggleCard}>
      <h2>{props.name}</h2>
      <img src = {props.imgUrl} alt = {props.name} />
    </div>
  )

  // The 'else' part of the statement that will shows back of card
} else {                                                                        

  // statsDisplay variable (1). 
  // const statsDisplay = Object.entries(props.stats).map(([statName, statValue]) => (
  //   <p key = {statName}>{statName}: {statValue}</p>
  // ));


// statsDisplay variable (2). 
const statsDisplay = []

for(let stat in stats) {
  statsDisplay.push(<p>{stat}: {stats[stat]}</p>)
}


  // The back of the baseball card that shows the name, team, position, and stats
  return (
  <div className = "card" onClick = {toggleCard}>                                         
    <h2>{props.name}</h2>
    <p>{props.team}</p>
    <p>{props.position}</p>
    {statsDisplay}
  </div>
  )

}
}







// App function
function App() {
  const cards = playerData.map((player) => (
  
  <BaseballCard 
  name = {player.name}
  team = {player.team}
  position = {player.position}
  stats = {player.stats}
  imgUrl = {player.imgUrl}
  cardId = {player.cardId}
  />

  ));                                
  return <>  {cards}; 
  </>                                                       
}


// Export the 'App' to the 'main.js
export default App;
