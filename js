document.addEventListener("DOMContentLoaded", () => {
    setupMobileMenu();
    setupCartCount();
    setupBrandFilter();
    setupProductPage();
    setupFAQ();
    setupContactForm();
    setupCartPage();
    setupCountdown();
    setupAccessoryCart();
});

const phones = {
    iphone16pro: {
        brand: "Apple",
        name: "iPhone 16 Pro",
        image: "images/iphone16pro.jpg",
        description: "Premium iPhone with advanced performance, professional cameras and a titanium design.",
        storage: {
            "128GB": 999,
            "256GB": 1099,
            "512GB": 1299,
            "1TB": 1499
        },
        colors: [
            { name: "Black Titanium", value: "#2f2f2f" },
            { name: "White Titanium", value: "#e5e5e5" },
            { name: "Natural Titanium", value: "#b7ab9a" },
            { name: "Desert Titanium", value: "#c9a27d" }
        ],
        specs: {
            display: "6.3-inch OLED",
            camera: "Triple Pro Camera System",
            network: "5G",
            warranty: "1 Year"
        }
    },

    iphone16promax: {
        brand: "Apple",
        name: "iPhone 16 Pro Max",
        image: "images/iphone16promax.jpg",
        description: "Large premium iPhone with powerful performance, advanced cameras and long battery life.",
        storage: {
            "256GB": 1199,
            "512GB": 1399,
            "1TB": 1599
        },
        colors: [
            { name: "Black Titanium", value: "#2f2f2f" },
            { name: "White Titanium", value: "#eeeeee" },
            { name: "Natural Titanium", value: "#b7ab9a" },
            { name: "Desert Titanium", value: "#c9a27d" }
        ],
        specs: {
            display: "6.9-inch OLED",
            camera: "Triple Pro Camera System",
            network: "5G",
            warranty: "1 Year"
        }
    },

    iphone16: {
        brand: "Apple",
        name: "iPhone 16",
        image: "images/iphone16.jpg",
        description: "Modern iPhone with smooth performance, strong cameras and a lightweight design.",
        storage: {
            "128GB": 799,
            "256GB": 899,
            "512GB": 1099
        },
        colors: [
            { name: "Black", value: "#1f1f1f" },
            { name: "White", value: "#f4f4f4" },
            { name: "Blue", value: "#7aa7d9" },
            { name: "Pink", value: "#e7a8bc" }
        ],
        specs: {
            display: "6.1-inch OLED",
            camera: "Dual Camera System",
            network: "5G",
            warranty: "1 Year"
        }
    },

    iphone15pro: {
        brand: "Apple",
        name: "iPhone 15 Pro",
        image: "images/iphone15pro.jpg",
        description: "Powerful previous-generation iPhone with titanium design and excellent cameras.",
        storage: {
            "128GB": 899,
            "256GB": 999,
            "512GB": 1199,
            "1TB": 1399
        },
        colors: [
            { name: "Black Titanium", value: "#333333" },
            { name: "Blue Titanium", value: "#526473" },
            { name: "Natural Titanium", value: "#aaa294" },
            { name: "White Titanium", value: "#dddddd" }
        ],
        specs: {
            display: "6.1-inch OLED",
            camera: "Triple Camera System",
            network: "5G",
            warranty: "1 Year"
        }
    },

    s24ultra: {
        brand: "Samsung",
        name: "Galaxy S24 Ultra",
        image: "images/s24ultra.jpg",
        description: "Samsung flagship with a large display, powerful cameras and premium performance.",
        storage: {
            "256GB": 999,
            "512GB": 1199,
            "1TB": 1399
        },
        colors: [
            { name: "Titanium Black", value: "#2f2f2f" },
            { name: "Titanium Gray", value: "#9a9a9a" },
            { name: "Titanium Violet", value: "#72618f" },
            { name: "Titanium Yellow", value: "#d5c58c" }
        ],
        specs: {
            display: "6.8-inch AMOLED",
            camera: "200MP Multi Camera System",
            network: "5G",
            warranty: "1 Year"
        }
    },

    s24plus: {
        brand: "Samsung",
        name: "Galaxy S24+",
        image: "images/s24plus.jpg",
        description: "Powerful Samsung smartphone with a bright AMOLED display and excellent everyday performance.",
        storage: {
            "256GB": 799,
            "512GB": 999
        },
        colors: [
            { name: "Onyx Black", value: "#252525" },
            { name: "Marble Gray", value: "#b2b2b2" },
            { name: "Cobalt Violet", value: "#6c5f86" },
            { name: "Amber Yellow", value: "#d4c48b" }
        ],
        specs: {
            display: "6.7-inch AMOLED",
            camera: "Triple Camera System",
            network: "5G",
            warranty: "1 Year"
        }
    },

    xiaomi14pro: {
        brand: "Xiaomi",
        name: "Xiaomi 14 Pro",
        image: "images/xiaomi14pro.jpg",
        description: "High-performance Xiaomi smartphone with fast charging and premium hardware.",
        storage: {
            "256GB": 699,
            "512GB": 799,
            "1TB": 899
        },
        colors: [
            { name: "Black", value: "#202020" },
            { name: "White", value: "#f0f0f0" },
            { name: "Green", value: "#627d6b" }
        ],
        specs: {
            display: "6.73-inch AMOLED",
            camera: "Triple Camera System",
            network: "5G",
            warranty: "1 Year"
        }
    },

    pixel9pro: {
        brand: "Google",
        name: "Pixel 9 Pro",
        image: "images/pixel9pro.jpg",
        description: "Google smartphone with excellent photography, clean software and smart features.",
        storage: {
            "128GB": 899,
            "256GB": 999,
            "512GB": 1199
        },
        colors: [
            { name: "Obsidian", value: "#292929" },
            { name: "Porcelain", value: "#ddd8ca" },
            { name: "Hazel", value: "#808478" },
            { name: "Rose Quartz", value: "#d5b9b5" }
        ],
        specs: {
            display: "6.3-inch OLED",
            camera: "Triple Camera System",
            network: "5G",
            warranty: "1 Year"
        }
    }
};

