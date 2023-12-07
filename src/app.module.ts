import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Event } from './event.entity';
import { User } from './user.entity';
import { EventModule } from './event.module';
import { UserModule } from './user.module';
import { EventService } from './event.service';
import { UserService } from './user.service';
import { EventController } from './event.controller';
import { UserController } from './user.controller';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      // database configuration here
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'Qiannian',
      password: '123456',
      database: 'event_database',
      entities: [Event, User],
      synchronize: true,
    }),

    EventModule,
    UserModule,
  ],
  controllers: [AppController, EventController, UserController],
  providers: [AppService, EventService, UserService],
})
export class AppModule {}

