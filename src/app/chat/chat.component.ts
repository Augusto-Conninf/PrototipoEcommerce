import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VideoDialogComponent } from '../video-dialog/video-dialog.component';

export interface Message {
  remetente?: string;
  mensagem: string;
  data?: Date;
}


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChatComponent implements OnInit {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  collapsed = true;

  msg: string;
  resultados: Message[];
  count = 0;

  idade: number;
  sexo: string;

  constructor(public dialog: MatDialog) {
    this.initBoot();
  }
  ngOnInit(): void {
    this.resultados.push({ remetente: 'boot', mensagem: 'Qual a sua idade?', data: new Date()});
  }

  initBoot() {
    this.resultados = [];
  }

  async sendMessage() {
    this.resultados.push({ remetente: 'eu', mensagem: this.msg, data: new Date()});

    await this.delay(500);
    switch(this.count) {
      case 0: {
        if (/^\d+$/.test(this.msg.trim())) {
          this.idade = Number.parseInt(this.msg.trim());
          this.resultados.push({ remetente: 'boot', mensagem: 'Que legal! e seu sexo ? (Masculino ou Feminino)', data: new Date()});
          this.count ++;
        } else {
          this.resultados.push({ remetente: 'boot', mensagem: 'Não entendi, pode repetir por favor ? (Apenas números)', data: new Date()});
        }
        break;
      }
      case 1: {
          console.log(this.msg.toLowerCase().replace(/\s/g, ''));
          if(this.msg.toLowerCase().replace(/\s/g, '') === 'masculino' || this.msg.toLowerCase().replace(/\s/g, '') === 'feminino') {
          this.resultados.push({ remetente: 'boot', mensagem: 'A Partir do seu perfil calculamos esses três planos.', data: new Date()});
          await this.delay(500);
          this.resultados.push({ remetente: 'boot', mensagem: 'Para escolher clique na opção que desejar..', data: new Date()});
          await this.delay(500);
          this.resultados.push({ remetente: 'boot', mensagem: 'cards', data: new Date()});
          this.count++;
          this.openDialog();
          } else {
            this.resultados.push
            ({ remetente: 'boot', mensagem: 'Desculpa, não entendi. Pode repetir? (Masculino ou Feminino)', data: new Date()});
          }

          break;
    }
}

    this.msg = '';
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewChecked() {
    this.scrollToBottom();
  }
  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  private removerAcentos(s) {
    return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  delay(ms: number) {
      return new Promise( resolve => setTimeout(resolve, ms) );
  }

  openDialog(): void {
    this.dialog.open(VideoDialogComponent, {
      width: '200px',
      height: '300px',

    })
  }
}
