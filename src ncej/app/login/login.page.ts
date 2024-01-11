import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, AlertController, LoadingController, NavController } from '@ionic/angular';
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {



  constructor(
    private router: Router,
   
  ) { 

  }

  yuki(){
    this.router.navigate(['/sign'])
  }
 

  yaelah(){
    this.router.navigate(['/tabs'])
  }
  // async tryLogin (){
  //   if (this.ussername == ''){
  //     this.presentToast('Ussername Harus Diisi');
      
  //   }
  // }

}