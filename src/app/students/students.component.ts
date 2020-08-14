import { Component, OnInit } from '@angular/core';

// ************************* SERVICES ***********************************
import { StudentService } from '../services/student.service';
// ************************* SERVICES ***********************************

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(){

    //Consuming service
    this.studentService.getStudents().subscribe(
      data => {

        console.log(data)


      }, 
      
      error => {   
        console.log(error)
      });
    //Consuming service
  }

}
