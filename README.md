# RadioMood
Plateforme de webradios adaptatives

* [Conception du projet](https://github.com/boris-valero/RadioMood/tree/main/conception)
* [Frontend du projet](https://github.com/boris-valero/RadioMood/tree/main/frontend)
* [Backend du projet](https://github.com/boris-valero/RadioMood/tree/main/backend)

### Architecture en couches
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │    Backend      │    │   Base de       │
│   (Vue.js)      │◄──►│   (Express)     │◄──►│   données       │
│   Port: 5173    │    │   Port: 3000    │    │   (MySQL)       │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                   │
                       ┌─────────────────┐
                       │   phpMyAdmin    │
                       │   Port: 8080    │
                       └─────────────────┘
```