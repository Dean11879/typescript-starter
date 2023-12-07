import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Event } from './event.entity';
import { User } from './user.entity';
import { EventService } from './event.service';
import { UserService } from './user.service';

@Controller('app')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly eventService: EventService,
    private readonly userService: UserService,
  ) {}


  // Event operations
  async createEvent(event: Event): Promise<Event> {
    return this.eventService.create(event);
  }

  async findEvent(id: number): Promise<Event> {
    return this.eventService.findOne(id);
  }

  async removeEvent(id: number): Promise<void> {
    return this.eventService.remove(id);
  }

  async mergeAllEvents(): Promise<void> {
    return this.eventService.mergeAll();
  }

  // User operations
  async createUser(user: User): Promise<User> {
    return this.userService.create(user);
  }

  async findAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  async findUser(id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  async removeUser(id: number): Promise<void> {
    return this.userService.remove(id);
  }
}
