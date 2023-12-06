import { Controller, Get, Post, Param, Delete, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Event } from './event';
import { User } from './user';

@Controller('events')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  create(@Body() event: Event): Promise<Event> {
    return this.appService.create(event);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Event> {
    return this.appService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.appService.remove(+id);
  }

  @Post('mergeAll')
  mergeAll(): Promise<void> {
    return this.appService.mergeAll();
  }
}
