const express = require('express');
const personRoutes = express.Router();

// Require Route model in our routes module
let Person = require('../../models/Person');

/** Routes list */ 

// Get data 
personRoutes.get('/list', async (req, res, next) => {
    console.log('hello')
    try {
        const person = await Person.find({});

        if (!person) {
            return res.status(400).json({ msg: 'There is no persons in database'});
        }

        res.json(person, 'Get all data done');
        next();
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
            return res.status(400).json({ msg: 'There is no person to add'});
        }

        res.json(perosn, 'Adding done');
        next();

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error (post)')
    }
});

// Edit a person
personRoutes.get('/edit/:id', async (req, res, next) => {
    try {
        const personId = req.params.id;
        const person = await Person.findById(personId);

        if (!person) {
            return res.status(400).json({ msg: 'Not possible to edit'});
        }

        res.json(person, 'Edit done');
        next();
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
            return res.status(404).json({ msg: 'data is not found'});
        }

        try {
            console.log(person)
            person.name = req.body.person_name;
            person.nickname = req.body.nickname;
            person.description = req.body.description;
    
            const personUpdated = await person.save();

            if (!personUpdated) {
                return res.status(400).json({ msg: 'Error with the updating'});
            }

            res.json(person, 'Update Complete');
            next();
            
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
personRoutes.delete('/delete/:id', async (req, res, next) => {
    try {
        const person = await Person.findByIdAndDelete({"_id:": req.params.id});

        if (!person) {
            return res.status(400).json({ msg: 'There is no more persons in database'});
        }

        res.json(person, 'Deleting done');
        next();
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error (delete All)')
    }
});

// Delete all persons
personRoutes.delete('/deleteAll/:id', async (req, res, next) => {
    try {
        const person = await Person.deleteMany({});

        if(!person) {
            return res.status(400).json({ msg: 'There is no more persons in database' });
        }

        res.json(person, 'Deleting of all persons done');
        next();
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error (delete All)')
    }
});

module.exports = personRoutes;