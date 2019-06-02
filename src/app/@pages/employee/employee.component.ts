import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource} from '@angular/material';
import {NgForm} from '@angular/forms';
import { EMPLOYEE_DATA } from 'src/app/@data/EMPLOYEE_DATA';
import { EMPLOYEE } from 'src/app/@data/EMPLOYEE';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  // EMPLOYEE_DATA= [
  //   {seqno: 1, name: 'Nguyen Tuan Anh', sex: 'Male', employeeid: 'RD0001', age: '26', role: ' Electrical Engineer', joindate: 'Dec 2016', exp: '2years 6month' },
  //   {seqno: 2, name: 'Dang Vien Du', sex: 'Male', employeeid: 'RD0002', age: '25', role: ' Mechanical Engineer', joindate: 'Dec 2016', exp: '2years 6month'},
  //   {seqno: 3, name: 'Dao Duc Thang', sex: 'Male', employeeid: 'RD0008', age: '26', role: ' Mechanical Engineer', joindate: 'Dec 2016', exp: '2years 6month'},
  //   {seqno: 4, name: 'Nguyen Phan Truong Khang', sex: 'Male', employeeid: 'RD0004', age: '26', role: ' Mechanical Engineer', joindate: 'Dec 2016', exp: '2years 6month'},
  //   {seqno: 5, name: 'Nguyen Dang Khoa', sex: 'Male', employeeid: 'RD0005', age: '26', role: ' Mechanical Engineer', joindate: 'Dec 2016', exp: '2years 6month'},
  //   {seqno: 6, name: 'Tran Long', sex: 'Male', employeeid: 'RD0006', age: '26', role: ' Mechanical Engineer', joindate: 'Dec 2016', exp: '2years 6month'},
  //   {seqno: 7, name: 'Chu Minh Huy', sex: 'Male', employeeid: 'RD0003', age: '26', role: ' Electrical Engineer', joindate: 'Dec 2016', exp: '2years 6month'},
  //   {seqno: 8, name: 'Nguyen Hoang Phat', sex: 'Male', employeeid: 'RD0007', age: '26', role: ' Mechanical Engineer', joindate: 'Dec 2016', exp: '2years 6month'},
  //   {seqno: 9, name: 'Le Trong Tinh', sex: 'Male', employeeid: 'RD0011', age: '26', role: ' Electrical Engineer', joindate: 'Oct 2017', exp: '1years 6month'},
  //   {seqno: 10, name: 'Huynh Thu Thao', sex: 'Female', employeeid: 'RD0010', age: '26', role: ' Electrical Engineer', joindate: 'Oct 2017', exp: '1years 6month'},
  //   {seqno: 11, name: 'Vo Thanh Xuan', sex: 'Male', employeeid: 'RD0024', age: '26', role: ' Mechanical Engineer', joindate: 'Oct 2017', exp: '1years 6month'},
  //   {seqno: 12, name: 'Dinh Huu Ngoc Son', sex: 'Male', employeeid: 'RD0015', age: '26', role: ' Mechanical Engineer', joindate: 'Oct 2017', exp: '1years 6month'},
  //   {seqno: 13, name: 'Pham Duc Thien', sex: 'Male', employeeid: 'RD0023', age: '26', role: ' Electrical Engineer', joindate: 'Oct 2017', exp: '1years 6month'},
  //   {seqno: 14, name: 'Truong Chi Dung', sex: 'Male', employeeid: 'RD0013', age: '26', role: ' Electrical Engineer', joindate: 'Oct 2017', exp: '1years 6month'},
  //   {seqno: 15, name: 'Mac Vien Ban', sex: 'Male', employeeid: 'RD0022', age: '26', role: ' Mechanical Engineer', joindate: 'Oct 2017', exp: '1years 6month'},
  //   {seqno: 16, name: 'Nguyen Minh Nhut', sex: 'Male', employeeid: 'RD0020', age: '26', role: ' Electrical Engineer', joindate: 'Oct 2017', exp: '1years 6month'},
  //   {seqno: 17, name: 'Ho Ngoc Duc', sex: 'Male', employeeid: 'RD0012', age: '26', role: ' Mechanical Engineer', joindate: 'Oct 2017', exp: '1years 6month'},
  //   {seqno: 18, name: 'Bui Dinh Bao', sex: 'Male', employeeid: 'RD0021', age: '26', role: ' Mechanical Engineer', joindate: 'Oct 2017', exp: '1years 6month'},
  //   {seqno: 19, name: 'Tran Nhu Thai', sex: 'Male', employeeid: 'RD0009', age: '26', role: ' Electrical Engineer', joindate: 'Oct 2017', exp: '1years 6month'},
  //   {seqno: 20, name: 'Hoang Dinh Nguyen', sex: 'Male', employeeid: 'RD0014', age: '26', role: ' Electrical Engineer', joindate: 'Oct 2017', exp: '1years 6month'},
  //   {seqno: 21, name: 'Dang Quoc Anh', sex: 'Male', employeeid: 'RD0018', age: '26', role: ' Mold Engineer', joindate: 'Oct 2017', exp: '1years 6month'},
  //   {seqno: 22, name: 'Bui Anh Tuan', sex: 'Male', employeeid: 'RD0019', age: '26', role: ' Mold Engineer', joindate: 'Oct 2017', exp: '1years 6month'},
  //   {seqno: 23, name: 'Tieu Van Tan', sex: 'Male', employeeid: 'RD0017', age: '26', role: ' Mold Engineer', joindate: 'Oct 2017', exp: '1years 6month'},
  //   {seqno: 24, name: 'Huynh Thanh Binh', sex: 'Male', employeeid: 'RD0016', age: '26', role: ' Mold Engineer', joindate: 'Oct 2017', exp: '1years 6month'}
  // ];

  addEmployee(newEmployee: NgForm){
    console.log(newEmployee.value);
    // this.EMPLOYEE_DATA.push (newEmployee.value);
    EMPLOYEE_DATA.push ({seqno: 25, name: 'Huynhasdad Thsad Binh', sex: 'Male', employeeid: 'RD0016', age: '26', role: ' Mold Engineer', joindate: 'Oct 2017', exp: '1years 6month'});
    this.ngOnInit;
  }

  displayedColumns: string[] = ['seqno', 'name', 'employeeid', 'role', 'joindate', 'age', 'sex', 'exp' ];
  dataSource = new MatTableDataSource(EMPLOYEE_DATA);
  

  constructor(private changeDetectorRefs: ChangeDetectorRef) { }
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // this.addEmployee;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  newseqno = this.dataSource.data.length + 1;

}

