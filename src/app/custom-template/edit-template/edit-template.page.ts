import { Component, ViewChild, Inject, Renderer2, ElementRef, ChangeDetectionStrategy, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-template',
  templateUrl: './edit-template.page.html',
  styleUrls: ['./edit-template.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditTemplatePage implements OnInit {

  ngOnInit() {
  }

  constructor(
  ) { }

}
