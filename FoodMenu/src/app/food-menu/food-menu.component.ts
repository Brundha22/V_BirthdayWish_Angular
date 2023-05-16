import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {faAdd} from '@fortawesome/free-solid-svg-icons';
import { foodmenu } from './foodmenu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
// export class FoodMenuComponent  {
//   editIcon = faEdit;
//   delIcon = faTrash;
//   addIcon = faAdd;
//   add()
//   {
//     alert("Foodmenu added successfully");
//   }
//  }
export class FoodMenuComponent implements OnInit {
  editIcon = faEdit;
  delIcon = faTrash;
  addIcon = faAdd;
  openform=false;
  add()
  {
    alert("Foodmenu added successfully");
    this.foodmenus.push(this.newfoodmenu);
    console.log(this.newfoodmenu);           
    this.router.navigate(['foodmenu']);
  }
  form()
  {
    this.openform=true;
    return this.openform;
  }

  foodmenus: Array<foodmenu> = [{image:"../../assets/images/leg_nonveg.jpg" ,name:"Legpiece",category:"Non Veg",price:"150"},
  {image:"../assets/images/chapathi.jpg",name:"Chapathi",category:"Veg",price:"50"},
  {image:"../assets/images/muttongravy.webp",name:"Mutton gravy",category:"Non Veg",price:"200"}]

  newfoodmenu : foodmenu = new foodmenu();

  constructor(private router : Router)           
  {
    
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

}