import React from "react";
import PropTypes from "prop-types";

const Selected = ({ player, removeSelectedPlayer }) => {
	return (
		<div className="flex justify-between p-6 mb-6 border-2 rounded-xl">
			<div className="flex gap-6 ">
				<img className="h-20 w-20" src={player.image} alt="" />
				<div>
					<p className="font-bold text-2xl">{player.name}</p>
					<p className="">
						{player.role == "Bowler"
							? player.bowlingStyle
							: player.battingStyle}
					</p>
				</div>
			</div>
			<button
				className=""
				onClick={() => removeSelectedPlayer(player.id)}
			>
				<svg
					width="18.000977"
					height="21.000488"
					viewBox="0 0 18.001 21.0005"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
				>
					<desc>Created with Pixso.</desc>
					<defs />
					<path
						id="Vector"
						d="M11.74 7.5L11.39 16.5M6.6 16.5L6.26 7.5M0.75 4.45C1.09 4.39 1.43 4.34 1.77 4.29C2.92 4.11 4.08 3.98 5.25 3.89C7.74 3.7 10.25 3.7 12.75 3.89C13.91 3.98 15.07 4.11 16.22 4.29C16.57 4.34 16.91 4.39 17.25 4.45M16.22 4.29L15.16 18.17C15.11 18.73 14.86 19.26 14.44 19.65C14.02 20.03 13.48 20.25 12.91 20.25L5.08 20.25C4.51 20.25 3.97 20.03 3.55 19.65C3.13 19.26 2.88 18.73 2.84 18.17L1.77 4.29M12.75 3.89L12.75 2.97C12.75 1.79 11.84 0.81 10.66 0.77C9.55 0.74 8.44 0.74 7.34 0.77C6.16 0.81 5.25 1.79 5.25 2.97L5.25 3.89"
						stroke="#F14749"
						stroke-opacity="1.000000"
						stroke-width="1.500000"
						stroke-linejoin="round"
						stroke-linecap="round"
					/>
				</svg>
			</button>
		</div>
	);
};

Selected.propTypes = {
	player: PropTypes.object.isRequired,
	removeSelectedPlayer: PropTypes.func.isRequired
};

export default Selected;
