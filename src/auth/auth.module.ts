import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {UsersModule} from "../users/users.module";
import {JwtModule} from "@nestjs/jwt";

@Module({
  imports: [
      UsersModule,
      JwtModule.register({
        global: true,
        secret: 'temporary_secret_to_test',
        signOptions: { expiresIn: '10s' },
      })
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService]
})
export class AuthModule {}
