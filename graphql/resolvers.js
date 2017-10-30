import { mergeResolvers } from 'merge-graphql-schemas';
import teacherResolver from './teacher/resolver';
import studentResolver from './student/resolver';

const resolvers = [teacherResolver, studentResolver];

export default mergeResolvers(resolvers);
