import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [  //declarations são usadas para coisas internas da aplicação
    AppComponent,
  ],
  imports: [  //imports são usadas para coisas externas a aplicação -> ex : modules
    BrowserModule, 
    FotoModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
