const Product= require('../model/Product');

exports.createProduct= async (req, res) => {
     try {
        //save product
        let product= new Product(req.body);
        await product.save();
        res.json(product);
    } catch (error) {
        res.status(400).send('Hubo un error');
    }
}

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json({ products });
    } catch (error) {
        res.status(500).send('Hubo un error');
    }
}

// Update product
exports.updateProduct= async (req, res) => {
    var productId = req.params.id;
    var product = req.body;
    Product.findByIdAndUpdate(productId, product, { new: true }, (err, productUpdated) => {
        if (err) return res.status(500).send({ msg: 'Error al actualizar' });
        if (!productUpdated) return res.status(404).send({ message: 'No existe el producto para actualizar' });
        return res.status(200).send({product: productUpdated });
    });
}

exports.deleteProduct= async (req, res) => {
    var productId = req.params.id;
    Product.findByIdAndRemove(productId, (err, productDeleted) => {
        if (err) return res.status(500).send({ message: 'No se ha podido borrar el producto' });
        if (!productDeleted) return res.status(404).send({ message: "No se puede eliminar ese producto." });
        return res.status(200).send({
            product: productDeleted
        });
    });
}


