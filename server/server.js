const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 8080;
const cors = require('cors');
const fs = require('fs');
const uuid = require('uuid');
const entriesRoute = require('./routes/entries');
const tagsRoute = require('./routes/tags');

const knex = require('knex')({
    client: 'mysql',
    connection: {
      host     : '127.0.0.1',
      user     : 'root',
      password : 'rootroot',
      database : 'thoughtpenny',
      charset  : 'utf8'
    }
    })
    const bookshelf = require('bookshelf')(knex)
    
    // const User = bookshelf.model('User', {
    //     tableName: 'users',
    //     posts() {
    //     return this.hasMany(Posts)
    //     }
    // })
    
    const Entry = bookshelf.model('Entry', {
        tableName: 'entries',
        tags() {
        return this.belongsToMany(Tag)
        }
    })
    
    const Tag = bookshelf.model('Tag', {
        tableName: 'tags'
    })
    
    // new User({id: 1}).fetch({withRelated: ['posts.tags']}).then((user) => {
    //     console.log(user.related('posts').toJSON())
    // }).catch((error) => {
    //     console.error(error)
    // })

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/entries', entriesRoute);
app.use('/tags', tagsRoute);



app.listen(port, () => {
    console.log(`Listening on ${port}`);
});
