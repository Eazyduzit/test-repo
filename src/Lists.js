import "./App.css";

const products = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 }
];

export default function ShoppingList() {
    const listItems = products.map(product =>
        <li key={product.id}
            style={{
                color: product.isFruit ? "magenta" : "yellow"
            }}
        >
            {product.title}
        </li>
    );

    return (
        <ul className="listStyle">
            {listItems}
        </ul>
    );
}