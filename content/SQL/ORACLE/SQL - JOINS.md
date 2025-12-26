---
{"publish":true,"permalink":"/SQL/ORACLE/SQL - JOINS.md","created":"2025-12-25T21:41:10.601-03:00","modified":"2025-12-26T00:46:36.655-03:00","cssclasses":""}
---

### TIPOS DE JOIN
![[Arquivos/Pasted image 20251225215508.png]]

### TABELAS: CLIENTES e PEDIDOS

![[Arquivos/Pasted image 20251225215003.png]]

### INNER JOIN 
*Liste **o nome do cliente**, **número do pedido** e **valor total** para todos os pedidos realizados.*
**Regras**:
- Use INNER JOIN    
- Ordene do maior para o menor valor do pedido

**Resultado:**
![[Arquivos/Pasted image 20251225215130.png]]

**Desafio:** *Liste **nome do cliente** e **valor do pedido** apenas dos pedidos com valor maior que 200.*
**Regras**:
- Use `INNER JOIN`
- Ordene pelo nome do cliente

**Resultado:**
![[Arquivos/Pasted image 20251225234248.png]]

**Desafio:** *Traga **nome do cliente**, **data de cadastro** e **número do pedido** *  
*apenas dos clientes cadastrados **a partir de abril/2023** que tenham feito pedidos.*
**Regras**:
- Use `INNER JOIN`
- Ordene por data de cadastro crescente

**Resultado:**
![[Arquivos/Pasted image 20251226000854.png]]
### LEFT JOIN 
**Desafio:** *Traga **o nome do cliente** e **a soma dos valores** de todos os seus pedidos.*
**Regras**:
- Use `LEFT JOIN` para incluir clientes sem pedidos
- Agrupe por cliente
- Ordene pelo nome do cliente.

**Resultado:**
![[Arquivos/Pasted image 20251226004457.png]]

**Desafio:** *Liste **apenas os clientes que nunca fizeram pedido**.*
**Regras**:
- Deve usar `LEFT JOIN` ou `NOT EXISTS` (você escolhe)
- Ordene por data de cadastro (mais antigos primeiro)

**Resultado:**
![[Arquivos/Pasted image 20251225233742.png]]

**Desafio:** *Mostre **nome do cliente** e **quantidade total de pedidos** feitos.*
**Regras**:
- Use `LEFT JOIN`
- Agrupar por cliente
- Somente clientes que têm **pelo menos 1 pedido** (use HAVING)

**Resultado:**
![[Arquivos/Pasted image 20251226003626.png]]
