import { Module, Global } from '@nestjs/common';
<<<<<<< HEAD
import { BetterAuthModule } from './better-auth.module';
=======
import { BetterAuthModule, BETTER_AUTH } from './better-auth.module';
>>>>>>> 05d6582edfc8790a94d649f0902b455499488925
import { AuthService } from './auth.service';
import { RoleResolverService } from './role-resolver.service';

@Global()
@Module({
  imports: [BetterAuthModule],
  providers: [AuthService, RoleResolverService],
<<<<<<< HEAD
  exports: [AuthService, RoleResolverService, BetterAuthModule],
=======
  exports: [AuthService, RoleResolverService, BETTER_AUTH],
>>>>>>> 05d6582edfc8790a94d649f0902b455499488925
})
export class AuthModule {}