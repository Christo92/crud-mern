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
            return res.status(400).json({ msg: 'There is no persons in database'});
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
            return res.status(400).json({ msg: 'There is no person to add'});
        }

        res.status(200).json({'person': 'Adding done'});

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

        // Get the result
        res.status('Edit done').json(person);
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

            res.status('Update Complete').json(person);
            
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

        res.status('Deleting done').json(person);

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

        res.status('Deleting of all persons done').json(person);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error (delete All)')
    }
});

module.exports = personRoutes;