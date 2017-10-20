import Student from './model';

const studentResolver = {
  RootQuery: {
    students: async () => {
      return await Student.find({});
    },
    student: async (_, { id }) => {
      return await Student.findById(id);
    },
  },
  RootMutation: {
    createStudent: async (_, { student }) => {
      return await Student.create(Student);
    },
    deleteStudent: async (_, { id }) => {
      return await Student.findByIdAndRemove(id);
    },
    updateStudent: async (_, { id, student }) => {
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

export default studentResolver;
