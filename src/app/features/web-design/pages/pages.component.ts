import { Component, OnInit } from '@angular/core';
import { WebDesignService } from '../services/web-design.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss'
})
export class PagesComponent implements OnInit {
  constructor(private webDesginService: WebDesignService) {}

  colorPalletLinks!: any[];

  ngOnInit(): void {
    this.colorPalletLinks = this.webDesginService.cssColorPallets;
  }
}
