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

  async signIn(username: string, password: string) {
    const { data, error } = await this.supabase
        .from('usuario')
        .select('*')
        .eq('username', username)
        .eq('password', password)
  
      if (error) {
        console.error('Error insertando datos ', error);
        return null;
      }
  
      return data[0];
  }

  async signInAdmin(username: string, password: string) {
    const { data, error } = await this.supabase
        .from('admin')
        .select('*')
        .eq('username', username)
        .eq('password', password)
  
      if (error) {
        console.error('Error insertando datos', error);
        return null;
      }
  
      return data[0];
  }

  signOut() {
    return this.supabase.auth.signOut()
  }

  async agregarUsuario(username: string, password:string) {
      const { data, error } = await this.supabase
        .from('usuario')
        .insert({ username, password })
        .select()
  
      if (error) {
        console.error('Error insertando datos', error);
        return null;
      }
  
      return data[0]
  }

  async agregarResidencias(residencias:any[]) {
    let resultados: any[] = []; // Array para almacenar los resultados

    for (let i=0; i<residencias.length; i++) {
      console.log('vuelta destripamiento: ' + i);
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

  async getUsuarioByIdUsuario(id_usuario: number) {
    const { data, error } = await this.supabase
      .from('usuario')
      .select()
      .eq('id_usuario', id_usuario)

    if (error) {
      console.error('Error fetching data:', error);
      return null;
    }

    return data[0]
  }

  async getResidenciaByNroResidencia(nro_residencia: number) {
    const { data, error } = await this.supabase
    .from('residencia')
    .select()
    .eq('nro_residencia', nro_residencia)

    if (error) {
      console.error('Error fetching data:', error);
      return null;
    }

    return data[0]
  }

  async eliminarResidencia(nro_residencia:number) {
    const { data, error } = await this.supabase
    .from('residencia')
    .select()
    .eq('nro_residencia', nro_residencia)

    let listaIdPagos: number[]=[]
    let pagosEliminadoss: number[]=[]
    
    if (error) {
      console.error('Error fetching data: ' + error);
      return null
    }

    await this.getPagosByResidencia(data[0].nro_residencia).then(pago => {
      if (pago) {
        for (let i=0; pago.length>i; i++) {
          listaIdPagos.push(pago[i].id_pago)
        }
        console.log("LISTA ID PAGOSSSSSS DENTRO DE LA FUNCION EN SUPABASE");
        console.log(listaIdPagos);

        this.eliminarPagos(listaIdPagos).then(pagosEliminados => {
          console.log("pagos eliminadosssssssss aaaaaaaaa");
          console.log(pagosEliminados);
          if (pagosEliminados) {
            for (let i=0; pagosEliminados.length>i; i++) {
              pagosEliminadoss.push(pagosEliminados[i].id_pago)
            }
          }
        })
      }
    })

    const { data:dataEliminada, error:errorEliminacion } = await this.supabase
    .from('residencia')
    .delete()
    .eq('nro_residencia', nro_residencia)
    .select()

    if (errorEliminacion) {
      console.error('Error deleting residencia: ' + errorEliminacion);
      return null;
    }

    // borrar despues
    return dataEliminada
  }

  async eliminarPagos(id_pago:Array<number>) {
    /* const { data, error } = await this.supabase
    .from('pago')
    .select()
    .in('id_pago', id_pago) */

    let dataArray: any[]=[]

    for (let i = 0; id_pago.length > i; i++) {
      const { data, error } = await this.supabase
      .from('pago')
      .delete()
      .eq('id_pago', id_pago[i])
      .select()

      if (error) {
        console.error('Error fetching data: ' + error);
        return null
      }

      dataArray.push(data)
    }

    /* if (error) {
      console.error('Error fetching data: ' + error);
      return null
    } */

    return dataArray
  }

  async getAllResidencias() {
    const { data, error } = await this.supabase
    .from('residencia')
    .select()

    if (error) {
      console.error('Error fetching data: ' + error);
      return null
    }

    return data;
  }

  async getResidenciasByUsuario(u_id_usuario: number) {
    const { data, error } = await this.supabase
      .from('residencia')
      .select()
      .eq('u_id_usuario', u_id_usuario)
  
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

  // pagos

  getPagosByUsusario(id_usuario:number) {

  }  

  async getPagosByIdUsuario(id_usuario: number) {
    const { data, error } = await this.supabase
    .from('pago')
    .select()
    .eq('u_id_usuario', id_usuario)
    .eq('revisado', true)

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

  async getPagosRevisadosByResidencia(r_nro_residencia: number) {
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

  async getPagoByLastPaymentRevision(nro_residencia:number) {
    const { data, error } = await this.supabase
      .from('pago')
      .select('*')
      .order('fecha', { ascending: true }) // Ordena por fecha ascendente
      .eq('r_nro_residencia',nro_residencia)
      .eq('revisado', false)
      .limit(1); // Obtiene solo el primer resultado
      
  
    if (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  
    return data?.[0] || null; // Devuelve el primer resultado o null
  }

  async crearPago(montopagar: number, metodo_pago: string, 
    u_id_usuario: number, r_nro_residencia: number, fecha?: Date, comentarios?: string) {
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

  async aprobarPago(aprobado: boolean|undefined, revisado: boolean|undefined, id_pago: number, comentarios?:string) {
    const { data, error } = await this.supabase
      .from('pago')
      .update({ aprobado, revisado, comentarios })
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