import { mergeTypes } from 'merge-graphql-schemas';
import teacherType from './teacher/typeDefs';
import studentType from './student/typeDefs';

const types = [teacherType, studentType];

export default mergeTypes(types);
