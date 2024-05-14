export const readMore = {
  creeper: ``,
  creeper: ``,
  creeper: ``,
  creeper: ``,
  creeper: ``,
  creeper: ``,
  creeper: ``,
  creeper: ``,
  creeper: ``,
  creeper: ``,
}


export const textIntroduction = `
<div>
<h2 style="font-size: 2.5rem; font-weight: 500; margin-bottom: 1rem"># O que é um vírus?</h2>

<p style="font-size: 1.75rem; margin-bottom: 0.5rem">Um vírus de computador é caracterizado por sua capacidade de autorreplicação. A primeira concepção teórica de um computador capaz de se reproduzir foi criada na década de 1940, por John Von Neumann, no livro “Theory of Self-Reproducing Automata” (teoria dos autômatos auto replicantes). Essa teoria evoluiu para formar os vírus de computador na década de 1970, softwares capazes de se multiplicar de modo autônomo para diferentes máquinas. Muitos vírus nesse primeiro momento não eram maliciosos, apenas modificavam alguns comportamentos dos computadores e se espalhavam para outras máquinas. Entretanto, com o passar dos anos a existência de vírus maliciosos tornou-se cada vez mais comum. O que diferencia um vírus de um software comum é sua capacidade de se replicar por diferentes máquinas e afetar seu funcionamento sem o consentimento do usuário.</p>

<p style="font-size: 1.75rem; margin-bottom: 0.5rem">Malwares, ou softwares maliciosos  podem ser categorizados a partir de três características:  se ele possui capacidade de auto replicação; sua taxa de crescimento populacional (que é zero para malwares que não possuem auto replicação); se ele é parasita ou não, isto é, se ele depende da existência de um outro código executável.</p>

<p style="font-size: 1.75rem; margin-bottom: 0.5rem">Os malwares também podem se encaixar em diferentes tipos baseados em seu comportamento. Podemos citar dentre os tipos mais famosos de malwares:</p>

<h2 style="font-size: 2.5rem; font-weight: 500; margin: 1rem 0">## Tipos de malwares</h2>

<ol style="list-style-type: decimal; list-style: auto; margin-left: 2.5rem; display: grid; gap: 1rem">
<li>
Bombas lógicas, que não possuem capacidade de auto replicação e se dividem entre payload - uma ação que será performada pelo software - e um gatilho - um evento que controla quando o payload é executado.
Um exemplo de bomba lógica em pseudocódigo é:
<br/>
<pre style="font-size: 1.5rem; font-family: VT323">
Se data é 13 e data é sexta-feira:
  faça computador_desligar()
fim de condição se
</pre>
</li>

<li>Cavalos de Tróia, ou Trojans, são programas parasitas, também sem capacidade de auto replicação. Eles são softwares que se vendem como um programa benéfico mas executam alguma tarefa maliciosa secretamente. Um exemplo de trojan é um keylogger que se disfarça de software bancário: quando um usuário digita suas informações o programa captura seus dados e os disponibiliza para o dono do trojan.</li>


<li>Backdoors são quaisquer mecanismos que permitem superar uma verificação de segurança. Um exemplo em pseudocódigo seria:
<br/>
<pre style="font-size: 1.5rem; font-family: VT323">
nome = ler_nome()
senha = ler_senha()

#Backdoor
se nome é “usuário_malicioso”:
  retorne acesso_liberado

#Código comum
se nome em verifica_nome(nome) e senha em verifica_senha(senha) são válidos:
  retorne acesso_liberado
senão:
  retorne acesso_negado
</pre>
</li>

<li>Vírus são malwares parasitas, com capacidade de auto replicação e crescimento populacional positivo. Antes de qualquer replicação, o vírus é chamado de germ (germe), enquanto um vírus que não foi capaz de se replicar é um intended (pretendido). Um vírus dormente é aquele que está presente mas não está infectando nenhuma máquina. Isto pode acontecer quando o vírus é desenhado para um sistema operacional específico e está em outro sistema operacional, esperando ser enviado para um alvo adequado. Vírus podem ser transmitidos por disquetes, CDs, DVDs, pendrives ou qualquer objeto transportado por humanos. Um software que se replica por redes não é um vírus, embora seja chamado assim por convenção.</li>

<li>Worms são malwares que se replicam através de redes de computadores, mas não são parasitas. O termo worm foi usado pela primeira vez em um livro de ficção científica chamado The Shockwave Rider. Entretanto, o primeiro worm, chamado Creeper, já existia desde 1971.</li>

<li>Rabbits são malwares parasitas capazes de auto replicação, mas que não possuem crescimento populacional. Existem dois tipos de rabbits, os que se replicam dentro de uma máquina até consumirem todos os recursos da máquina, chamados de fork-bombs, e os que pulam de máquina em máquina dentro de uma rede, deletando seu antecessor antes de ir para a próxima máquina, fazendo com que exista apenas um rabbit na rede em qualquer dado momento.</li>

<li>
Spyware é um software não parasita, sem capacidade de replicação e sem crescimento populacional, confeccionado para espionar os dados de uma máquina específica. Eles podem chegar numa máquina contidos num conjunto de pacotes instalados por um usuário ou explorando vulnerabilidades num browser, instalando o spyware na máquina do usuário assim que ele visita uma página web específica, um método chamado drive-by download.
</li>

<li>
Adwares também são softwares não parasitas, sem capacidade de replicação e sem crescimento populacional. São focados em marketing e utilizam pop-ups e redirecionamentos para redirecionar um usuário para páginas web específicas com a intenção de realizar uma venda. Assim como os spywares, os adwares também coletam informações do usuário.
</li>

<li>
Malwares híbridos ou misturados foram descritos por Ken Thompson ao receber o prêmio Turing pela Association for Computer Machinery, em 1983. Ele preparou um compilador especial para a linguagem de programação “C” com duas propriedades: ao compilar o código-fonte para um login o compilador insere um backdoor e ao compilar o código-fonte do compilador o novo compilador gerado repetiria essas duas propriedades. Esse compilador especial era um híbrido entre cavalo de tróia, backdoor e vírus.
</li>

</ol>
<p style="font-size: 1.75rem; margin: 0.5rem 0">
Nesta linha do tempo, elencamos malwares notáveis que representam a diversidade e a complexidade dos vírus desde a década de 1970 até os anos mais atuais.
</p>

</div>
`
