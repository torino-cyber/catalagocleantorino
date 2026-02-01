body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f7f5f2;
  color: #222;
}

header {
  text-align: center;
  padding: 20px;
}

.filters {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
}

select {
  padding: 8px;
}

#productList {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
  padding: 20px;
}

.product {
  background: #fff;
  padding: 15px;
  border-radius: 6px;
}

.product h3 {
  margin: 0 0 10px;
}

.product button {
  width: 100%;
  padding: 10px;
  background: #000;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-top: 5px;
}

#cart {
  position: fixed;
  right: 0;
  top: 0;
  width: 300px;
  height: 100%;
  background: #fff;
  padding: 15px;
  border-left: 1px solid #ddd;
  overflow-y: auto;
}

#cart button {
  width: 100%;
  padding: 12px;
  background: #000;
  color: #fff;
  border: none;
  margin-top: 10px;
}

.total {
  font-weight: bold;
  margin-top: 10px;
}
