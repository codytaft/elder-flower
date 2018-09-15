exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(() => {
      // Inserts seed entries
      return Promise.all([
        knex('users')
          .insert({
            firstName: 'Cody',
            lastName: 'Taft',
            email: 'cody.taft@gmail.com',
            contactName: 'Gaynell',
            contactPhone: '+19038511575',
            phoneNumber: '+17203304593',
            isElder: false
          })
          .then(() => console.log('Seeding Complete!'))
          .catch(error => console.log(`Error seeding data: ${error}`))
      ]);
    });
};
