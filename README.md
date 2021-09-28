# SIGINT Reproduction Repo

The application will not exit properly when receiving SIGINT while active http requests are being made. This example shows prometheus polling the server
and when a SIGINT is received, the foreground returns to the terminal prompt, but the process remains alive and continues to output logging info (via morgan)
to the terminal

## Starting The App

Docker is required to start prometheus. Use docker-compose against the file for your operating system (windows not included)

### Example

```bash
docker-compose -f docker-compose.darwin.yml up -d
```

will start prometheus.

Start the nest process via

```bash
yarn start
```

and send a SIGINT whenever to see the behavior.

## Output

```bash
nest-sigint-no-exit on  master [!?] via  v14.15.1 on ☁️  (us-east-1) took 3s
❯ yarn start
yarn run v1.22.10
$ nest start
[Nest] 9172  - 09/28/2021, 11:05:07 AM     LOG [NestFactory] Starting Nest application...
[Nest] 9172  - 09/28/2021, 11:05:07 AM     LOG [InstanceLoader] AppModule dependencies initialized +26ms
[Nest] 9172  - 09/28/2021, 11:05:07 AM     LOG [RoutesResolver] AppController {/}: +5ms
[Nest] 9172  - 09/28/2021, 11:05:07 AM     LOG [RouterExplorer] Mapped {/, GET} route +2ms
[Nest] 9172  - 09/28/2021, 11:05:07 AM     LOG [NestApplication] Nest application successfully started +2ms
[Nest] 9172  - 09/28/2021, 11:06:57 AM     LOG GET /metrics 404 2.433 ms - 70

^C

nest-sigint-no-exit on  master [!?] via  v14.15.1 on ☁️  (us-east-1) took 1m56s
❯ [Nest] 9172  - 09/28/2021, 11:07:02 AM     LOG GET /metrics 404 0.452 ms - 70
```
