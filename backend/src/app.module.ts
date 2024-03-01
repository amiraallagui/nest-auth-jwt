import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { FilesModule } from './files/files.module';
import { JwtService } from '@nestjs/jwt';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthModule, FilesModule, UserModule, PrismaModule],
  controllers: [],
  providers: [JwtService],
})
export class AppModule {}
