import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';


import axios from 'axios';

@Component({
  selector: 'app-fee',
  templateUrl: './fee.page.html',
  styleUrls: ['./fee.page.scss'],
})
export class FeePage  {
  
  public  feeData:any = [];

  public id:any="";
  public password:any="";
  public nama:any="";
  public status:any="";
  public jumlah_fee:any="";

  constructor(public modalCtrl: ModalController,  private router:Router) 
  { this.getData(); }
  handleRefresh(event:any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }
  Getdota(){
    this.router.navigate(['/tabs/tab2'])
  }
  

  async getData() {
    try {
      const res = await axios.post('https://praktikum-cpanel-unbin.com/bebas/uas_test/get_fee_data.php');
      this.feeData = res.data.result;
      console.log(this.feeData);
  
      }catch(err){
        console.log(err);
      }
    }

}
