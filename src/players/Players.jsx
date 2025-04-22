import React, { useState } from "react";
import Player from "./Player";

const Players = ({ players }) => {
	const [available, setAvailable] = useState(true);
	const handleAvailable = () => {
		setAvailable((prev) => !prev);
	};
	const [selected, setSelected] = useState([]);
	
	const handleSelect = (player) => {
		const checkbefore = selected.find((p) => p.id == player.id);
		if (!checkbefore && selected.length <=5){
			setSelected((prev)=> [...prev,player])
		}
		// setSelected((prev) => {
		// 	const checkSelectedPlayers = prev.find((p) => p.id == players.id);
		// 	if (!checkSelectedPlayers) {
		// 		return [...prev, player]
		// 	}
		// 	return prev
		// }
		// )
	}; 
	return (
		<div>
			<div className="mt-10 flex justify-between">
				{available ? <h3>Available PLayer</h3> : <h3>Selected Player({selected.length }/6)</h3>}
				<div className="flex gap-6">
					<button
						className="btn bg-amber-300"
						onClick={!available && handleAvailable}
					>
						Available
					</button>
					<button onClick={available && handleAvailable}>
						Selected
					</button>
				</div>
			</div>
			{/* available palyer section */}
			{available &&
				players.map((player) => <Player player={player} handleSelect={() => handleSelect(player)}></Player>)}
			{/* selected player section  */}
			{!available && selected.map((player) =>
				<div>
					<p>{player.name}</p>
				</div>
			)}
		</div>
	);
};
export default Players;
