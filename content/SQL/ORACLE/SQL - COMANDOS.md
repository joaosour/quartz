---
{"publish":true,"permalink":"/SQL/ORACLE/SQL - COMANDOS.md","created":"2025-12-19T16:25:25.214-03:00","modified":"2025-12-19T17:50:07.000-03:00","cssclasses":""}
---


### CREATE TABLE
``` sql
CREATE TABLE CLIENTES (
    id_cliente NUMBER,
    cliente VARCHAR2(100),
    dt_cadastro DATE
)
```

### INSERT INTO
```sql
INSERT INTO CLIENTES (id_cliente, cliente, dt_cadastro)
    VALUES (1, 'JOAO', DATE '2025-12-01')
```


### INSERT ALL
```sql
INSERT ALL
    INTO CLIENTES (id_cliente, cliente, dt_cadastro)
        VALUES(2, 'MARIA', DATE '2025-11-25')
    INTO CLIENTES (id_cliente, cliente, dt_cadastro)
        VALUES(3, 'JOSÉ', DATE '2025-11-22')
    INTO CLIENTES (id_cliente, cliente, dt_cadastro)
        VALUES(4, 'PEDRO', DATE '2025-11-14')    
SELECT 1 FROM DUAL;        
```

### COMANDO
```sql
instrucao
```

### COMANDO
```sql
instrucao
```

### COMANDO
```sql
instrucao
```

### COMANDO
```sql
instrucao
```

### COMANDO
```sql
instrucao
```

### COMANDO
```sql
instrucao
```

### COMANDO
```sql
instrucao
```

### COMANDO
```sql
instrucao
```

### COMANDO
```sql
instrucao
```

### COMANDO
```sql
instrucao
```