import { Body, Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import { AccessTokenGuard } from 'src/auth/guards/access-token.guard';
import { User as UserEntity } from 'src/_gen/prisma-class/user';
import { UpdateUserDto } from './dto/update-user.dto';

interface RequestWithUser extends Request {
  user: {
    sub: string;
  };
}

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // - 'GET /api/users/profile' - 현재 사용자 프로필 조회
  // - 'PATCH /api/users/profile' - 현재 사용자 프로필 업데이트
  @Get('profile')
  @UseGuards(AccessTokenGuard)
  @ApiBearerAuth('access-token')
  @ApiOkResponse({
    description: '코스 수정',
    type: UserEntity,
  })
  getProfile(@Req() req: RequestWithUser) {
    return this.usersService.getProfile(req.user.sub);
  }

  @Patch('profile')
  @UseGuards(AccessTokenGuard)
  @ApiBearerAuth('access-token')
  @ApiOkResponse({
    description: '코스 수정',
    type: UserEntity,
  })
  updateProfile(
    @Req() req: RequestWithUser,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.updateProfile(req.user.sub, updateUserDto);
  }
}
