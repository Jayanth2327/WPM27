 /* GET homepage */
 const index = (req, res) => {
  res.render('index', { title: 'AUTO SNAP' });
 }; 
 module.exports = {
  index
 };