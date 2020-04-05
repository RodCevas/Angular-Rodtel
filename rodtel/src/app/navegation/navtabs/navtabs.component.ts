import { Component, OnInit } from '@angular/core';
import { $, element } from 'protractor';


@Component({
  selector: 'app-navtabs',
  templateUrl: './navtabs.component.html',
  styleUrls: ['./navtabs.component.css']
})
export class NavtabsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let elements: any = document.querySelectorAll('.menu-nav');    

    for(let i = 0; i < elements.length; i++){
      elements[i].onclick = function(){
        let el = elements[0];
        
        while(el){
            if(el.tagName === "A"){
                //remove class
                el.classList.remove('active');                
            }
            // pass to the new sibling
            el = el.nextSibling;
        }

        this.classList.add('active');        
      };
    }
  }

}

