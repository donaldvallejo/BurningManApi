# Memories from the dust
[Click to visit the site.](https://www.google.com/)

# heroku links
https://memoriesfromthedust.herokuapp.com/ | https://git.heroku.com/memoriesfromthedust.git

## View the repo
[Click to visit the repo.](https://github.com/donaldvallejo/BurningManApi.git)

## OR view the repo in Fancy vscode format
[Fancy.](https://github1s.com/donaldvallejo/BurningManApi.git)

## Docsify
docsify init ./docs
docsify serve docs 

<br>
`memories from the dust` is an API for finding and recording your times on la playa.
<br>

>When going to "The BURN" many details can be missed or forgotten. this allows a way to relive those details again.

 ## Names

 ### Endpoints

 Request | Endpoint | Description
 ----------- | ----------- | -----------
 `GET` | / | Returns a list of all the tables and their orders.
 `GET` | /:id | Returns a single table and its associated order.
 `POST` | /new | Creates a post.
 `PUT` | /:id | Updates a post.
 `DELETE` | /:id | Deletes a post.

 ### View ALL Tables

GET`http://localhost:3001/`<br><br>

```javascript
Response: Success (200)
[
    {
        "_id": "609e02a6acd1704e3315c457",
        "name": "Donny",
        "created_at": "2021-05-14T04:55:02.473Z",
        "updatedAt": "2021-05-14T05:15:36.405Z",
        "__v": 0
    }
```
### Create New Table

POST`http://localhost:3001/new`<br><br>

Data | Key | Type
---- | --- | ----
name | `"Donny"` | str

> Returns the name

### Update Table

PUT`http://localhost:3001/:id`<br><br>
*> make sure you paste the id from the data base after /.*

Data | Key | Type
---- | --- | ----
name | `"Will"` | str

> Returns the updated name

### Delete Table

DELETE`http://localhost:3001/:id`<br><br>
*> make sure you paste the id from the data base after /.*

Data | Key | Type
---- | --- | ----
name | `""` | str

> Returns the deleted name
