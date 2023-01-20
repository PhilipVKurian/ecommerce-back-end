const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
router.get('/', async (req, res) => {
  try{
    const categoryData = await Category.findAll({
      attributes: ["id", "category_name"],
      include: [{ model: Product, attributes: ["id", "product_name", "price", "stock", "category_id"]}]
    });
    res.status(200).json(categoryData);
  }catch(err){
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try{
    const categoryData = await Category.findByPk(req.params.id, {
      attributes: ["id", "category_name"],
      include: [{ model: Product, attributes: ["id", "product_name", "price", "stock", "category_id"]}] 
  });
    res.status(200).json(categoryData);
  }catch(err){
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  try{
    const createdCat = await Category.create(req.body);
    res.status(200).json(createdCat);
  }catch(err){
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try{
    const updateCat = await Category.update(req.body, {
      where: {id: req.params.id }
    });
    res.status(200).json(updateCat);
  }catch(err){
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try{
    const deleteCat = await Category.destroy({ where: {id: req.params.id}});
    res.status(200).json(deleteCat);
  }catch(err){
    res.status(400).json(err);
  }
});

module.exports = router;
