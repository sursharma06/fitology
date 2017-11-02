exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('chest').del()
    .then(function () {
      // Inserts seed entries
      return knex('chest').insert([{
          name: 'Dumbbell Bench Press',
          cover_url: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/1/Male/m/1_1.jpg',
          video_url: 'https://videos.bodybuilding.com/video/mp4/44000/44791m.mp4',
        },
        {
          name: 'Low Cable Crossover',
          cover_url: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/1621/Male/m/1621_1.jpg',
          video_url: 'https://videos.bodybuilding.com/video/mp4/104000/104922m.mp4',
        },
        {
          name: 'Pushups',
          cover_url: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/70/Male/m/70_1.jpg',
          video_url: 'https://videos.bodybuilding.com/video/mp4/46000/46831m.mp4',
        },
        {
          name: 'Wide-Grip Barbell Bench Press',
          cover_url: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/33/Male/m/33_2.jpg',
          video_url: 'https://videos.bodybuilding.com/video/mp4/50000/50541m.mp4',
        },
        {
          name: 'Incline Cable Flye',
          cover_url: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/181/Male/m/181_1.jpg',
          video_url: 'https://videos.bodybuilding.com/video/mp4/48000/48211m.mp4',
        },
      ]);
    });
};
