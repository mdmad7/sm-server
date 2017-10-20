// Define your types here.
const Student = `
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
`;

export default Student;
