
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email: 'garyskalinsky@yahoo.com', username: 'garyskalinsky', password: '$2a$10$16HA89xoCCWDZ.Kfjes6vepMaZKYZ106z/b5CTXVnxtO/l8DvEMyi', fname: 'Gary', lname: 'Skalinsky', bio: 'Seeking Adventure', age: 24, zipcode: '95011', img_url:"https://s3-eu-west-1.amazonaws.com/video.gallereplay.com/production/user_74/picture_17112016100959.jpg", seeking:"female", gender:"male"},
        {email: 'joshgabanna@yahoo.com', username: 'joshgabanna', password: '$2a$10$16HA89xoCCWDZ.Kfjes6vepMaZKYZ106z/b5CTXVnxtO/l8DvEMyi', fname: 'Josh', lname: 'Gabanna', bio: "Really looking for that key component in my", age: 21, zipcode: '95012', img_url:"https://rudranibanikmd.com/wp-content/uploads/2017/02/44813671_m.jpg", seeking:"female", gender:"male"},
        {email: 'lucasromero@yahoo.com', username: 'lucasromero', password: '$2a$10$16HA89xoCCWDZ.Kfjes6vepMaZKYZ106z/b5CTXVnxtO/l8DvEMyi', fname: 'Lucas', lname: 'Romero', bio: "Where the ladies at", age: 20, zipcode: '95013', img_url:"https://i.pinimg.com/originals/81/c1/f3/81c1f355bdf8bcd6dbb57beabef2cf98.jpg", seeking:"female", gender:"male"},
        {email: 'marcusames@yahoo.com', username: 'marcusames', password: '$2a$10$16HA89xoCCWDZ.Kfjes6vepMaZKYZ106z/b5CTXVnxtO/l8DvEMyi', fname: 'Marcus', lname: 'Ames', bio: "Never forget to git pull ladies!", age: 18, zipcode: '95014', img_url:"https://pbs.twimg.com/profile_images/501861077194665985/zZlv3UqF_400x400.jpeg", seeking:"female", gender:"male"},
        {email: 'samurcuyo@yahoo.com', username: 'samurcuyo', password: '$2a$10$16HA89xoCCWDZ.Kfjes6vepMaZKYZ106z/b5CTXVnxtO/l8DvEMyi', fname: 'Sam', lname: 'Urcuyo', bio: "What's up i'm Sam!", age: 30, zipcode: '95015', img_url:"https://www.ninjaonlinedating.com/images/Articles/Good_Dating_Profile_Photo.jpg", seeking:"female", gender:"male"},
        {email: 'samanthajones@yahoo.com', username: 'samanthajones', password: '$2a$10$16HA89xoCCWDZ.Kfjes6vepMaZKYZ106z/b5CTXVnxtO/l8DvEMyi', fname: 'Samantha', lname: 'Jones', bio: 'It is my first time using this application!', age: 25, zipcode: '95016', img_url:"https://cdn.techgyd.com/100-Cute-Images-of-Girls-Pets-Babies-15.jpg", seeking:"male", gender:"female"},
        {email: 'jessicabrewer@yahoo.com', username: 'jessicabrewer', password: '$2a$10$16HA89xoCCWDZ.Kfjes6vepMaZKYZ106z/b5CTXVnxtO/l8DvEMyi', fname: 'Jessica', lname: 'Brewer', bio: 'This is my favorite application!', age: 29, zipcode: '95017', img_url:"https://www.abc.net.au/news/image/8450366-3x4-700x933.jpg", seeking:"male", gender:"female"},
        {email: 'laurabaxter@yahoo.com', username: 'laurabaxter', password: '$2a$10$16HA89xoCCWDZ.Kfjes6vepMaZKYZ106z/b5CTXVnxtO/l8DvEMyi', fname: 'Laura', lname: 'Baxter', bio: 'Hello i am Laura!', age: 31, zipcode: '95018', img_url:"http://www.lacartes.com/images/business/169868/471628/l/642010.jpg", seeking:"male", gender:"female"},
        {email: 'lucymsmith@yahoo.com', username: 'lucysmith', password: '$2a$10$16HA89xoCCWDZ.Kfjes6vepMaZKYZ106z/b5CTXVnxtO/l8DvEMyi', fname: 'Lucy', lname: 'Smith', bio: 'Hello i am Lucy!', age: 27, zipcode: '95019', img_url:"https://cdn3.foap.com/images/720f60a8-8442-45ad-8f49-c93fb1033ec2/w640.jpg?1496518064", seeking:"male", gender:"female"},
        {email: 'monicaking@yahoo.com', username: 'monicaking', password: '$2a$10$16HA89xoCCWDZ.Kfjes6vepMaZKYZ106z/b5CTXVnxtO/l8DvEMyi', fname: 'Monica', lname: 'King', bio: 'Hello i am Monica!', age: 22, zipcode: '96001', img_url:"https://www.tricksclub.com/wp-content/uploads/2018/10/Awesome-Pic-For-Girl.png", seeking:"male", gender:"female"}
      ]);
    });
};
