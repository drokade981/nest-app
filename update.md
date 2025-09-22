Create user module and tweet module
 
## command for create module

```bash
$ next g module tweet
```
it will create a tweet folder inside "src" folder with tweet.module.ts file and it will be imported in app.module.ts

## command for create controller

```bash
$ nest g controller tweet
```

add --no-spec  for no spec file
Create user service and use it in controller

## create DTO

add DTO validation
install class-validator
import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

to convert DTO validator to intance of class we install 
 install class-transformer 

connect DTO to action method

7----
import create-user.dto in update.user.dto and make all parameter  optional using mapped-types

8-----
## command for create service

```bash
$ nest g service tweet
```
it will create tweet.service.ts in src/tweet folder and link it with controller in tweet.module.ts

inter dependency injection
we have to export the service in same module and inport the module not service in another module and inject it in constructor method of service and use it's function in service or in controller

-- circular dependency 
use forward ref for circular dependancy in module and inject in service construct method

constructor(@Inject(forwardRef(() => AuthService))private readonly authService: AuthService) {}

```bash
$ npm install typeorm @nestjs/typeorm pg
```
install pg for postgress database