pilot = db.getSiblingDB('pilot');

pilot.createCollection('users');

pilot.users.insertMany([{
    pseudo: 'Nom joueur 1',
    vie: '50',
    force: '41',
  },
  {
    pseudo: 'Nom joueur 2',
    vie: '4',
    force: '74',
  },
  {
    pseudo: 'Nom joueur 3',
    vie: '30',
    force: '65',
  },
  {
    pseudo: 'Nom joueur 4',
    vie: '12',
    force: '21',
  },
  {
    pseudo: 'Nom joueur 5',
    vie: '50',
    force: '41',
  },
  {
    pseudo: 'Nom joueur 6',
    vie: '4',
    force: '74',
  },
  {
    pseudo: 'Nom joueur 7',
    vie: '30',
    force: '65',
  },
  {
    pseudo: 'Nom joueur 8',
    vie: '12',
    force: '21',
  }]);