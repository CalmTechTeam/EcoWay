# EcoWay — Cidade mais fresca para todos

## Sobre o projeto
O **EcoWay** é uma plataforma desenvolvida com o objetivo de enfrentar os impactos do calor urbano e incentivar práticas sustentáveis nas cidades.

A proposta é ajudar a população a identificar regiões com temperaturas elevadas, encontrar rotas mais frescas e conhecer pontos de hidratação e descanso, além de incentivar a participação cidadã na preservação ambiental.

O projeto busca contribuir para a construção de cidades mais verdes, acessíveis e confortáveis para todos.

## Objetivos
- Reduzir a exposição da população ao calor intenso.
- Promover deslocamentos por rotas com mais árvores e sombras.
- Incentivar a arborização e a preservação das áreas verdes.
- Facilitar a identificação de pontos de hidratação e descanso.
- Estimular a participação da comunidade em melhorias ambientais.
- Promover o bem-estar de pessoas e animais durante períodos de calor.

## Funcionalidades

### Monitoramento ambiental e mapa
- Visualização demonstrativa de regiões com diferentes níveis de calor.
- Simulação de trajetos e identificação de caminhos mais frescos.
- Monitoramento de temperatura, umidade e luminosidade.
- Indicação de diferentes condições ambientais.

### Sustentabilidade e participação cidadã
- Apresentação de desafios relacionados aos problemas ambientais urbanos.
- Incentivo à arborização e à preservação de áreas verdes.
- Divulgação de iniciativas para melhorar os espaços urbanos.
- Estímulo à participação da população.

### Quiz de impacto ambiental
- Questionário interativo sobre hábitos sustentáveis.
- Avaliação de práticas relacionadas à arborização, descarte de resíduos, consumo de água e mobilidade.
- Apresentação de resultados gerais e por categoria.

### Público beneficiado
A plataforma considera diferentes grupos da população:
- Estudantes.
- Trabalhadores.
- Pessoas idosas.
- Pedestres.
- Tutores de animais.

## Tecnologias utilizadas
| Tecnologia | Aplicação |
|---|---|
| HTML5 | Estruturação do conteúdo e das páginas. |
| CSS3 | Estilização, layouts, responsividade e efeitos visuais. |
| JavaScript | Interatividade e funcionalidades da plataforma. |
| C++ | Programação do Arduino e controle dos sensores. |
| Arduino Uno | Monitoramento das condições ambientais. |
| Figma | Prototipação e desenvolvimento visual da interface. |

## Monitoramento com Arduino
O projeto utiliza um Arduino Uno integrado a sensores ambientais para demonstrar o monitoramento das condições do ambiente.

Os componentes utilizados incluem:

- **DHT22:** realiza medições de temperatura e umidade.
- **LDR:** identifica os níveis de luminosidade do ambiente.
- **Display LCD I2C:** apresenta informações das medições.
- **LEDs indicadores:** representam os diferentes estados do monitoramento.
- **EEPROM:** permite o armazenamento de registros.
- **Sensor de aproximação:** simula a detecção da presença de uma pessoa próxima ao dispositivo.
- **Potenciômetro:** simula diferentes níveis de intensidade de raios UV, permitindo representar variações de exposição solar durante a demonstração.

O Arduino recebe as informações dos sensores e apresenta os resultados no display LCD. A temperatura e a umidade são utilizadas para determinar o estado geral do ambiente, enquanto o LDR identifica separadamente a luminosidade.

## Observações
O mapa, os trajetos e os dados apresentados no monitoramento possuem caráter demonstrativo. A plataforma apresenta uma simulação de como o EcoWay poderia funcionar em uma aplicação real.

As informações ambientais e os modelos matemáticos não substituem medições oficiais nem orientações de profissionais de saúde.

## Links do projeto
- **GitHub:** https://github.com/CalmTechTeam/EcoWay
- **GitHub Pages:** https://calmtechteam.github.io/EcoWay/
- **Protótipo Figma:** https://www.figma.com/design/eb8IvAwl54ELKeyeElbxIX/EcoWay
- **Simulação Arduino (Wokwi):** https://wokwi.com/projects/480306692485186561

## Equipe
Projeto desenvolvido por estudantes do curso de Engenharia de Software da FIAP.

- Amanda Souza de Barros
- Luiza de Freitas Benevides
- Mariana do Nascimento
- Caio Fernando de Deus Gomes
- Lirity Ribeiro de Paiva

---