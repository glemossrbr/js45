// especificação do modulo de fotos
// 

import { NgModule } from '@angular/core'
import { FotoComponent } from './foto.component'

@NgModule({
    declarations: [ FotoComponent ], 
    exports: [ FotoComponent ]  // visivel para outros modulos o conteudo do componente foto do modulo foto
})

export class FotoModule {}