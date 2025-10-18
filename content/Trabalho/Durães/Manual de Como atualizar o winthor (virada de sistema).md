---
{"publish":true,"created":"2025-10-16T23:36:30.605-03:00","modified":"2025-10-18T08:30:15.054-03:00","cssclasses":""}
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

### NÃO É MAIS NECESSÁRIO RODAR NADA NA 560 DO WINTHOR (INFORMAÇÃO DO PLANTÃO NA ÚLTIMA ATUALIZAÇÃO DA 35 para 36 em 17/10/2025), SÓ ATUALIZAR AS DEPENDÊNCIAS QUE AS ROTINAS PEDIREM DO USUÁRIO WNTHOR.
#### ~~Atualizar tabelas na 560 nas seguintes guias, usando a opção "Selecionar todas" (cerca de 30min-1h20min):~~

- [ ] Criação/Alt de tabelas e campos.
- [ ] Criação/Alt de índices.
- [ ] Menu/Perm/Fórmulas.
- [ ] Controle de Atualizações > reprocessar.
#### ~~Atualizar Dicionário de Dados: (não é necessário fazer mais nada na 560, só seguir para as demais - 300, 2500 etc)~~
- [ ] Rotina 560
- [ ] Dicionário de Dados > Criar Novo.
### Atualizar Procedures 
- [ ] **500**
	- [ ] Essenciais
	- [ ] Functions
	- [ ] Acessórios
	- [ ] Procedures
	- [ ] Triggers
	- [ ] Views

- [ ] **300**
	- [ ] Todas as abas
	- [ ] Recompilar

- [ ] **2500**
	- [ ] Todas as abas

- [ ] **1700**
	- [ ] Todas as abas (t)

- [ ] **1100**
	- [ ] Todas as abas

- [ ] **1400**
	- [ ] Todas as abas (marcar Dropar objetivos)
	- [ ] Obs: pode dar erro na PCFISCAL e FWPCFISCAL (ou algo assim).Ambas devem estar na mesma versão para funcionar. Primeiro atualiza fiscal, depois FWPC, qualquer coisa atualizar a PARAMFILIAL (ou algo assim) antes dessas duas. No passado deu erro ao atualizar a FWPC porque faltavam atualizar a PCPARAMFILIAL.

- [ ] **1460** (descontinuada, migrada para o WTA, 814)
	- [ ] Todas as abas

### Ações no WTA
- [ ] [Acessar WTA (clique aqui)](http://192.168.1.202:8080/portal/#/rotina)
	- [ ] Verificar se aparece a loja WINT no logon do portal;
	- [ ] Pesquisar 801 e atualizar tudo na aba "Atualizações"; em seguida:
	- [ ] Pesquisar 814 e atualizar todas os principais objetos (exemplo: ligados ao financeiro, estoque, notas, faturamento). Principalmente os objetos:
		`PKG_ANALISAR_ESTOQUE / PKG_LOG_ESTOQUE / ATUALIZACAO_DIARIA`

- [ ] **Atualizar Servidor NF-e**
	- [ ] **Desabilitar serviço PC Server** 
	- [ ] **Criar ponto de restauração windows**
	- [ ] **[http://servicos.pcinformatica.com.br/instaladornfe_v40/](http://servicos.pcinformatica.com.br/instaladornfe_v40/)**

- [ ] **Observação: algumas atualizações de dependências, solicitadas pelo Dock fiscal, darão erros no WTA. Simplesmente atualize todas as dependências que aparecerem no DOC fiscal, deixe as que deram algum erro para atualizar por último, pois algumas dependências só atualizam depois de todas as possíveis dependências corretas serem atualizadas.**

- [ ] **IMPORTANTE:** Após atualizar, consultar se há atualizações do WTA na 801 (como núcleo do WTA por exemplo). Após atualizar tudo, consultar atualizações de estoque e financeiro principalmente na 814:
	 

- [ ] **BÁSICO, MAS IMPORTANTE:** Confirmar se a data e hora do WTA estão corretas, do contrário impacta diretamente o sucesso da consolidação automática da 820.
- [ ] Reativar o parâmetro de **Enviar e-mail automático** dentro de "Configurações da rotina" **em todo usuário do faturamento**, pois a atualização sempre desmarca fazendo com que o XML não vá automaticamente para o cliente.