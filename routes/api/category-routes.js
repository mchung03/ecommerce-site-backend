const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: Product
    });
    const categories = categoryData.map((category) => category.get({plain: true}))
    console.log("categories", categories)
    res.status(200).json(categories);
  } catch(err) {
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData)
  } catch(err) {
    res.status(400).json(err)
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value

  // req.body -> data to be applied, req.params --> id that we want to update

  try {
    const categoryData = await Category.update(
      // update to be applied
      {
        category_name: req.body.category_name
      },
      // filter
      {
        where: {
          id: req.params.id
        }
      },
    )

    res.status(200).json(categoryData)
  } catch(err) {
    res.status(400).json(err)
  }

});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
