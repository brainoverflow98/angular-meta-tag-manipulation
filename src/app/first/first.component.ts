import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html'
})
export class FirstComponent implements OnInit {

  constructor(private metaService: Meta, private titleService: Title) {
    this.titleService.setTitle('First Page');
    this.metaService.updateTag( {content: 'summary_large_image' }, `name='twitter:card'`);
    this.metaService.updateTag( {content: 'First Page Metadata Title' }, `property='og:title'`);
    this.metaService.updateTag( {content: 'This is the first page of my single page application.' }, `property='og:description'`);
    let host = this.metaService.getTag(`name='host'`).content;
    this.metaService.updateTag( {content: host + 'assets/first-page.png' }, `property='og:image'`);
  }

  ngOnInit(): void {
  }

}
