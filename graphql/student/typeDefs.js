// Define your types here.
export default `
  type Student {
    id: ID!
    firstName: String!
    lastName: String!
    otherName: String!
    email: String!
    password: String!
  }

  input InputStudent {
    firstName: String
    lastName: String
    otherName: String
    email: String
    password: String
  }

  type Query {
    students: [Student!]!
    student(id: ID!): Student 
  }

  type Mutation {
    createStudent(student: InputStudent!): Student
    updateStudent(id: ID!, student: InputStudent): Student
    deleteStudent(id: ID!): Student
  }
`;
