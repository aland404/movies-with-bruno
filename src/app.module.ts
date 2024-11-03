import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { ModuleMetadata } from '@nestjs/common/interfaces/modules/module-metadata.interface'
import { UsersModule } from './users/users.module'
import { AppLoggerMiddleware } from './infra/middlewares'

import { MovieModule } from './movie/movie.module'

export const appModuleMetadata: ModuleMetadata = {
  imports: [MovieModule, UsersModule],
}

@Module(appModuleMetadata)

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(AppLoggerMiddleware).forRoutes('*')
  }
}
