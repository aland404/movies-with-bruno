import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { Logger, ValidationPipe, VersioningType } from '@nestjs/common'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('')
  app.useGlobalPipes(new ValidationPipe())

  const config = new DocumentBuilder()
    .setTitle('Movies')
    .setDescription(`Cette API permet de manipuler des films.`)
    .setVersion('1.0.0')
    .build()

  app.enableVersioning({ type: VersioningType.URI })
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)
  app.enableCors()
  await app.listen(3000)

  const logger = new Logger('bootstrap')
  logger.log(`Listening on ${await app.getUrl()}/movies`)
  logger.log(`API documentation available on ${await app.getUrl()}/api`)
}
bootstrap()
