# Zadanie rekrutacyjne

## Uruchamianie - Docker


```bash
$ MESSAGES_AMOUNT=1000 docker-compose up (amount określa ile wiadomości ma zostać wygenerowanych, domyślnie 1000)
 (aplikacja będzie dostępna pod adresem http://localhost:3000/)
```


## Uruchamianie - Node

```bash
# setup backend
$ cd backend 
$ npm i && npm run start --amount=1000 (amount określa ile wiadomości ma zostać wygenerowanych, domyślnie 1000)

# setup frontend
$ npm i && npm run dev 
```
