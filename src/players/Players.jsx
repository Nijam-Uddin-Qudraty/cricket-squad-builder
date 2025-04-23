import React, { useState } from "react";
import Player from "./Player";
import Selected from "./Selected";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const Players = ({ players, buyPlayer, checkBalance }) => {
	// available players by default 
	const [available, setAvailable] = useState(true);
	const handleAvailable = () => {
		setAvailable((prev) => !prev);
	};
	// selecting player 
	const [selectedPlayer, setselectedPlayer] = useState([]);
	const handleSelect = (player) => {
		
			{
			const checkbefore = selectedPlayer.find((p) => p.id == player.id);
			if (selectedPlayer.length <= 5) {
				if (!checkbefore) {
					if (checkBalance(player.price)) {
						buyPlayer(player.price)
						toast.success("Player has been added")
						setselectedPlayer((prev) => [...prev, player])
					}
					else {
						toast.error("Insufficient balance")
					}
				}
				else {
					toast.info("Player already selected")
				}
			}
			else {
				toast.warn("Maximum player reached")
			}
		}
		
	};
		// removing player 
		const removeSelectedPlayer = (id) => {
			setselectedPlayer((prev) => prev.filter((p) => p.id !== id));
			toast.warning("Player removed")
		}
	
	return (
		<div>
			{/* toggle toward sections  */}
			<div className="mt-14 max-w-screen-xl flex flex-col items-center lg:flex-row lg:justify-between ">
				<div>
				{available ? <h3 className="font-extrabold text-2xl">Available PLayer</h3> : <h3 className="font-extrabold text-2xl">Selected Player({selectedPlayer.length }/6)</h3>}
				</div>
					<div className="flex gap-6">
					<button
						className={available ? " bg-lime-300 rounded-xl w-32 h-12 text-bold": "rounded-xl w-32 h-12 text-slate-500"}
						onClick={!available && handleAvailable}
					>
						Available
					</button>
					<button className={!available ? " bg-lime-300 rounded-xl w-32 h-12 text-bold": "rounded-xl w-32 h-12 text-slate-500"} onClick={available && handleAvailable}>
						Selected({selectedPlayer.length })
					</button>
				</div>
			</div>
			{/* sections components */}
			{/* available palyer section */}
			<div className="max-w-screen-xl grid grid-rows-1 md:gird-cols-2 lg:grid-cols-3 gap-6 mb-6">
			{available &&
					players.map((player) => <Player player={player} handleSelect={() => handleSelect(player)}></Player>)}
			</div>
			{/* selectedPlayer player section  */}
			{!available && selectedPlayer.map((player) =><Selected player={player} removeSelectedPlayer={removeSelectedPlayer} ></Selected>)}
		</div>
	);
};
Player.propTypes = {
	players: PropTypes.object.isRequired,
	buyPlayer: PropTypes.func.isRequired,
	checkBalance: PropTypes.func.isRequired
}
export default Players;
