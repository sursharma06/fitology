exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('legs').del()
    .then(function () {
      // Inserts seed entries
      return knex('legs').insert([{
          name: 'Single-Leg Press',
          cover_url: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/3941/Male/m/3941_2.jpg',
          video_url: 'https://videos.bodybuilding.com/video/mp4/118000/119141m.mp4',
        },
        {
          name: 'Tire Flip',
          cover_url: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/725/Male/m/725_2.jpg',
          video_url: 'https://videos.bodybuilding.com/video/mp4/76000/77462m.mp4',
        },
        {
          name: 'Single Leg Push-off',
          cover_url: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/818/Male/m/818_2.jpg',
          video_url: 'https://videos.bodybuilding.com/video/mp4/90000/91742m.mp4',
        },
        {
          name: 'Barbell Walking Lunge',
          cover_url: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/2241/Male/m/2241_2.jpg',
          video_url: 'https://videos.bodybuilding.com/video/mp4/106000/107042m.mp4',
        },

      ]);
    });
};
