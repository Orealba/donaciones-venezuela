import { supabase } from '../lib/supabase'
import type { SurveyData } from '../components/SurveyForm'

interface GeoData {
  ip_pais: string | null
  ip_region: string | null
  ip_ciudad: string | null
}

async function getGeoFromIP(): Promise<GeoData> {
  try {
    const res = await fetch('https://ipapi.co/json/')
    const data = await res.json()
    return {
      ip_pais: data.country_name ?? null,
      ip_region: data.region ?? null,
      ip_ciudad: data.city ?? null,
    }
  } catch {
    return { ip_pais: null, ip_region: null, ip_ciudad: null }
  }
}

export async function registrarClick(): Promise<string | null> {
  const geo = await getGeoFromIP()
  const { data, error } = await supabase.from('confirmaciones').insert({
    created_at: new Date().toISOString(),
    ...geo,
  }).select('id').single()

  if (error) {
    console.error('Error al registrar click:', error)
    return null
  }
  return data?.id ?? null
}

export async function subirRespuesta(datos: SurveyData, archivo: File | null, clickId: string | null = null) {
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

  const geo = await getGeoFromIP()

  const payload = {
    category: datos.category,
    condicion: datos.condicion,
    estado: datos.estado,
    imagen_url: imagenUrl,
    ...geo,
  }

  if (clickId) {
    await supabase.from('confirmaciones').update(payload).eq('id', clickId)
  } else {
    await supabase.from('confirmaciones').insert({
      ...payload,
      created_at: new Date().toISOString(),
    })
  }
}
