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

  // usuario cosas

  signIn(email: string, password: string) {
    return this.supabase.auth.signInWithPassword({ email, password })
  }

  signOut() {
    return this.supabase.auth.signOut()
  }

  async registro(residencias:any[]) {
    let resultados: any[] = []; // Array para almacenar los resultados

    for (let i=0; i<residencias.length; i++) {
      console.log('vuelta destripamiento nivel 2: ' + i);
      let nro_residencia:Number = residencias[i][0];
      let estado:String = residencias[i][1];
      let departamento:Boolean = residencias[i][2];
      let piso:Number = residencias[i][3];
      let u_id_usuario:Number = residencias[i][4];

      if(residencias[4] == 0) {
        const { data, error } = await this.supabase
        .from('residencia')
        .insert({ nro_residencia, estado, departamento, 
                  nopiso:null, u_id_usuario })
        .select()

        if (error) {
          console.error('Error ingresando data:', error);
          return null;
        }
    
        resultados.push(data);
      } else {
        const { data, error } = await this.supabase
        .from('residencia')
        .insert({ nro_residencia, estado, departamento, 
                  piso, u_id_usuario })
        .select()

        if (error) {
          console.error('Error ingresando data:', error);
          return null;
        }
  
        resultados.push(data);
      }
    }

    return resultados; // Devuelve todos los resultados después de que termine el ciclo
  }

  // residencia

  async getResidenciaByNroResidencia(nro_residencia: number) {
    const { data, error } = await this.supabase
    .from('residencia')
    .select()
    .eq('nro_residencia', nro_residencia)

    if (error) {
      console.error('Error fetching data:', error);
      return null;
    }

    return data    
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