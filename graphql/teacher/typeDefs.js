// Define your types here.
const Teacher = `
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
`;

export default Teacher;
