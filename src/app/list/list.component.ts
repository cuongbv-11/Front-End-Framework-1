import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  listProject: any;

  constructor(private cuongbv: HttpClient) {}

  ngOnInit(): void {
    const apiUrl = 'http://localhost:3000/products';
    this.cuongbv.get(apiUrl).subscribe((res) => {
      this.listProject = res;
    });
  }

  confirmDelete(id: number): void {
    const confirmed = confirm('ban co muon xoa khong');
    if (confirmed) {
      this.listProject = this.listProject.filter(
        (project: any) => project.id !== id
      );
    }
  }
}
