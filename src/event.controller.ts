// event.controller.ts
import { Controller, Get, Post, Param, Delete, Body } from '@nestjs/common';
import { EventService } from './event.service';
import { Event } from './event.entity';

@Controller('events')
export class EventController {
  constructor(
    private readonly eventService: EventService,
  ) {}

  @Post()
  create(@Body() event: Event): Promise<Event> {
    return this.eventService.create(event);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Event> {
    return this.eventService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.eventService.remove(+id);
  }

  @Post('mergeAll')
  mergeAll(): Promise<void> {
    return this.eventService.mergeAll();
  }
}
