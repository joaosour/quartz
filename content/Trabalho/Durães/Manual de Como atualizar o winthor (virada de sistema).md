---
{"publish":true,"permalink":"/Trabalho/Durães/Manual de Como atualizar o winthor (virada de sistema).md","title":"Manual de como atualizar o winthor","created":"2025-10-16T23:36:30.605-03:00","modified":"2025-12-12T10:32:27.820-03:00","cssclasses":""}
---

✅ Download e Atualização de Rotinas
✅ Atualização de Tabelas, Procedures etc.

---
### IMPORTANTE
1. Nenhum usuário logado;
2. Fora do horário de expediente;
3. Parar serviços da Máxima Tech e outros que dependem do winthor:
	1. [ ] Pausar o extrator/servidor máxima no [portal máxima](https://central.solucoesmaxima.com.br/#/dashboard) (talvez seja necessário acessar via aba "Início" do outro [portal máxima](https://app.solucoesmaxima.com.br/login)).
	2. [ ] Desligar o servidor do BI (IP final 98 no Team Viewer);
	3. [ ] Desligar os servidores TS (via área de trabalho remota, IP final 3 e final 2).
	4. [ ] Desligar o DOCFISCAL (IP final 30 no Team Viewer);
	5. [ ] Desligar o servidor VMHOST (IP final 101 no Team Viewer) (que contem o extrator da Sellers);
	6. [ ] Desligar o servidor VMSERVER (IP final 130 no Team Viewer)
---
### CCW
- [ ] ANTES DE QUALQUER COISA, FAZER O BACKUP DE TODAS AS PASTAS "MOD..." do disco P:/ para outra máquina por segurança. Depois:
- [ ] Acessar o CCW e ir na opção ***Árvore de rotinas*** ([link](https://centraldecontrole.pcinformatica.com.br/#/cliente/arvore-rotinas))
	1. Em ***Aplicar para seleção***, marque ***Desatualizadas para última existente***
		1. (isso se em "versão corrente" houver somente rotinas do módulo novo que deseja atualizar: exemplo, se estiver na 37 e quiser ir para 38, em "versão corrente" deve haver somente versões no máxima 38, não 39);
	2. Clicar na ***checkbox*** que marca todas
	3. Clicando no ***ícone de download***;
	4. Selecionar a opção ***Transferir/Download*** (**não é** para selecionar "instalar") nesse caso. 
	5. Todas as rotinas serão baixadas na pasta "**baixadas**" do disco **P:/** do winthor, nas suas respectivas pastas "MOD"
- [ ] Colar rotinas no **P:/** também em seus respectivos "MOD's". *(Exemplo: se dentro de BAIXADAS tem MOD-14 e o arquivo PCSIS1464, você deve pegar esse arquivo de rotina >> copiar >> colar dentro da pasta MOD-14 que está na raiz do "P:/".)*
- [ ] Pegar o arquivo da PCINF000.EXE (pasta MOD-000) e PCINFTAB.PC (MOD-005) e substituir na pasta geral do P:/ (lembrando de renomear os arquivos antigos para "nomeDoArquivo.NumeroDaVersaoAntiga.ExtensaoDoArquivo" para deixar salvo por segurança.
- [ ] Abrir o Winthor e verificar se aparece a versão nova, bem como para a 560 também. 
- [ ] **Atualizar Tabelas, Dicionário de Dados, Procedures**

### 560 (descontinuada segundo suporte)
> [!warning] NÃO É MAIS NECESSÁRIO RODAR NADA NA 560 DO WINTHOR (INFORMAÇÃO DO PLANTÃO NA ÚLTIMA ATUALIZAÇÃO DA 35 para 36 em 17/10/2025), SÓ ATUALIZAR AS DEPENDÊNCIAS QUE AS ROTINAS PEDIREM DO USUÁRIO WNTHOR.
#### ~~Atualizar tabelas na 560 nas seguintes guias, usando a opção "Selecionar todas" (cerca de 30min-1h20min):~~

- [ ] ~~Criação/Alt de tabelas e campos.~~
- [ ] ~~Criação/Alt de índices.~~
- [ ] ~~Menu/Perm/Fórmulas.~~
- [ ] ~~Controle de Atualizações > reprocessar.~~
#### ~~Atualizar Dicionário de Dados: (não é necessário fazer mais nada na 560, só seguir para as demais - 300, 2500 etc)~~
- [ ] ~~Rotina 560~~
- [ ] ~~Dicionário de Dados > Criar Novo.~~
### Atualizar Procedures 
#### 500
- [ ] Essenciais
- [ ] Functions
- [ ] Acessórios
- [ ] Procedures
- [ ] Triggers
- [ ] Views

 #### 300
- [ ] Todas as abas
- [ ] Recompilar

 #### 2500
- [ ] Todas as abas

 #### 1700
- [ ] Todas as abas (t)

 #### 1100
- [ ] Todas as abas

 #### 1400
- [ ] Todas as abas (marcar Dropar objetivos)
- [ ] Obs: pode dar erro na PCFISCAL e FWPCFISCAL (ou algo assim).Ambas devem estar na mesma versão para funcionar. Primeiro atualiza fiscal, depois FWPC, qualquer coisa atualizar a PARAMFILIAL (ou algo assim) antes dessas duas. No passado deu erro ao atualizar a FWPC porque faltavam atualizar a PCPARAMFILIAL.

 #### ~~1460 (descontinuada, migrada para o WTA, 814)~~
- [ ] ~~Todas as abas~~

### Validações no WTA
#### [Acessar WTA (clique aqui)](http://192.168.1.202:8080/portal/#/rotina)
- [ ] Verificar se aparece a loja WINT no logon do portal;
- [ ] Pesquisar 801 e atualizar tudo na aba "Atualizações"; em seguida:
- [ ] Pesquisar 814 e atualizar todas os principais objetos (exemplo: ligados ao financeiro, estoque, notas, faturamento). Principalmente os objetos:
	`PKG_ANALISAR_ESTOQUE / PKG_LOG_ESTOQUE / ATUALIZACAO_DIARIA`

### Validações no Servidor NF-e
#### Recomendado
- [ ] **Desabilitar serviço PC Server** 
- [ ] **Criar ponto de restauração windows**
#### Atualizar o Docfiscal 
- [ ] Consultar no [docfiscal](http://192.168.1.30:8888/docfiscal) se há atualização pendente. Se houver, baixar e instalar a nova versão no link na própria página do docfiscal, ou [clicando aqui](http://servicos.pcinformatica.com.br/instaladornfe_v40/http://servicos.pcinformatica.com.br/instaladornfe_v40/) e depois em ***sim***.
- [ ] **Observação:** algumas atualizações de dependências, solicitadas pelo Docfiscal, darão erros no WTA. Simplesmente atualize todas as outros dependências que aparecerem no Docfiscal, e deixe as que deram algum erro para atualizar por último, pois algumas dependências só atualizam depois de todas as possíveis dependências corretas serem atualizadas.
### Validações finais
- [ ] Validar novamente na 801 se não há atualizações pendentes na aba ***Atualizações.***
- [ ] **BÁSICO, MAS IMPORTANTE:** Confirmar se a data e hora do WTA estão corretas, do contrário impacta diretamente no sucesso da consolidação automática da 820.
- [ ] Reativar o parâmetro de **Enviar e-mail automático** dentro de "Configurações da rotina" **em todo usuário do faturamento**, pois a atualização sempre desmarca fazendo com que o XML não vá automaticamente para o cliente. Em algumas *viradas de sistema* o winthor desmarcava essa flag. Na última (17/10/2025), não desmarcou, mas é bom validar. 
- [ ] Validar via servidor TS (qualquer um dos dois) se o atalho MOB do winthor está abrindo normalmente.
- [ ] Habilitar a permissão na 814 para os principais usuários dos setores da empresa conseguirem atualizar as dependência pelo botão que será exibido no winthor ao abrir a rotina.
- [ ] Religar todos os servidores descritos inicialmente neste manual.
- [ ] Fim.