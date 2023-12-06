import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './event';
import { User } from './user';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // Your database configuration here
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'Qiannian',
      password: '123456',
      database: 'event_database',
      entities: [Event, User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Event, User]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
