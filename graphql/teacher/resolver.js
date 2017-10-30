export default {
  Query: {
    teachers: async (parent, args, { models: { Teacher } }) => {
      return await Teacher.find({});
    },
    teacher: async (parent, { id }, { models: { Teacher } }) => {
      return await Teacher.findById(id);
    },
  },

  Mutation: {
    createTeacher: async (parent, { teacher }, { models: { Teacher } }) => {
      return await Teacher.create(teacher);
    },
    deleteTeacher: async (parent, { id }, { models: { Teacher } }) => {
      return await Teacher.findByIdAndRemove(id);
    },
    updateTeacher: async (parent, { id, teacher }, { models: { Teacher } }) => {
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
