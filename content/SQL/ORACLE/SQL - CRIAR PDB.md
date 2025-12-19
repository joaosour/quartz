---
{"publish":true,"permalink":"/SQL/ORACLE/SQL - CRIAR PDB.md","created":"2025-12-19T16:56:17.781-03:00","modified":"2025-12-19T17:49:48.087-03:00","cssclasses":""}
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
```sql
CREATE TABLESPACE dados_joao
DATAFILE 'dados_joao01.dbf'
SIZE 100M
AUTOEXTEND ON NEXT 10M MAXSIZE UNLIMITED;
```