exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('abs').del()
    .then(function () {
      // Inserts seed entries
      return knex('abs').insert([{
          name: "Landmine 180's",
          cover_url: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/1751/Male/m/1751_1.jpg',
          video_url: 'https://videos.bodybuilding.com/video/mp4/104000/105052m.mp4',
        },
        {
          name: 'Standing Cable Lift',
          cover_url: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/936/Male/m/936_2.jpg',
          video_url: 'https://videos.bodybuilding.com/video/mp4/94000/95621m.mp4',
        },
        {
          name: 'Bottoms Up',
          cover_url: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/2021/Male/m/2021_3.jpg',
          video_url: 'https://videos.bodybuilding.com/video/mp4/104000/105252m.mp4',
        },
        {
          name: 'Cross-Body Crunch',
          cover_url: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/124/Male/m/124_2.jpg',
          video_url: 'https://videos.bodybuilding.com/video/mp4/44000/44621m.mp4',
        },
        {
          name: 'Plate Twist',
          cover_url: 'https://www.bodybuilding.com/exercises/exerciseImages/sequences/106/Male/m/106_2.jpg',
          video_url: 'https://videos.bodybuilding.com/video/mp4/46000/46661m.mp4',
        },
      ]);
    });
};
