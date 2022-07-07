const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/animal_question_answer', function (req, res) {

    // Make a variable and give it the value from 'how-many-balls'
    var whatAnimal = req.session.data['what-animal-adoption']
  
    // Check whether the variable matches a condition
    if (whatAnimal == "dog"){
      // Send user to next page
      res.redirect('/dog_age')
    } else {
      // Send user to ineligible page
      res.redirect('/cat_age')
    }
  
  })

router.post('/dog-age-answer', function (req, res) {
  // Make a variable and give it the value from 'how-many-balls'
  var howOldDog = req.session.data['age']

  // Check whether the variable matches a condition
  if (howOldDog < 18){
    // Send user to next page
    res.redirect('/dog_breed')
  } else {
    // Send user to ineligible page
    res.redirect('/too_old')
  }
  
  })

router.post('/cat-age-answer', function (req, res) {
  // Make a variable and give it the value from 'how-many-balls'
  var howOldCat = req.session.data['age']

  // Check whether the variable matches a condition
  if (howOldCat < 20){
    // Send user to next page
    res.redirect('/cat_breed')
  } else {
    // Send user to ineligible page
    res.redirect('/cat_old')
  }
  
  })


module.exports = router


