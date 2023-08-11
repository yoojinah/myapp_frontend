(() => {
  const productList = document.querySelector(".product_list");
  const addToCart = productList.querySelectorAll("button");

  addToCart.forEach((button) => {
    button.addEventListener("click", async (e) => {
      e.preventDefault();

      const item = button.closest(".item");
      console.log(item);

      const cartList = document.forms[0];

      const cartProductList = document.createElement("div");
      cartProductList.classList.add("cart_item");
      cartProductList.innerHTML = `
        <div>
          <input type="checkbox" name="" id="" />

          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h4></h4>
            <span></span>
          </div>
          <p>quentity :</p>
          <small></small>
          <div>
            <button id="removeBtn">Delete</button>
          </div>
        </div>
      `;

      cartList.appendChild(cartProductList);

      const cartItemCheckbox = cartProductList.querySelector(
        "input[type='checkbox']"
      );
      cartItemCheckbox.checked = true;

      const selectAllCheckbox = document.querySelector(
        "article form input[type='checkbox']"
      );
      const cartItemCheckboxes = document.querySelectorAll(
        ".cart_item input[type='checkbox']"
      );

      selectAllCheckbox.addEventListener("change", (e) => {
        e.preventDefault();
        const isChecked = selectAllCheckbox.checked;

        cartItemCheckboxes.forEach((checkbox) => {
          checkbox.checked = isChecked;
        });
        cartItemCheckbox.checked = true;
      });
    });
  });
})();
