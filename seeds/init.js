
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({
          username: 'fmurray',
          email:'email@mail.com',
          avatar_url:'http://fillmurray.com/200/200',
          full_name:'Fill Murray',
          password:'$2a$08$HW7PiPKHDQU.8GMpSf2ZpelzDSA533KaFmlXyxWqOP1ZJMmHtkDvu',
          location:'Austin, TX',
          created_at:'2016-09-04T23:59:40+00:00',
          updated_at:'2016-09-04T23:59:40+00:00'
        }),
        knex('users').insert({
          username: 'pcage',
          email:'email@mail.com',
          avatar_url:'http://placecage.com/200/200',
          full_name:'Place Cage',
          password:'$2a$08$HW7PiPKHDQU.8GMpSf2ZpelzDSA533KaFmlXyxWqOP1ZJMmHtkDvu',
          location:'Houston, TX',
          created_at:'2016-09-04T23:59:40+00:00',
          updated_at:'2016-09-04T23:59:40+00:00'
        }),
        knex('users').insert({
          username: 'ssegallery',
          email:'email@mail.com',
          avatar_url:'http://stevensegallery.com/200/200',
          full_name:'Steven Segallery',
          password:'$2a$08$HW7PiPKHDQU.8GMpSf2ZpelzDSA533KaFmlXyxWqOP1ZJMmHtkDvu',
          location:'Dallas, TX',
          created_at:'2016-09-04T23:59:40+00:00',
          updated_at:'2016-09-04T23:59:40+00:00'
        }),
        knex('users').insert({
          username: 'dax',
          email:'email@mail.com',
          avatar_url:'http://stevensegallery.com/200/200',
          full_name:'Dax Richardson',
          password:'$2a$08$HW7PiPKHDQU.8GMpSf2ZpelzDSA533KaFmlXyxWqOP1ZJMmHtkDvu',
          location:'Austin, TX',
          created_at:'2016-09-04T23:59:40+00:00',
          updated_at:'2016-09-04T23:59:40+00:00'
        }),
      ]);
    }).then(() => {
      return knex('user_roles').del()
        .then(() => {
          return Promise.all([
            knex('user_roles').insert({
              id:1,
              role:'admin'
            }),
            knex('user_roles').insert({
              id:2,
              role:'moderator'
            }),
            knex('user_roles').insert({
              id:3,
              role:'user'
            })
          ]);
        });
    }).then(() => {
      return knex('sessions').del()
        .then(()=> {
          return Promise.all([
            knex('sessions').insert({
              session_name:'Fill Murray Hack n Slash',
              game_name:'Dungeons and Dragons',
              session_desc:'Fill Murray doin shit.',
              header_url:'http://fillmurray.com/800/200',
              start_date:'2016-09-07T18:25:49+00:00',
              runtime:'3 Hours',
              skill_level:1,
              host_id:1,
              num_players:6
            }),
            knex('sessions').insert({
              session_name:'Place Quest',
              game_name:'Pathfinder',
              session_desc:'The other day the grass was brown, now it’s green because I ain’t give up. Never surrender. You do know, you do know that they don’t want you to have lunch. I’m keeping it real with you, so what you going do is have lunch. Another one. Special cloth alert. Special cloth alert. I’m up to something.',
              header_url:'http://placecage.com/800/200',
              start_date:'2016-09-07T18:25:49+00:00',
              runtime:'40 minutes',
              skill_level:3,
              host_id:2,
              num_players:3
            }),
            knex('sessions').insert({
              session_name:'Steven Segall\'s Actual Life',
              game_name:'Legend of the Five Rings',
              session_desc:'Lion! Special cloth alert. In life there will be road blocks but we will over come it. Celebrate success right, the only way, apple. Life is what you make it, so let’s make it. Give thanks to the most high. Every chance I get, I water the plants, Lion!',
              start_date:'2016-09-07T18:25:49+00:00',
              runtime:'An Entire Lifetime',
              skill_level:2,
              host_id:3,
              num_players:2
            }),
          ])
        })
    }).then(() => {
      return knex('user_sessions').del()
        .then(() => {
          return Promise.all([
            knex('user_sessions').insert({
              user_id:2,
              session_id:1
            }),
            knex('user_sessions').insert({
              user_id:3,
              session_id:1
            }),
            knex('user_sessions').insert({
              user_id:3,
              session_id:2
            }),
            knex('user_sessions').insert({
              user_id:1,
              session_id:2
            }),
          ])
        })
    }).then(() => {
      return knex('session_applications').del()
        .then(() => {
          return Promise.all([
            knex('session_applications').insert({
              has_played:true,
              years_played:3,
              used_platform:false,
              exp_level:2,
              application:'I\'m a bad dude with a tude.'
            }),
            knex('session_applications').insert({
              exp_level:1,
              application:'I\'m a noob.'
            }),
            knex('session_applications').insert({
              has_played:true,
              years_played:20,
              used_platform:true,
              exp_level:3,
              application:'I\'m a God.'
            }),
            knex('session_applications').insert({
              has_played:true,
              years_played:3,
              used_platform:true,
              exp_level:2,
              application:'What what up.'
            }),
          ])
        })
    }).then(() => {
      return knex('approve_applications').del()
        .then(() => {
          return Promise.all([
            knex('approve_applications').insert({
              app_id:1,
              session_id:1,
              applicant_id:3
            }),
            knex('approve_applications').insert({
              app_id:2,
              session_id:1,
              applicant_id:2
            }),
            knex('approve_applications').insert({
              app_id:3,
              session_id:3,
              applicant_id:1
            }),
            knex('approve_applications').insert({
              app_id:4,
              session_id:1,
              applicant_id:4
            })
          ])
        })
    }).then(() => {
      return knex('messages').del()
        .then(() => {
          return Promise.all([
            knex('messages').insert({
              msg_title:'Hey',
              msg_body:'Hows it going, buddy??',
              sender_id:1,
              receiver_id:2
            }),
            knex('messages').insert({
              msg_title:'BUTHHH',
              msg_body:'BLARG',
              sender_id:3,
              receiver_id:2
            }),
            knex('messages').insert({
              msg_title:'re:Hey',
              msg_body:'Its going.',
              sender_id:2,
              receiver_id:1
            }),
          ])
        })
    }).then(() => {
      return knex('group_chat').del()
        .then(() => {
          return Promise.all([
            knex('group_chat').insert({
              session_id:1,
              poster_id:2,
              post_body:'What the fuck is good. This chat sucks.'
            }),
            knex('group_chat').insert({
              session_id:1,
              poster_id:1,
              post_body:'You know what? Fuck you. YOU suck.'
            })
          ])
        })
    })
};
