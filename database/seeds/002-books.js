
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('books').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        
        {
          title: 'Organizational Behavior',
          author: 'J. Stewart Black',
          publisher: 'OpenStax',
          license: 'License v4.0',
          description: 'The text presents the theory, concepts, and applications with particular emphasis on the impact that individuals and groups can have on organizational performance and culture. An array of recurring features engages students in entrepreneurial thinking, managing change, using tools/technology, and responsible management; furthermore, the unique chapter on Social Media and Communication contextualizes the importance and implications of various platforms and communications methods.',
          avg_rating: '5',
          image: 'https://d3bxy9euw4e147.cloudfront.net/oscms-prodcms/media/documents/organizational_behavior_book_card.svg',
        },
        {
          title: `The Missing Link: An Introduction to Web Development and Programming`,
          author: `Michael Mendez`,
          publisher: `Open SUNY Textbooks`,
          license: `Creative Commons`,
          description: `Web development is an evolving amalgamation of languages that work in concert to receive, modify, and deliver information between parties using the Internet as a mechanism of delivery.`,
          avg_rating: 3,
          image: `https://images-na.ssl-images-amazon.com/images/I/41gDcyPiJnL._SX384_BO1_.jpg`,
      },
      {
        title: `Anatomy and Physiology`,
        author: `Kelly A. Young`,
        publisher: `OpenStax`,
        license: `License v4.0`,
        description: 'Anatomy and Physiology is a dynamic textbook for the two-semester human anatomy and physiology course for life science and allied health majors. The book is organized by body system and covers standard scope and sequence requirements.',
        avg_rating: 3,
        image: `https://images-na.ssl-images-amazon.com/images/I/41iztyOHhGL._SX385_BO1_.jpg`,
    },
    {
      title: 'Introductory Statistics',
      author: `Alexander Holmes`,
      publisher: 'OpenStax',
      license: 'License v4.0',
      description: 'Introductory Statistics follows scope and sequence requirements of a one-semester introduction to statistics course and is geared toward students majoring in fields other than math or engineering. The text assumes some knowledge of intermediate algebra and focuses on statistics application over theory. Introductory Statistics includes innovative practical applications that make the text relevant and accessible, as well as collaborative exercises, technology integration problems, and statistics labs.',
      avg_rating: 4,
      image: 'https://d3bxy9euw4e147.cloudfront.net/oscms-prodcms/media/documents/statistics.svg',
    },
    {
          
          title: `A Byte of Python`,
          author: `Swaroop C.H.`,
          publisher: 'Gitbook',
          license: ' Creative Commons Attribution-ShareAlike 4.0 International License',
          description: `A"A Byte of Python" is a free book on programming using the Python language. It serves as a tutorial or guide to the Python language for a beginner audience. If all you know about computers is how to save text files, then this is the book for you. `,
          avg_rating: 5,
          image: 'https://ramaral.files.wordpress.com/2011/06/abop-cover.png',
      },

      {
          
        title: `Elementary Algebra`,
        author: `Ron Larson`,
        publisher: 'Cengage Learning',
        license: ' Creative Commons Attribution-ShareAlike 4.0 International License',
        description: "Larson IS student success. ELEMENTARY ALGEBRA owes its success to the hallmark features for which the Larson team is known: learning by example, a straightforward and accessible writing style, emphasis on visualization through the use of graphs to reinforce algebraic and numeric solutions and to interpret data, and comprehensive exercise sets.",
        avg_rating: 4,
        image: 'http://books.google.com/books/content?id=U6v78M5nYKAC&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE71ayZKq-oQ9bHy_7OkzfH-CbGMshXSU6Dfb-NthWEmp49mxkgWGeLredX8OgL9zYhcCenHsxAunjaWPCAozBLN8qqFiJ47k_efigy2WR6S13wYP4KC43NUJhCk8sLi8mXOuq3GI&source=gbs_api',
    },

    {
      title: 'U.S. History',
      author: 'P. Scott Corbett',
      publisher: 'OpenStax',
      license: 'License v4.0',
      description: 'U.S. History is designed to meet the scope and sequence requirements of most introductory courses. The text provides a balanced approach to U.S. history, considering the people, events, and ideas that have shaped the United States from both the top down (politics, economics, diplomacy) and bottom up (eyewitness accounts, lived experience).',
      avg_rating: '3',
      image: 'https://d3bxy9euw4e147.cloudfront.net/oscms-prodcms/media/documents/US_history.svg',
    },
    

    {
      title: 'Principles of Economics 2e',
      author: 'Steven A. Greenlaw',
      publisher: 'OpenStax',
      license: 'License v4.0',
      description: 'Principles of Economics 2e covers the scope and sequence of most introductory economics courses. The text includes many current examples, which are handled in a politically equitable way. The outcome is a balanced approach to the theory and application of economics concepts. The second edition has been thoroughly revised to increase clarity, update data and current event impacts, and incorporate the feedback from many reviewers and adopters.',
      avg_rating: '5',
      image: 'https://d3bxy9euw4e147.cloudfront.net/oscms-prodcms/media/documents/Economics2e-BookCard.png',
    },

    {
      title: 'College Physics AP Courses',
      author: 'Gregg Wolfe',
      publisher: 'OpenStax',
      license: 'License v4.0',
      description: 'The AP Physics Collection is a free, turnkey solution for your AP® Physics course, brought to you through a collaboration between OpenStax and Rice Online Learning. The integrated collection features the OpenStax College Physics for AP® Courses text, Concept Trailer videos, instructional videos, problem solution videos, and a correlation guide to help you align all of your free content.The College Physics for AP® Courses text is designed to engage students in their exploration of physics and help them apply these concepts to the Advanced Placement® test. This book is Learning List-approved for AP® Physics courses.',
      avg_rating: '3',
      image: 'https://d3bxy9euw4e147.cloudfront.net/oscms-prodcms/media/documents/college_physics_for_ap_course_book_card.svg',
    },

    {
      title: 'College Biology AP Courses',
      author: 'PJulianne Zedalis',
      publisher: 'OpenStax',
      license: 'License v4.0',
      description: 'Biology for AP® Courses covers the scope and sequence requirements of a typical two-semester Advanced Placement® biology course. The text provides comprehensive coverage of foundational research and core biology concepts through an evolutionary lens. Biology for AP® Courses was designed to meet and exceed the requirements of the College Board’s AP® Biology framework while allowing significant flexibility for instructors. Each section of the book includes an introduction based on the AP® curriculum and includes rich features that engage students in scientific practice and AP® test preparation; it also highlights careers and research opportunities in biological sciences.' ,
      avg_rating: '4',
      image: 'https://d3bxy9euw4e147.cloudfront.net/oscms-prodcms/media/documents/biology-AP.png',
    }, 
      ]);
    });
};
