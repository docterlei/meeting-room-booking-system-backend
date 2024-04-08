import { Controller, Get, SetMetadata } from '@nestjs/common';
import { AppService } from './app.service';
import { RequireLogin,RequirePermission, UserInfo } from "./custom-decorator";
import { User } from './user/entities/user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('aaa')
  @RequireLogin()
  @RequirePermission('ddd')
  aaaa(@UserInfo('username') username:string, @UserInfo() userInfo) {
    console.log(username,'un')
    console.log(userInfo,'ui')
      return 'aaa';
  }



    @Get('bbb')
    bbb() {
        return 'bbb';
    }

}
