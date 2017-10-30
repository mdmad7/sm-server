// Define your types here.
export default `
  type Teacher {
    id: ID!
    firstName: String!
    lastName: String!
    otherName: String!
    email: String!
    password: String!
  }

  input InputTeacher {
    firstName: String
    lastName: String
    otherName: String
    email: String
    password: String
  }

  type Query {
    teachers: [Teacher!]!
    teacher(id: ID!): Teacher
  }

  type Mutation {
    createTeacher(teacher: InputTeacher!): Teacher
    updateTeacher(id: ID!, teacher: InputTeacher): Teacher
    deleteTeacher(id: ID!): Teacher
  }
`;
