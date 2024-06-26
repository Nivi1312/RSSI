// src/typeorm.config.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Nivikeethi@1',
  database: 'rssi',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true, // Don't use in production, use migrations instead
};
