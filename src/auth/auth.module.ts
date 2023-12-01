// import { Module } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { UsersModule } from '../users/users.module';
// import { AuthController } from './auth.controller';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { User } from '../users/user.entity';
// import { UserService } from 'src/users/users.service';
// import { JwtModule, JwtService } from '@nestjs/jwt';
// import { LocalStrategy } from './local.auth';
// import { PassportModule } from '@nestjs/passport';
// @Module({
  
//   controllers: [AuthController],
//   providers: [AuthService,UserService,JwtService,LocalStrategy],
  
//   imports:[TypeOrmModule.forFeature([User]),UsersModule,PassportModule,JwtModule.register({
//     secret: 'secretKey',
//     signOptions: { expiresIn: '60s' },
//   }),]
// })
// export class AuthModule {}


import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
import { UserService } from 'src/users/users.service';
import { JwtModule } from '@nestjs/jwt'; // Import JwtModule without JwtService
import { LocalStrategy } from './local.auth';
import { PassportModule } from '@nestjs/passport';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserService, LocalStrategy],
  imports: [
    TypeOrmModule.forFeature([User]),
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'secretKey',
      signOptions: { expiresIn: '60s' },
    }),
  ],
})
export class AuthModule {}
