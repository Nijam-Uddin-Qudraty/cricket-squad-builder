import React, { useState } from "react";
import Player from "./Player";

const Players = ({ players }) => {
	const [available, setAvailable] = useState(true);
	const handleAvailable = () => {
		setAvailable((prev) => !prev);
	};
    const [selected, setSelected] = useState([]);
    const [select, setSelect] = useState(false);
    const handleSelect = (player) => {
        setSelect((prev) => !prev)
        if (select === true) {
            setSelected((prev)=> [...prev,player])
        }
    }
    console.log(selected);
    return (
		<div>
			<div className="mt-10 flex justify-between">
				<h3>Available Players</h3>
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
