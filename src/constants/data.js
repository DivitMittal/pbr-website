import images from './images';

const wines = [
  {
    title: 'Paneer Jafrani',
    price: '₹349',
    tags: 'Paneer Delicacy | Tasty Dips | Salad',
  },
  {
    title: 'Corn Cheese Kebab',
    price: '₹249',
    tags: 'Corn Treat | Tasty Dips',
  },
  {
    title: 'Malai Chaap',
    price: '₹289',
    tags: 'Soya Delight | Tasty Dips | Salad',
  },
  {
    title: 'Kothe',
    price: '₹249',
    tags: 'Chinese Feast | Tasty Dips ',
  },
  {
    title: 'Japan Paneer',
    price: '₹299',
    tags: 'PBR Special | Tasty Dips | Salad',
  },
];

const cocktails = [
  {
    title: 'Cheesy Chicken Tikka',
    price: '₹349',
    tags: 'Chicken Delicacy | Tasty Dips | Salad',
  },
  {
    title: "Mutton Shami Kabab",
    price: '₹529',
    tags: 'Mutton Delight | Tasty Dips | Salad',
  },
  {
    title: 'Fish Banjara Tikka',
    price: '₹499',
    tags: 'Fish Feast | Tasty Dips | Salad',
  },
  {
    title: 'Griled Chicken With Peri Peri Sauce',
    price: '₹399',
    tags: 'Chinese Treat | Tasty Dips',
  },
  {
    title: 'Non-veg Lasagna',
    price: '₹349',
    tags: 'Continental Magic | Oregano | Chilly Flakes',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };