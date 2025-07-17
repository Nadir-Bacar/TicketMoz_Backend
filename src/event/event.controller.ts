import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/event-dto';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get()
  getAll() {
    return this.eventService.getAll();
  }

  @Get('dash/:userID')
  getAllDash(@Param('userID') userID: string) {
    return this.eventService.getAllDash(userID);
  }

  @Get('/:id')
  getById(@Param('id') id: string) {
    return this.eventService.getById(id);
  }

  @Get('by-token/:token')
  getByToken(@Param('token') token: string) {
    return this.eventService.getByToken(token);
  }

  @Get('fetch-all-scanners/:eventID')
  getScannersByEvent(@Param('eventID') eventID: string) {
    return this.eventService.getScannersByEvent(eventID);
  }

  @Post('create')
  create(@Body() event: CreateEventDto) {
    return this.eventService.createEvent(event);
  }

  @Put('update/:id')
  updateEvent(@Param('id') id: string, @Body() data: CreateEventDto) {
    return this.updateEvent(id, data);
  }

  @Delete('delete/:id')
  deleteEvent(@Param('id') id: string) {
    return this.eventService.deleteEvent(id);
  }

  @Delete('delete-event/:id')
  delete(@Param('id') id: string) {
    return this.eventService.deleteEvent(id);
  }

  @Delete('delete-all')
  deleteAll() {
    return this.eventService.deleteAll();
  }
}
