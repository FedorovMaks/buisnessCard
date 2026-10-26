import { GraphQLError, GraphQLScalarType, Kind } from 'graphql';

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

function parseDate(value: unknown): Date {
  if (typeof value !== 'string' || !ISO_DATE.test(value) || Number.isNaN(Date.parse(value))) {
    throw new GraphQLError('Date must be a string in YYYY-MM-DD format');
  }

  return new Date(value);
}

export const DateScalar = new GraphQLScalarType<Date, string>({
  name: 'Date',
  description: 'Calendar date in ISO 8601 format (YYYY-MM-DD)',
  serialize(value) {
    if (!(value instanceof Date)) {
      throw new GraphQLError('Date scalar can only serialize Date instances');
    }

    return value.toISOString().slice(0, 10);
  },
  parseValue: parseDate,
  parseLiteral(ast) {
    return parseDate(ast.kind === Kind.STRING ? ast.value : undefined);
  },
});
