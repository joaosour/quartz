---
{"publish":true,"permalink":"/SQL/ORACLE/SQL - EXPORTAR BANCO.md","created":"2025-12-19T18:11:30.890-03:00","modified":"2025-12-20T10:34:35.960-03:00","cssclasses":""}
---

1. Criar uma pasta na raiz do C:/oracle/dp_dir
	![[Arquivos/Pasted image 20251220095811.png|500]]
2. Conectado com SYS, e privilégio SYSDBA, no pdb do usuário (*pdbjoao*, por exemplo), execute:

```sql
	CREATE OR REPLACE DIRECTORY exp_dir AS 'C:\oracle\dp_dir';
```
3. Ainda como SYS, rodar:

```sql
GRANT DATAPUMP_EXP_FULL_DATABASE TO joao;
GRANT READ, WRITE ON DIRECTORY DATA_PUMP_DIR TO joao;
GRANT PDB_DBA TO joao;
```

4. Acessar a opção no menu superior do SQL Developer "Exibir" >> "DBA";
	![[Arquivos/Pasted image 20251220100120.png|400]]
5. Na nova janela lateral "DBA":
	1. Expanda "DATA PUMP"
	2. Dê **dois** cliques em "JOBS DE EXPORTAÇÃO"
		![[Arquivos/Pasted image 20251220100208.png|350]]
	3. Clique na janela SQL que abriu na opção "AÇÕES"
	4. Assistente de Exportação.
		![[Arquivos/Pasted image 20251220100334.png|600]]
	5. No assistente, siga os passos:
		1. Marque **Dados e DLL** e depois **Schemas**. 
			![[Arquivos/Pasted image 20251220100423.png|600]]
		2. Selecione um usuário e clique na seta para direita:
			![[Arquivos/Pasted image 20251220100631.png|550]]
		3. **Pule as opções Filtro e Dados da Tabela**:
		4. Em **opções**, certifique-se que a pasta da log marcada é a mesma do GRAND (DATA_PUMP_DIR)
			![[Arquivos/Pasted image 20251220100847.png|550]]
		5. Altere o título do arquivo de exportação como desejado:
			![[Arquivos/Pasted image 20251220101155.png|600]]
		6. Em **Programação do Job** remoneie se necessário e finalize.
		7. Aguarde a exportação finalizar:
			![[Arquivos/Pasted image 20251220102916.png|450]]
		8. Quando o status ficar **Not running** é porque terminou.
			![[Arquivos/Pasted image 20251220103150.png|800]]
		9. Acesse a **job** na navegação lateral;
		10. Abra o caminho no explorador de arquivos:
			![[Arquivos/Pasted image 20251220103426.png|800]]