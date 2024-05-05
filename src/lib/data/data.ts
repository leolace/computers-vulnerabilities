export interface IContent {
	year: number
	title: string
	text: [string, string, string]
	imageUrl: string
	videoYoutubeCode: [string, string]
}

export const contents: IContent[] = [
	{
		year: 1971,
		title: 'Creeper',
		text: [
			"O Creeper, criado em 1971 por Bob Thomas, é considerado por muitos o primeiro vírus de computador da história. Era um programa experimental, não malicioso, projetado para testar a capacidade de um programa se replicar automaticamente.",
		  "O Creeper foi um marco fundamental na história da computação, demonstrando o potencial de softwares autopropagáveis e impulsionando o desenvolvimento de medidas de segurança para combater as ameaças cibernéticas. Sua influência na indústria de segurança da informação é inegável, tornando-o um símbolo da constante batalha contra os desafios da segurança digital.",
		  `O Creeper se espalhava pela ARPANET, a rede precursora da internet, infectando computadores através de disquetes;
Ao infectar um computador, o Creeper exibia a mensagem: 'Eu sou o Creeper, pegue-me se puder!' ("I'm the Creeper, catch me if you can!"); Em cada novo computador infectado, o Creeper tentava se remover do host anterior; Apesar de não c
ausar danos, o Creeper demonstrava a viabilidade de programas autopropagáveis e a necessidade de medidas de segurança em redes de computadores.`
		],
		imageUrl: "https://beaver.my/wp-content/uploads/2023/04/Creeper-Virus-Catch-Me-If-You-Can-min-1024x536.png",
	  videoYoutubeCode: ["Ml4bgx8ZN9Q", "q6t9aNRQBG0"]
	},
	{ year: 1976, title: 'Creeper', text: ["", "", ""], imageUrl: "", videoYoutubeCode: ["", ""] },
	{ year: 1980, title: 'Creeper', text: ["", "", ""], imageUrl: "", videoYoutubeCode: ["", ""] },
	{ year: 2001, title: 'Creeper', text: ["", "", ""], imageUrl: "", videoYoutubeCode: ["", ""] },
	{ year: 2007, title: 'Creeper', text: ["", "", ""], imageUrl: "", videoYoutubeCode: ["", ""] },
	{ year: 2011, title: 'Creeper', text: ["", "", ""], imageUrl: "", videoYoutubeCode: ["", ""] },

]
