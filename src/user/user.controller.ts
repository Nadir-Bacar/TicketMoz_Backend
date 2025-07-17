import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/all')
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Post('create')
  createUser(@Body() data: CreateUserDto) {
    return this.userService.createUser(data);
  }

  @Get('by-type')
  getUserByType(type: 'comprador' | 'scanner' | 'promotor') {
    return this.userService.getuserByType(type);
  }

  @Delete('delete/all')
  deleteAllUsers() {
    return this.userService.deleteAll();
  }

  @Get('companys')
  getAllCompanys() {
    return this.userService.getAllCompany();
  }

  // Bloquear utilizador
  @Put('block/:id')
  async blockUser(@Param('id') userId: string) {
    return this.userService.blockUser(userId);
  }

  // Desbloquear utilizador
  @Put('unblock/:id')
  async unblockUser(@Param('id') userId: string) {
    return this.userService.unblockUser(userId);
  }

  // Aprovar promotor (verificar empresa)
  @Put('approve-promoter/:id')
  async approvePromoter(@Param('id') userId: string) {
    return this.userService.approvePromoter(userId);
  }
  // @Delete('delete/all-company')
  // deleteAllCompany() {
  //   return this.userService.deleteAllCompany();
  // }

  // @Delete('delete/:id')
  // deleteUser(@Param('id') id: string) {
  //   return this.userService.deleteUser(id);
  // }
}
