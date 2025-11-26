# Proyecto MongoDB - Destinos Turísticos en Suramérica

## 📌 Introducción  
Este proyecto implementa una base de datos NoSQL en **MongoDB** para almacenar y consultar información de **120 destinos turísticos de Suramérica**, como parte del trabajo práctico sobre Big Data.  
Cada documento corresponde a un destino y contiene datos sobre país, región, clima, nivel de costo, atracciones principales, temporadas ideales y calificación promedio.

El objetivo principal es demostrar el uso de MongoDB para el almacenamiento eficiente, consultas avanzadas y análisis descriptivo de datos.

---

## 🎯 Objetivos del Proyecto

- Crear una base de datos MongoDB con al menos **100 documentos reales o simulados**.
- Diseñar un esquema flexible basado en documentos.
- Insertar datos de destinos turísticos en la colección `suramerica`.
- Realizar **consultas simples y avanzadas** con el `Aggregation Framework`.
- Obtener análisis de resultados derivados de las consultas.
- Publicar el proyecto en un repositorio GitHub.

---

## 🗂️ Diseño de la Base de Datos

### 📌 Base de datos:
`destinos_suramerica`

### 📌 Colección:
`suramerica`

### 📌 Estructura de los documentos:

```json
{
  "pais": "Bolivia",
  "codigo_pais": "BO",
  "region": "Altiplano",
  "nombre_destino": "Altiplano – Destino Desierto 2",
  "tipo": "desierto",
  "mejor_temporada": "otoño",
  "meses_pico": ["marzo", "abril"],
  "temperatura_promedio_c": 26.1,
  "duracion_recomendada_dias": 2,
  "nivel_costo": "bajo",
  "recomendada_para": ["aventura"],
  "atracciones_principales": ["cañones", "desierto", "senderismo"],
  "coordenadas": { "lat": -16.29, "lng": -63.58 },
  "calificacion": 4.23,
  "creado_en": "2025-11-23T21:37:46.58Z"
}

