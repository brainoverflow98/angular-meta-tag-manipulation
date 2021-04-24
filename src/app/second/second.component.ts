import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html'
})
export class SecondComponent implements OnInit {

  constructor(private metaService: Meta, private titleService: Title) {
    this.titleService.setTitle('Second Page');
    this.metaService.updateTag( {content: 'summary_large_image' }, `name='twitter:card'`);
    this.metaService.updateTag( {content: 'Second Page Metadata Title' }, `property='og:title'`);
    this.metaService.updateTag( {content: 'This is the second page of my single page application.' }, `property='og:description'`);
    let host = this.metaService.getTag(`name='host'`).content;
    this.metaService.updateTag( {content: host + 'assets/second-page.jpg' }, `property='og:image'`);
  }

  ngOnInit(): void {
  }

}
