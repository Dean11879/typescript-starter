import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Event } from './event';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

//   @ManyToMany(() => Event)
//   @JoinTable()
//   events: Event[];
}
