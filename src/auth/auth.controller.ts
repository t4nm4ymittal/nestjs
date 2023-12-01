import { Controller, Post,Request,UseGuards, Body, UnauthorizedException,HttpCode,HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  
  @Post('login')
  async login(@Body() { username, password }): Promise< any> {
    const user = await this.authService.validateUser(username, password);
    
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return await this.authService.generateToken(user);

    
  }
    
  
}

