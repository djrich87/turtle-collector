import { Router } from 'express'
const router = Router()

/* GET users listing. */
router.get('/', turtlesCtrl.index) 
  
export {
  router
}
