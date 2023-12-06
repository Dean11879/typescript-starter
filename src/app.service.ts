import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './event';
import { User } from './user';


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  constructor(
    @InjectRepository(Event)
    private readonly eventsRepository: Repository<Event>,

    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(event: Event): Promise<Event> {
    return this.eventsRepository.save(event);
  }

  async findOne(id: number): Promise<Event> {
    return this.eventsRepository.findOne({ where: { id }, relations: ['invitees'] });
  }

  async remove(id: number): Promise<void> {
    await this.eventsRepository.delete(id);
  }

  async mergeAll(): Promise<void> {
    // Todo: Implement the logic to merge overlapping events here
  }
}
