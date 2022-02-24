import { Router } from 'express'
const router = Router()

/* GET home page. */
router.get('/banana', function(req, res) {
  res.render('index', { title: 'Express' })
})



export { 
  router
}
