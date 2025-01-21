import { Injectable } from '@angular/core'
import { LoadingController, ToastController } from '@ionic/angular'
import { AuthChangeEvent, createClient, Session, SupabaseClient } from '@supabase/supabase-js'
import { environment } from '../environments/environment'

export interface Profile {
  username: string
  website: string
  avatar_url: string
}

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey)
  }

  // Sesiones y otras cosas

  get user() {
    return this.supabase.auth.getUser().then(({ data }) => data?.user)
  }

  get session() {
    return this.supabase.auth.getSession().then(({ data }) => data?.session)
  }

  authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void) {
    return this.supabase.auth.onAuthStateChange(callback)
  }

  // signin signout

  signIn(email: string, password: string) {
    return this.supabase.auth.signInWithPassword({ email, password })
  }

  signOut() {
    return this.supabase.auth.signOut()
  }

  // Insertar datos

  handleError(error: Error) {
    console.error('Error fetching data:', error);
    return null;
  }

  async createPagoToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 5000 })
    await toast.present()
  }

  async getPagos() {
    const { data, error } = await this.supabase.from('pago').select()

    if (error) {
      console.error('Error fetching data:', error);
      return null;
    }

    return data
  }

  async getPagosById(id_pago: number) {
    const { data, error } = await this.supabase
    .from('pago')
    .select()
    .eq('id_pago', id_pago)

    if (error) {
      console.error('Error fetching data:', error);
      return null;
    }

    return data
  }

  async getPagosByResidencia(r_nro_residencia: number) {
    const { data, error } = await this.supabase
    .from('pago')
    .select()
    .eq('r_nro_residencia', r_nro_residencia)

    if (error) {
      console.error('Error fetching data:', error);
      return null;
    }

    return data    
  }

  async getPagosByUsuario(u_id_usuario: number) {
    const { data, error } = await this.supabase
    .from('pago')
    .select()
    .eq('u_id_usuario', u_id_usuario)

    if (error) {
      console.error('Error fetching data:', error);
      return null;
    }

    return data
  }

  async getPagoByLastPaymentRevision() {
    const { data, error } = await this.supabase
      .from('pago')
      .select('*')
      .order('fecha', { ascending: true }) // Ordena por fecha ascendente
      .limit(1); // Obtiene solo el primer resultado
  
    if (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  
    return data?.[0] || null; // Devuelve el primer resultado o null
  }

  async crearPago(montopagar: number, metodo_pago: string, fecha: Date, 
    u_id_usuario: number, r_nro_residencia: number, comentarios?: string) {
    const { data, error } = await this.supabase
      .from('pago')
      .insert({ montopagar, metodo_pago, comentarios, fecha, 
        aprobado: false, revisado: false, u_id_usuario, r_nro_residencia })
      .select()

    if (error) {
      console.error('Error fetching data:', error);
      return null;
    }

    return data
  }

  async aprobarPago(aprobado: boolean, revisado: boolean, id_pago: number) {
    const { data, error } = await this.supabase
      .from('pago')
      .update({ aprobado, revisado })
      .eq('id_pago', id_pago)
      .select()

    if (error) {
      console.error('Error fetching data:', error);
      return null;
    }

    return data;
  }

  createLoader() {
    return this.loadingCtrl.create()
  }
}