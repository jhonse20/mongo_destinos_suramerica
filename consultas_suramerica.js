// =======================================================
// CONSULTAS MONGO DB - PROYECTO DESTINOS EN SURAMÉRICA
// Colección: suramerica
// Base de datos: destinos_suramerica
// =======================================================

// 1. Mostrar todos los documentos de la colección
db.suramerica.find({})

// 2. Contar cuántos destinos turísticos hay en total
db.suramerica.countDocuments()

// 3. Ver solo los destinos de un país específico (ejemplo: Colombia)
db.suramerica.find({ pais: "Colombia" })

// 4. Contar cuántos destinos hay por país
db.suramerica.aggregate([
  { $group: { _id: "$pais", total_destinos: { $sum: 1 } } },
  { $sort: { total_destinos: -1 } }
])

// 5. Promedio de temperatura por país
db.suramerica.aggregate([
  { $group: { _id: "$pais", temperatura_promedio: { $avg: "$temperatura_promedio_c" } } },
  { $sort: { temperatura_promedio: -1 } }
])

// 6. Destinos cuya calificación sea mayor a 4.5
db.suramerica.find({ calificacion: { $gt: 4.5 } })

// 7. Calificación promedio general de todos los destinos
db.suramerica.aggregate([
  { $group: { _id: null, calificacion_promedio: { $avg: "$calificacion" } } }
])

// 8. Agrupar por tipo de destino (playa, desierto, selva, montaña, etc.)
db.suramerica.aggregate([
  { $group: { _id: "$tipo", total: { $sum: 1 } } },
  { $sort: { total: -1 } }
])

// 9. Buscar destinos recomendados para aventura
db.suramerica.find({ recomendada_para: "aventura" })

// 10. Duración recomendada promedio por región
db.suramerica.aggregate([
  { $group: { _id: "$region", duracion_promedio_dias: { $avg: "$duracion_recomendada_dias" } } }
])

// 11. Buscar destinos por rango de temperatura (ejemplo entre 15°C y 25°C)
db.suramerica.find({
  temperatura_promedio_c: { $gte: 15, $lte: 25 }
})

// 12. Destinos que tengan MÁS de 2 atracciones principales
db.suramerica.find({
  "atracciones_principales.2": { $exists: true }
})

// 13. Ordenar todos los destinos por calificación de mayor a menor
db.suramerica.find().sort({ calificacion: -1 })

// 14. Mostrar solo nombre, país y calificación
db.suramerica.find(
  {},
  { nombre_destino: 1, pais: 1, calificacion: 1, _id: 0 }
)

// 15. Destinos cuya temporada ideal incluya "verano"
db.suramerica.find({ mejor_temporada: "verano" })
