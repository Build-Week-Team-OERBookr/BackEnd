const router = require('express').Router();
const db = require('../database/db-config.js');

const Books = require('../models/books-model');

router.get('/', (req, res) => {
    Books.get()
        .then(books => {
            res.status(200).json(books)
        })
        .catch(err => {
            res.status(500).json({ error: 'unable to retrieve all books'})
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Books.getById(id)
    .then(book => {
        res.status(200).json(book)
    })
    .catch(err => {
        res.status(500).json({ error: "unable to retrieve the book by id"})
    })
})

router.post('/', (req, res) => {
    const bookinfo = req.body;
    const { id } = req.params;

        Books.add(bookinfo, id)
            .then(book => {
                res.status(201).json(book);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ error: "unable to add new book"})
            });
    // else {
    //     res.status(400).json({ 
    //         message: "Please check you have all the needed caterogies.",
    //     })
    // }

});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Books.remove(id)
            .then(book => {
                res.status(200).json({message: 'given book via id has been deleted'})
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({error: 'unable to delete book by given id'})
            })
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    Books.updateBook(changes, id)
            .then(book => {
                res.status(200).json(book)
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({error: 'unable to update the book'})
            })
});


module.exports = router;