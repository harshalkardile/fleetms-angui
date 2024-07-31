import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})
export class CountryComponent implements OnInit {
  countries: any[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.fetchCountries();
  }

  fetchCountries() {
    this.httpClient.get<any[]>('http://localhost:8080/api/countries').subscribe({
      next: (data) => {
        this.countries = data;
        console.log('Countries fetched:', this.countries);
      },
      error: (error) => {
        console.error('Error fetching countries:', error);
      }
    });
  }
}
