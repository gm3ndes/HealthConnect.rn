Aplicativo de Cadastro de Serviços Médicos
Este é um protótipo de um aplicativo para o cadastro, modificação e listagem de serviços médicos. O objetivo do aplicativo é permitir que os usuários cadastrem serviços clínicos, visualizem os serviços cadastrados e realizem edições conforme necessário.
Funcionalidades
Cadastro de Serviços Médicos: Os usuários podem cadastrar novos serviços médicos, fornecendo informações como nome do serviço, descrição e preço.
Listagem de Serviços: Os serviços cadastrados são exibidos em uma lista, permitindo que os usuários visualizem facilmente as informações de cada serviço.
Edição de Serviços: Os usuários podem editar os detalhes dos serviços já cadastrados.
Exclusão de Serviços: Os usuários têm a opção de excluir serviços que não são mais necessários.
Tecnologias Utilizadas
React Native: Para desenvolvimento de aplicativos móveis multiplataforma.
Expo: Para facilitar o desenvolvimento e a execução do aplicativo em dispositivos móveis.
AsyncStorage: Para armazenamento local de dados, permitindo que os serviços cadastrados sejam salvos e recuperados mesmo após o fechamento do aplicativo.
Estrutura do Projeto
text
/app
├── Registrarservico.tsx   # Componente para cadastro e edição de serviços médicos
├── home.tsx               # Componente para pesquisa de serviços médicos
├── Salvardados.tsx                   # Funções para salvar e recuperar dados do AsyncStorage
└── index.tsx                     # Componente que inicia tudo

Como Executar o Projeto
Pré-requisitos:
Certifique-se de ter o Node.js instalado em sua máquina.
Instale o Expo CLI globalmente usando o comando:
bash
npm install -g expo-cli

Clone o Repositório:
bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio

Instale as Dependências:
bash
npm install

Inicie o Aplicativo:
bash
expo start

Abra o Aplicativo:
Use um emulador ou escaneie o código QR com o aplicativo Expo Go no seu dispositivo móvel.
Uso do Aplicativo
Cadastro de Serviços:
Preencha os campos "Nome do Serviço", "Descrição" e "Preço".
Clique no botão "Cadastrar Serviço" para salvar o serviço.
Listagem de Serviços:
Os serviços cadastrados serão exibidos em uma lista abaixo do formulário de cadastro.
Cada item da lista mostrará o nome, descrição e preço do serviço.
Edição de Serviços:
Toque em um serviço na lista para editar suas informações.
Faça as alterações necessárias e clique em "Atualizar Serviço".
Exclusão de Serviços:
Clique no botão "Excluir" ao lado de um serviço na lista para removê-lo.
Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.
Licença
Este projeto está licenciado sob a MIT License.
Esse README fornece uma visão geral clara do aplicativo, suas funcionalidades e como executá-lo. Sinta-se à vontade para personalizar as seções conforme necessário!