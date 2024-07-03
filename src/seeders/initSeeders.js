import { sequelize } from '../database/initSequelize.js';

import { seedCategories } from './seedCategories.js';
import { seedLicences } from './seedLicences.js';
import { seedRoles } from './seedRoles.js';
import { seedProducts } from './seedProducts.js';
import { seedProductSpecifications } from './seedProductSpecifications.js';
import { seedUsers } from './seedUsers.js';
import { seedUserRoles } from './seedUserRoles.js';

export const initSeeders = async () => {
    await sequelize.sync({ force: true });
    console.log('All models were synchronized successfully.');  
    try {
        await seedCategories();
        await seedLicences();
        await seedRoles();
        await seedProducts();
        //await seedProductSpecifications();
        await seedUsers();
        await seedUserRoles();
        console.log('Initial data has been added.');         
    } catch (error) {
        console.error('Error seeding:', error)
    }   
}