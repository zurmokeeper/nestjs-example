import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';   //引入文件

// 最后需要把TestModule 加入到app.module.ts 的配置里
@Module({
  imports: [TestModule],     // 加到这里来
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
