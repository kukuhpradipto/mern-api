exports.createProduct = (req, res, next) => {
  console.log(req.body);
  const barang = req.body.barang;
  const harga = req.body.harga;
  res.json({
    message: "Berhasil slalalala",
    Data: {
      id: 1,
      barang: barang,
      harga: harga,
    },
  });
  next();
};

exports.getAllProduct = (req, res, next) => {
  res.json({
    message: "Berhasil get all product",
    Data: {
      id: 1,
      barang: "gandum",
      harga: 800,
    },
  });
  next();
};