function setupMobileMenu() {
    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    if (!menuBtn || !mobileMenu) return;

    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });
}

function setupCartCount() {
    const cartCount = document.getElementById("cartCount");

    if (!cartCount) return;

    const cart = JSON.parse(localStorage.getItem("cartItems") || "[]");

    const count = cart.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    cartCount.textContent = count;
}

function setupBrandFilter() {
    const buttons = document.querySelectorAll(".brandBtn");
    const cards = document.querySelectorAll(".phoneCard");

    if (!buttons.length || !cards.length) return;

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const brand = button.dataset.brand;

            buttons.forEach(item => {
                item.classList.remove("bg-blue-600", "text-white");
                item.classList.add("bg-white");
            });

            button.classList.remove("bg-white");
            button.classList.add("bg-blue-600", "text-white");

            cards.forEach(card => {
                const cardBrand = card.dataset.brand;

                if (brand === "all" || brand === cardBrand) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }
            });
        });
    });
}

function setupProductPage() {
    const productName = document.getElementById("productName");

    if (!productName) return;

    const params = new URLSearchParams(window.location.search);

    const phoneId = params.get("phone") || "iphone16pro";

    const phone = phones[phoneId] || phones.iphone16pro;

    const productBrand = document.getElementById("productBrand");
    const productImage = document.getElementById("productImage");
    const productPrice = document.getElementById("productPrice");
    const productDescription = document.getElementById("productDescription");

    const storageOptions = document.getElementById("storageOptions");
    const colorOptions = document.getElementById("colorOptions");
    const selectedColor = document.getElementById("selectedColor");

    const specDisplay = document.getElementById("specDisplay");
    const specCamera = document.getElementById("specCamera");
    const specNetwork = document.getElementById("specNetwork");
    const specWarranty = document.getElementById("specWarranty");

    const quantity = document.getElementById("quantity");
    const increaseQty = document.getElementById("increaseQty");
    const decreaseQty = document.getElementById("decreaseQty");

    const addToCart = document.getElementById("dynamicAddToCart");

    const modal = document.getElementById("productModal");
    const closeModal = document.getElementById("closeProductModal");
    const modalMessage = document.getElementById("modalMessage");

    document.title = `Bahaa Devices | ${phone.name}`;

    productBrand.textContent = phone.brand;
    productName.textContent = phone.name;

    productImage.src = phone.image;
    productImage.alt = phone.name;

    productDescription.textContent = phone.description;

    specDisplay.textContent = phone.specs.display;
    specCamera.textContent = phone.specs.camera;
    specNetwork.textContent = phone.specs.network;
    specWarranty.textContent = phone.specs.warranty;

    let selectedStorage = Object.keys(phone.storage)[0];
    let selectedPrice = phone.storage[selectedStorage];
    let selectedColorName = phone.colors[0].name;

    updatePrice();

    Object.entries(phone.storage).forEach(([storage, price], index) => {
        const button = document.createElement("button");

        button.textContent = storage;

        button.className =
            "storageChoice border-2 px-5 py-3 rounded-xl font-semibold transition";

        if (index === 0) {
            button.classList.add("border-blue-600", "text-blue-600");
        } else {
            button.classList.add("border-gray-300");
        }

        button.addEventListener("click", () => {
            document.querySelectorAll(".storageChoice").forEach(item => {
                item.classList.remove("border-blue-600", "text-blue-600");
                item.classList.add("border-gray-300");
            });

            button.classList.remove("border-gray-300");
            button.classList.add("border-blue-600", "text-blue-600");

            selectedStorage = storage;
            selectedPrice = price;

            updatePrice();
        });

        storageOptions.appendChild(button);
    });

    phone.colors.forEach((color, index) => {
        const button = document.createElement("button");

        button.className =
            "colorChoice w-12 h-12 rounded-full border-4 transition shadow";

        button.style.backgroundColor = color.value;
        button.title = color.name;

        if (index === 0) {
            button.classList.add("border-blue-500");
        } else {
            button.classList.add("border-transparent");
        }

        button.addEventListener("click", () => {
            document.querySelectorAll(".colorChoice").forEach(item => {
                item.classList.remove("border-blue-500");
                item.classList.add("border-transparent");
            });

            button.classList.remove("border-transparent");
            button.classList.add("border-blue-500");

            selectedColorName = color.name;

            selectedColor.textContent = selectedColorName;
        });

        colorOptions.appendChild(button);
    });

    selectedColor.textContent = selectedColorName;

    if (increaseQty) {
        increaseQty.addEventListener("click", () => {
            quantity.textContent = Number(quantity.textContent) + 1;
        });
    }

    if (decreaseQty) {
        decreaseQty.addEventListener("click", () => {
            const current = Number(quantity.textContent);

            if (current > 1) {
                quantity.textContent = current - 1;
            }
        });
    }

    if (addToCart) {
        addToCart.addEventListener("click", () => {
            const selectedQuantity = Number(quantity.textContent);

            const cart = JSON.parse(
                localStorage.getItem("cartItems") || "[]"
            );

            const existingItem = cart.find(item => {
                return (
                    item.id === phoneId &&
                    item.storage === selectedStorage &&
                    item.color === selectedColorName
                );
            });

            if (existingItem) {
                existingItem.quantity += selectedQuantity;
            } else {
                cart.push({
                    id: phoneId,
                    brand: phone.brand,
                    name: phone.name,
                    image: phone.image,
                    storage: selectedStorage,
                    color: selectedColorName,
                    price: selectedPrice,
                    quantity: selectedQuantity
                });
            }

            localStorage.setItem(
                "cartItems",
                JSON.stringify(cart)
            );

            setupCartCount();

            if (modalMessage) {
                modalMessage.textContent =
                    `${phone.name} - ${selectedStorage} - ${selectedColorName}`;
            }

            openModal(modal);
        });
    }

    if (closeModal) {
        closeModal.addEventListener("click", () => {
            closeModalWindow(modal);
        });
    }

    if (modal) {
        modal.addEventListener("click", event => {
            if (event.target === modal) {
                closeModalWindow(modal);
            }
        });
    }

    function updatePrice() {
        productPrice.textContent = `$${selectedPrice}`;
    }
}

