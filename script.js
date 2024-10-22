const products = [
    {
        name: "Rak Gudang Heavy Duty",
        image: "img1.png",
        description: "Rak kuat untuk penyimpanan barang berat.",
        price: "Rp 1.500.000",
    },
    {
        name: "Rak Mini Market",
        image: "img2.png",
        description: "Rak fungsional untuk menampilkan produk.",
        price: "Rp 750.000",
    },
    {
        name: "Rak Display Stylish",
        image: "img3.png",
        description: "Rak untuk menonjolkan produk unggulan.",
        price: "Rp 900.000",
    },
    {
        name: "SC-303",
        image: "img4.png",
        description: "Troli yang dapat dilipat sehingga menghemat tempat. Cocok untuk minimarket.",
        price: "Rp 600.000",
    }
];

const productList = document.getElementById('product-list');

products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <div class="price">${product.price}</div>
    `;
    productList.appendChild(productDiv);
});
