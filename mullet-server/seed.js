require('dotenv').config();
const mongoose = require('mongoose');
const Article = require('./models/Article');

const articles = [
  {
    slug: 'team-eton-staff',
    title: 'Overview of our staff',
    paragraphs: [
      'Our staff is the backbone of the organization, bringing diverse expertise in education, technology, and consulting.',
      'They work tirelessly to deliver quality experiences, support clients, and drive the company\'s mission forward.',
      'With a strong culture of teamwork and service, TEAM ETON STAFF continues to uphold the values of integrity, creativity, and customer focus.'
    ],
    isActive: true,
  },
  {
    slug: 'meet-our-marketing-team',
    title: 'Marketing Team',
    paragraphs: [
      'Our Marketing Team is responsible for shaping the company\'s image and communicating its values to the public.',
      'They design campaigns that highlight Tealive services and achievements, ensuring that our message reaches the right audience.',
      'Through creativity and strategic planning, the team develops promotional materials, manages social media presence, and organizes events that strengthen client relationships.',
      'Collaboration is key — the Marketing Team works closely with other departments to align branding with project goals and company vision.',
      'By staying updated with industry trends and consumer behavior, they continuously innovate to keep Tealive competitive and relevant in the marketplace.'
    ],
    isActive: true,
  },
  {
    slug: 'smile-every-sip',
    title: 'Smile Every Sip',
    paragraphs: [
      'At Tealive, we believe that every sip should bring a smile.',
      'The Smile Every Sip initiative highlights the importance of enjoying life\'s simple moments.',
      'Through creative campaigns and customer engagement, we aim to spread happiness and reinforce our brand\'s values.',
      'This effort goes beyond beverages; it\'s about building experiences that uplift people and create lasting memories.',
      'Smile Every Sip is more than a slogan — it\'s a promise to deliver joy in every interaction with our brand.'
    ],
    isActive: true,
  },
  {
    slug: 'tealive-company-members',
    title: 'Tealive Company Logo',
    paragraphs: [
      'The members of Tealive are the heart of the brand, composed of skilled baristas, managers, and support staff.',
      'Each team member brings unique expertise and energy, contributing to the overall quality and consistency of Tealive\'s operations.',
      'Strong communication and teamwork ensure that every store delivers the same high standard of service.',
      'Tealive emphasizes continuous learning, encouraging its members to stay updated with the latest beverage trends.',
      'Respect, professionalism, and accountability are core values practiced by every member.',
      'By supporting one another and sharing knowledge, the team overcomes challenges and continues to brew positivity.'
    ],
    isActive: true,
  },
  {
    slug: 'mango-mvp',
    title: 'Mango MVP',
    paragraphs: [
      'Mango is the MVP of Summer. This season\'s star isn\'t on the court — it\'s in your hand.',
      'Bright, refreshing, and crafted to keep you cool, this mango moment is one you don\'t want to miss.',
      'Pick your MVP: Mango Fruit Tea with QQ, Mango Lotus Biscoff Smoothie, Mango Strawberry Smoothie with Coconut Jelly, Mango Burst Smoothie'
    ],
    isActive: true,
  },
  {
    slug: 'tealive-thumbler',
    title: 'Tealive Thumbler',
    paragraphs: [
      'Sustainability never looked this good.',
      'Reusable, stylish, and dropping on April 8.',
      'Limited stocks only — mark your calendars!',
      '#Tealiveph #BrewingPositivity'
    ],
    isActive: true,
  },
  {
    slug: 'og-chocomousse',
    title: 'OG CHOCOMOUSSE',
    paragraphs: [
      'Your Gang-stir unlocked a new flavor layer to upgrade your chocolate — richer cocoa, silky mousse, and a more indulgent sip.'
    ],
    isActive: true,
  },
  {
    slug: 'fish-katsu',
    title: 'Fish Katsu',
    paragraphs: [
      'NEW DROP AT TEALIVE!',
      'Introducing the Golden Fish Katsu Toastea.',
      'Crispy real fish katsu, tucked in buttery, soft, toasted bread.',
      'Finished with Asian-inspired flavors — made to pair perfectly with your favorite Tealive drink.'
    ],
    isActive: true,
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected');

    await Article.deleteMany({});
    console.log('Cleared existing articles');

    await Article.insertMany(articles);
    console.log('Articles seeded successfully!');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding:', error);
    process.exit(1);
  }
};

seedDB();