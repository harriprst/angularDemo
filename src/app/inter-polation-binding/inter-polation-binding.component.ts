import { Component } from '@angular/core';

@Component({
  selector: 'app-inter-polation-binding',
  standalone: true,
  imports: [],
  templateUrl: './inter-polation-binding.component.html',
  styleUrl: './inter-polation-binding.component.css'
})
export class InterPolationBindingComponent {

  name:string = 'harri'

  getNameDetails(){
      return this.name;
  }

}
