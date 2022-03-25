import { Router } from "express";
import * as apiCtrl from '../controllers/api.js'

const router = Router()

//API call to front to get breweries
router.get('/', apiCtrl.getBreweries)


export { router }