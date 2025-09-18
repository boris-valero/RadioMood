# RadioMood
Plateforme de webradios adaptatives

* [Conception du projet](https://github.com/boris-valero/RadioMood/tree/main/conception)
* [Frontend du projet](https://github.com/boris-valero/RadioMood/tree/main/frontend)
* [Backend du projet](https://github.com/boris-valero/RadioMood/tree/main/backend)

### Architecture en couches
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │    Backend      │    │      B.D.D      |
│   (Vue.js)      │◄──►│   (Express)     │◄──►│     (MySql)     │
│   Port: 5173    │    │   Port: 3000    │    │   Port : 3306   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                   │
                       ┌─────────────────┐
                       │   phpMyAdmin    │
                       │   Port: 8080    │
                       └─────────────────┘
```