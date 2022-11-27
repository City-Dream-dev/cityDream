# Frontend

#### Dependencies
| Name       | Current Version |
|:-----------|:---------------:|
| npm        |     8.11.0      |
| node       |     16.16.0     |
| next       |     12.2.2      |
| react      |     18.2.0      |
| react-dom  |     18.2.0      |
| typescript |      4.7.4      |


#### Install dependencies
> All commands need to run in the ``frontend`` directory

```bash
npm install
```

Add `.env` file in the root of the folder
```
FACEBOOK_ID=000000000000000
FACEBOOK_SECRET=00000000000000000000000000000000
```

#### Run dev server

```bash
npm run dev
```

### Deployment
#### Set aws credentials to ~/.aws/credentials
```
[citydream]
aws_access_key_id=[AWS_ACCESS_KEY_ID]
aws_secret_access_key=[AWS_SECRET_ACCESS_KEY]
```

#### Install terraform for next
```bash
npm i -g tf-next@canary
```

#### Build
```bash
tf-next build
```
#### Deploy
```bash
AWS_PROFILE=citydream tf-next deploy --endpoint https://o03nrlkp22.execute-api.eu-central-1.amazonaws.com
```

#### Set alias
```bash
AWS_PROFILE=citydream tf-next alias set www.citydream.pp.ua https://< deployment-id >.citydream.pp.ua
```

### Clean up

#### Remove alias
```bash
AWS_PROFILE=citydream tf-next alias rm www.citydream.pp.ua
```

#### Deployment list
```bash
AWS_PROFILE=citydream tf-next deployment ls
```

#### Deployment id list
```bash
AWS_PROFILE=citydream tf-next alias ls < deployment-id >
```

#### Remove deployment id
```bash
AWS_PROFILE=citydream tf-next deployment rm < deployment-id >
```
