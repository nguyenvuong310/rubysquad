CREATE TABLE IF NOT EXISTS Attends (
  id SERIAL PRIMARY KEY,
  student_id INTEGER,
  class_id INTEGER,
  score INTEGER,
  action VARCHAR(255),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS Dependents (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  relationship VARCHAR(255),
  sex BOOLEAN,
  student_id INTEGER,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS Facultys (
  faculty_id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255),
  address VARCHAR(255),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS InChargeOfs (
  id SERIAL PRIMARY KEY,
  class_id INTEGER,
  lecturer_id INTEGER,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS Lecturers (
  id INTEGER PRIMARY KEY,
  level VARCHAR(255),
  position VARCHAR(255),
  supervisor_id INTEGER,
  faculty_id INTEGER,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS Students (
  id INTEGER PRIMARY KEY,
  yearStartLearn DATE,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS Users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255),
  birthday DATE,
  address VARCHAR(255),
  sex BOOLEAN,
  faculty_id INTEGER,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS RegisterPharse1 (
  id SERIAL PRIMARY KEY,
  student_id INTEGER,
  subject_code VARCHAR(255),
  semester_id INTEGER,
  action VARCHAR(255),
  time TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS Prerequisite_Subejct (
  id SERIAL PRIMARY KEY,
  subject_code VARCHAR(255),
  prerequisite_subject_code VARCHAR(255),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS Classes (
  class_id SERIAL PRIMARY KEY,
  class_name INTEGER,
  is_lab BOOLEAN,
  max_slot INTEGER,
  subject_code VARCHAR(255),
  semester_id INTEGER,
  location VARCHAR(255),
  day INTEGER,
  lesson_start INTEGER,
  duration INTEGER,
  timestart INTEGER,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS Subjects (
  subject_name VARCHAR(255) ,
  subject_code VARCHAR(255) PRIMARY KEY,
  study_period INTEGER,
  credits INTEGER,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS Teach(
  id SERIAL PRIMARY KEY,
  subject_code VARCHAR(255),
  lecturer_id INTEGER,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS Open_at (
  id SERIAL PRIMARY KEY,
  subject_code VARCHAR(255),
  semester_id INTEGER,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL
);
CREATE TABLE IF NOT EXISTS Semester (
  id SERIAL PRIMARY KEY,
  semester_id INTEGER,
  timestart TIMESTAMP NOT NULL,
  semester_name VARCHAR(255),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL
);



