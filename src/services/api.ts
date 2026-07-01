import { supabase } from '../lib/supabase'
import type { SurveyData } from '../components/SurveyForm'

export async function registrarClick() {
  await supabase.from('confirmaciones').insert({
    created_at: new Date().toISOString(),
  })
}

export async function subirRespuesta(datos: SurveyData, archivo: File | null) {
  let imagenUrl: string | null = null

  if (archivo) {
    const path = `${Date.now()}_${archivo.name}`
    const { data, error } = await supabase.storage
      .from('fotos')
      .upload(path, archivo)

    if (error) {
      console.error('Error al subir imagen:', error)
    } else if (data) {
      const { data: urlData } = supabase.storage
        .from('fotos')
        .getPublicUrl(data.path)
      imagenUrl = urlData.publicUrl
    }
  }

  await supabase.from('confirmaciones').insert({
    category: datos.category,
    condicion: datos.condicion,
    estado: datos.estado,
    imagen_url: imagenUrl,
    created_at: new Date().toISOString(),
  })
}
