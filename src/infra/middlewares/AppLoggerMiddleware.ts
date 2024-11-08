import { Injectable, Logger, NestMiddleware } from '@nestjs/common'

import { NextFunction, Request, Response } from 'express'

@Injectable()
export class AppLoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP')

  use(request: Request, response: Response, next: NextFunction): void {
    const { ip, method, baseUrl: url, body } = request

    const userAgent = request.get('user-agent') || ''

    response.on('close', () => {
      const { statusCode } = response
      const contentLength = response.get('content-length')

      this.logger.log(`${method} ${ip}${url} || statusCode: ${statusCode} || contentLength: ${contentLength} || userAgent: ${userAgent}`)
      if (body)
        this.logger.log(`Body used : `, body)
    })

    next()
  }
}
