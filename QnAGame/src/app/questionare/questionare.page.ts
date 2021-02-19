import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { QuestionsService } from 'src/app/@core-app';
@Component({
  selector: 'app-questionare',
  templateUrl: './questionare.page.html',
  styleUrls: ['./questionare.page.scss'],
})
export class QuestionarePage implements OnInit {
  uniqueId1: string;
  totalScore = 0;
  checkTotalScore = 0;
  totalTurn = 0;

  constructor(private router: Router,
    private questionService: QuestionsService,
    private toastController: ToastController,
    private loadingController: LoadingController,) { }

  ngOnInit() { 
    this.getTotalPointAndTurn();
  }

  back(){
    this.router.navigate(['/main-menu']);
  }
  playByTopic() {
    this.router.navigate(['/questionare/play-by-topic']);
  }
  playByLevel() {
    this.router.navigate(['/questionare/play-by-level']);
  }
  rule() {
    this.router.navigate(['/questionare/rule']);
  }
  
  buyMoreTurn() {
    this.getTotalPointAndTurn();
    console.log(this.totalTurn);
    if(this.totalScore >= 3000) {
      this.questionService.byMoreTurn().then(data =>{
        if(data.message == "you use over 5 buying slots per day") {
          this.failPlusPoint();
        }
        else {
          this.waitToPlusPoint();
          this.successPlusPoint();
        }
      })
      // this.router.navigate(['/main-menu']);
    }
    else {
      this.notEnoughPoint();
    }
  }

  getTotalPointAndTurn() {
    this.questionService.getUserPointQuestion().then(data => {
      this.checkTotalScore = data.score;
      this.totalScore = data.score;
      this.totalTurn = data.playing_slots;
      console.log(this.totalTurn);
    })
  }

  async successPlusPoint() {
    const toast = await this.toastController.create({
      message: 'Thành công!',
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }

  async failPlusPoint() {
    const toast = await this.toastController.create({
      message: 'Bạn đã mua quá 5 lượt trong ngày!',
      duration: 1000,
      color: 'warning',
    });
    toast.present();
  }

  async waitToPlusPoint() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Đang cộng điểm...',
      duration: 500,
    });
    await loading.present();
  }

  async notEnoughPoint() {
    const toast = await this.toastController.create({
      message: 'Không đủ điểm thưởng!',
      duration: 1000,
      color: 'warning',
    });
    toast.present();
  }
}
