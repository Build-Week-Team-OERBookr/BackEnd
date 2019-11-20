
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('books').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {
          title: `The Missing Link: An Introduction to Web Development and Programming`,
          author: `Michael Mendez`,
          publisher: `Open SUNY Textbooks`,
          license: `Creative Commons`,
          description: `Web development is an evolving amalgamation of languages that work in concert to receive, modify, and deliver information between parties using the Internet as a mechanism of delivery.`,
          avg_rating: 3,
          image: `https://images-na.ssl-images-amazon.com/images/I/41gDcyPiJnL._SX384_BO1,204,203,200_.jpg`,
      },
      {
        title: `Anatomy and Physiology`,
        author: `Kelly A. Young and James A. Wise, etc.(`,
        publisher: `OpenStax`,
        license: `License v4.0`,
        description: 'Anatomy and Physiology is a dynamic textbook for the two-semester human anatomy and physiology course for life science and allied health majors. The book is organized by body system and covers standard scope and sequence requirements.',
        avg_rating: 3,
        image: `https://images-na.ssl-images-amazon.com/images/I/41iztyOHhGL._SX385_BO1,204,203,200_.jpg
        https://d3bxy9euw4e147.cloudfront.net/oscms-prodcms/media/documents/anatomy_physiology.svg`,
    },
    {
          
          title: `A Byte of Python`,
          author: `Swaroop C.H.`,
          publisher: 'Gitbook',
          license: ' Creative Commons Attribution-ShareAlike 4.0 International License',
          description: `A"A Byte of Python" is a free book on programming using the Python language. It serves as a tutorial or guide to the Python language for a beginner audience. If all you know about computers is how to save text files, then this is the book for you. `,
          avg_rating: 5,
          image: 'https://ramaral.files.wordpress.com/2011/06/abop-cover.png',
      }
      ]);
    });
};
