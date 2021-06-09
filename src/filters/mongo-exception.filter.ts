import { ArgumentsHost, Catch, ConflictException, ExceptionFilter } from '@nestjs/common';
import { MongoError } from 'mongodb';
import { Request, Response } from 'express';

@Catch(MongoError)
export class MongoExceptionFilter implements ExceptionFilter {
  catch(exception: MongoError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    
    switch (exception.code) {
      case 11000:
        response
        .status(400)
        .json({
          statusCode: status,
          timestamp: new Date().toISOString(),
          path: request.url,
          error_message: exception.message
        });
    }

  }
}