var pgp = require('pg-promise')
const express = require('express');
const bcrypt = require('bcryptjs/dist/bcrypt');
const router = express.router

router.get('/signup',(req,res)=>{
    res.render('signup');
});


router.post('/signup', (req,res) =>{
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.req.body.email;
    const user_name = req.body.user_name;
    const password = req.body.password;

    db.one (
        'SELECT user_id, user_name, password FROM users WHERE user_name = $1',
        [user_name]
    )
      .then((user)=>{
          bcrypt.compare(
              password,
              user.password,
              function (error, result) {
                  if (result) {
                      res.render('login', {
                          message: 'You already have an account, please login'
                      });
                  }else {
                      res.render('login',{
                          message: 'You already have an account, please login'
                      });
                  }
              }
          );
      })
})
.catch((error)=>{
    bcrypt.genSalt(10, function (error,salt){
        if(!error) {
            bcrypt.hash(password,salt,function(error,hash){
                if(!error){
                    db.none(
                        'INSERT INTO users(first_name, last_name, email, user_name, password) VALUES ($1, $2, $3. $4, $5)', [first_name, last_name, email, user_name, hash]
                    ).then(()=> {
                        console.log('user has been added to the database');
                        db.one(
                            'SELECT user_id, user_name, password FROM users WHERE user_name = $1', [user_name]
                        ).then((user)=>{
                            req.user_id = user.user_id;
                            res.redirect('/users/home')
                        })
                    })
                }else{
                    res.send('an error occured')
                }
            })
        } else {
            res.send('an error occured')
        }
    })
})


module.exports = router 