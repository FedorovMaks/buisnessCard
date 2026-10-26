import { unwrapResolverError } from '@apollo/server/errors';
import { HttpException, HttpStatus } from '@nestjs/common';
import type { GraphQLFormattedError } from 'graphql';

const ERROR_CODES = new Map<number, string>([
  [HttpStatus.BAD_REQUEST, 'BAD_REQUEST'],
  [HttpStatus.UNAUTHORIZED, 'UNAUTHENTICATED'],
  [HttpStatus.FORBIDDEN, 'FORBIDDEN'],
  [HttpStatus.NOT_FOUND, 'NOT_FOUND'],
]);

export function formatError(
  formatted: GraphQLFormattedError,
  error: unknown,
): GraphQLFormattedError {
  const original = unwrapResolverError(error);

  if (!(original instanceof HttpException)) {
    return formatted;
  }

  return {
    message: original.message,
    locations: formatted.locations,
    path: formatted.path,
    extensions: { code: ERROR_CODES.get(original.getStatus()) ?? 'INTERNAL_SERVER_ERROR' },
  };
}
