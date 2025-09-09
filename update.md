Create user module and tweet module
 
## command for create module

```bash
$ next g module tweet
```
it will create a tweet folder inside "src" folder with tweet.module.ts file and it will be imported in app.module.ts

## command for create controller

```bash
$ next g controller tweet
```

Create user service abd use it in controller

## create DTO

add DTO validation
install class-validator
import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

to convert DTO validator to intance of class we install 
 install class-transformer 

connect DTO to action method

7----
import create-user.dto in update.user.dto and make all parameter optional using mapped-types