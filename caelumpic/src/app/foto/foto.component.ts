import { Component, Input } from "@angular/core"


@Component({
   selector: 'foto',
   templateUrl: './foto.component.html',
   styleUrls: ['./foto.component.css']
})

export class FotoComponent{
 @Input() url: string;
 @Input() titulo: string;
} 