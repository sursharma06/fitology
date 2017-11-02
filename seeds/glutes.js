exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('glutes').del()
    .then(function () {
      // Inserts seed entries
      return knex('glutes').insert([{
          name: 'One-Legged Cable Kickback',
          cover_url: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/101/Male/m/101_2.jpg',
          video_url: 'https://videos.bodybuilding.com/video/mp4/46000/46501m.mp4',
        },
        {
          name: 'Butt Lift (Bridge)',
          cover_url: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/99/Male/m/99_2.jpg',
          video_url: 'https://videos.bodybuilding.com/video/mp4/44000/44281m.mp4',
        },
        {
          name: 'Kneeling Squat',
          cover_url: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/697/Male/m/697_1.jpg',
          video_url: 'https://videos.bodybuilding.com/video/mp4/78000/78152m.mp4',
        },
        {
          name: 'Glute Kickback',
          cover_url: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/98/Male/m/98_2.jpg',
          video_url: 'https://videos.bodybuilding.com/video/mp4/44000/45171m.mp4',
        },
        {
          name: 'Step-up with Knee Raise',
          cover_url: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/2251/Male/m/2251_2.jpg',
          video_url: 'https://videos.bodybuilding.com/video/mp4/106000/107052m.mp4',
        },
      ]);
    });
};
