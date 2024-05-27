class School {
  name: string;
  students: student[] = [];
  addStudent(studentObject: student) {
    this.students.push(studentObject);
  }
  constructor(name: string) {
    this.name = name;
  }
}

class student {
  name: string;
  age: number;
  schoolName: string;

  constructor(name: string, age: number, schoolName: string) {
    this.name = name;
    this.age = age;
    this.schoolName = schoolName;
  }
}

class teacher {
  name: string;
  age: number;
  schoolName: string;

  constructor(name: string, age: number, schoolName: string) {
    this.name = name;
    this.age = age;
    this.schoolName = schoolName;
  }
}

// School
let school1 = new School("Mama Baby Care");
let school2 = new School("Happy Home");

// Student
let s1 = new student("Hafsa", 11, school1.name);
let s2 = new student("Iqra", 15, school2.name);
let s3 = new student("Zain", 18, school2.name);

// Teacher
let t1 = new teacher("Hamzah", 25, school1.name);
let t2 = new teacher("Ubaid", 27, school2.name);
let t3 = new teacher("Asharib", 22, school2.name);

school1.addStudent(s1);
school2.addStudent(s2);
school2.addStudent(s3);

console.log(t1);
console.log(t2);
console.log(t3);
