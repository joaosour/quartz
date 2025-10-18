---
{"publish":true,"created":"2025-10-16T23:36:30.605-03:00","modified":"2025-10-17T21:14:58.726-03:00","cssclasses":""}
---

✅ Download e Atualização de Rotinas
✅ Atualização de Tabelas, Procedures etc

---
### IMPORTANTE
1. Nenhum usuário logado;
2. Fora do horário de expediente;
3. Parar serviços da Máxima Tech e outros que dependem do winthor;
---
### CCW
- [ ] Baixar rotinas
- [ ] Colar rotinas no P
- [ ] Pegar o arquivo da PCINF000.EXE (pasta MOD-000) e PCINFTAB.PC (MOD-005) e substituir na pasta geral do P:/ (lembrando de renomear os arquivos antigos para "nomeDoArquivo.NumeroDaVersaoAntiga.ExtensaoDoArquivo" para deixar salvo por segurança.
- [ ] Abrir o Winthor e verificar se aparece a versão nova, bem como para a 560 também. 
- [ ] **Atualizar Tabelas, Dicionário de Dados, Procedures**
### Atualizar tabelas na 560 nas seguintes guias, usando a opção "Selecionar todas" (cerca de 30min):
- [ ] Criação/Alt de tabelas e campos.
- [ ] Criação/Alt de índices.
- [ ] Menu/Perm/Fórmulas.
- [ ] Controle de Atualizações > reprocessar.
### Atualizar Dicionário de Dados: (não é necessário fazer mais nada na 560, só seguir para as demais - 300, 2500 etc)
- [ ] Rotina 560
- [ ] Dicionário de Dados > Criar Novo.
### Atualizar Procedures 
- [x] **500**
	- [ ] Essenciais
	- [ ] Functions
	- [ ] Acessórios
	- [ ] Procedures
	- [ ] Triggers
	- [ ] Views

- [x] **300**
	- [ ] Todas as abas
	- [ ] Recompilar

- [x] **2500**
	- [ ] Todas as abas

- [x] **1700**
	- [ ] Todas as abas (t)

- [x] **1100**
	- [ ] Todas as abas

- [x] **1400**
	- [ ] Todas as abas (marcar Dropar objetivos)
	- [ ] Obs: pode dar erro na PCFISCAL e FWPCFISCAL (ou algo assim).Ambas devem estar na mesma versão para funcionar. Primeiro atualiza fiscal, depois FWPC, qualquer coisa atualizar a PARAMFILIAL (ou algo assim) antes dessas duas. No passado deu erro ao atualizar a FWPC porque faltavam atualizar a PCPARAMFILIAL.

- [x] **1460** (descontinuada, migrada para o WTA, 814)
	- [ ] Todas as abas

- [x] [Acessar WTA (clique aqui)](http://192.168.1.202:8080/portal/#/rotina)
	- [ ] Pesquisar 814 e atualizar tudo (em caso de falhas, conferir se a maioria atualizou apenas, é o que importa)
	- [ ] Pesquisar 801 e atualizar serviços WEB.
	- [ ] Verificar se aparece a loja WINT no logon do portal

- [ ] **Atualizar Servidor NF-e**
	- [ ] **Desabilitar serviço PC Server** 
	- [ ] **Criar ponto de restauração windows**
	- [ ] **[http://servicos.pcinformatica.com.br/instaladornfe_v40/](http://servicos.pcinformatica.com.br/instaladornfe_v40/)**

- [ ] **Observação: algumas atualizações de dependências, solicitadas pelo Dock fiscal, darão erros no WTA. Simplesmente atualize todas as dependências que aparecerem no DOC fiscal, deixe as que deram algum erro para atualizar por último, pois algumas dependências só atualizam depois de todas as possíveis dependências corretas serem atualizadas.**

- [ ] **IMPORTANTE:** Após atualizar, consultar se há atualizações do WTA na 801 (como núcleo do WTA por exemplo). Após atualizar tudo, consultar atualizações de estoque e financeiro principalmente na 814:
	- [ ] PKG_ANALISAR_ESTOQUE
	- [ ] PKG_LOG_ESTOQUE
	- [x] ATUALIZACAO_DIARIA

- [ ] **BÁSICO, MAS IMPORTANTE:** Confirmar se a data e hora do WTA estão corretas, do contrário impacta diretamente o sucesso da consolidação automática da 820.
- [ ] Reativar o parâmetro de **Enviar e-mail automático** dentro de "Configurações da rotina" **em todo usuário do faturamento**, pois a atualização sempre desmarca fazendo com que o XML não vá automaticamente para o cliente.