export class DefaultResponse {
  body: any;
  status: any;

  constructor(body?, status?) {
    this.body = body;
    this.status = status;
  }

  ok(body?) {
    this.body = body|| this.body;
    this.status = 200;
    return this;
  }

  error(body?) {
    this.body = body|| this.body;
    this.status = 404;
    return this;
  }
}