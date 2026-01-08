---
{"publish":true,"permalink":"/SQL/ORACLE/SQL - ABRIR BANCO.md","created":"2025-12-22T13:11:52.454-03:00","modified":"2026-01-05T08:55:42.224-03:00","cssclasses":""}
---

Pode haver o erro: **ORA-01109: banco de dados não aberto**.
Isso quer dizer que o banco precisa ser aberto para que as consultas SQL (INSERT, UPDATE etc) sejam realizadas.

### 1. Abra o CMD e execute:
``` 
sqlplus / as sysdba
```
*Faça login se necessário.*

### 2. Verifique o status do banco:
```sql
select status from v$instance;
```
*Se retornar **OPEN**, pule para o passo 4*

### 3. Altere o status do banco para *OPEN*:
```sql
ALTER DATABASE OPEN;
```

### 4. Com o banco aberto, verifique o está no CDB ou PDB:
```sql
SHOW CON_NAME;
```
*Se aparecer CDB$ROOT ou outro PDB específico, rode:*

### 5. Consulte o estado do PDB:
```sql
SELECT name, open_mode FROM v$pdbs;
```
*Se estiver **MOUTED ou READ ONLY ou CLOSED** sempre via retornar o erro ORA-01109*

### 6. Altere o estado do PDB:
```sql
ALTER PLUGGABLE DATABASE PDBJOAO OPEN;
```

### 7. (Opcional) Habilitar OPEN automático do PDB:
```sql
alter pluggable database pdbjoao save state;
```