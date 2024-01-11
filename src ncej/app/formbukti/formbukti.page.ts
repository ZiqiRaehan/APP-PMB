import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import axios from 'axios';
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-formbukti',
  templateUrl: './formbukti.page.html',
  styleUrls: ['./formbukti.page.scss'],
})
export class FormbuktiPage  {

  public nama:any="";
  public asal_sekolah:any="";
  public bukti:any=null;

  constructor(
    public toastCtrl: ToastController
  ) {}

  async imageUpload(event:any){
    console.log(event);
    const file = event.target.files[0];
    this.bukti = file;
  }

  async addData(){
    const formData = new FormData();
  
    formData.append('nama', this.nama);
    formData.append('asal_sekolah', this.asal_sekolah);

    formData.append('bukti', this.bukti);
    console.log(formData);

    try{
      const res = await axios.post('https://praktikum-cpanel-unbin.com/bebas/uas_test/form.php',formData);
      console.log(res.data);

      if(res.data.error == false){
        const toast = await this.toastCtrl.create({
          message:'Data Berhasil ditambahkan',
          duration: 2000
      });
        toast.present();
      }
      else{
        const toast = await this.toastCtrl.create({
          message: 'Data Gagal ditambahkan',
          duration: 2000
      });
          toast.present();
      }
      
      }
      catch(err){
        console.log(err);
 }
}
}
