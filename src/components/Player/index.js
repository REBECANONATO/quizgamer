import React, { useRef, useState } from "react";
import styled from "styled-components";
import Song from "../../../assets/audio/music.mp3";
import { PlayFill } from "@styled-icons/bootstrap/PlayFill";
import { PauseFill } from "@styled-icons/bootstrap/PauseFill";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	position: fixed;
	bottom: 30px;
	right: 30px;
	& button {
		width: 50px;
		height: 50px;
		border-radius: 50px;
		background-color: #dfc8a8;
		border: 0;
		outline: none;
	}
`;

function Player() {
	const audioTrack = useRef();
	const [song, setSong] = useState(true);

	function handlePlay() {
		setSong(false);
		audioTrack.current.play();
	}

	function handleSongPause() {
		audioTrack.current.pause();
		setSong(true);
	}

	return (
		<Container>
			<audio ref={audioTrack} src={Song} />
			{song && (
				<button type="button" onClick={handlePlay}>
					<PlayFill size="24" />
				</button>
			)}

			{!song && (
				<button type="button" onClick={handleSongPause}>
					<PauseFill size="24" />
				</button>
			)}
		</Container>
    );
}

export default Player;
//comentario