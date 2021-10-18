"use strict";

const Product = require("../model/Product");
const fs = require("fs");
const path = require("path"); //modulo para cargar rutas fisicas de mis archivos

exports.createProduct = async (req, res) => {
  try {
    //save product
    let product = new Product(req.body);
    console.log(req.body);
    console.log(req.files);

    await product.save();
    res.json(product);
  } catch (error) {
    res.status(400).send("Hubo un error");
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json({ products });
  } catch (error) {
    res.status(500).send("Hubo un error");
  }
};

// Update product
exports.updateProduct = async (req, res) => {
  var productId = req.params.id;
  var product = req.body;
  Product.findByIdAndUpdate(
    productId,
    product,
    { new: true },
    (err, productUpdated) => {
      if (err) return res.status(500).send({ msg: "Error al actualizar" });
      if (!productUpdated)
        return res
          .status(404)
          .send({ message: "No existe el producto para actualizar" });
      return res.status(200).send({ product: productUpdated });
    }
  );
};

exports.deleteProduct = async (req, res) => {
  var productId = req.params.id;
  Product.findByIdAndRemove(productId, (err, productDeleted) => {
    if (err)
      return res
        .status(500)
        .send({ message: "No se ha podido borrar el producto" });
    if (!productDeleted)
      return res
        .status(404)
        .send({ message: "No se puede eliminar ese producto." });
    return res.status(200).send({
      product: productDeleted,
    });
  });
};

exports.uploadImage = async (req, res) => {
  var productId = req.params.id;
  const { file, body } = req;
  if (file) {
    let urlFile = file.filename;
     Product.findByIdAndUpdate(  productId,  { image: urlFile },  { new: true },
      (err, productUpdated) => {
        if (err)
          return res.status(500).send({ message: "La imagen no se ha subido" });

        if (!productUpdated)
          return res.status(404).send({
            message: "El producto no existe y no se ha asignado la imagen",
          });

        return res.status(200).send({
          product: productUpdated,
        });
      }
    );
  }
};

exports.getImageFile = (req, res) => {
  var file = req.params.image;
  var path_file = "./images/" + file;
  return res.sendFile(path.resolve(path_file));
};
