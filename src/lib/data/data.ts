import creeperImg from "$lib/assets/creeper-virus.png"
import brainImg from "$lib/assets/brain-virus.jpg"
import jerusalemImg from "$lib/assets/jerusalem-virus.jpg"
import bonzibuddyImg from "$lib/assets/bonzibuddy-virus.png"
import iloveyouImg from "$lib/assets/iloveyouvirus.png"
import sqlslammerGif from "$lib/assets/sqlslammer-virus.gif"
import melissaImg from "$lib/assets/melissa-virus.png"
import codeRedImg from "$lib/assets/codered-virus.jpg"
import chernobylImg from "$lib/assets/chernobyl-virus.jpg"

import { readMore } from "$lib/data/terminalsData"

export interface IContent {
  year: number
  title: string
  text: [string, string, string]
  imageUrl: string
  videoYoutube: {code: string, title: string}
  readMore: string
}

// adicionar read more
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
    videoYoutube: {code: "q6t9aNRQBG0", title: "TechHistory: Origins of the Computer Virus - The TWS Channel"},
    readMore: readMore.creeper
  },

  
  {
    year: 1986,
    title: 'Brain',
    text: ["O Brain, criado em 1986 por irmãos paquistaneses, marcou a história como o primeiro vírus de PC a se esconder no sistema e infectar o setor de boot do disco rígido. Escondido nesse local crucial, o vírus era executado automaticamente toda vez que o computador era ligado, infectando outros disquetes que fossem inseridos na máquina.",
"Ao infectar um disquete, o Brain copiava a si mesmo para o setor de boot e exibia uma mensagem na tela alertando o usuário sobre a presença do vírus. Essa mensagem continha inclusive os contatos dos criadores, que alegavam ter criado o vírus apenas para combater a pirataria de software em sua loja de computadores.",
	   "Apesar da intenção inicial de apenas alertar, o Brain se espalhou rapidamente por disquetes, alcançando diversos países e se tornando um marco na história dos vírus de computador. O caso serve como um lembrete da importância da segurança de computadores, dos perigos da pirataria e da necessidade de proteção contra malwares."],
    imageUrl: brainImg,
    videoYoutube: {code: "nuzrxQgvJS0", title: "Virus.Boot.Brain - danooct1"},
    readMore: readMore.brain
  },

  
  {
    year: 1988,
    title: 'Jerusalem',
    text: [`O vírus Jerusalem, também conhecido como “sexta-feira 13", foi um malware que ficou conhecido pela sua capacidade de deletar os programas e os arquivos do sistema em datas específicas, no que o nome sugere, sempre acontecia nas sexta-feiras 13. O vírus Jerusalem foi criado 1987, para celebrar o 40° aniversário da criação do estado judeu em 1988, onde a vespera dessa data seria uma sexta-feira 13. O vírus Jerusalem, se espalhava principalmente através de disquetes, e é considerado como um vírus do tipo “bomba-relógio”, ou seja, enquanto o gatilho (no caso a data sexta-feira 13) não for cumprido, o vírus permanecia hibernando e escondido, onde na determinada condição se ativa, e começava a deletar todos os arquivos.
`, "O vírus Jerusalem, era um malware que funcionava no sistema operacional MS-DOS, que para época era muito comum, principalmente em computadores pessoais, o que o tornava um alvo muito propício. Na época, o compartilhamento de arquivos se dava principalmente por disquetes, já a internet ainda estava engatinhando nessa época, onde o vírus se mostrava muito eficiente em contaminar esses disquetes quando inseridos na máquina, assim passando uma cópia de si mesmo para os outros computadores, e se mantendo em modo de hibernação até que seu gatilho seja ativado.", "O vírus Jerusalem, infectava arquivos do tipo .com ou .exe, se alojando neles, consequentemente aumentando seu tamanho, mas por conta disso eles podiam ficar escondidos, e ser transportados e copiados para outros computadores. O vírus Jerusalem tinha o potencial de deixar o computador inutilizável, pois podia apagar todos os executáveis, registros, processos e arquivos, sendo pessoais ou do sistema, o destruindo completamente, de forma irrecuperável, onde por sua vez era necessário executar a formatação da máquina por conta da perda desses arquivos do sistema."],
    imageUrl: jerusalemImg,
    videoYoutube: {code: "u3k-8kJ54sg", title: "Virus.DOS.Jerusalem - danooct1"},
    readMore: readMore.jerusalem
  },
  
  {
    year: 1997,
    title: "Melissa",
    text: ["elissa foi um malware criado em 1997 por David L. Smith, onde esse malware era do tipo macro (uma série de comando e instruções que você agrupa em um comando para realizar uma determinada tarefa automaticamente), que infecta arquivos do word, onde esses arquivos eram enviados por emails e assim que o destinatário recebe o email e abre o arquivo word, acabavam acionando o macro do word.", "O principal objetivo do malware Melissa era se espalhar rapidamente e causar interrupções nos sistemas de email e de redes de computadores. Onde ao infectar o computador e se replicar enviando códigos infectados dentros de arquivos word por email para os contatos da vítima e assim por diante, onde em meios empresariais poderia causar estragos enormes, inutilizando a cadeia de comunicação por email, sobrecarregar servidores com a quantidade de mensagens infectadas, onde por muitas vezes resultaram em interrupção no envio e recebimentos de emails, impactando diretamente na receita das empresas naquele dia.", "Seu nome foi inspirado em um clube adulto em Miami, em particular pelo apelido de uma dançarina do clube. O vírus conhecido como W97M/Melissa causou danos nas casa dos milhões, onde chegou a atingir até mesmo empresas governamentais de todo nível, desde agências governamentais locais até mundial."],
    imageUrl: melissaImg,
    videoYoutube: {code: "", title: "colocar video"},
    readMore: readMore.melissa
  },
  
  { year: 1998, title: "Chernobyl", text: ["O Malware Chernobyl, também conhecido como CIH ou até mesmo como vírus Spacefiller, foi um malware com um alto potencial destrutivo, onde tinha uma grande capacidade de sobrescrever e apagar dados do sistema no HD e até mesmo da BIOS, tornando o computador completamente inoperável. O vírus não é famoso por ter capacidade de destruir o hardware da máquina, mas ter o sistema da BIOS sobrescrita ou até mesmo apagada poderia gerar muita dor de cabeça nas pessoas, principalmente em empresas. O nome do vírus se deve a data de ativação dele, onde ele foi identificado em 26 de abril de 1999, que foi o mesmo dia e mês que o fatídico acidente, que ocorreu 13 anos antes na usina nuclear de Chernobyl.", "Assim como os outros malwares da época, o vírus Chernobyl se propagava através da utilização de disquetes em computadores infectados, ou por meio de executáveis baixados pela internet. Onde os sistemas operacionais alvos eram os Windows 95/98, outros sistemas operacionais da época não eram tanto o foco por questões de compatibilidade.", "Embora o vírus Chernobyl seja conhecido pelo seu ataque em 26 de abril de 1999, ele tinha sido identificado em um computador do estudante Chen Ing-Hau em 1998, um estudante de engenharia de computação em Taiwan, mas essa versão do vírus não tinha sido capaz de infectar uma grande quantidade de pessoas, onde ficou apenas em Taiwan. Mas em 26 de abril de 1999 o Chernobyl foi novamente disseminado, porém dessa vez com melhorias no algoritmo, que levou o malware a ser espalhado por todo o mundo onde em uma semana já estava em países como Austrália, Israel e Reino Unido, também há relatos que esse vírus alcançou EUA, Rússia e outros países. "], imageUrl: chernobylImg, videoYoutube: {code: "RrnWFAx5vJg", title: "Virus.Win9x.CIH / Chernobyl - danooct1"} },
  
  {
    year: 1999,
    title: 'Bonzibuddy',
    text: ["O BonziBuddy era um software para desktop Windows criado no final dos anos 90. Disfarçado como um assistente virtual amigável, ele oferecia recursos como gerenciar downloads, compartilhar curiosidades e até cantar músicas. No entanto, por trás da fachada inocente, o BonziBuddy escondia um segredo obscuro: ele era um spyware e adware. O programa coletava informações do usuário sem consentimento, como sites visitados e dados de navegação, e o bombardeava com propagandas indesejadas. Essa conduta maliciosa resultou em processos judiciais contra a empresa desenvolvedora e na descontinuação do BonziBuddy em 2004.", "Sob a superfície amigável do BonziBuddy, um segredo obscuro se escondia. O software funcionava como spyware e adware, coletando dados do usuário sem o seu consentimento. Ele monitorava seus sites visitados, histórico de navegação e até mesmo suas conversas online. As informações coletadas eram então vendidas para empresas de publicidade, que as utilizavam para direcionar anúncios personalizados para o usuário. O BonziBuddy não se contentou apenas em espionar seus usuários. Ele também os bombardeava com propagandas indesejadas. Pop-ups constantes interrompiam o trabalho e a navegação, tornando a experiência frustrante e irritante.", "O software se tornava cada vez mais intrusivo, transformando o que deveria ser um assistente útil em um verdadeiro pesadelo digital. O comportamento malicioso do BonziBuddy não passou despercebido. Em 2002, o programa foi rotulado como spyware por diversas organizações de segurança cibernética. A partir desse momento, a reputação do BonziBuddy começou a desmoronar. "],
    imageUrl: bonzibuddyImg,
    videoYoutube: {code: "nCGD92DDsvc", title: "BonziBuddy | The Internet Spyware That Plagued Windows - NationSquid"},
    readMore: readMore.bonzibuddy
  },



  { year: 2000, title: "ILOVEYOU", text: [`Em 2000, o romance virtual se tornou um pesadelo digital com o "I Love You", um vírus disfarçado em email que se espalhou como fogo selvagem, causando caos em computadores pessoais e corporativos. Escondido em um anexo intitulado "LOVE-LETTER-FOR-YOU.txt.vbs", o vírus explorava uma falha no Microsoft Outlook para se replicar e apagar arquivos importantes. O impacto do Love Bug foi global e devastador. Empresas como o Departamento de Defesa dos Estados Unidos, o Parlamento Britânico e a Microsoft foram afetadas, com prejuízos estimados em bilhões de dólares. O caso expôs a vulnerabilidade dos sistemas de email e a importância de softwares atualizados e cautela ao abrir anexos.`, "Ao abrir o anexo infectado, o vírus explorava uma vulnerabilidade no Microsoft Outlook para se auto-replicar e enviar cópias para todos os contatos da lista de endereços do usuário. Mas o Love Bug não se limitava a espalhar spam. Ele também causava danos reais, apagando arquivos de imagem e documentos importantes, deixando um rastro de destruição em seu caminho.", "O Love Bug foi um divisor de águas na história da segurança cibernética. O caso expôs a vulnerabilidade dos sistemas de email e a importância de manter softwares atualizados, ter cautela ao abrir anexos e utilizar ferramentas de segurança confiáveis. O vírus também acelerou o desenvolvimento de novas tecnologias de segurança e aumentou a conscientização sobre os riscos do mundo digital."], imageUrl: iloveyouImg, videoYoutube: {code: "Ij8HovkD6xY", title: "Vírus I love you paralisa sistemas de informática em todo o mundo"} },

  { year: 2001, title: "Code_Red", text: ["Code Red foi um malware do tipo worm, ou seja, se replica e espalha pelos computadores conectados, seja fisicamente ou pela internet. O vírus Code Red era um vírus que rodava em máquinas com sistema operacional windows, e foi identificado em julho de 2001, onde esse malware explorava uma falha de segurança no Microsoft Internet Information Services (IIS), chamado de “buffer overflow”, onde por meio dessa brecha, era inserido o código malicioso que faria o ataque.", 'Code Red recebeu esse nome devido ao nome da bebida “Mountain dew Code Red”, que era a bebida que estavam tomando no momento em que o malware foi identificado. Após os computadores serem contaminados, eles lançaram um ataque de DDoS (ataque distribuído de negação de serviço) no site da Casa Branca, o que resultou na inutilização do site por um tempo.', "O Code Red tinha como objetivo negar a utilização do site da Casa Branca, fazendo isso com um DoS( ataque de negação de serviço), mas todos os computadores faziam isso ao mesmo tempo, atacando o site da Casa Branca em massa, sendo o que categorizamos como DDoS (ataque distribuído de negação de serviço), tornando o ataque exponencialmente mais poderoso, e difícil de se interromper, já que não é uma máquina, mas milhares de máquinas fazendo as requisições ao mesmo tempo."], imageUrl: codeRedImg, videoYoutube: {code: "iu48QBJP_p0", title: "CodeRed Windows Worm - danooct1"} },
  
  { year: 2003, title: "SQL_Slammer", text: ["O SQL Slammer, também conhecido como Sapphire, foi um worm de computador que se propagou rapidamente pela internet em 25 de janeiro de 2003, infectando cerca de 75 mil computadores em apenas 10 minutos. Ele explorava uma vulnerabilidade no software Microsoft SQL Server, permitindo que se replicasse automaticamente para outros computadores. O worm causou um grande impacto na internet, entupindo os canais de comunicação e causando lentidão ou indisponibilidade de serviços online. Países como Estados Unidos e Coréia do Sul foram os mais afetados.", "Apesar de sua simplicidade, o SQL Slammer causou um grande transtorno e prejuízos financeiros para empresas e governos. O ataque demonstrou o potencial de worms rápidos como armas cibernéticas. o gráfico evidencia o impacto devastador do SQL Slammer Worm na internet. O aumento maciço no tráfego de rede sobrecarregou servidores e redes, levando à interrupção da conectividade para muitos usuários. O ataque também demonstrou o potencial de worms como armas cibernéticas para causar danos em larga escala em um curto período de tempo. (tem que deixar essa parte com o grafico “sqlslammeruso”", "O SQL Slammer não era um malware complexo. Seu código era extremamente compacto e eficiente, permitindo uma rápida propagação. A cada 8,5 segundos, o número de vítimas dobrava, transformando o worm em um símbolo da era digital, onde a informação se propaga a velocidades vertiginosas. Ao contrário de outros ataques, o SQL Slammer não visava apagar dados ou causar danos diretos aos computadores. Seu objetivo era se replicar o mais rápido possível, utilizando um código extremamente compacto e facilmente replicável. Essa estratégia, embora simples, resultou em um ataque devastador, impactando principalmente países como Estados Unidos e Coreia do Sul."], imageUrl: sqlslammerGif, videoYoutube: {code: "QyWvtre1FDM", title: "How to detect a sql slammer - Colasoft"} },

  // { year: 2011, title: "", text: ["", "", ""], imageUrl: "", videoYoutube: {code: "q6t9aNRQBG0", title: "teste"} },

]
