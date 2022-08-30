export class ApiError {
  constructor(code, message) {
    this.code = code;
    this.message = message;
  }
  static badRequest(msg) {
    return new ApiError('400', msg);
  }
  static invalidToken(msg) {
    return new ApiError('401', msg);
  }
  static notFound(msg) {
    return new ApiError('404', msg);
  }
  static requests(msg) {
    return new ApiError('429', msg);
  }
  static internalError(msg) {
    return new ApiError('500', msg);
  }
}
