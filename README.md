# OERBookr BackEnd

## Welcome

Find the production server at: https://oerbookr.herokuapp.com/

## Tables

### Users
| Column        |     Type      |    Required   |   Unique      |     Key       | 
| ------------- | ------------- | ------------- | ------------- | ------------- |
|     id        |  int          |    yes        | unique        | primary key   |
|  username     | str           |    yes        | unique        |               |
|  password     | str           |    yes        |               |               |


### Routes

##### post:/api/auth/registration </br>
Registers a new user </br>
Example Requirements:
```
{
    "username": "admin",
    "password": "1234678",
}
```

##### get:/api/users </br>
Returns all users

##### post:/api/auth/login </br>
Login user
Example Requirements:
```
{
    "username": "admin",
    "password": "1234678",
}
```


### Books
| Column        |     Endpoint      |    Requires  |
| ------------- | ------------- | ------------- | 
|  get        |  /api/books/       |   -      | 
|  get by Id  |   /api/books/:id   |   id       |     
|     post    | /api/books/        |  title, authors, publisher, license, description, image, avg_rating     |   
|     put     | api/books/:id |       **still working on**     | 
|   delete    | api/book/:id       |    id        |     


Example Requirements:
```
 {
    "title": "The Missing Link: An Introduction to Web Development and Programming",
    "author": "Michael Mendez",
    "publisher": "Open SUNY Textbooks",
    "license": "Creative Commons",
    "description": "Web development is an evolving amalgamation of languages that work in concert to receive, modify, and deliver information between parties using the Internet as a mechanism of delivery.",
    "image": "https://images-na.ssl-images-amazon.com/images/I/41gDcyPiJnL._SX384_BO1,204,203,200_.jpg",
    "avg_rating": 3
  },
```
