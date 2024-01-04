const User = require("../models/customerSchema");
const moment = require('moment'); 

const user_index_get = (req, res) => {
    // result ==> array of objects
    console.log("--------------------------------------------");
    User.find()
      .then((result) => {
        res.render("index", { array: result, moment: moment });
      })
      .catch((err) => {
        console.log(err);
      });
};

const user_edit_get = (req, res) => {

    // result ==> object
    User.findById(req.params.id)
      .then((result) => { 
        res.render("user/edit", { object: result });
      })
      .catch((err) => {
        console.log(err);
      });
};

const user_add_get = (req, res) => {
    res.render("user/add");
};

const user_view_get = (req, res) => {
    
    // result ==> object
    User.findById(req.params.id)
      .then((result) => { 
        res.render("user/view", {object: result, moment: moment});
      })
      .catch((err) => {
        console.log(err);
      });
};

const user_search_get = (req, res) => {
    res.render("user/search", { });
};

const user_put = (req, res) => {
    User.updateOne({_id: req.params.id}, req.body)
      .then(() => {
        res.redirect("/");
      }).catch((err) => {
        console.log(err);
      });
      console.log(req.body);
};

const user_add_post = (req, res) => {
    console.log(req.body);
    User.create(req.body)
      .then( result => {
        res.redirect("/");
      })
      .catch( err => {
        console.log(err);
      });
};

const user_search_post = (req, res) => {
    console.log("*********")
    console.log(req.body);
    const searchName = req.body.searchText.trim();
    User.find({ $or: [{firstname: searchName}, {lastname: searchName}] })
      .then( result => {
        res.render("user/search", { array: result, moment: moment });
      })
      .catch( err => {
        console.log(err);
      });
};

const user_delete = (req, res) => {
    User.findByIdAndDelete(req.params.id)
      .then(res.redirect("/"))
      .catch((err) => {
        console.log(err);
      });
};

module.exports = {
    user_index_get,
    user_edit_get,
    user_add_get,
    user_view_get,
    user_search_get,
    user_put,
    user_add_post,
    user_search_post,
    user_delete
}