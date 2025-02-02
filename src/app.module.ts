import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
// import { ScheduleModule } from '@nestjs/schedule';
import { DropModule } from './dropsign/dropsign.module';
import { Document } from './dropsign/dropsign.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), 
    // ScheduleModule.forRoot(), 
    DropModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432', 10), 
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASS || 'password',
      database: process.env.DB_NAME || 'signing_db',
      entities: [Document],
      synchronize: true,
      logging: true,
    }),
    DropModule,
  ],
})
export class AppModule implements OnModuleInit {
  onModuleInit() {
    console.log('Database connection successfully ');
  }
}

export default AppModule; 
