export default {
  Query: {
    students: async (parent, args, { models: { Student } }) => {
      return await Student.find({});
    },
    student: async (parent, { id }, { models: { Student } }) => {
      return await Student.findById(id);
    },
  },

  Mutation: {
    createStudent: async (parent, { student }, { models: { Student } }) => {
      return await Student.create(student);
    },
    deleteStudent: async (parent, { id }, { models: { Student } }) => {
      return await Student.findByIdAndRemove(id);
    },
    updateStudent: async (parent, { id, student }, { models: { Student } }) => {
      return await Student.findByIdAndUpdate(id, student, {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
        runValidators: true,
        runSettersOnQuery: true,
      });
    },
  },

  Student: {
    id: root => root._id || root.id,
  },
};
