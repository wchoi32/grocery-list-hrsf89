const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/grocery');

let listSchema = mongoose.Schema({
  id: Number,
  quantity: Number,
  description: String,
});

let List = mongoose.model('List', listSchema);

let number = 1;

let save = (obj) => {
  let query = {description: obj.description}
  List
  .find({description: obj.description})
  .exec(function(err, found) {
    if (err) return err;
    if(found.length !== 0) {
      console.log('need to update')
      List.findOneAndUpdate(
        query, 
        {$inc: {quantity: obj.quantity}},
        (err, doc) => {}
      )
    } else {
      var newList = new List ({
        id: number++,
        quantity: obj.quantity,
        description: obj.description,
      });

      newList.save((newList, err) => {
        if (err) return err;
      });
    }
  });
}

let remove = (obj) => {
  List
  .find({description: obj.description})
  .remove()
  .exec();
}

let retrieve = (callback) => {
  List
  .find({})
  .exec(function(err, data) {
    if (err) return err;
    callback(data);
  });
}

module.exports.remove = remove;
module.exports.save = save;
module.exports.retrieve = retrieve;