function setupFAQ() {
    const questions = document.querySelectorAll(".faq-question");

    if (!questions.length) return;

    questions.forEach(question => {
        question.addEventListener("click", () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector("i");

            answer.classList.toggle("hidden");

            if (icon) {
                icon.classList.toggle("rotate-180");
            }
        });
    });
}

function setupContactForm() {
    const form = document.getElementById("contactForm");

    if (!form) return;

    const modal = document.getElementById("contactModal");
    const closeButton = document.getElementById("closeContactModal");

    form.addEventListener("submit", event => {
        event.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        form.reset();

        openModal(modal);
    });

    if (closeButton) {
        closeButton.addEventListener("click", () => {
            closeModalWindow(modal);
        });
    }
}

function setupCartPage() {
    const cartContainer = document.getElementById("cartItems");

    if (!cartContainer) return;

    const emptyCart = document.getElementById("emptyCart");

    const subtotalElement = document.getElementById("subtotal");
    const totalElement = document.getElementById("total");

    renderCart();

    function renderCart() {
        const cart = JSON.parse(
            localStorage.getItem("cartItems") || "[]"
        );

        cartContainer.innerHTML = "";

        if (cart.length === 0) {
            cartContainer.classList.add("hidden");

            if (emptyCart) {
                emptyCart.classList.remove("hidden");
            }

            updateSummary(cart);
            setupCartCount();

            return;
        }

        cartContainer.classList.remove("hidden");

        if (emptyCart) {
            emptyCart.classList.add("hidden");
        }

        cart.forEach((item, index) => {
            const card = document.createElement("div");

            card.className =
                "bg-white rounded-2xl shadow-sm border p-5";

            card.innerHTML = `
                <div class="flex flex-col sm:flex-row items-center gap-6">

                    <div class="bg-gray-100 rounded-xl p-4">
                        <img
                            src="${item.image}"
                            alt="${item.name}"
                            class="w-32 h-32 object-contain"
                        >
                    </div>

                    <div class="flex-1 text-center sm:text-left">

                        <p class="text-gray-400 text-sm">
                            ${item.brand}
                        </p>

                        <h2 class="text-xl font-bold">
                            ${item.name}
                        </h2>

                        <p class="text-gray-500 mt-1">
                            ${item.storage} • ${item.color}
                        </p>

                        <p class="text-blue-600 font-bold text-xl mt-3">
                            $${item.price}
                        </p>

                    </div>

                    <div class="flex items-center border rounded-xl">

                        <button
                            class="cartMinus px-4 py-3 hover:bg-gray-100"
                            data-index="${index}"
                        >
                            <i class="fa-solid fa-minus"></i>
                        </button>

                        <span class="px-4 font-bold">
                            ${item.quantity}
                        </span>

                        <button
                            class="cartPlus px-4 py-3 hover:bg-gray-100"
                            data-index="${index}"
                        >
                            <i class="fa-solid fa-plus"></i>
                        </button>

                    </div>

                    <button
                        class="removeCartItem text-red-500 hover:text-red-700 text-xl"
                        data-index="${index}"
                    >
                        <i class="fa-solid fa-trash"></i>
                    </button>

                </div>
            `;

            cartContainer.appendChild(card);
        });

        document.querySelectorAll(".cartPlus").forEach(button => {
            button.addEventListener("click", () => {
                const index = Number(button.dataset.index);

                const cart = getCart();

                cart[index].quantity++;

                saveCart(cart);
            });
        });

        document.querySelectorAll(".cartMinus").forEach(button => {
            button.addEventListener("click", () => {
                const index = Number(button.dataset.index);

                const cart = getCart();

                if (cart[index].quantity > 1) {
                    cart[index].quantity--;
                }

                saveCart(cart);
            });
        });

        document.querySelectorAll(".removeCartItem").forEach(button => {
            button.addEventListener("click", () => {
                const index = Number(button.dataset.index);

                const cart = getCart();

                cart.splice(index, 1);

                saveCart(cart);
            });
        });

        updateSummary(cart);
        setupCartCount();
    }

    function saveCart(cart) {
        localStorage.setItem(
            "cartItems",
            JSON.stringify(cart)
        );

        renderCart();
    }

    function getCart() {
        return JSON.parse(
            localStorage.getItem("cartItems") || "[]"
        );
    }

    function updateSummary(cart) {
        const subtotal = cart.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);

        if (subtotalElement) {
            subtotalElement.textContent =
                `$${subtotal.toFixed(2)}`;
        }

        if (totalElement) {
            totalElement.textContent =
                `$${subtotal.toFixed(2)}`;
        }
    }

    const checkoutButton =
        document.getElementById("checkoutBtn");

    const checkoutModal =
        document.getElementById("checkoutModal");

    const closeCheckoutModal =
        document.getElementById("closeCheckoutModal");

    if (checkoutButton) {
        checkoutButton.addEventListener("click", () => {
            const cart = getCart();

            if (cart.length === 0) {
                alert("Your cart is empty.");
                return;
            }

            openModal(checkoutModal);
        });
    }

    if (closeCheckoutModal) {
        closeCheckoutModal.addEventListener("click", () => {
            closeModalWindow(checkoutModal);
        });
    }
}

