// event.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './event.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    public readonly eventsRepository: Repository<Event>,
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
