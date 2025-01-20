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

  async createPagoToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 5000 })
    await toast.present()
  }

  async crearPago(montoPagar: number, metodoPago: string, comentarios: string, fecha: Date, usuarioID: number, residenciaID: number) {
    const { data, error } = await this.supabase
      .from('pago')
      .insert({ montoPagar, metodoPago, comentarios, fecha, aprobado: false, revisado: false, usuarioID, residenciaID })
      .select()
  }

  createLoader() {
    return this.loadingCtrl.create()
  }
}