function setupCountdown() {
    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");

    if (!days || !hours || !minutes || !seconds) return;

    let remaining =
        2 * 24 * 60 * 60 +
        12 * 60 * 60 +
        45 * 60 +
        30;

    function updateCountdown() {
        if (remaining <= 0) {
            days.textContent = "00";
            hours.textContent = "00";
            minutes.textContent = "00";
            seconds.textContent = "00";

            return;
        }

        const dayValue =
            Math.floor(remaining / 86400);

        const hourValue =
            Math.floor((remaining % 86400) / 3600);

        const minuteValue =
            Math.floor((remaining % 3600) / 60);

        const secondValue =
            remaining % 60;

        days.textContent =
            String(dayValue).padStart(2, "0");

        hours.textContent =
            String(hourValue).padStart(2, "0");

        minutes.textContent =
            String(minuteValue).padStart(2, "0");

        seconds.textContent =
            String(secondValue).padStart(2, "0");

        remaining--;
    }

    updateCountdown();

    setInterval(updateCountdown, 1000);
}

function openModal(modal) {
    if (!modal) return;

    modal.classList.remove("hidden");
    modal.classList.add("flex");
}

function closeModalWindow(modal) {
    if (!modal) return;

    modal.classList.add("hidden");
    modal.classList.remove("flex");
}
function setupAccessoryCart() {
    const buttons = document.querySelectorAll(".accessoryAddToCart");

    if (!buttons.length) return;

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const name = button.dataset.name;
            const price = Number(button.dataset.price);
            const image = button.dataset.image;

            const cart = JSON.parse(
                localStorage.getItem("cartItems") || "[]"
            );

            const existingItem = cart.find(item => {
                return item.name === name && item.type === "accessory";
            });

            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({
                    id: name.toLowerCase().replaceAll(" ", "-"),
                    type: "accessory",
                    brand: "Bahaa Devices",
                    name: name,
                    image: image,
                    storage: "Accessory",
                    color: "Standard",
                    price: price,
                    quantity: 1
                });
            }

            localStorage.setItem(
                "cartItems",
                JSON.stringify(cart)
            );

            setupCartCount();

            const oldContent = button.innerHTML;

            button.innerHTML =
                '<i class="fa-solid fa-check"></i>';

            button.classList.remove("bg-slate-950");
            button.classList.add("bg-green-600");

            setTimeout(() => {
                button.innerHTML = oldContent;

                button.classList.remove("bg-green-600");
                button.classList.add("bg-slate-950");
            }, 900);
        });
    });
}
