import { ApiError } from './errors.mjs';

export function apiErrorHandler(err, res) {
  if (err instanceof ApiError) {
    res.status(err.code).json(err.message);
    return;
  }
  res.status('400').json('bad request');
  res.status('401').json('invalid token');
  res.status('404').json('info not found');
  res.status('500').json('something went wrong');
}
