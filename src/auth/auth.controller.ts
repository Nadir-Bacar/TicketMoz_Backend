import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/loginDto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  async login(@Body() loginData: LoginDto) {
    return this.authService.login(loginData);
  }

  @Post('verify-user')
  verifyUser(@Body() body: { email: string }) {
    return this.authService.verifyUser(body.email);
  }

  @Post('mail-user')
  mailUser(@Body() body: { email: string }) {
    return this.authService.mailRecover(body.email);
  }

  @Post('reset-password')
  resetPAssword(@Body() body: { email: string; password: string }) {
    return this.authService.resetPassword(body.email, body.password);
  }
}
