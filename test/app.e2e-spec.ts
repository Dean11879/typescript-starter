import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from './../src/app.module';
import { INestApplication } from '@nestjs/common';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });


  it('/events (POST) - Create Event', async () => {
    const eventData = {
      title: 'Test Event',
      description: 'This is a test event',
      status: 'TODO',
      startTime: '2023-12-31T18:00:00Z',
      endTime: '2023-12-31T20:00:00Z',
      invitees: [1, 2],
    };

    // Send a POST request to create the event
    const createEventResponse = await request(app.getHttpServer())
      .post('/events')
      .send(eventData)
      .expect(201);

    expect(createEventResponse.body).toHaveProperty('id');
    expect(createEventResponse.body.title).toEqual(eventData.title);
  });
});
