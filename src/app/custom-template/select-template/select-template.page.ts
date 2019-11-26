import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-template',
  templateUrl: './select-template.page.html',
  styleUrls: ['./select-template.page.scss'],
})
export class SelectTemplatePage implements OnInit {

  constructor() { }

  categories = ['Daily' , 'Birthday', 'Holiday', 'Social', 'Thanksgiving'];
  images = ['../../../assets/images/avenger.jpg', 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' ,
   'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg' , '../../../assets/images/avenger.jpg',
   '../../../assets/images/avenger.jpg', 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' ,
   'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg' , '../../../assets/images/avenger.jpg',
   '../../../assets/images/avenger.jpg', 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' ,
   'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg' , '../../../assets/images/avenger.jpg',
   '../../../assets/images/avenger.jpg', 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' ,
   'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg' , '../../../assets/images/avenger.jpg',
   '../../../assets/images/avenger.jpg', 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' ,
   'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg' , '../../../assets/images/avenger.jpg',
   '../../../assets/images/avenger.jpg', 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' ,
   'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg' , '../../../assets/images/avenger.jpg']

  ngOnInit() {
  }

  onCategoryChange(event) {
    console.log(event);
  }

}
