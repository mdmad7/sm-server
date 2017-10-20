import { makeExecutableSchema } from 'graphql-tools';

import teacherResolver from './teacher/resolvers';
import studentResolver from './student/resolvers';
import Teacher from './teacher/typeDefs';
import Student from './student/typeDefs';

const RootQuery = `
  type RootQuery {
    teachers: [Teacher!]!
    teacher(id: ID!): Teacher
    students: [Student!]!
    student(id: ID!): Student  
  }
`;
const RootMutation = `
  type RootMutation {
  createTeacher(teacher: InputTeacher!): Teacher
  updateTeacher(id: ID!, teacher: InputTeacher): Teacher
  deleteTeacher(id: ID!): Teacher
  createStudent(student: InputStudent!): Student
  updateStudent(id: ID!, student: InputStudent): Student
  deleteStudent(id: ID!): Student
}
`;

const SchemaDefinition = `
  schema {
    query: RootQuery
    mutation: RootMutation
  }
`;

export default makeExecutableSchema({
  typeDefs: [SchemaDefinition, RootQuery, RootMutation, Teacher, Student],
  resolvers: { ...teacherResolver, ...studentResolver },
});
