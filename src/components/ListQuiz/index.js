import styled from "styled-components";
import React from "react";


export const List = styled.ul`
	max-height: 100px;
	overflow-y: auto;
	::-webkit-scrollbar {
		background-color: #5a6191;
		width: 8px;
        border-radius: 50px;
	}
	::-webkit-scrollbar-thumb {
		background-image: linear-gradient(
			180deg,
			#6776db,
			#fff
		);
		backdrop-filter: blur(4px);
		border-radius: 50px;
	}
	& li:not(:last-child) {
		margin-bottom: 8px;
	}
	& a {
		display: block;
		width: 98%;
		height: 32px;
		line-height: 36px;
		padding: 0 15px;
		border-radius: 5px;
		color: #fff;
		background-color: #4c537f;
		text-decoration: none;
		&:hover {
			opacity: 0.8;
		}
	}
`;


function ListQuiz() {
	return (
		<List>
			<li>
				<a href="https://quiz-cavaleiro-zodiaco.vercel.app/">Cavaleiros Do Zodíaco</a>
			</li>
			<li>
				<a href="https://one-piece-quiz.cassiofb-dev.vercel.app/quiz?name=asdadad">One Piece</a>
			</li>
			<li>
				<a href="https://brunoquiz.brunosaibert.vercel.app/">Harry Potter</a>
			</li>
			<li>
				<a href="https://quiz-imersao-react.vercel.app/">Data Science</a>
			</li>
			<li>
				<a href="https://thelastofus-quiz.rhafaelcosta.vercel.app/">The Last of US</a>
			</li>
            <li>
                <a href="https://imersao-react-nextjs.fallying.vercel.app/">fetich por temas</a>
            </li>
            <li>
                <a href="https://aluraquiz-coffee.leonardot07.vercel.app/">Coffe</a>
            </li>
            <li>
                <a href="https://aluraquiz-vacinacao.vercel.app/">Vacinação Covid-19 Brasil</a>
            </li>
            <li>
                <a href="https://alura-quiz-basquete.hermeshcg.vercel.app/">Basquete</a>
            </li>
		</List>
	);
}

export default ListQuiz;


