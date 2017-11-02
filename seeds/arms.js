exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('arms').del()
    .then(function () {
      // Inserts seed entries
      return knex('arms').insert([{
          name: 'Incline Hammer Curls',
          cover_url: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/882/Male/m/882_2.jpg',
          video_url: 'https://videos.bodybuilding.com/video/mp4/94000/94442m.mp4',
        },
        {
          name: 'Spider Curl',
          cover_url: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/178/Male/m/178_2.jpg',
          video_url: 'https://videos.bodybuilding.com/video/mp4/48000/49371m.mp4',
        },
        {
          name: 'Overhead Cable Curl',
          cover_url: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/213/Male/m/213_2.jpg',
          video_url: 'https://videos.bodybuilding.com/video/mp4/46000/46521m.mp4',
        },
        {
          name: 'Dips - Triceps Version',
          cover_url: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/55/Male/m/55_1.jpg',
          video_url: 'https://videos.bodybuilding.com/video/mp4/44000/44761m.mp4',
        },
        {
          name: 'Cable Triceps Extension',
          cover_url: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/150/Male/m/150_2.jpg',
          video_url: 'https://videos.bodybuilding.com/video/mp4/44000/45321m.mp4',
        },
        {
          name: 'Seated Triceps Press',
          cover_url: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/341/Male/m/341_2.jpg',
          video_url: 'https://videos.bodybuilding.com/video/mp4/48000/48601m.mp4',
        },
      ]);
    });
};
