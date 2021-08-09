'use strict';
const bycrpt = require('bcrypt')
module.exports = {
    up: async (queryInterface, Sequelize) => {

        await queryInterface.bulkInsert('users', [
            {
                name: 'John Doe',
                profession: "Admin BWA",
                role: 'admin',
                email: 'adminbwa@gmail.com',
                password: await bycrpt.hash('123123', 10),
                created_at: new Date(),
                updated_at: new Date()
            }, {
                name: 'Braithwaite',
                profession: "Full Stack Developer",
                role: 'student',
                email: 'bretwet@gmail.com',
                password: await bycrpt.hash('123123', 10),
                created_at: new Date(),
                updated_at: new Date()
            },
        ]);

    },

    down: async (queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('users', null, {});

    }
};
