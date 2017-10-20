import Teacher from './model';

const teacherResolver = {
  RootQuery: {
    teachers: async () => {
      return await Teacher.find({});
    },
    teacher: async (_, { id }) => {
      return await Teacher.findById(id);
    },
  },
  RootMutation: {
    createTeacher: async (_, { teacher }) => {
      return await Teacher.create(teacher);
    },
    deleteTeacher: async (_, { id }) => {
      return await Teacher.findByIdAndRemove(id);
    },
    updateTeacher: async (_, { id, teacher }) => {
      return await Teacher.findByIdAndUpdate(id, teacher, {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
        runValidators: true,
        runSettersOnQuery: true,
      });
    },
  },
  Teacher: {
    id: root => root._id || root.id,
  },
};

export default teacherResolver;
