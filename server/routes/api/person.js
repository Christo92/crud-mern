const express = require('express');
const personRoutes = express.Router();

// Require Route model in our routes module
let Person = require('../../models/Person');

/** Routes list */

// Get data 
personRoutes.get('/list', async (req, res, next) => {
    try {
        const person = await Person.find({});

        if (!person) {
            return res.status(400).json({ msg: 'There is no persons in database' });
        }

        // Get the result
        res.status(200).json(person);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error (get All)')
    }
});

// Add new person
personRoutes.post('/add', async (req, res, next) => {
    try {
        const person = await Person.create(req.body);

        if (!person) {
            return res.status(400).json({ msg: 'There is no person to add' });
        }

        res.status(200).json(person);

    } catch (err) {
        res.status(500).send('Server Error (post)')
        console.error(err.message);
    }
});

// Edit a person
personRoutes.get('/edit/:id', async (req, res, next) => {
    try {
        const personId = req.params.id;
        const person = await Person.findById(personId);

        if (!person) {
            return res.status(400).json({ msg: 'Not possible to edit' });
        }

        // Get the result
        res.status(200).json(person);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error (edit)')
    }
});

// Update a person
personRoutes.post('/update/:id', async (req, res, next) => {
    try {
        const person = await Person.findById(req.params.id);

        if (!person) {
            return res.status(404).json({ msg: 'data is not found' });
        }

        try {
            person.personName = req.body.personName;
            person.personNickName = req.body.personNickName;
            person.personDescription = req.body.personDescription;

            const personUpdated = await person.save();

            if (!personUpdated) {
                return res.status(400).json({ msg: 'Error with the updating' });
            }

            res.status(200).json('Update Done');

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error (update)')
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error : unable to update the database')
    }
});

// Delete one person
personRoutes.get('/delete/:id', async (req, res, next) => {
    try {
        const person = await Person.findOneAndDelete({ "_id": req.params.id })

        if (!person) {
            return res.status(400).json({ msg: 'There is no more persons in database' });
        }

        res.status(200).json('Deleting done');

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error (delete All)')
    }
});

// Delete all persons
personRoutes.get('/deleteAll', async (req, res, next) => {
    try {
        const person = await Person.deleteMany({});

        if (!person) {
            return res.status(400).json({ msg: 'There is no more persons in database' });
        }

        res.status(200).json('Deleting of all persons');

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error (delete All)')
    }
});

module.exports = personRoutes;