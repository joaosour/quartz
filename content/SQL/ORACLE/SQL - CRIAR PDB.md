---
{"publish":true,"permalink":"/SQL/ORACLE/SQL - CRIAR PDB.md","created":"2025-12-19T16:56:17.781-03:00","modified":"2025-12-19T18:02:27.254-03:00","cssclasses":""}
---

### ✔️ Opção 2 — Criar um PDB (solução correta)

Se você estiver usando **Oracle 12c+ ou XE**, o correto é criar um **PDB próprio**.

#### 1️⃣ Criar um novo PDB

Exemplo:

`CREATE PLUGGABLE DATABASE PDBJOAO ADMIN USER admin IDENTIFIED BY admin FILE_NAME_CONVERT = ('pdbseed','pdbjoao');`

#### 2️⃣ Abrir o PDB

`ALTER PLUGGABLE DATABASE PDBJOAO OPEN;`

#### 3️⃣ Conectar-se ao PDB

`ALTER SESSION SET CONTAINER = PDBJOAO;`

#### 4️⃣ Criar o usuário normalmente

`CREATE USER JOAO IDENTIFIED BY 1234; GRANT CONNECT, RESOURCE TO JOAO;`

### CRIAR TABLESPACE
Conectar no servicename do mesmo nome do pdb, como sys, privilégio sysdba e rodar:
```sql
CREATE TABLESPACE dados_joao
DATAFILE 'dados_joao01.dbf'
SIZE 100M
AUTOEXTEND ON NEXT 10M MAXSIZE UNLIMITED;
```

Definir o tablespace novo como padrão do usuário e sem limite:
``` sql
ALTER USER joao
DEFAULT TABLESPACE dados_joao
QUOTA UNLIMITED ON dados_joao;
```

Por convenção (segurança) remover a cota de uso do tablespace SYSTEM (que por convenção não deve ter coisas escritas)
``` sql
ALTER USER joao QUOTA 0 ON SYSTEM;
```

Isso abaixo pode ser últil:
``` sql
GRANT CREATE SESSION, CREATE TABLE TO joao;
ALTER USER joao DEFAULT TABLESPACE dados_joao;
```
para:
```sql
✅ logar no banco
✅ criar tabelas no tablespace dele    
✅ inserir, atualizar, apagar dados das próprias tabelas
```

Exemplo dando algumas permissões ao usuário:
```sql
GRANT
  CREATE SESSION,
  CREATE TABLE,
  CREATE VIEW,
  CREATE SEQUENCE,
  CREATE PROCEDURE,
  CREATE TRIGGER
TO joao;
```