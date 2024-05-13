import creeperImg from "$lib/assets/creeper-virus.png"
import brainImg from "$lib/assets/brain-virus.jpg"

export interface IContent {
  year: number
  title: string
  text: [string, string, string]
  imageUrl: string
  videoYoutube: {code: string, title: string}
}

export const contents: IContent[] = [
  {
    year: 1971,
    title: 'Creeper',
    text: [
      "O Creeper, criado em 1971 por Bob Thomas, é considerado por muitos o primeiro vírus de computador da história. Era um programa experimental, não malicioso, projetado para testar a capacidade de um programa se replicar automaticamente.",
      "O Creeper foi um marco fundamental na história da computação, demonstrando o potencial de softwares autopropagáveis e impulsionando o desenvolvimento de medidas de segurança para combater as ameaças cibernéticas. Sua influência na indústria de segurança da informação é inegável, tornando-o um símbolo da constante batalha contra os desafios da segurança digital.",
      `O Creeper se espalhava pela ARPANET, a rede precursora da internet, infectando computadores através de disquetes;
Ao infectar um computador, o Creeper exibia a mensagem: 'Eu sou o Creeper, pegue-me se puder!' ("I'm the Creeper, catch me if you can!"); Em cada novo computador infectado, o Creeper tentava se remover do host anterior; Apesar de não causar danos, o Creeper demonstrava a viabilidade de programas autopropagáveis e a necessidade de medidas de segurança em redes de computadores.`
    ],
    imageUrl: creeperImg,
    videoYoutube: {code: "q6t9aNRQBG0", title: "TechHistory: Origins of the Computer Virus - The TWS Channel"}
  },
  { year: 1986, title: 'Brain', text: ["O Brain, criado em 1986 por irmãos paquistaneses, marcou a história como o primeiro vírus de PC a se esconder no sistema e infectar o setor de boot do disco rígido. Escondido nesse local crucial, o vírus era executado automaticamente toda vez que o computador era ligado, infectando outros disquetes que fossem inseridos na máquina.", "Ao infectar um disquete, o Brain copiava a si mesmo para o setor de boot e exibia uma mensagem na tela alertando o usuário sobre a presença do vírus. Essa mensagem continha inclusive os contatos dos criadores, que alegavam ter criado o vírus apenas para combater a pirataria de software em sua loja de computadores.", "Apesar da intenção inicial de apenas alertar, o Brain se espalhou rapidamente por disquetes, alcançando diversos países e se tornando um marco na história dos vírus de computador. O caso serve como um lembrete da importância da segurança de computadores, dos perigos da pirataria e da necessidade de proteção contra malwares."], imageUrl: brainImg, videoYoutube: {code: "nuzrxQgvJS0", title: "Virus.Boot.Brain - danooct1"} },
  { year: 1980, title: 'Virus', text: ["", "", ""], imageUrl: "", videoYoutube: {code: "q6t9aNRQBG0", title: "teste"} },
  { year: 2001, title: 'Malware', text: ["", "", ""], imageUrl: "", videoYoutube: {code: "q6t9aNRQBG0", title: "teste"} },
  { year: 2007, title: 'Creeper', text: ["", "", ""], imageUrl: "", videoYoutube: {code: "q6t9aNRQBG0", title: "teste"} },
  { year: 2011, title: 'Creeper', text: ["", "", ""], imageUrl: "", videoYoutube: {code: "q6t9aNRQBG0", title: "teste"} },

]
