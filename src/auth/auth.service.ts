import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/user.entity';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private usersService: UserService,
    private jwtService: JwtService
  ) {}
  
  
  async validateUser(name: string, password: string):Promise<any> {
    
    const user = await this.usersService.findByUsername(name);

    if (!user) {
      return null;}
      
      if (user && user.password==password) {
        return user;
    }
   return null;
    };
    async generateToken(user: any){
      const payload = { "username": user.name, "sub": user.id };
      return {
        access_token: this.jwtService.sign(payload),
    };
    };
  };
 
